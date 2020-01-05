import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Photo } from '../_models/photo';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { PetService } from '../_services/pet.service';
import { environment } from 'src/environments/environment';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})
export class PhotoEditorComponent implements OnInit {
  @Input() photos: Photo[];
  @Input() parent: string;
  @Input() petId: number;
  @Output() getMemberPhotoChange = new EventEmitter<string>();
  uploader: FileUploader;
  hasBaseDropZoneOver = false;
  baseUrl = environment.apiUrl;
  currentMain: Photo;

  constructor(private authService: AuthService, private userService: UserService, private petService: PetService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.initializeUploader();
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  initializeUploader() {
    if(this.parent == 'user'){
      this.uploader = new FileUploader({
        url: this.baseUrl + 'photos/addPhotoForUser/' + this.authService.decodedToken.nameid,
        authToken: 'Bearer ' + localStorage.getItem('token'),
        isHTML5: true,
        allowedFileType: ['image'],
        removeAfterUpload: true,
        autoUpload: false,
        maxFileSize: 10 * 1024 * 1024
      });
    }

    if(this.parent == 'pet'){
      this.uploader = new FileUploader({
        url: this.baseUrl + 'photos/addPhotoForPet/' + this.petId,
        authToken: 'Bearer ' + localStorage.getItem('token'),
        isHTML5: true,
        allowedFileType: ['image'],
        removeAfterUpload: true,
        autoUpload: false,
        maxFileSize: 10 * 1024 * 1024
      });
    }

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; }
    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        const res: Photo = JSON.parse(response);
        const photo = {
          id: res.id,
          url: res.url,
          dateAdded: res.dateAdded,
          description: res.description,
          isMain: res.isMain
        };
        this.photos.push(photo);
      }
    }
  }

  setMainPhoto(photo: Photo) {
    if (this.parent == 'user') {
      this.userService.setMainPhoto(this.authService.decodedToken.nameid, photo.id).subscribe(() => {
        this.currentMain = this.photos.filter(p => p.isMain === true)[0];
        this.currentMain.isMain = false;
        photo.isMain = true;
        this.authService.changeMemberPhoto(photo.url);
        this.authService.currentUser.photoUrl = photo.url;
        localStorage.setItem('user', JSON.stringify(this.authService.currentUser));
      }, error => {
        this.alertify.error("Failed to set the photo as main");
      })
    }

    if (this.parent == 'pet') {
      this.petService.setMainPhoto(this.petId, photo.id).subscribe(() => {
        this.currentMain = this.photos.filter(p => p.isMain === true)[0];
        this.currentMain.isMain = false;
        photo.isMain = true;
      }, error => {
        this.alertify.error("Failed to set the photo as main");
      });
    }
  }

  deletePhoto(id: number) {
    this.alertify.confirm('Are you sure you want to delete this photo?', () => {
      if (this.parent == 'user') {
        this.userService.deletePhoto(this.authService.decodedToken.nameid, id).subscribe(() => {
          this.photos.splice(this.photos.findIndex(p => p.id === id), 1);
          this.alertify.success("Photo has been deleted")
        }, error => {
          this.alertify.error('Failed to delete the photo')
        })
      }

      if (this.parent == 'pet') {
        this.petService.deletePhoto(this.petId, id).subscribe(() => {
          this.photos.splice(this.photos.findIndex(p => p.id === id), 1);
          this.alertify.success("Photo has been deleted")
        }, error => {
          this.alertify.error('Failed to delete the photo')
        })
      }
    })
  }
}

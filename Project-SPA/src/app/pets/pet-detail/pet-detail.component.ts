import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/_models/pet';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { AuthService } from 'src/app/_services/auth.service';



@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {
  pet: Pet;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private route: ActivatedRoute, public authService: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.pet = data['pet'];
    })

    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        imageArrowsAutoHide: true,
        previewCloseOnClick: true,
        closeIcon: ''
      }
    ]

    this.galleryImages = this.getImages();
  }
  getImages(): NgxGalleryImage[] {
    const imageUrls = [];
    for (const photo of this.pet.photos) {
      imageUrls.push({
        small: photo.url,
        medium: photo.url,
        big: photo.url,
        description: photo.description
      })
    }
    return imageUrls;
  }


}



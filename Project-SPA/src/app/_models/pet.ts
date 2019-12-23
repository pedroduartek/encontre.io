import { Photo } from './photo';
import { User } from './user';

export interface Pet {
    id: number;
    country: string;
    city: string;
    color: string;
    size: string;
    type: string;
    photoUrl: string;
    dateAdded: Date;
    street?: string;
    user?: User;
    description?: string;
    userId?: number;
    photos?: Photo[];
}

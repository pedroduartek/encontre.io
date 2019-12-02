import { Photo } from './photo';

export interface Pet {
    id: number;
    country: string;
    city: string;
    color: string;
    size: string;
    type: string;
    photoUrl: string;
    userId?: number;
    photos?: Photo[];
}

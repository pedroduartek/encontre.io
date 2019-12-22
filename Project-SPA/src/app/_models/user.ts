import { Photo } from './photo';
import { Pet } from './pet';

export interface User {
    id: number;
    username: string;
    numberOfPets?: number;
    city?: string;
    country?: string;
    email?: string;
    created?: Date;
    lastActive?: Date;
    gender?: string;
    photoUrl?: string;
    photos?: Photo[];
    registeredPets?: Pet[];
}

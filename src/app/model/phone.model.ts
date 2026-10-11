import { marque } from './marque.model';

export class phone {
    idphone? : number;
    nomphone? : string;
    prixphone? : number;
    dateCreation?: Date | null;
    marque?: marque;
}

export class Vehicule {

    id!:number;
    name:string;
    marque:string;
    kilometrage:string;
    prix:number;
    imageUrl:string;

    constructor(
        name:string,
        marque:string,
        kilometrage:string,
        prix:number,
        imageUrl:string
        ){
        this.name = name;
        this.marque = marque;
        this.kilometrage = kilometrage;
        this.prix = prix;
        this.imageUrl = imageUrl;
    }
}
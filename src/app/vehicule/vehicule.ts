export class Vehicule {

    id!:number;
    name:string;
    marque:string;
    kilometrage:number;
    prix:number;
    imageUrl:string;

    constructor(
        name:string="",
        marque:string="",
        kilometrage:number=0,
        prix:number=0,
        imageUrl:string=""
        ){
        this.name = name;
        this.marque = marque;
        this.kilometrage = kilometrage;
        this.prix = prix;
        this.imageUrl = imageUrl;
    }
}
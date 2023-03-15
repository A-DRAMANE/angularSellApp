export class Vehicule {

    id!:number;
    name:string;
    marque:string;
    kilometrage:string;
    prix:number;
    
    constructor(
        name:string,
        marque:string,
        kilometrage:string,
        prix:number,
        ){
        this.name = name;
        this.marque = marque;
        this.kilometrage = kilometrage;
        this.prix = prix;
    }
}
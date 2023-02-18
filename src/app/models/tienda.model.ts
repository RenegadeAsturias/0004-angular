import { Producto } from "../interfaces/producto";

export class Tienda {

    tiendaItems:Array<Producto>;

    constructor() {

        this.tiendaItems = [
			{
                texto:  "Agua mineral sabor a naranja...",
                titulo: "Orange Mineral Water ",
                imagen: "mineralwater-orange.jpg",
                precio: 20
			},
			{
                texto:  "Agua mineral sabor a fresa...",
                titulo: "Strawberry Mineral Water ",
                imagen: "mineralwater-strawberry.jpg",
                precio: 33
			},
			{
                texto:  "Barrita energética sabor a chocolate...",
                titulo: "Orange Mineral Water ",
                imagen: "proteinbar-chocolate.jpg",
                precio: 120
			}
		];
       
    }

}

import { Component, Input } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Component({
  selector: 'app-sin-estado',
  templateUrl: './sin-estado.component.html',
  styleUrls: ['./sin-estado.component.css']
})
export class SinEstadoComponent {

  @Input() producto!: Producto;

  private disabled:boolean;
  public accionCompra:string;

  constructor() {
    this.disabled = true;
    this.accionCompra = "";
  }

  seleccionarItem(item:Producto) {
    this.disabled = false;
    this.accionCompra = "AÑADIDO AL CARRITO!";
  }

  isItemDisabled():boolean {
    return !this.disabled;
  }  

  ngOnInit() {
    this.accionCompra = `BUY FOR ${this.producto.precio} €`;
  }

}

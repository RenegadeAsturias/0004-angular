import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Component({
  selector: 'app-sin-estado',
  templateUrl: './sin-estado.component.html',
  styleUrls: ['./sin-estado.component.css']
})
export class SinEstadoComponent {

  @Input() producto!: Producto;

  @Output() productoSeleccionado: EventEmitter<Producto> = new EventEmitter()

  private disabled:boolean;
  public accionCompra:string;

  constructor() {
    this.disabled = true;
    this.accionCompra = "";
  }

  seleccionarItem(item:Producto) {
    this.disabled = false;
    this.accionCompra = "AÑADIDO AL CARRITO!";
	  // Para el evento:
	  this.productoSeleccionado.emit(this.producto)    
  }

  isItemDisabled():boolean {
    return !this.disabled;
  }  

  ngOnInit() {
    this.accionCompra = `BUY FOR ${this.producto.precio} €`;
  }

}

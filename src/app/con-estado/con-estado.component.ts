import { Component, ViewChild } from '@angular/core';
import { AlertaConfirmacionComponent } from '../alerta-confirmacion/alerta-confirmacion.component';
import { Producto } from '../interfaces/producto';
import { Tienda } from '../models/tienda.model';

@Component({
  selector: 'app-con-estado',
  templateUrl: './con-estado.component.html',
  styleUrls: ['./con-estado.component.css']
})
export class ConEstadoComponent {

  @ViewChild(AlertaConfirmacionComponent, {static:false})
  alertChild:AlertaConfirmacionComponent = new AlertaConfirmacionComponent();

	modeloTienda:Tienda = new Tienda();
	itemsComprados:Array<Producto>;  

  constructor() {
    this.itemsComprados=[]; // Inicializamos el Array
  }

  onProductoSeleccionado(_event: Producto){
    console.log(_event);
    this.seleccionarItem(_event);
  }  

  seleccionarItem(item:Producto){
    if(!this.itemsComprados.includes(item)) {
      this.itemsComprados.push(item);
    }
  }

  getPrecioTotal(){
    let total:number = 0;
    if(this.itemsComprados){
        total = this.itemsComprados.reduce(
        (prev:number,item:Producto) => prev + item.precio, 0);
    }
    return total;
  }

  noHayItemsComprados():boolean{
    return this.itemsComprados.length<=0;
  }

  realizarPago(){
    this.alertChild.mostrar();
  }

}


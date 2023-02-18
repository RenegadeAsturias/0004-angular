import { Component } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { Tienda } from '../models/tienda.model';

@Component({
  selector: 'app-con-estado',
  templateUrl: './con-estado.component.html',
  styleUrls: ['./con-estado.component.css']
})
export class ConEstadoComponent {

	modeloTienda:Tienda = new Tienda();
	itemsComprados:Array<Producto> = [];  

}

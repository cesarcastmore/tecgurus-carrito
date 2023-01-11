import { Component, OnInit } from '@angular/core';
import { Inventario } from 'src/app/models/inventario';
import { InventarioService } from 'src/app/services/inventario.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  public inventarios: Inventario[]=[];

  constructor(private inventarioService: InventarioService) { }

  ngOnInit(): void {

    this.inventarioService.getInventario().subscribe(inventario=> {
      this.inventarios= inventario;
    })
  }

}

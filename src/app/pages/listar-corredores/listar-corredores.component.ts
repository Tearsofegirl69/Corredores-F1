import { Component, OnInit } from '@angular/core';
import { CorredorService } from '../../services/corredor.service';

@Component({
  selector: 'app-listar-corredores',
  templateUrl: './listar-corredores.component.html',
  styleUrl: './listar-corredores.component.css'
})
export class ListaCorredoresComponent implements OnInit{

  corredores: any = []

  constructor(private corredorService: CorredorService) {
    this.getCorredores()
  }

  ngOnInit(): void {
    
  }

  getCorredores(){
    this.corredorService.getCorredores()
      .subscribe(data => {
        this.corredores = data
        console.log(data)
      })
  }

  // Eliminar un corredor
  eliminarCorredor(corredor, idx) {
    if(window.confirm('¿Quiere eliminar corredor?')) {
      console.log(corredor)
      this.corredorService.eliminarCorredor(corredor._id)
        .subscribe(data => {
          this.corredores.splice(idx, 1)
        })
    }
  }
}

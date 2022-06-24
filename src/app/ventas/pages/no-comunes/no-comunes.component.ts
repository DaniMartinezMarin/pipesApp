import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  nombre: string = 'Dani';
  genero: string = 'masculino';
  textoChicoMapping= {
    'masculino': 'un chico',
    'femenino': 'una chica'
  };

  clientes: string[] = ['Dani', 'Gema', 'Juan', 'Pepe'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente(): void {
    if (this.genero === 'masculino')
    {
      this.genero = 'femenino';
      this.nombre = 'Gema';
    }else {
      this.genero = 'masculino';
      this.nombre = 'Dani';
    }
  }

  borrarCliente(): void {
    this.clientes.pop();
  }
}

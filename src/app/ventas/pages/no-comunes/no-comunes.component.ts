import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css'],
})
export class NoComunesComponent {
  //Select pipe
  nombre: string = 'Dani';
  genero: string = 'masculino';
  textoChicoMapping = {
    masculino: 'un chico',
    femenino: 'una chica',
  };

  //Plural pipe
  clientes: string[] = ['Dani', 'Gema', 'Juan', 'Pepe'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  cambiarCliente(): void {
    if (this.genero === 'masculino') {
      this.genero = 'femenino';
      this.nombre = 'Gema';
    } else {
      this.genero = 'masculino';
      this.nombre = 'Dani';
    }
  }

  borrarCliente(): void {
    this.clientes.pop();
  }

  //Keyvalue pipe
  persona = {
    nombre: 'Dani',
    edad: 26,
    ciudad: 'Valencia',
  };

  //Json pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: true
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ];
}

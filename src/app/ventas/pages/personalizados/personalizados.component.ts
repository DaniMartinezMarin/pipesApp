import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/heroe';

@Component({
  selector: 'app-personalizados',
  templateUrl: './personalizados.component.html',
  styleUrls: ['./personalizados.component.css'],
})
export class PersonalizadosComponent {

  enMayusculas: boolean = true;
  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna verde',
      vuela: true,
      color: Color.verde
    }
  ];

  toggleMayuscula(): void {
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrdenar( valor: string ): void {
    this.ordenarPor = valor;
  }
}

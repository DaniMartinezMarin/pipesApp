import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreLower: string = 'dani';
  nombreUpper: string = 'DANI';
  nombreCompleto: string = 'dANi marinEz';

  fecha: Date = new Date();
}

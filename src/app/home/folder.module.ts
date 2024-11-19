import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cantidad: number = 0;
  resultado: number | null = null;

  convertir() {
    const tasaCambio = 8; // 8 quetzales por dólar
    this.resultado = this.cantidad / tasaCambio;
  }
}

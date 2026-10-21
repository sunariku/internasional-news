import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  judul: string = 'Pertemuan 3';
  bilA: number = 10;
  bilB: number = 5;
  photo: string = 'https://subali.stikom-bali.ac.id/images/AGS.jpg';

  nama: string = '';
  tipe: string = '';

  hitung(bilA: number, bilB: number): void {
    alert(bilA + bilB);
  }

  tes(e: Event): void {
    const data = e.target as HTMLInputElement;

    this.judul = data.value;
  }
}

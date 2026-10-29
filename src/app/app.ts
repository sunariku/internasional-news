import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pertemuan3 } from './pertemuan3/pertemuan3';
import { Pertemuan4 } from './pertemuan4/pertemuan4';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pertemuan3, Pertemuan4],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}

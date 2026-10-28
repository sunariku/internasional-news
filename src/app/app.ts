import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pertemuan3 } from './pertemuan3/pertemuan3';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pertemuan3],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}

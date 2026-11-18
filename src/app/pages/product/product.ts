import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-product',
  styleUrl: './product.css',
  templateUrl: './product.html',
})
export class Product {}

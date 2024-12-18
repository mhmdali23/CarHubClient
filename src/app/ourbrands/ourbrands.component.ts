import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ourbrands',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ourbrands.component.html',
  styleUrl: './ourbrands.component.scss'
})
export class OurbrandsComponent {
  brandImages: string[] = [
    'http://localhost:5151/images/bmw.png',  // Relative to wwwroot
    'http://localhost:5151/images/audi.jpeg',
    'http://localhost:5151/images/mercedes.jpeg',
    'http://localhost:5151/images/tesla.png'
  ];
}

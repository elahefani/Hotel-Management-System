import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-hotelprofile',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatGridListModule,MatIcon],
  templateUrl: './hotelprofile.component.html',
  styleUrls: ['./hotelprofile.component.css']
})
export class HotelprofileComponent {
  constructor(private router: Router) { }
  ngOnInit() {
  }
  goToRate() {
    this.router.navigate(['/rate']);
  }

  rooms: { numbed: number, typeroom: string, imagePath: string }[] = [
    { numbed: 1, typeroom: 'type a', imagePath: 'assets/images/11.jpg' },
    { numbed: 2, typeroom: 'type b', imagePath: 'assets/images/12.jpg' },
    { numbed: 4, typeroom: 'type c', imagePath: 'assets/images/13.jpg' },
    { numbed: 1, typeroom: 'type a', imagePath: 'assets/images/14.jpg' },
    { numbed: 2, typeroom: 'type b', imagePath: 'assets/images/11.jpg' },
    { numbed: 1, typeroom: 'type c', imagePath: 'assets/images/12.jpg' },
    { numbed: 2, typeroom: 'type c', imagePath: 'assets/images/13.jpg' },
    { numbed: 4, typeroom: 'type a', imagePath: 'assets/images/14.jpg' },
    { numbed: 1, typeroom: 'type b', imagePath: 'assets/images/11.jpg' }
  ];

  hotel = {
    name: 'Grand Royal Hotel',
    description: 'Located in the heart of the city, Grand Royal Hotel offers luxurious rooms with spectacular city views. Ideal for both business and leisure travelers.',
    amenities: ['Free Wi-Fi', '24-hour room service', 'Health club', 'Swimming pool']
  };
}

import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';

interface City {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    MatGridListModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ImagePath: string = 'assets/images/sample.jpg';
  ImagePath2: string = 'assets/images/1.jpg';
  ImagePath3: string = 'assets/images/2.jpg';
  ImagePath4: string = 'assets/images/room.jpg';
  constructor(private router: Router) { }

  ngOnInit() {

  }


  hotels: { numstars: number, name: string, city: string, rating: number, numreserve: number, imagePath: string }[] = [
    { numstars: 5, name: 'Hotel One', city: 'City One', rating: 5, numreserve: 15, imagePath: 'assets/images/1.jpg' },
    { numstars: 4, name: 'Hotel Two', city: 'City Two', rating: 5, numreserve: 25, imagePath: 'assets/images/2.jpg' },
    { numstars: 5, name: 'Hotel Three', city: 'City Three', rating: 5, numreserve: 35, imagePath: 'assets/images/3.jpg' },
    { numstars: 4, name: 'Hotel Four', city: 'City Four', rating: 5, numreserve: 5, imagePath: 'assets/images/3.jpg' },
    { numstars: 5, name: 'Hotel Five', city: 'City Five', rating: 5, numreserve: 15, imagePath: 'assets/images/1.jpg' },
    { numstars: 4, name: 'Hotel Six', city: 'City Six', rating: 5, numreserve: 25, imagePath: 'assets/images/2.jpg' },
    { numstars: 5, name: 'Hotel Seven', city: 'City Seven', rating: 5, numreserve: 15, imagePath: 'assets/images/3.jpg' },
    { numstars: 4, name: 'Hotel Eight', city: 'City Eight', rating: 5, numreserve: 5, imagePath: 'assets/images/4.jpg' },
    { numstars: 5, name: 'Hotel Nine', city: 'City Nine', rating: 5, numreserve: 15, imagePath: 'assets/images/1.jpg' },
    { numstars: 4, name: 'Hotel Ten', city: 'City Ten', rating: 5, numreserve: 35, imagePath: 'assets/images/2.jpg' },
    { numstars: 5, name: 'Hotel Eleven', city: 'City Eleven', rating: 5, numreserve: 15, imagePath: 'assets/images/3.jpg' },
    { numstars: 4, name: 'Hotel Twelve', city: 'City Twelve', rating: 5, numreserve: 5, imagePath: 'assets/images/4.jpg' },
    { numstars: 5, name: 'Hotel Thirteen', city: 'City Thirteen', rating: 5, numreserve: 15, imagePath: 'assets/images/1.jpg' },
    { numstars: 4, name: 'Hotel Fourteen', city: 'City Fourteen', rating: 5, numreserve: 15, imagePath: 'assets/images/2.jpg' },
    { numstars: 5, name: 'Hotel Fifteen', city: 'City Fifteen', rating: 5, numreserve: 15, imagePath: 'assets/images/3.jpg' }
  ];


  sortHotels(criteria: string): void {
    if (criteria === 'stars') {
      this.hotels.sort((a, b) => b.numstars - a.numstars);
    }
    if (criteria === 'rates') {
      this.hotels.sort((a, b) => b.rating - a.rating);
    }
    if (criteria === 'reserves') {
      this.hotels.sort((a, b) => b.numreserve - a.numreserve);
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  GoToProfile() {
    this.router.navigate(['/profile']);
  }

  cities: City[] = [
    { value: 'Tehran-0', viewValue: 'Tehran' },
    { value: 'Paris-1', viewValue: 'Paris' },
    { value: 'Tokyo-2', viewValue: 'Tokyo' },
  ];

  responsive = true;
  cols = 1;

}
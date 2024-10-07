import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-showhotel',
  standalone: true,
  imports: [MatIconModule, MatOptionModule, MatSelectModule, FormsModule, MatButtonModule, MatGridListModule, CommonModule],
  templateUrl: './showhotel.component.html',
  styleUrl: './showhotel.component.css'
})
export class ShowhotelComponent {
  hotels: { numstars: number, name: string, city: string, rating: number, numreserve: number, imagePath: string }[] = [
    { numstars: 5, name: 'Hotel One', city: 'City One', rating: 5, numreserve: 15, imagePath: 'assets/images/1.jpg' },
    { numstars: 5, name: 'Hotel Two', city: 'City Two', rating: 5, numreserve: 15, imagePath: 'assets/images/2.jpg' },
    { numstars: 5, name: 'Hotel Three', city: 'City Three', rating: 5, numreserve: 15, imagePath: 'assets/images/3.jpg' },
    { numstars: 5, name: 'Hotel Four', city: 'City Four', rating: 5, numreserve: 15, imagePath: 'assets/images/3.jpg' },
    { numstars: 5, name: 'Hotel Five', city: 'City Five', rating: 5, numreserve: 15, imagePath: 'assets/images/1.jpg' },
    { numstars: 5, name: 'Hotel Six', city: 'City Six', rating: 5, numreserve: 15, imagePath: 'assets/images/2.jpg' },
    { numstars: 5, name: 'Hotel Seven', city: 'City Seven', rating: 5, numreserve: 15, imagePath: 'assets/images/3.jpg' },
    { numstars: 5, name: 'Hotel Eight', city: 'City Eight', rating: 5, numreserve: 15, imagePath: 'assets/images/4.jpg' },
    { numstars: 5, name: 'Hotel Nine', city: 'City Nine', rating: 5, numreserve: 15, imagePath: 'assets/images/1.jpg' },
    { numstars: 5, name: 'Hotel Ten', city: 'City Ten', rating: 5, numreserve: 15, imagePath: 'assets/images/2.jpg' },
    { numstars: 5, name: 'Hotel Eleven', city: 'City Eleven', rating: 5, numreserve: 15, imagePath: 'assets/images/3.jpg' },
    { numstars: 5, name: 'Hotel Twelve', city: 'City Twelve', rating: 5, numreserve: 15, imagePath: 'assets/images/4.jpg' },
    { numstars: 5, name: 'Hotel Thirteen', city: 'City Thirteen', rating: 5, numreserve: 15, imagePath: 'assets/images/1.jpg' },
    { numstars: 5, name: 'Hotel Fourteen', city: 'City Fourteen', rating: 5, numreserve: 15, imagePath: 'assets/images/2.jpg' },
    { numstars: 5, name: 'Hotel Fifteen', city: 'City Fifteen', rating: 5, numreserve: 15, imagePath: 'assets/images/3.jpg' },
    { numstars: 5, name: 'Hotel One', city: 'City One', rating: 5, numreserve: 15, imagePath: 'assets/images/1.jpg' },
    { numstars: 5, name: 'Hotel Two', city: 'City Two', rating: 5, numreserve: 15, imagePath: 'assets/images/2.jpg' },
    { numstars: 5, name: 'Hotel Three', city: 'City Three', rating: 5, numreserve: 15, imagePath: 'assets/images/3.jpg' },
    { numstars: 5, name: 'Hotel Four', city: 'City Four', rating: 5, numreserve: 15, imagePath: 'assets/images/3.jpg' },
    { numstars: 5, name: 'Hotel Five', city: 'City Five', rating: 5, numreserve: 15, imagePath: 'assets/images/1.jpg' },
    { numstars: 5, name: 'Hotel Six', city: 'City Six', rating: 5, numreserve: 15, imagePath: 'assets/images/2.jpg' },
    { numstars: 5, name: 'Hotel Seven', city: 'City Seven', rating: 5, numreserve: 15, imagePath: 'assets/images/3.jpg' },
    { numstars: 5, name: 'Hotel Eight', city: 'City Eight', rating: 5, numreserve: 15, imagePath: 'assets/images/4.jpg' },
    { numstars: 5, name: 'Hotel Nine', city: 'City Nine', rating: 5, numreserve: 15, imagePath: 'assets/images/1.jpg' },
    { numstars: 5, name: 'Hotel Ten', city: 'City Ten', rating: 5, numreserve: 15, imagePath: 'assets/images/2.jpg' },
    { numstars: 5, name: 'Hotel Eleven', city: 'City Eleven', rating: 5, numreserve: 15, imagePath: 'assets/images/3.jpg' },
    { numstars: 5, name: 'Hotel Twelve', city: 'City Twelve', rating: 5, numreserve: 15, imagePath: 'assets/images/4.jpg' },
    { numstars: 5, name: 'Hotel Thirteen', city: 'City Thirteen', rating: 5, numreserve: 15, imagePath: 'assets/images/1.jpg' },
    { numstars: 5, name: 'Hotel Fourteen', city: 'City Fourteen', rating: 5, numreserve: 15, imagePath: 'assets/images/2.jpg' },
    { numstars: 5, name: 'Hotel Fifteen', city: 'City Fifteen', rating: 5, numreserve: 15, imagePath: 'assets/images/3.jpg' }
  ];
  userInput: string = '';

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-boxreserve',
  standalone: true,
  imports: [CommonModule,MatIcon],
  templateUrl: './boxreserve.component.html',
  styleUrl: './boxreserve.component.css'
})
export class BoxreserveComponent {
  items = [
    {
      imagePath: 'assets/images/1.jpg',
      hotel_name: 'Hotel Name 1',
      description: 'description',
      nadult: 2,
      nchild:1,
      check_in: '7/11/2024',
      check_out: '7/12/2024'
    },
    {
      imagePath: 'assets/images/2.jpg',
      hotel_name: 'Hotel Name 2',
      description: 'description',
      nadult: 2,
      nchild:1,
      check_in: '7/10/2024',
      check_out: '7/11/2024'
    },
    {
      imagePath: 'assets/images/3.jpg',
      hotel_name: 'Hotel Name 1',
      description: 'description',
      nadult: 2,
      nchild:1,
      check_in: '7/11/2024',
      check_out: '7/12/2024'
    },
    {
      imagePath: 'assets/images/4.jpg',
      hotel_name: 'Hotel Name 2',
      description: 'description',
      nadult: 2,
      nchild:1,
      check_in: '7/10/2024',
      check_out: '7/11/2024'
    },
    {
      imagePath: 'assets/images/1.jpg',
      hotel_name: 'Hotel Name 1',
      description: 'description',
      nadult: 2,
      nchild:1,
      check_in: '7/11/2024',
      check_out: '7/12/2024'
    },
    {
      imagePath: 'assets/images/2.jpg',
      hotel_name: 'Hotel Name 2',
      description: 'description',
      nadult: 2,
      nchild:1,
      check_in: '7/10/2024',
      check_out: '7/11/2024'
    },
    {
      imagePath: 'assets/images/3.jpg',
      hotel_name: 'Hotel Name 1',
      description: 'description',
      nadult: 2,
      nchild:1,
      check_in: '7/11/2024',
      check_out: '7/12/2024'
    },
    {
      imagePath: 'assets/images/4.jpg',
      hotel_name: 'Hotel Name 2',
      description: 'description',
      nadult: 2,
      nchild:1,
      check_in: '7/10/2024',
      check_out: '7/11/2024'
    },
    {
      imagePath: 'assets/images/1.jpg',
      hotel_name: 'Hotel Name 1',
      description: 'description',
      nadult: 2,
      nchild:1,
      check_in: '7/11/2024',
      check_out: '7/12/2024'
    },
    {
      imagePath: 'assets/images/2.jpg',
      hotel_name: 'Hotel Name 2',
      description: 'description',
      nadult: 2,
      nchild:1,
      check_in: '7/10/2024',
      check_out: '7/11/2024'
    },
    {
      imagePath: 'assets/images/3.jpg',
      hotel_name: 'Hotel Name 1',
      description: 'description',
      nadult: 2,
      nchild:1,
      check_in: '7/11/2024',
      check_out: '7/12/2024'
    },
    {
      imagePath: 'assets/images/4.jpg',
      hotel_name: 'Hotel Name 2',
      description: 'description',
      nadult: 2,
      nchild:1,
      check_in: '7/10/2024',
      check_out: '7/11/2024'
    }
  ];
}


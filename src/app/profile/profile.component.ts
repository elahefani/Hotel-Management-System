import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule,MatIconModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  ImagePath: string = 'assets/images/prf.jpg'; 
  username: string = 'John';
  fullname: string = 'John Doe';
  email: string = 'email@example.com';
  phone: string = '555-'
  gender: string = 'male';
  country: string = 'United States';
  city: string = 'United States';
  address: string = '';
  password: string = 'password'
  constructor(private router: Router) {}
}

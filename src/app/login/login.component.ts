import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  // Corrected from 'styleUrl' to 'styleUrls' and wrapped the path in an array
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  email: string= '';
  gender: string = '';
  age: number=0;
  constructor(private router: Router) {}  // Injecting the Router here

  onSubmit() {
    if (!this.username || !this.password) {
      console.error('Username and password are required');
      return;
    }
    this.router.navigate(['/home']);
  }
}
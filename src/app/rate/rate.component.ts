import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-rate',
  standalone: true,
  imports: [FormsModule, CommonModule, NgFor],
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent {
  userComment: string = '';
  userRating: number = 5;
  comments: { rating: number, text: string }[] = [
    { rating: 5, text: 'Excellent service, highly recommend!' },
    { rating: 2, text: 'Not satisfied with the service.' },
    { rating: 3, text: 'Average experience, could be better.' },
    { rating: 4, text: 'Good service, but there is room for improvement.' },
    { rating: 5, text: 'Outstanding experience, will come back again!' },
    { rating: 5, text: 'Top-notch service, very pleased!' },
    { rating: 5, text: 'Fantastic, exceeded my expectations!' },
    { rating: 4, text: 'Very good, but a few minor issues.' },
    { rating: 4, text: 'Great service, but could be a bit faster.' }
  ];

  submitRating() {
    if (this.userComment && this.userRating) {
      this.comments.push({
        rating: this.userRating,
        text: this.userComment
      });
      this.userComment = '';
      this.userRating = 5;
    }
  }
}

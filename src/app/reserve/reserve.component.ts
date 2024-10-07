import { Component } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIcon } from '@angular/material/icon';

interface Adult {
  value: string;
  viewValue: string;
}

interface Children {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-reserve',
  standalone: true,
  imports: [
    MatOptionModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,
    MatGridListModule,
    MatIcon
  ],
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent {

  adults: Adult[] = [
    { value: 'op1', viewValue: '1' },
    { value: 'op2', viewValue: '2' },
    { value: 'op3', viewValue: '3' },
    { value: 'op4', viewValue: '4' },
  ];

  childrens: Children[] = [
    { value: 'op1', viewValue: '1' },
    { value: 'op2', viewValue: '2' },
    { value: 'op3', viewValue: '3' },
    { value: 'op4', viewValue: '4' },
  ];

  isEditing = false;

  roomDetails = {
    type: 'Deluxe Suite',
    bed: 'King Size',
    occupancy: 4
  };

  rules = [
    'No smoking',
    'No pets allowed',
    'Check-in after 2 PM',
    'Check-out before 11 AM'
  ];

  originalRoomDetails = { ...this.roomDetails };
  originalRules = [...this.rules];

  cancelEdit() {
    this.isEditing = false;
    this.roomDetails = { ...this.originalRoomDetails };
    this.rules = [...this.originalRules];
  }

  rooms = [
    {imagePath: 'assets/images/11.jpg' },
    {imagePath: 'assets/images/12.jpg' },
    {imagePath: 'assets/images/13.jpg' },
    {imagePath: 'assets/images/14.jpg' },
    {imagePath: 'assets/images/11.jpg' },
    {imagePath: 'assets/images/12.jpg' },
    {imagePath: 'assets/images/13.jpg' },
    {imagePath: 'assets/images/14.jpg' },
    {imagePath: 'assets/images/11.jpg' },
    {imagePath: 'assets/images/11.jpg' },
    {imagePath: 'assets/images/12.jpg' },
    {imagePath: 'assets/images/13.jpg' },
    {imagePath: 'assets/images/14.jpg' },
    {imagePath: 'assets/images/11.jpg' },
    {imagePath: 'assets/images/12.jpg' },
    {imagePath: 'assets/images/13.jpg' },
    {imagePath: 'assets/images/14.jpg' },
    {imagePath: 'assets/images/11.jpg' },
  ];
}
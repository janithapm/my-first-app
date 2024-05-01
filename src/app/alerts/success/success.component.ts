import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent {
  serverStatus: string[];
  getColor(){
    return 'green'
  }

  constructor() {
    this.serverStatus = ['online', "offline"];
  }
}

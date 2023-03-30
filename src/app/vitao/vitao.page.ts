import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-vitao',
  templateUrl: './vitao.page.html',
  styleUrls: ['./vitao.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class VitaoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

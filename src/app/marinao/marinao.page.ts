import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marinao',
  templateUrl: './marinao.page.html',
  styleUrls: ['./marinao.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MarinaoPage implements OnInit {

  constructor(private router: Router) { }

  irPara(rota: string) {
    this.router.navigate([rota]);
  }
  ngOnInit() {
  }

  back(rota: string) {
    this.router.navigate([rota])
  }
}

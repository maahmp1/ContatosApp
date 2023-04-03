import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sasa',
  templateUrl: './sasa.page.html',
  styleUrls: ['./sasa.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SasaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  back(rota: string) {
    this.router.navigate([rota])
  }

}

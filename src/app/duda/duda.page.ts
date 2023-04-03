import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-duda',
  templateUrl: './duda.page.html',
  styleUrls: ['./duda.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DudaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  back(rota: string) {
    this.router.navigate([rota])
  }

}

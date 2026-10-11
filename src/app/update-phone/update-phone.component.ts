import { Component, OnInit } from '@angular/core';
import { phone } from '../model/phone.model';
import { marque } from '../model/marque.model';
import { ActivatedRoute, Router } from '@angular/router';
import { phoneservice } from '../services/phone.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-phone',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './update-phone.component.html',
  styles: ``
})


export class UpdatephoneComponent implements OnInit {
  currentphone  = new phone();
  marques!: marque[];
  updatedIdMarque!: number;
  
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private phoneservice: phoneservice
) {
}

  ngOnInit(): void {
    this.marques = this.phoneservice.listeMarques();
    this.currentphone = this.phoneservice.consulterphone(this.activatedRoute.snapshot.params['id']);
    this.updatedIdMarque = Number(this.currentphone.marque?.idmarque ?? 0);
  }


  updatephone()
  { //console.log(this.currentphone);
    this.currentphone.marque = this.phoneservice.consulterMarque(Number(this.updatedIdMarque));
    this.phoneservice.updatephone(this.currentphone);
    this.router.navigate(['phones']);
  }

}

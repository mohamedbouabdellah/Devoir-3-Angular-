import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { phone } from '../model/phone.model';
import { marque } from '../model/marque.model';
import { ActivatedRoute, Router } from '@angular/router';
import { phoneservice } from '../services/phone.service';

@Component({
  selector: 'app-add-phone',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-phone.component.html',
  styleUrl: './add-phone.component.css'
})
export class AddphoneComponent implements OnInit {

  newphone = new phone();
  marques: marque[];
  newIdMarque!: number | string;
  newMarque!: marque;

  message! : string;

  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private phoneservice: phoneservice ) {
    this.marques = this.phoneservice.listeMarques();
  }

  ngOnInit(): void {
    this.newIdMarque = this.marques[0]?.idmarque ?? '';
  }

  addphone(){
   this.newMarque = this.phoneservice.consulterMarque(Number(this.newIdMarque));
   this.newphone.marque = this.newMarque;
   this.phoneservice.ajouterphone(this.newphone);
   this.message = "phone "+this.newphone.nomphone +" ajouté avec succès !"
   this.router.navigate(['phones']);
  }


}

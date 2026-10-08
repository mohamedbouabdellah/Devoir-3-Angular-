import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { phone } from '../model/phone.model';
import { phoneservice } from '../services/phone.service';

@Component({
  selector: 'app-add-phone',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-phone.component.html',
  styleUrl: './add-phone.component.css'
})
export class AddphoneComponent {

  newphone = new phone();

  message! : string;

  constructor(private phoneservice: phoneservice ) {}

  addphone(){
   this.phoneservice.ajouterphone(this.newphone);
   this.message = "phone "+this.newphone.nomphone +" ajouté avec succès !"
  }


}

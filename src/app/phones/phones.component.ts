import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { phone } from '../model/phone.model';
import { phoneservice } from '../services/phone.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-phones',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './phones.component.html',
  styleUrl: './phones.component.css'
})
export class phonesComponent implements OnInit  {
  phones! : phone[];
  constructor(private phoneservice: phoneservice ) {
    this.phones = phoneservice.listephones();
  
   }
  
   ngOnInit() {
   
     }

     supprimerphone(p: phone)
   {
    let conf = confirm("Etes-vous sûr ?");
     if (conf)
       this.phoneservice.supprimerphone(p);
   }

}

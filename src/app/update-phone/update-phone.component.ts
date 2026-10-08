import { Component, OnInit } from '@angular/core';
import { phone } from '../model/phone.model';
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
  
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private phoneservice: phoneservice
) { }

  ngOnInit() {
  // console.log(this.route.snapshot.params.id);
this.currentphone = this.phoneservice.consulterphone(this.activatedRoute.snapshot. params['id']);
   console.log(this.currentphone);     
  }


  updatephone()
  { //console.log(this.currentphone);
    this.phoneservice.updatephone(this.currentphone);
    this.router.navigate(['phones']);
  }

}

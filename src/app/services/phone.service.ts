import { Injectable } from '@angular/core';
import { phone } from '../model/phone.model';

@Injectable({
  providedIn: 'root'
})
export class phoneservice {
  phones : phone[]; 

  phone! : phone;

  constructor() {
    this.phones = [
      { idphone: 1,  nomphone: 'Galaxy S22', prixphone: 1800 , dateCreation: new Date(2026, 9, 7, 19, 56, 59) },
      { idphone: 2,  nomphone: 'iPhone 14', prixphone: 3200 , dateCreation: new Date(2026, 9, 7, 19, 57, 38) },
      { idphone: 3,  nomphone: 'Redmi Note 13', prixphone: 800 , dateCreation: new Date(2026, 9, 7, 19, 58, 9) },
      { idphone: 4,  nomphone: 'L’Asus ROG Phone 9 Pro', prixphone: 2500 , dateCreation: new Date(2026, 9, 7, 19, 40, 40) }
    ];
   }

    listephones():phone[] {
      return this.phones;
    }

    ajouterphone( p: phone){
      this.phones.push(p);
    }

    supprimerphone( p: phone){
       const index = this.phones.indexOf(p, 0);
       if (index > -1) {
         this.phones.splice(index, 1);
       }
     }

     consulterphone(id:number): phone{    
      this.phone =  this.phones.find(p => p.idphone == id)!;
        return this.phone;
     }

     trierphones(){
      this.phones = this.phones.sort((n1,n2) => {
        if (n1.idphone! > n2.idphone!) {
            return 1;
        }
       if (n1.idphone! < n2.idphone!) {
            return -1;
        }
      return 0;
    });
    }
        
updatephone(p:phone)
    {
      this.supprimerphone(p);
      this.ajouterphone(p);
      this.trierphones();
    }

 
 
 
 
 
  }

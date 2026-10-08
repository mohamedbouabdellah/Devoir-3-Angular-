import { Routes } from '@angular/router';
import { phonesComponent } from './phones/phones.component';
import { AddphoneComponent } from './add-phone/add-phone.component';
import { UpdatephoneComponent } from './update-phone/update-phone.component';

export const routes: Routes = [
    {path: "phones", component : phonesComponent},
    {path: "add-phone", component : AddphoneComponent},
    {path: "updatephone/:id",  component: UpdatephoneComponent},
    {path: "", redirectTo: "phones", pathMatch: "full"}
];

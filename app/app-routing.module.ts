import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDebtComponent } from './Components/add-debt/add-debt.component';
import { AddTaskComponent } from './Components/add-task/add-task.component';
import { HomeManagerComponent } from './Components/home-manager/home-manager.component';
import { HomeNeighborComponent } from './Components/home-neighbor/home-neighbor.component';
import { HomeComponent } from './Components/home/home.component';
import {LoginComponent} from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PaymentsComponent } from './Components/payments/payments/payments.component';
import {AddNeighborComponent} from './Components/add-neighbor/add-neighbor.component'
import {ChangeDetailsComponent}from './Components/change-details/change-details.component'
const routes: Routes = [
  
  {path: '',
  component:HomeComponent},
  {path: '',
  component:NavbarComponent},
  
  {path: 'login',
 component:LoginComponent},

 {path:'admin',component:HomeManagerComponent},
 {path:'neighbor',component:HomeNeighborComponent},
 {path:'neighbor/payment',component:PaymentsComponent},
 {path:'admin/payment/debt',component:AddDebtComponent},
  {path:'admin/task/new',component:AddTaskComponent},
  {path:'admin/neighbors/new',component:AddNeighborComponent},
  {path:'admin/neighbors/update',component:ChangeDetailsComponent},
  {path:'neighbor/update',component:ChangeDetailsComponent},



  // {path:'neighbor/task/new',component:AddTaskComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

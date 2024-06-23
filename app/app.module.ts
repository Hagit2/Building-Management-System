
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeManagerComponent } from './Components/home-manager/home-manager.component';
import { HomeNeighborComponent } from './Components/home-neighbor/home-neighbor.component';
import { PaymentsComponent } from './Components/payments/payments/payments.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { AddPaymentComponent } from './Components/payments/add-payment/add-payment.component';
import {PaymentsManagerComponent} from './Components/payments-manager/payments-manager.component'
import { NavbarComponent } from './Components/navbar/navbar.component';
import {AddNeighborComponent} from './Components/add-neighbor/add-neighbor.component'
// ... other component imports
import { CommonModule } from '@angular/common';
import {AddNoteComponent} from './Components/add-note/add-note.component'
import { AddDebtComponent } from './Components/add-debt/add-debt.component';
import {TasksComponent} from './Components/tasks/tasks.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
// import {MatIconRegistry} from '@angular/material/icon';

import {MatGridListModule} from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {AddTaskComponent} from './Components/add-task/add-task.component'
import {NotesComponent} from './Components/notes/notes.component'
import {NeighborsComponent} from './Components/neighbors/neighbors.component'
import {ChangeDetailsComponent} from './Components/change-details/change-details.component'

// import {AddPaymentComponentt}from './Components/add-payment/add-payment.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HomeNeighborComponent,
    HomeManagerComponent,
    NavbarComponent,
    TasksComponent,
    PaymentsManagerComponent,
    PaymentsComponent,
    AddPaymentComponent,
    AddDebtComponent,
    AddTaskComponent,
    NotesComponent,
    NeighborsComponent,
    AddNoteComponent,
    AddNeighborComponent,
    ChangeDetailsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatMenuModule,
    MatTableModule,
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatStepperModule,
    MatInputModule,
    // MatIconRegistry,
    MatGridListModule,
  ],
  providers: [PaymentsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

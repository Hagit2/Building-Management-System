import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { Neighbors } from 'src/app/Models/Neighbors';
import { NeighborsService } from 'src/app/Services/neighbors.service';


@Component({
  selector: 'app-change-details',
  templateUrl: './change-details.component.html',
  styleUrls: ['./change-details.component.css']
})
export class ChangeDetailsComponent implements OnInit{
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
curntUser:Neighbors | undefined
admin:Boolean | undefined
  constructor(private _formBuilder: FormBuilder, private _neighborsService:NeighborsService,private router:Router) {}
familyName: string = '';
numPersons: number= 0;
apartmentNumber: number= 0;



onInputChange(event: any) {
    // this.familyName = event.target.value;
    console.log(this.familyName)
    console.log(this.numPersons)
    console.log(this.apartmentNumber)
}

updateNeighborDetails() {
  if (this.curntUser) {
    this.curntUser.lastName = this.familyName;
    this.curntUser.numPersons = this.numPersons;
    this.curntUser.apartmentNum = this.apartmentNumber;
    
    // Call a method in NeighborsService to update neighbor details
    this._neighborsService.UpdateNeighbor(this.curntUser?._id||1,this.curntUser).subscribe(response => {
      console.log('Neighbor details updated successfully:', response);
      this.curntUser=response
    });
  }
  if(this.admin)
  this.router.navigate(['admin']);
  else
  this.router.navigate(['neighbor']);

}      

  ngOnInit(): void {
    this.admin=this._neighborsService.isManagger
    console.log("bgfbfg")
    this.curntUser=this._neighborsService.session;
    this._neighborsService.GetOnNeighbor(this.curntUser?._id||1).subscribe( data=>{
    console.log(data)
    this.curntUser=data
    console.log(this.curntUser)
    this.familyName = this.curntUser?.lastName || '';
    this.numPersons = this.curntUser?.numPersons || 0;
    this.apartmentNumber = this.curntUser?.apartmentNum || 0;

  })

  
    
  }
}
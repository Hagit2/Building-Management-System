import { Component , OnInit} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { Neighbors } from 'src/app/Models/Neighbors';
import { NeighborsService } from 'src/app/Services/neighbors.service';

@Component({
  selector: 'app-add-neighbor',
  templateUrl: './add-neighbor.component.html',
  styleUrls: ['./add-neighbor.component.css']
})
export class AddNeighborComponent implements OnInit{
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  newNeighbor: Neighbors = { _id:0,lastName: '', numPersons: 0, apartmentNum: 0 };

  constructor(private _formBuilder: FormBuilder, private _neighborsService:NeighborsService,private router:Router) {}
familyName: string = '';
numPersons: number= 0;
apartmentNumber: number= 0;

isLiked: boolean = false;

  toggleLike() {
    this.isLiked = !this.isLiked;
  }

onInputChange(event: any) {
    // this.familyName = event.target.value;
    console.log(this.familyName)
    console.log(this.numPersons)
    console.log(this.apartmentNumber)
}

addNeighbor() {
  if (this.newNeighbor) {
    this.newNeighbor.lastName = this.familyName;
    this.newNeighbor.numPersons = this.numPersons;
    this.newNeighbor.apartmentNum = this.apartmentNumber;
    
    if (this.newNeighbor){
    this._neighborsService.Post(this.newNeighbor).subscribe((response: Neighbors) => {
      console.log('Neighbor details post successfully:', response);
      this.newNeighbor=response
    });
  }
  this.toggleLike()
  }
  this.router.navigate(['admin']);

}
  ngOnInit(): void {
    console.log("bgfbfg")
    

  
    
  }
}

import { Component, OnInit } from '@angular/core';
import { Neighbors } from 'src/app/Models/Neighbors';
import { Router } from '@angular/router';
import { NeighborsService } from 'src/app/Services/neighbors.service';
@Component({
  selector: 'app-neighbors',
  templateUrl: './neighbors.component.html',
  styleUrls: ['./neighbors.component.css']
})
export class NeighborsComponent implements OnInit{
  constructor(private _neighborsService: NeighborsService,private router: Router) {}

  displayedColumns: string[] = ['Family', 'numPersons','apartmentNum'];
  neighbors: Neighbors[] = [];
admin=false;
current: Neighbors | undefined
update:Neighbors | undefined
  ngOnInit(): void {
    this.admin=this._neighborsService.isManagger;
    this.current= this._neighborsService.session
    this.getAllPayments();
    
  }

  getAllPayments(): void {
    this._neighborsService.GetAllNeighbors().subscribe(data => {
      console.log(data)
      this.neighbors = data;
      console.log(this.neighbors)
      console.log(data);    }); 
  }
  
  addNeighbor():void{
    this.router.navigate(['admin/neighbors/new']);
  }

  updateTask():void{
    
  }
  ToChange(element?:Neighbors) {
    this.update=element
   this._neighborsService.session=this.update
   this.router.navigate(['admin/neighbors/update']);


}}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-manager',
  templateUrl: './home-manager.component.html',
  styleUrls: ['./home-manager.component.css']
})
export class HomeManagerComponent {

constructor(private router: Router,
  // private _messageservice: MessageService,
  // private _neighborservice: NeighborsService
  ) { }




ngOnInit(): void {

}

currentComponent = "Messege";

loadComponent(componentName: string) {
this.currentComponent = componentName;
}
}

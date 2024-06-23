import Swal from 'sweetalert2'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NeighborsService } from './neighbors.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'https://localhost:7061/api/Neighbor/login'; // Update with your API URL

  constructor(private http: HttpClient, private router: Router, private neighborsService: NeighborsService) { }
  submitLoginData(loginData: any) {
    if(loginData.password=="123"&&loginData.username=="admin"){
     this.neighborsService.isManagger=true;
     this.router.navigate(['admin']); 
      return
    }
    
    this.http.post<any>(this.apiUrl, loginData).subscribe(
       
  (response: any) => {
    if (response.message === 'Login successful') {
      console.log('Login successful!');
      console.log(response.user)
      this.neighborsService.session = response.user;
      this.router.navigate(['neighbor']); 
    } 
  },
  (error) => {
    if (error.status === 404) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: ' Try to login again'
      });
      console.error('Login API endpoint not found.');
      // Handle 404 error, display error message to the user, etc.
    } else {
      console.error('An error occurred:', error);
      // Handle other types of errors here
    }
  }
);
}
}
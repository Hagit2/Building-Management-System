import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../../Services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  myForm: FormGroup;

  constructor( private loginService: LoginService,private fb:FormBuilder,private router:Router ){

   {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  }
  onSubmit() {
    if (this.myForm.valid) {

      const loginData = this.myForm.value;
     
      this.loginService.submitLoginData(loginData);
    } else {
      // Handle form validation errors if needed
    }
  }

 
//  onLogin() {
  

//   this.loginService.login(loginData).subscribe(
//     response => {
//       console.log('Login successful: ', response);
//       // Handle success response here (e.g., redirect to another page)
//     },
//     error => {
//       console.error('Login error: ', error);
//       // Handle error response here (e.g., show error message)
//     }
//   );
// }


//  if(user==this.form.value.password){
//  this.router.navigateByUrl('admin')
// //   alert("הפרטים שגויים נסה שנית")
// // }
// // else{
// //   //לבדוק משתמש
// //   this.router.navigateByUrl('/admin')
// // }
//   }
//   else{
//     this.router.navigateByUrl('neighbor')
//   }
}




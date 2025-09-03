import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router: Router){}
private formBuilder = inject(FormBuilder)
  emailControl = new FormControl('',[Validators.required,Validators.email]);
  passwordControl = new FormControl('',[Validators.required,Validators.min(8),Validators.max(8)]);
  form = this.formBuilder.group({
      email: this.emailControl,
      password: this.passwordControl
  });
  onSubmit(){
    
    if(this.emailControl.value!.split('@').length >=2 &&this.passwordControl.value!.length===8){
      
        this.router.navigate(['/artist'])
      
    }else{
      
        alert('chech your email  or password')
      
    }
    // if(this.emailControl&&this.passwordControl){
    // }else{
    // }
  }
}

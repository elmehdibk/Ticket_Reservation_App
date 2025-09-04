import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ArtistsService } from '../artists.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor (private router: Router,private toastr:ToastrService,private artisat:ArtistsService){}
private formBuilder = inject(FormBuilder);


  emailControl = new FormControl('',[Validators.required,Validators.email]);
  passwordControl = new FormControl('',[Validators.required,Validators.min(2),Validators.max(8)]);
  form = this.formBuilder.group({
      email: this.emailControl,
      password: this.passwordControl
  });
  // login=false;
  onSubmit(){
    
    if(this.emailControl.value!.split('@').length >=2 &&this.passwordControl.value!.length===8){
      this.toastr.success('you are login!', 'Success!');
      this.artisat.isLogin.update(value=>!value);
      console.log(this.artisat.isLogin());
      this.router.navigate(['/artist'])
      
    }else{
      // this.artisat.login=false;

      // alert('chech your email  or password')
      this.toastr.error('chech your email  or password!', 'ERROR!');
      
      
    }
    // if(this.emailControl&&this.passwordControl){
    // }else{
    // }
  }
}

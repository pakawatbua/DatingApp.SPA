import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() cabcelRegister = new EventEmitter();

  constructor(private authServive: AuthService) {

  }

  ngOnInit() {

  }

  register() {
    this.authServive.register(this.model).subscribe(() => {
      console.log('Registration succesful');
    } , error => {
      console.log(error);
    });
  }

  cancel() {
    this.cabcelRegister.emit(false);
    console.log('cancelled');
  }
}

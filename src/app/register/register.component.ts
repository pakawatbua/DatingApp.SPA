import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() cabcelRegister = new EventEmitter();

  constructor(private authServive: AuthService, private alertify: AlertifyService) {

  }

  ngOnInit() {

  }

  register() {
    this.authServive.register(this.model).subscribe(() => {
      this.alertify.success('Registration succesful');
    } , error => {
      this.alertify.error(error);
    });
  }

  cancel() {
    this.cabcelRegister.emit(false);
  }
}

import { Component, OnInit } from '@angular/core';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  arrowRight = faCaretRight;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit(myForm: NgForm) : void {
    if(myForm.value.email === "admin" && myForm.value.password === "admin") {
      this.router.navigateByUrl('main');
    }
  }

}

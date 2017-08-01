import { Component } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
    templateUrl: 'app/user/login.component.html',
    styles: [`
        em { float:right; color: #E05C65; padding-left: 10px; }
    `]
})

export class LoginComponent {
    loginInvalid:boolean = false

    constructor(private authService:AuthService, private router:Router) {

    }

    login(formVal) {
        this.authService.loginUser(formVal.userName, formVal.password).subscribe(res => {
            if(!res) {
                this.loginInvalid = true
            } else {
                this.router.navigate(['events'])
            }
        })
    }

    cancel() {
        this.router.navigate(['events'])
    }
}
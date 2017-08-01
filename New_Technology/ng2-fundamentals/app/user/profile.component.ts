import { Component, OnInit, Inject } from '@angular/core'
import { Router } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from './auth.service'
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service'

@Component({
  templateUrl: 'app/user/profile.component.html',
  styles: [`
    em { float:right; color:#E05C65; padding-left: 10px; }
    .error input { background-color:#E3C3C5 }
    .error ::-webkit-input-placeholder { color:#999; }
    .error ::-moz-placeholder { color:#999; }
    .error :-moz-placeholder { color:#999; }
    .error :ms-input-placeholder { color:#999; }
  `]
})
export class ProfileComponent implements OnInit {
    profileForm:FormGroup
    private firstName:FormControl
    private lastName:FormControl

    constructor(@Inject(TOASTR_TOKEN) private toastr:Toastr, private authService:AuthService, private router:Router) {

    }

    ngOnInit() {
      this.firstName = new FormControl(this.authService.currentUser.firstName, Validators.required)
      this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required)
      this.profileForm = new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
      })
    }

    validateLastName() {
      return this.lastName.valid || this.lastName.untouched
    }

    validateFirstName() {
      return this.firstName.valid || this.firstName.untouched
    }

    saveProfile(formValues) {
      if(this.profileForm.valid) {
        this.authService.updateCurrentUser(formValues.firstName, formValues.lastName).subscribe(() => {
          this.toastr.success('Profile Saved')
          this.router.navigate(['events'])
        })
      }
    }

    logout() {
      this.authService.logout().subscribe(() => {
        this.router.navigate(['/user/login'])
      })
    }

    cancel() {
      this.router.navigate(['events'])
    }
}
import { Component } from '@angular/core'
import { AuthService } from './user/auth.service'
import { Http, Response, Headers, RequestOptions } from '@angular/http'

@Component({
    selector: 'events-app',
    template: `
        <nav-bar></nav-bar>
        <router-outlet></router-outlet>
    `
})

export class EventsAppComponent {
    constructor(private auth:AuthService, private http:Http) {

    }

    ngOnInit() {
        this.auth.checkAuthenticationStatus()
    }
}
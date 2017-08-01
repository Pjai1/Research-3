import { NgModule } from '@angular/core'
import { BrowserModule} from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { 
    EventsListComponent, 
    EventThumbnailComponent, 
    EventDetailsComponent, 
    CreateEventComponent,
    EventService,
    EventRouteActivator,
    EventListResolver, 
    CreateSessionComponent, 
    SessionListComponent, 
    DurationPipe,
    UpvoteComponent,
    VoterService, 
    LocationValidator
} from './events/index'

import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { Error404Component } from './errors/404.component'

import { 
    TOASTR_TOKEN, 
    Toastr, 
    CollapsibleWellComponent, 
    JQ_TOKEN,
    SimpleModalComponent ,
    ModalTriggerDirective
} from './common/index'
import { AuthService } from './user/auth.service'

import { appRoutes } from './routes'

declare let toastr:Toastr
declare let jQuery:Object

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes), 
        FormsModule, 
        ReactiveFormsModule
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent, 
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe,
        SimpleModalComponent,
        ModalTriggerDirective,
        UpvoteComponent,
        LocationValidator
    ],
    providers: [
        EventService,
        {
            provide: TOASTR_TOKEN,
            useValue: toastr
        },
        {
            provide: JQ_TOKEN,
            useValue: jQuery
        },
        EventRouteActivator,
        EventListResolver,
        VoterService,
        AuthService,
        { 
            provide: 'canDeactivateCreateEvent', 
            useValue: checkDirtyState
        }
    ],
    bootstrap: [EventsAppComponent]
})

export class AppModule {}

function checkDirtyState(component:CreateEventComponent) {
    if(component.isDirty)
        return window.confirm('You have not saved this event yet, still want to continue?')
    return true
}
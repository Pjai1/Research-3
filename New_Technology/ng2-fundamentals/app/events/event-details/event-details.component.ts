import { Component, OnInit } from '@angular/core'
import { EventService } from '../shared/events.service'
import { IEvent, ISession } from '../shared/index'

@Component({
    templateUrl: 'app/events/event-details/event-details.component.html',
    styles: [`
        .container { padding-right: 20px, padding-left: 20px; }
        .event-image { height: 100px; }
        a { cursor: pointer }
    `]
})

export class EventDetailsComponent implements OnInit {
    event:IEvent
    addMode:boolean
    filterBy:string = 'all'
    sortBy:string = 'votes'

    constructor(private eventService:EventService) {

    }

    ngOnInit() {
        this.event = this.eventService.getEvent(1);
    }

    addSession() {
        this.addMode = true
    }

    saveNewSession(session:ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id))
        session.id = nextId + 1
        this.event.sessions.push(session)
        this.eventService.updateEvent(this.event)
        this.addMode = false
    }

    cancelAddSession() {
        this.addMode = false
    }
}
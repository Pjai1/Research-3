import { Component, Input } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: \${{event.price}}</div>
        <div>
            <span>{{event.location.address}}</span>
            <span>{{event.location.city}}</span>
            <span>{{event.location.country}}</span>
        </div>
    </div>
    `
})

export class EventThumbnailComponent {
    @Input() event:any
}
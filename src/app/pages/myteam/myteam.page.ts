import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-myteam',
  templateUrl: './myteam.page.html',
  styleUrls: ['./myteam.page.scss'],
})
export class MyteamPage implements OnInit {

  constructor( private eventsSrv: EventsService ) {
    this.eventsSrv.currentRoute.emit('myteam');
  }

  ngOnInit() {
  }

}

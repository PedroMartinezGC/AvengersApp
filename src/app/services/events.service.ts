import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  public currentRoute: EventEmitter<any> = new EventEmitter<any>; // Route for share data between components without direct hierarchy
}

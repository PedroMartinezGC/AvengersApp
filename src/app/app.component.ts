import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { EventsService } from './services/events.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public currentPage: string;

  @ViewChild('menuLine') menuLineBox: ElementRef;

  constructor( private renderer2: Renderer2,
               private eventsSrv: EventsService ) {}

  ngAfterViewInit(){
    this.eventsSrv.currentRoute.subscribe( route =>{ // Get the current route for select the current page in the menu
      this.currentPage = route;
      if( this.currentPage != 'login' ) setTimeout(() => { this.menuAnimation() }, 400);
    });
  }

  menuAnimation(){
    this.renderer2.setStyle( this.menuLineBox.nativeElement, 'width', '750px' );
  }

  logout(){}
}

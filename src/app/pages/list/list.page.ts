import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventsService } from 'src/app/services/events.service';
import { MarvelDataService } from 'src/app/services/marvel-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  public characters: any  = [];
  public page: number     = 0;
  public limit: number    = 60;
  public searchbar: string = '';

  constructor( private eventsSrv: EventsService,
               private marvelDataSrv: MarvelDataService ) 
  {
    this.eventsSrv.currentRoute.emit('list');
  }

  ngOnInit() {
    this.loadMoreCharacters();
  }

  loadMoreCharacters(){
    let offset = this.limit * this.page; // Start point for load the next page

    this.marvelDataSrv.getCharacters(this.limit, offset).subscribe( 
      response=>{
        if(response){
          this.characters.push(...response.data.results);
        }
      }
    );
    this.page = this.page + 1;
    console.log(this.characters)
  }

  // Get the written text on the searchbar component
  getSearchbarText(searchbarText: string){
    this.searchbar = searchbarText;
  }

}

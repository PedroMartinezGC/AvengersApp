import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelDataService {

  public apikey: string = '26ebc6aeadd770734bf74453c00583a4';
  public ts: string     = '1';
  public hash: string   = 'a32c0f3ef92459f7774021932c13296e';

  constructor( private http: HttpClient ) { }

  getCharacters( limit: number, offset: number ): Observable<any>{
    let params = {
      apikey: this.apikey,
      ts:     this.ts,
      hash:   this.hash,
      limit, 
      offset
    }
    return this.http.get('http://gateway.marvel.com/v1/public/characters', { params: params });
  }
}

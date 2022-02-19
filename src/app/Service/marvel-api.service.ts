import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MarvelAPIService {

  constructor(private http:HttpClient) { }

  BaseUrl = 'https://gateway.marvel.com:443/v1/public/characters?apikey=f9277fa9c87658496236228c03f07a7c&hash=2518a7396a0b4f32eb625456ad172337227d49e3';
  BaseOrdeByname = 'https://gateway.marvel.com:443/v1/public/characters?orderBy=name&apikey=f9277fa9c87658496236228c03f07a7c&hash=2518a7396a0b4f32eb625456ad172337227d49e3'

  allCharacters():Observable<any>
  {
    return this.http.get(this.BaseUrl);
  }

  getComicsByCharacter(characterId:string):Observable<any>
  {
    const comicByCharacterUrl = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?limit=4&apikey=f9277fa9c87658496236228c03f07a7c&hash=2518a7396a0b4f32eb625456ad172337227d49e3`;
    return this.http.get(comicByCharacterUrl);
  }

  getCharacterByName(characterName:string):Observable<any>
  {
    const characterBYNameUrl = `https://gateway.marvel.com:443/v1/public/characters?name=${characterName}&apikey=f9277fa9c87658496236228c03f07a7c&hash=2518a7396a0b4f32eb625456ad172337227d49e3`;
    return this.http.get(characterBYNameUrl);
  }

  getOrderByName():Observable<any>
  {
    return this.http.get(this.BaseOrdeByname);
  }

  getComicById(comicId:string):Observable<any>
  {
    const comicById = `https://gateway.marvel.com:443/v1/public/comics/${comicId}?apikey=f9277fa9c87658496236228c03f07a7c&hash=2518a7396a0b4f32eb625456ad172337227d49e3`;
    return this.http.get(comicById);
  }

}

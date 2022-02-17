import { Component, OnInit } from '@angular/core';
import { MarvelAPIService } from '../Service/marvel-api.service';
@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.css']
})
export class AllCharactersComponent implements OnInit {

  constructor(private service:MarvelAPIService) { }

  allCharacters:any=[];
  comics:any=[];
  series:any=[];
  showComicsDiv:boolean;
  showSeriesDiv:boolean;
  characterName:string;
  showSearchResult:boolean;
  searchedCharacter:any=[];

  ngOnInit(): void {
    this.service.allCharacters().subscribe((result)=>{
      console.log(result);
      this.allCharacters = result.data.results;
    });
  }

}

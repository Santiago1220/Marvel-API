import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/serviceModal/switch.service';
import { MarvelAPIService } from '../../Service/marvel-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private service:MarvelAPIService, private modalSS:SwitchService) { }

  allCharacters:any=[];
  comics:any=[];
  series:any=[];
  showComicsDiv:boolean;
  showSeriesDiv:boolean;
  characterName:string;
  showSearchResult:boolean;
  searchedCharacter:any=[];
  modalSwitch:boolean;

  ngOnInit(): void {
    this.showComicsDiv = false;
    this.showSeriesDiv = false;
    this.showSearchResult = false;
    this.service.allCharacters().subscribe((result)=>{
      console.log(result);
      this.allCharacters = result.data.results;
    });

    this.modalSS.$modal.subscribe((valor)=>{this.modalSwitch=valor});
  }

  openModal(){
    this.modalSwitch=true;
  }
  closeModal(){
    this.modalSS.$modal.emit(false);
  }

  fetchComicsByCharacter(characterId:string)
  {
    console.log(characterId);
    this.service.getComicsByCharacter(characterId).subscribe((result)=>{
      console.log(result);

      if(result.data.count>0)
      {
        this.comics = result.data.results;
        this.showComicsDiv = true;
      }
    })
  }

}

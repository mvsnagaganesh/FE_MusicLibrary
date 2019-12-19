import { Component, OnInit } from '@angular/core';
import {MusicLibraryService} from '../music-library.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
 tracks=[];
  constructor(private service: MusicLibraryService) {
    this.service.getAlbums().subscribe(albums=> {
     albums.map(each=>{ 
       each.titles.map(track=>{
    this.tracks.push(track);
       })
             
     })
      
      });

   }

  ngOnInit() {

  }

}
import { Component, OnInit } from '@angular/core';
import {MusicLibraryService} from '../music-library.service';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
public albums;
public searchForm;
  constructor(private service: MusicLibraryService, private fb: FormBuilder) {
    this.service.getAlbums().subscribe(albums=> this.albums = albums);
   
   }

  ngOnInit() {
    this.searchForm = this.fb.group({
  searchText: ['']
  })
  }

}
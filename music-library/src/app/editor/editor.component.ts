import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators ,FormArray} from '@angular/forms';
import {MusicLibraryService} from '../music-library.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
albumForm;
  constructor(private fb: FormBuilder,private service: MusicLibraryService, private router: Router) { }

  ngOnInit() {
    this.albumForm = this.fb.group({
  albumName: ['', Validators.required],
  composerName: [''],
  releaseDate:[''],
titles: this.fb.array([this.trackFg()])
});
  }
trackFg() {
    return this.fb.group({
      titleName: [''],
      artistName: ['']
    })
  }
    addMoreTrack() {
    (this.albumForm.controls['titles'] as FormArray).push(this.trackFg())
  }

  Sumbit(){

  this.service.addAlbum(this.albumForm.value)
    .subscribe(album => {
this.router.navigateByUrl('/albums');
    });
} 
 
}
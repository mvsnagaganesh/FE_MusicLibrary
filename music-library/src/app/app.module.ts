import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule} from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import {MatButtonModule, MatIconModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import {AlbumsModule} from './albums/albums.module';
import {EditorModule}  from './editor/editor.module';
import {WelcomeModule}  from './welcome/welcome.module';
import {TitleModule}  from './title/title.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';
import { HttpClientModule }    from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';
import { MusicLibraryService } from './music-library.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule ,MatToolbarModule,MatButtonModule,AlbumsModule,MatIconModule,EditorModule,WelcomeModule,TitleModule,BrowserAnimationsModule,
  RouterModule.forRoot([
  {path:'',redirectTo:'/welcome',pathMatch:'full'}]),
  HttpClientModule,
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
 
 
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ InMemoryDataService, MusicLibraryService]
})
export class AppModule { }

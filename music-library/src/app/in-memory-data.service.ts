import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
      const albums = [
      {
        albumName: 'Oh! Baby',
        id:1,
        composerName: '	Mickey J. Meyer',
        releaseDate: '5 July 2019',
        image: 'https://en.wikipedia.org/wiki/Oh!_Baby#/media/File:Samantha_Oh_Baby.jpg',
        titles: [{
          titleName: 'Oh! Baby',
          artistName: '	Anurag Kulkarni'
        }, {
          titleName: 'Naalo Maimarapu',
          artistName: ''
        }, {
          titleName: '	"Anaganaganaga"',
          artistName: '	"Aakasham lona"'
        }]
      },
      {
        albumName: 'K.G.F: Chapter 1',
          id:2,
        composerName: '	Ravi Basrur',
        releaseDate: '21 December 2018 ',
        image: 'https://en.wikipedia.org/wiki/K.G.F:_Chapter_1#/media/File:K.G.F_Chapter_1_poster.jpg',
        titles: [{
          titleName: 'Dheera Dheere',
          artistName: 'Ramya'
        }, {
          titleName: 'Rockey Bhai',
          artistName: 'Rockey'
        }]
      }, {
        albumName: 'Sye Raa ',
          id:3,
        composerName: 'Amit Trivedi',
        releaseDate: '2 October 2019',
        image: 'https://en.wikipedia.org/wiki/Sye_Raa_Narasimha_Reddy#/media/File:Sye_Raa_Narasimha_Reddy_film_poster.jpg',
        titles: [{
          titleName: 'Sye Raa Title Track',
          artistName: '	Sunidhi Chauhan'
        }, {
          titleName: 'Shwasadallu Deshave',
          artistName: 'Haricharan'
        }]
      }, {
        albumName: 'Game of Thrones',
          id:4,
        composerName: 'Ramin Djawadi',
        releaseDate: 'April 17, 2011',
        image: 'https://en.wikipedia.org/wiki/Game_of_Thrones#/media/File:Game_of_Thrones_title_card.jpg',
        titles: [{
          titleName: "Main Title",
          artistName: 'Instrumental'
        }, {
          titleName: "The Last of the Starks",
          artistName: 'Instrumental'
        }]
      }, {
        albumName: 'Kadhalan',
        composerName: '	A. R. Rahman',
          id:5,
        releaseDate: '17 September 1994',
        image: 'https://en.wikipedia.org/wiki/Kadhalan#/media/File:Kadhalan.jpg',
        titles: [{
          titleName: 'Ennavale Adi Ennavale',
          artistName: '	P. Unnikrishnan'
        }, {
          titleName: 'Mukkabla',
          artistName: 'Mano'
        }]
      }
    ];
    return {albums};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(albums): number {
    return albums.length > 0 ? Math.max(...albums.map(hero => hero.id)) + 1 : 11;
  }
}
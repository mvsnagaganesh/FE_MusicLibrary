import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable()
export class MusicLibraryService {
private albumsUrl = 'api/albums';
 httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
 constructor(
  private http: HttpClient) { }
getAlbum(id: number): Observable<ArrayConstructor> {
  const url = `${this.albumsUrl}/${id}`;
  return this.http.get<any>(url).pipe(
    catchError(this.handleError<any>(`getHero id=${id}`))
  );
}
getAlbums (): Observable<any[]> {
  return this.http.get<any[]>(this.albumsUrl)
    .pipe(
      catchError(this.handleError<any[]>('getHeroes', []))
    );
}

addAlbum(album): Observable<any> {
  return this.http.post<any>(this.albumsUrl, album, this.httpOptions).pipe(
    catchError(this.handleError<any>('addAlbum'))
  );
}
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error); // log to console instead
    return of(result as T);
  };
}


}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Hero } from './hero';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroesUrl = 'https://guarded-mesa-24051.herokuapp.com/api/';

  constructor(private http: HttpClient) { }

  getHeros(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl + 'heros');  
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl + 'hero', hero, httpOptions);
  }

      /** PUT: mise à jour du héros */
      updateHero(hero: Hero): Observable<any> {
        const id = hero._id;
        return this.http.put<Hero>(this.heroesUrl + 'hero/' + id, hero, httpOptions);
    }

    /** DELETE: suppression du héros */
    deleteHero(id: string): Observable<Hero> {
        return this.http.delete<Hero>(this.heroesUrl + 'hero/' + id, httpOptions);
    }


}

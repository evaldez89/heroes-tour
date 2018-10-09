import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heores';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  private heroesUrl = 'http://127.0.0.1:8000/heroes/';


  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  logMessage(message: string): void {
    this.messageService.add(message);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return this.http.get<Hero>(`${this.heroesUrl}${id}`);
  }

  private log(message: string) {
    this.messageService.add(message);
  }
}

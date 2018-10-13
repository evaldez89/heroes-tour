import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name: string, super_power: string, strength: number): void {
    if (!name) { this.heroService.logMessage('\'name\' is required'); return; }
    if (!super_power) { this.heroService.logMessage('\'super_power\' is required'); return; }
    if (!strength) { this.heroService.logMessage('\'strength\' is required'); return; }

    name = name.trim();
    super_power = super_power.trim();
    strength = strength;
    const hero: Hero = new Hero();

    hero.name = name;
    hero.super_power = super_power;
    hero.strength = strength;

    this.heroService.addHero(hero)
      .subscribe(newHero => {
        this.heroes.push(newHero);
      });
  }

  ngOnInit() {
    this.getHeroes();
  }

}

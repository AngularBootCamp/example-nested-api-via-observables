import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { FilmMeta, StarshipApiService } from './starship-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  starships: Observable<FilmMeta[]>;

  constructor(api: StarshipApiService) {
    this.starships = api.starships();
  }
}

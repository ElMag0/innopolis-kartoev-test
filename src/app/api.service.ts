import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Beer {
  id?: any;
  name: any;
  abv: any;
  tagline: any;
  description?: any;
  image_url?: any;
  favorite?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = 'https://api.punkapi.com/v2/';

  constructor(private http: HttpClient) {}

  getBeers() {
    return this.http.get<Beer>(`${this.apiUrl}beers`);
  }

  getBeer(id: any) {
    return this.http.get<Beer>(`${this.apiUrl}beers/${id}`);
  }
}

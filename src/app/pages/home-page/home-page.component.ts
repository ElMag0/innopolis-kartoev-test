import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ApiService, Beer } from 'src/app/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  items!: MenuItem[];
  activeItem!: MenuItem;
  beers: Beer[] = [];
  isFavorite: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getBeers().subscribe((res: any) => {
      console.log(res);
      this.beers = res;

      this.beers.map((beer) => {
        let beerInStorage = JSON.parse(localStorage.getItem(beer.id)!);
        if (beerInStorage !== null) {
          if (beerInStorage[0] === beer.name) {
            beer.favorite = true;
          }
        }
      });
    });

    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/home'] },
    ];
    this.activeItem = this.items[0];
  }

  arrStorage: any[] = [];

  toggleFavorite(beers: Beer) {
    beers.favorite = !beers.favorite;

    if (beers.favorite) {
      this.arrStorage.push(beers.name);

      localStorage.setItem(beers.id, JSON.stringify(this.arrStorage));

      this.arrStorage.length = 0;

    } else {
      localStorage.removeItem(beers.id);
    }
  }
}

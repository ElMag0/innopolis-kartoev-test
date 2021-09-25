import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ApiService, Beer } from 'src/app/api.service';

@Component({
  selector: 'app-description-page',
  templateUrl: './description-page.component.html',
  styleUrls: ['./description-page.component.css'],
})
export class DescriptionPageComponent implements OnInit {
  items!: MenuItem[];

  activeItem!: MenuItem;

  beer: Beer[] = [];

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.apiService.getBeer(params.id).subscribe((res: any) => {
        this.beer = res;

        let beerInStorage = JSON.parse(localStorage.getItem(this.beer[0].id)!);

        if (beerInStorage) {
          this.beer[0].favorite = true;
        }
      });
    });

    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/home'] },
    ];
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { retry, switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit{

  public country?: Country;

  constructor(
    private countriesService: CountriesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}


  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        // id se obtiene de la destruccturacion de los params
        switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode(id))
      )
      .subscribe( country => {

        if( !country) {

          return this.router.navigateByUrl("");
        }

        return this.country = country;
      })
  }


}

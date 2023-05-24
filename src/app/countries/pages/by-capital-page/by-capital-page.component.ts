import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor( private countriesServices: CountriesService) { }


  ngOnInit(): void {

    this.countries = this.countriesServices.cachStore.byCapital.countries;
    this.initialValue = this.countriesServices.cachStore.byCapital.term
  }


  searchByCapital( term: string): void {

    this.isLoading = true;

    this.countriesServices.searchCapital(term)
      .subscribe( countries => {

        this.countries = countries;
        this.isLoading = false;

      })

  }
}

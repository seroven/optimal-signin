import { Component } from '@angular/core';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}
@Component({
  selector: 'app-client-main-page',
  templateUrl: './client-main-page.component.html',
  styleUrls: ['./client-main-page.component.scss']
})
export class ClientMainPageComponent {
  countries: any[] | undefined;

  selectedCountry: any;

  filteredCountries: any[] = [];

  constructor() {}

  ngOnInit() {
    this.countries = [
      {label: '01', value: 'BLOCK'},
      {label: '02', value: 'CASA/CHALET'},
      {label: '03', value: 'OFICINA'},
      {label: '04', value: 'ESTACIONAMIENTO'},
      {label: '05', value: 'DEPOSITO'},
      {label: '06', value: 'TENDAL'},
      {label: '07', value: 'TIENDA'},
      {label: '08', value: 'PUESTO'},
      {label: '09', value: 'STAND'},
      {label: '10', value: 'OTROS'}
    ];
  }

  filterCountry(event: AutoCompleteCompleteEvent) {
      let filtered: any[] = [];
      console.log(event);
      let query = event.query;

      for (let i = 0; i < (this.countries as any[]).length; i++) {
          let country = (this.countries as any[])[i];
          if (country.value.toLowerCase().indexOf(query.toLowerCase()) == 0) {
              filtered.push(country);
          }
      }

      this.filteredCountries = filtered;
  }
}

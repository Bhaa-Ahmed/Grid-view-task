import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tap } from 'rxjs/operators';

interface ICountry {
  id: number;
  countryName: string | null;
}

@Component({
  selector: 'app-dropbox',
  templateUrl: './dropbox.component.html',
  styleUrls: ['./dropbox.component.scss'],
})
export class DropboxComponent implements OnInit {
  countries = ['Egypt', 'KSA', 'UAE', 'Qatar'];
  dropbox = new FormControl('');

  data: ICountry[] = [];

  constructor() {}

  ngOnInit(): void {
    this.addCountry();
  }

  addCountry() {
    this.dropbox.valueChanges
      .pipe(
        tap((country) => {
          this.data.push({
            id: Date.now(),
            countryName: country,
          });
        })
      )
      .subscribe();
  }

  delete(id: number) {
    this.data = this.data.filter((item: any) => item.id !== id);
  }
}

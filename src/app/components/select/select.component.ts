import { Component } from '@angular/core';
import { HairDresserResponse, hairdresserService } from 'src/app/services/hairdresser.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {

  constructor(private hairdresserService: hairdresserService) {}

  ngOnInit(): void {
    this.onFetchHairDresser();
  }

  hairdressers: HairDresserResponse[] = [];

    onFetchHairDresser() {
    this.hairdresserService.fetchHairDresserList().subscribe({
      next: (res) => {
        this.hairdressers = res;
       console.log(res);
      },
      error: (err) => {
        console.log("Erreur", err);
      }
    })
  }

}

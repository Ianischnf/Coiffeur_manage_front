import { Component, Input, OnInit } from '@angular/core';
import { HairDresserResponse, hairdresserService } from 'src/app/services/hairdresser.service';

@Component({
  selector: 'app-hairdresser-profil-page',
  templateUrl: './hairdresser-profil-page.component.html',
  styleUrls: ['./hairdresser-profil-page.component.css']
})
export class HairdresserProfilPageComponent implements OnInit {
  constructor(private hairdresserService: hairdresserService) { }

  hairdresser !: HairDresserResponse;
  @Input() hairDresserId !: number;

  ngOnInit(): void {
    this.onFetchHairDresserById(this.hairDresserId);
  }

  onFetchHairDresserById(hairDresserId: number) {
    this.hairdresserService.fetchHairDresserById(hairDresserId).subscribe({
      next: (res) => {
        this.hairdresser = res;
        console.log("Hairdresser séléctionné : ", res);

      },
      error: (err) => {
        console.log("Erreur", err);
      }
    })
  }
}

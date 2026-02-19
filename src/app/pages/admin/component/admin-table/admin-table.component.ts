import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/features/admin/admin.service';
import { Hairdresser } from 'src/app/features/admin/dto/hairdresser.dto';
import { hairdresserService } from 'src/app/services/hairdresser.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

let ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})

export class AdminTableComponent implements OnInit{

  ngOnInit(): void {
      this.onFetchAllHairdresser();
  }
  constructor(private hairdresserService: hairdresserService) { }

  hairdressers: Hairdresser[] = [];
  displayedColumns: string[] = ['Nom', 'Prenom', 'Email'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();

  onFetchAllHairdresser() {
    this.hairdresserService.fetchHairDresserList().subscribe({
      next: (res) => {
        this.hairdressers = res;
        console.log("Liste des coiffeurs : ", this.hairdressers);
      },
      error: (err) => {
        console.log("Erreur lors de la récupération des coiffeurs", err)
      }
    })
  }
}

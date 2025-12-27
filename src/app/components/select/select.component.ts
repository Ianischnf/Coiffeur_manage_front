import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HairDresserResponse, hairdresserService } from 'src/app/services/hairdresser.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {

  @Input() hairdresserId!: number | null;
  @Output() hairdresserIdChange = new EventEmitter<number>();

  constructor(private hairdresserService: hairdresserService) {}

  ngOnInit(): void {
    this.onFetchHairDresser();
  }

    hairdressers: HairDresserResponse[] = [];

    onFetchHairDresser() {
    this.hairdresserService.fetchHairDresserList().subscribe({
      next: (res) => {
        console.log("ex 1 : ", res[0]);
        console.log("ID 1 : ", (res[0] as any).id);
        this.hairdressers = res;
       console.log(res);
      },
      error: (err) => {
        console.log("Erreur", err);
      } 
    })
  }

  onSelect(hairdresserId: number) {
    console.log("id selectionné : ", hairdresserId);
    this.hairdresserIdChange.emit(Number(hairdresserId));
  }
}

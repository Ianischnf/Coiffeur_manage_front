import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  items = ['Planifier un rendez-vous', 'Modifier un rendez-vous', 'Annuler un rendez-vous'];
  expandedIndex = 0;

  trackByItem(index: number, item: string) {
    return item; // ou return index;
  }
}

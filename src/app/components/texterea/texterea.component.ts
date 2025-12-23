import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-texterea',
  templateUrl: './texterea.component.html',
  styleUrls: ['./texterea.component.css']
})
export class TextereaComponent {

  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event) {
    const value = (event.target as HTMLTextAreaElement).value;
    this.valueChange.emit(value);
  }


}

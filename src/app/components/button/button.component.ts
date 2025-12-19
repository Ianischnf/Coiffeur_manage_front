import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() label    = 'Button';
  @Input() type     : 'button' | 'submit' = 'button';
  @Input() disabled = false;
}

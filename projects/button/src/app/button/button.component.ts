import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  template: `
    <button
      class="micro-button"
      [type]="type"
    >
    <ng-content></ng-content>
  </button>
  `,
  styles: [
    `
      button.micro-button {
        cursor: pointer;
        padding: 8px 12px;
        border: 0;
        border-radius: 4px;
        color: var(--secondary-color);
        background-color: var(--primary-color);
        outline: none;
      }

      button.micro-button:active {
        transform: scale(0.90);
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  @Input() type = 'submit';

}

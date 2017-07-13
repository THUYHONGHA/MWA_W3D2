import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: `
    <div>Double click to hide item. Click to change color</div>
    <ul>
      <li *ngFor="let item of list" appUpper  >
      <div appMycolor (onColorChanged)="selectedColor = $event" [appMyvisibility]="true">{{item}}</div>
      </li>
    </ul>
    <div>Current selected color: {{selectedColor?.toUpperCase()}}</div>
  `,
  styles: []
})
export class MyComponentComponent implements OnInit {
  @Input() list: string[];
  selectedColor: string;
  constructor() {}

  ngOnInit() {
    console.log('list items:', this.list);

  }
}

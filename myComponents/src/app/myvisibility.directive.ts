import { Directive, Input, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {
  @Input('appMyvisibility') isVisible: boolean
  constructor() {
  }
 @HostBinding('style.display') hbvisible;
 @HostListener('dblclick') hlvisible() {
   this.isVisible = !this.isVisible;
   if ( this.isVisible ) {
     this.hbvisible = 'block';
   }
   this.hbvisible = 'none';
  };
}

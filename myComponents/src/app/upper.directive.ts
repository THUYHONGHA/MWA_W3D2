import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appUpper]',
 
})
export class UpperDirective {
  constructor(private e: ElementRef) {     
   e.nativeElement.style.textTransform = "uppercase";
  }
  
}

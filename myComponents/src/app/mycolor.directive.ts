import { Directive, Renderer, ElementRef, HostListener, EventEmitter, Output} from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {
  private color: string[];
  private index: number;
  private selectedColor: string;
  @Output() onColorChanged = new EventEmitter();
  colorChanged() {
    this.onColorChanged.emit(this.selectedColor);
  }
  constructor(private e: ElementRef, private r: Renderer) {
    this.color = ['red','green','blue','yellow','pink','violet','cyan'];
    this.index = 0;
  }

   @HostListener('click') changeColor() {
     if (this.index === this.color.length) this.index = 0;
     this.e.nativeElement.style.color = this.color[this.index];
     this.selectedColor = this.color[this.index];
     this.index++;
    //  this.selectedColor = this.e.nativeElement.innerHTML;
     this.colorChanged();
   }

}

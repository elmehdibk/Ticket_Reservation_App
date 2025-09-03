import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class HighlightDirective {
private el = inject(ElementRef)
  constructor() { 
     this.el.nativeElement.style.textAlign = 'center';
  }
  @HostListener('mouseenter') onMouseEnter() {
     this.highlight('#eaffdf');
   }
   @HostListener('mouseleave') onMouseLeave() {
     this.highlight('');
   }
  
    private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}

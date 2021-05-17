import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHovering]',
})
export class HoveringDirective {
  constructor(private ref: ElementRef) {}
  @HostListener('mouseover') hovering() {
    this.ref.nativeElement.style.boxShadow = '2px 5px 10px #ffdead';
  }
  @HostListener('mouseleave') hoverend() {
    this.ref.nativeElement.style.boxShadow = 'none';
  }
}

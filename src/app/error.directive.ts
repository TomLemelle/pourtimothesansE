import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appError]'
})
export class ErrorDirective {

  @Input

  constructor(
    private ref: ElementRef,
    private renderer: Renderer2
  ) { }

  @Input() set appError(condition: boolean) {
    if(condition) {
      this.renderer.setStyle(this.ref.nativeElement, 'border', 'solid 1px red');
    }
  }

}

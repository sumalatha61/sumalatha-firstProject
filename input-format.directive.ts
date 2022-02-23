import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format: string;
  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    let inputValue: string = this.el.nativeElement.value;
    if (this.format == 'uppercase') {
      this.el.nativeElement.value = inputValue.toUpperCase();
    }
    else if (this.format == 'lowercase') {
      this.el.nativeElement.value = inputValue.toLowerCase();
    }
  }
}

import { AfterContentInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterContentInit {
  @Input('appHighlight') searchText: string | null = '';

  constructor(private el: ElementRef<HTMLSpanElement>) {
  }

  ngAfterContentInit() {
    if (this.searchText) {
      console.log(this.searchText);
      const regex =
        new RegExp(`(?:${this.searchText.split(' ').join('|')})`, 'gi');
      this.el.nativeElement.innerHTML = this.el.nativeElement.innerText.replace(regex, match =>
        `<span style="background-color: yellow">${match}</span>`
      );
    }
  }
}

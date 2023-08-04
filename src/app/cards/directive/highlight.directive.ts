import { AfterContentChecked, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterContentChecked {
  @Input('appHighlight') searchText: string | null = '';

  constructor(private el: ElementRef<HTMLSpanElement>) {
  }

  ngAfterContentChecked() {
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

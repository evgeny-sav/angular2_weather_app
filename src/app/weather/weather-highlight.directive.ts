import {Directive, ElementRef, Input, OnInit} from "@angular/core";

@Directive({
  selector: '[weather-highlight]'
})
export class WeatherHighlightDirective implements OnInit {

  @Input('weather-highlight') highlightTemp: number;
  highlightColor: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (Math.floor(this.highlightTemp) < 5) {
      this.highlightColor = '#4FC3F7';
    } else if (Math.floor(this.highlightTemp) > 5 && Math.floor(this.highlightTemp) < 15) {
      this.highlightColor = '#FFF176';
    }else if (Math.floor(this.highlightTemp) > 15 && Math.floor(this.highlightTemp) < 25) {
      this.highlightColor = '#FFA726';
    } else if (Math.floor(this.highlightTemp) > 25) {
      this.highlightColor = '#FF5722';
    }

    this.el.nativeElement.style.color = this.highlightColor;
  }

}

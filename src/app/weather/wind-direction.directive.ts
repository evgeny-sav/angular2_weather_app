import {Directive, ElementRef, Input, OnInit} from "@angular/core";
@Directive({
  selector: '[wind-direction]'
})
export class WindDirectionDirective implements OnInit{

  @Input('wind-direction') windDir: number;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.transform = `rotate(${this.windDir}deg)`;
  }
}

// Directive to style paragraph
// Host listener to react on mouse events
// Host Binding to set property to bind to 

import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

	@Input() defaultColor: string = 'red';

  @HostBinding('style.backgroundColor') backgroundColor: string;


  constructor(private elRef:ElementRef, private renderer: Renderer2) {


  }

  ngOnInit() {
  	this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
  	this.backgroundColor = 'blue';
  	console.log("Enter");
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
  	this.backgroundColor = 'transparent';
  	console.log("Leaving");
  }
}

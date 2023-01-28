import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appSimple]',
  standalone: true,
})
export class SimpleDirective implements OnInit {
  // @HostBinding('class.ds-input--focused') focused = false;
  possibleColors = [
    'darksalmon',
    'hotpink',
    'lightskyblue',
    'goldenrod',
    'peachpuff',
    'mediumspringgreen',
    'cornflowerblue',
    'blanchedalmond',
    'lightslategrey'
  ];

  @HostBinding('style.color') color!: string;

  @HostBinding('style.border-color') borderColor!: string;

  @HostBinding('style.border') border: string = '3px dashed';

  @HostBinding('style.padding-left') pl: string = '3px';



  constructor(private elem: ElementRef) { 
    console.log("11>", this.elem)
  }

  ngOnInit(): void {
    console.log("22>", this.elem.nativeElement.textContent)
    console.log("22>", this.elem.nativeElement.innerHTML)
  }

  ngAfterViewInit(): void {
    // outputs `I am span`
    console.log("33>", this.elem)
    // this.renderer
  }

  @HostListener('click', ['$event'])
  public click(e: Event): void {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);

    this.color = this.borderColor = this.possibleColors[colorPick];

    this.pl = '50px';
  }

}
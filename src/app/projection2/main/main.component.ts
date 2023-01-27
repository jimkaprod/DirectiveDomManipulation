import {
  Component,
  ElementRef,
  HostBinding,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { SimpleDirective } from './simple.directive';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [SimpleDirective],
})
export class MainComponent implements OnInit {
  @HostBinding('role') role = 'button';

  @HostBinding('class.add-class') hasCss = true;

  @ViewChild('simpleElemRef', { read: ElementRef }) simpleElemRef: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    // outputs `I am span`
    console.log(this.simpleElemRef);
    // this.renderer
  }
}

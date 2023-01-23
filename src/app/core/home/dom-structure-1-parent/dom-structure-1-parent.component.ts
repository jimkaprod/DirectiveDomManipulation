import {
  AfterViewChecked,
  Component,
  ElementRef,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';
import { DomStructure1ChildComponent } from '../dom-structure-1-child/dom-structure-1-child.component';

@Component({
  selector: 'app-dom-structure-1-parent',
  templateUrl: './dom-structure-1-parent.component.html',
  styleUrls: ['./dom-structure-1-parent.component.css'],
  standalone: true,
  imports: [DomStructure1ChildComponent],
})
export class DomStructure1ParentComponent implements AfterViewChecked {
  @ViewChildren('child', { read: ElementRef }) childComp: QueryList<ElementRef>;

  constructor(private renderer: Renderer2, private host: ElementRef) {}

  ngAfterViewChecked() {
    console.log(this.childComp.length);
  }

  removeChild() {
    this.renderer.removeChild(
      this.host.nativeElement,
      this.childComp.first.nativeElement
    );
  }
}

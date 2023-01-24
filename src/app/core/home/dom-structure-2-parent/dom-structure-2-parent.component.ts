import { NgIf } from '@angular/common';
import {
  AfterViewChecked,
  Component,
  ElementRef,
  QueryList,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { DomStructure1ChildComponent } from '../dom-structure-1-child/dom-structure-1-child.component';

@Component({
  selector: 'app-dom-structure-2-parent',
  templateUrl: './dom-structure-2-parent.component.html',
  styleUrls: ['./dom-structure-2-parent.component.css'],
  standalone: true,
  imports: [DomStructure1ChildComponent, NgIf],
})
export class DomStructure2ParentComponent implements AfterViewChecked {
  @ViewChildren('child', { read: ElementRef })
  childsComp: QueryList<ElementRef>;
  @ViewChild('viewcontainer', { read: ViewContainerRef }) viewcontainer;
  @ViewChild(TemplateRef) template: TemplateRef<null>;

  checked: boolean;

  constructor(private renderer: Renderer2, private host: ElementRef) {}

  ngOnInit() {
    this.checked = true;
  }

  ngAfterViewChecked() {
    console.log('Child components count', this.childsComp.length);
  }

  ngAfterViewInit() {
    this.viewcontainer.createEmbeddedView(this.template);
  }

  removeChild() {
    this.viewcontainer.remove();
  }

  checker(): boolean {
    console.log('checker >>>');
    return true;
  }
}

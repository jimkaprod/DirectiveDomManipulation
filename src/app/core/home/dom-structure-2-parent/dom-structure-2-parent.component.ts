import { NgFor, NgIf } from '@angular/common';
import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EmbeddedViewRef,
  QueryList,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewRef,
} from '@angular/core';
import { DomStructure1ChildComponent } from '../dom-structure-1-child/dom-structure-1-child.component';

@Component({
  selector: 'app-dom-structure-2-parent',
  templateUrl: './dom-structure-2-parent.component.html',
  styleUrls: ['./dom-structure-2-parent.component.css'],
  standalone: true,
  imports: [DomStructure1ChildComponent, NgIf, NgFor],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DomStructure2ParentComponent implements AfterViewChecked {
  @ViewChildren('child', { read: ElementRef })
  childsComp: QueryList<ElementRef>;
  @ViewChild('viewcontainer', { read: ViewContainerRef }) viewcontainer;
  @ViewChild(TemplateRef) template: TemplateRef<null>;

  @ViewChild('simpleRef') simpleRef: ElementRef;

  @ViewChild('myList', { read: ViewContainerRef }) myList: ViewContainerRef;
  @ViewChild('listItemTpl') listItemTpl: TemplateRef<null>;
  checked: boolean;

  listItems = ['one', 'two'];

  myView: EmbeddedViewRef<unknown>;

  constructor(private renderer: Renderer2, private host: ElementRef, private cdRef:ChangeDetectorRef) {}

  ngOnInit() {
    this.checked = true;
  }

  ngAfterViewChecked() {
    console.log('Child components count', this.childsComp.length);
    console.log(this.simpleRef.nativeElement.textContent);
  }

  ngAfterViewInit() {
    this.viewcontainer.createEmbeddedView(this.template);
    let view = this.listItemTpl.createEmbeddedView(null);
    this.myList.insert(view);
    this.cdRef.detectChanges();
  }

  removeChild() {
    this.viewcontainer.remove();
  }

  checker(): boolean {
    console.log('checker >>>');
    return true;
  }
}

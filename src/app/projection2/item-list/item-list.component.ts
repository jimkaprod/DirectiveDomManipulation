import { NgIf } from '@angular/common';
import {
  Component,
  EmbeddedViewRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

interface ListItem {
  titre: string;
  description: string;
}

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  standalone: true,
  imports: [NgIf],
})
export class ItemListComponent implements OnInit {
  @Input('displayIt') displayIt: boolean;

  @Input('item') item: any;

  @Output() removeComponent = new EventEmitter<EmbeddedViewRef<any>>();

  @Output() removeComponent2 = new EventEmitter<ViewContainerRef>();

  @Output() toggleContent = new EventEmitter<ViewContainerRef>();

  @Output() toggleContent2 = new EventEmitter<ViewContainerRef>();

  @ViewChild('dynamic', { read: ViewContainerRef })
  dynamic: ViewContainerRef;

  // @ViewChild('dynamic') dynamic: TemplateRef<any>;

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit() {
    console.log('ITEM LIST>>>>', this.item);
  }

  addToIt(view: EmbeddedViewRef<any>) {
    this.toggleContent.emit(this.viewContainerRef);
    // this.displayIt = true;
    // this.service.addDynamicComponent(this.dynamic);
  }

  addToIt2(view: EmbeddedViewRef<any>) {
    this.toggleContent.emit(this.dynamic);
    // this.displayIt = true;
    // this.service.addDynamicComponent(this.dynamic);
  }

  deleteIt(view: EmbeddedViewRef<any>) {
    this.removeComponent.emit(view);
    // console.log(viewIndexRef);
    // //get viewRef from context and then get index of the viewref
    // let index = this.viewContainerRef.indexOf(viewIndexRef);
    // //remove the view
    // this.viewContainerRef.remove(index);
  }

  deleteIt2(view: EmbeddedViewRef<any>) {
    this.removeComponent2.emit(this.dynamic);
    // console.log(viewIndexRef);
    // //get viewRef from context and then get index of the viewref
    // let index = this.viewContainerRef.indexOf(viewIndexRef);
    // //remove the view
    // this.viewContainerRef.remove(index);
  }
}

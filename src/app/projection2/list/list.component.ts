import { JsonPipe, NgIf } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  EmbeddedViewRef,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewRef,
} from '@angular/core';
import { ServiceLoaderService } from '../../service/service-loader.service';
import { AddContentDirective } from '../add-content.directive';
import { AppendTargetDirective } from '../append-target.directive';

interface ListItem {
  titre: string;
  description: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  standalone: true,
  imports: [NgIf, AddContentDirective, AppendTargetDirective, JsonPipe],
})
export class ListComponent implements OnInit {
  @ViewChild('itemTpl') itemTpl: TemplateRef<any>;

  @Input() list: ListItem[];

  isLoaded: boolean;

  @ViewChild('myTarget') myTarget: TemplateRef<any>;

  @ViewChild('dynamic', { read: ViewContainerRef })
  dynamic: ViewContainerRef;

  displayIt: boolean = false;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private cdRef: ChangeDetectorRef,
    private service: ServiceLoaderService
  ) {}

  ngOnInit() {
    console.log('LIST COMPO>>>', this.viewContainerRef);
    // this.cdRef.detectChanges();
  }

  ngAfterViewChecked(): void {}

  ngAfterViewInit(): void {
    this.list.forEach((item, index) => {
      let view: EmbeddedViewRef<any> = this.viewContainerRef.createEmbeddedView(
        this.itemTpl,
        {
          option: {
            item: this.list[index],
            divId: `thumbnail-${index}`,
            closeId: `close-${index}`,
          },
        }
      );
      view.context.option.viewIndexRef = view;

      // this.viewContainerRef.createEmbeddedView(this.itemTpl, {
      //   $implicit: { item, index },
      // });
    });
    this.isLoaded = true;
    // this.cdRef.detectChanges();
  }

  addTemplate(index: number): void {
    // const tpl: TemplateRef<any> = this.viewContainerRef.get(0);
    this.viewContainerRef.remove(index);
    this.cdRef.detectChanges();
    console.log(index);
    // this.service.addDynamicComponent(this.dynamic);
  }

  addToIt(option) {
    this.displayIt = true;
    this.service.addDynamicComponent(this.dynamic);
  }

  deleteIt(viewIndexRef) {
    console.log(viewIndexRef);
    //get viewRef from context and then get index of the viewref
    let index = this.viewContainerRef.indexOf(viewIndexRef);
    //remove the view
    this.viewContainerRef.remove(index);
  }
}

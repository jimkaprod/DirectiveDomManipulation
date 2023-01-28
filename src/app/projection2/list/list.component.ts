import { NgIf } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
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
  imports: [NgIf, AddContentDirective, AppendTargetDirective],
})
export class ListComponent implements OnInit {
  @ViewChild('itemTpl') itemTpl: TemplateRef<any>;

  @Input() list: ListItem[];

  isLoaded: boolean;

  @ViewChild('myTarget') myTarget: TemplateRef<any>;

  @ViewChild('dynamic', { read: ViewContainerRef })
  dynamic: ViewContainerRef;

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
      this.viewContainerRef.createEmbeddedView(this.itemTpl, {
        $implicit: item,
        index,
      });
    });
    this.isLoaded = true;
    // this.cdRef.detectChanges();
  }

  addTemplate(index: number): void {
    // console.log(this.viewContainerRef.get(0).);
    this.service.addDynamicComponent(this.dynamic);
  }
}

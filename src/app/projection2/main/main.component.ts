import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  OnInit,
  QueryList,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { ServiceLoaderService } from '../../service/service-loader.service';
import { AddContentDirective } from '../add-content.directive';
import { ListComponent } from '../list/list.component';
import { SimpleDirective } from './simple.directive';

interface ListItem {
  titre: string;
  description: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [
    SimpleDirective,
    NgTemplateOutlet,
    NgIf,
    NgFor,
    AddContentDirective,
    ListComponent,
  ],
})
export class MainComponent implements OnInit {
  // @HostBinding('role') role = 'button';

  @HostBinding('class.add-class') hasCss = true;

  @ViewChild('simpleElemRef', { read: ElementRef }) simpleElemRef: ElementRef;

  @ViewChild('cardContainerRef', { read: ViewContainerRef })
  cardContainerRef: ViewContainerRef;

  @ViewChildren('tplCards') tplCards: QueryList<TemplateRef<any>>;

  @ViewChild('listContainerRef', { read: ViewContainerRef })
  listContainerRef: ViewContainerRef;

  @ViewChild('itemTpl') itemTpl: TemplateRef<any>;

  listItem: ListItem[] = [
    {
      titre: 'mon 1er',
      description: 'ca commence bien',
    },
    {
      titre: 'mon 2eme',
      description: 'Et ca continue',
    },
    {
      titre: 'mon 3eme',
      description: 'Encore et encore',
    },
  ];

  isLoaded: boolean;

  constructor(
    private renderer: Renderer2,
    private cdRef: ChangeDetectorRef,
    private service: ServiceLoaderService
  ) {}

  ngOnInit() {}

  ngAfterContentInit(): void {}

  // ngAfterViewInit(): void {
  // outputs `I am span`
  // console.log(this.simpleElemRef);
  // let view = this.tpl.createEmbeddedView(null);
  // let view2 = this.tpl.createEmbeddedView(null);
  // this.listContainerRef.insert(view);
  // this.listContainerRef.insert(view2);
  // console.log('listContainerRef>>>');
  // console.log('tpl>>>', this.tpls);
  // this.listContainerRef.clear()
  // this.renderer
  // }

  ngAfterViewChecked(): void {
    //   this.listItem.forEach((item) => {
    //     this.listContainerRef.createEmbeddedView(this.itemTpl, {
    //       $implicit: item,
    //     });
    //   });
    //   this.isLoaded = true;
    this.cdRef.detectChanges();
  }

  // ngAfterViewInit(): void {}

  toggle(index: number): void {
    console.log('length>>>>', this.tplCards.length);
    // console.log(this.tplCards.toArray());
    console.log('--55>>', this.tplCards.toArray().length);
    // console.log('index>>>>', this.tplCards.get(index));
  }

  vienwContainerClear(): void {
    this.listContainerRef.clear();
  }
}

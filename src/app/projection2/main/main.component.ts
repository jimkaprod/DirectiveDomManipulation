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
import { AddContentDirective } from '../add-content.directive';
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
  ],
})
export class MainComponent implements OnInit {
  @HostBinding('role') role = 'button';

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

  constructor(private renderer: Renderer2, private cdRef: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterContentInit(): void {
    
  }

  ngAfterViewChecked(): void {
    this.listItem.forEach((item) => {
      this.listContainerRef.createEmbeddedView(this.itemTpl, {
        $implicit: item,
      });
    });
    this.cdRef.detectChanges();
  }

  ngAfterViewInit(): void {}

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

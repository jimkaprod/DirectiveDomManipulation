import { NgFor, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  ContentChildren,
  Input,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { TabDirective } from '../tab.directive';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css'],
  standalone: true,
  imports: [NgFor, NgTemplateOutlet],
})
export class DynamicComponent {
  @Input('names') names: string[] = [];

  @ContentChildren(TabDirective, { read: TemplateRef })
  templates: QueryList<any>;

  currentTab: TemplateRef<any>;
}

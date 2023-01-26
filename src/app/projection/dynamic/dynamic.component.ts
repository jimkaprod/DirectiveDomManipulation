import { NgFor, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  ContentChildren,
  Input,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TabDirective } from '../tab.directive';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css'],
  standalone: true,
  imports: [NgFor, NgTemplateOutlet, ReactiveFormsModule],
})
export class DynamicComponent {
  // @Input('names') names: string[] = [];

  // @ContentChildren(TabDirective, { read: TemplateRef })
  // templates: QueryList<any>;

  @ContentChildren(TabDirective) tabs: QueryList<TabDirective>;

  ctx = { title: 'This is some context' };

  currentTab: TemplateRef<any>;

  constructor(private fb: FormBuilder) {}

  receptionistForm = this.fb.group({});

  clerkForm = this.fb.group({});
}

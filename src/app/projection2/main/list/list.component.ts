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

interface ListItem {
  titre: string;
  description: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  standalone: true,
  imports: [NgIf],
})
export class ListComponent implements OnInit {
  @ViewChild('itemTpl') itemTpl: TemplateRef<any>;

  @Input() list: ListItem[];

  isLoaded: boolean;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    console.log('LIST COMPO>>>', this.viewContainerRef);
    // this.cdRef.detectChanges();
  }

  ngAfterViewChecked(): void {}

  ngAfterViewInit(): void {
    this.list.forEach((item) => {
      this.viewContainerRef.createEmbeddedView(this.itemTpl, {
        $implicit: item,
      });
    });
    this.isLoaded = true;
    // this.cdRef.detectChanges();
  }
}

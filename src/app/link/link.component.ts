import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-component',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent implements OnInit {
  private params: any = {
    value: '',
  };

  constructor() {}

  ngOnInit() {}

  agInit(params: any): void {
    this.params = params;
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  template: `
    Filter: <input type="text" [(ngModel)]="filter" class="form-control"
    placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon2" />
  `
})

export class FilterTextBoxComponent implements OnInit {

  private _filter: string;
  @Input() get filter() {
    return this._filter;
  }

  set filter(val: string) {
    this._filter = val;
    this.changed.emit(this.filter);
  }

  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  constructor() {

  }
  ngOnInit() {}
}


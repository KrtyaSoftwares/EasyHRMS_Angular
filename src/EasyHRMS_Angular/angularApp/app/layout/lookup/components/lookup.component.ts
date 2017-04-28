import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LookupService } from '../../../core/services/lookup.service';
@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
})
export class LookupComponent implements OnInit {
  result_list: any = {};
  results: any[] = [];
  filter_Array: any[] = [];
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _lookupService: LookupService
  ) { }
ngOnInit() {
    this.GetAll();
  }

  GetAll() {
     this._lookupService
        .GetAll()
        .subscribe(
        data => {
          this.result_list = data;
          this.results = this.result_list['list'];
          this.filter_Array = this.groupBy(this.results, 'category');
          let cnt = 1;
          for (let i = 0; i < this.filter_Array.length; i++) {
            for (let j = 0; j < this.filter_Array[i].length; j++) {
              if (cnt == 1 ) {
                this.filter_Array[i][j]['custom_color'] = 'bg-blue';
              } else if (cnt == 2 ) {
                this.filter_Array[i][j]['custom_color'] = 'bg-red';
              } else if (cnt == 3 ) {
                this.filter_Array[i][j]['custom_color'] = 'bg-green';
              } else if (cnt == 4 ) {
                this.filter_Array[i][j]['custom_color'] = 'bg-dark';
              } else {
                this.filter_Array[i][j]['custom_color'] = 'bg-blue';
              }
              cnt++;
              if (cnt == 4) {
                cnt = 1;
              }
            }
          }
        });
  }
  groupBy(collection: any, property: any) {
    let i = 0, val, index,
        values = [], result = [];
    for (; i < collection.length; i++) {
        val = collection[i][property];
        index = values.indexOf(val);
        if (index > -1) {
          result[index].push(collection[i]);
        } else {
            values.push(val);
            result.push([collection[i]]);
        }
    }
    return result;
  }
}
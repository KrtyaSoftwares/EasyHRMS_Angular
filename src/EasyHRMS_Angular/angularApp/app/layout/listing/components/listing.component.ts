import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import { ListsService } from '../../../core/services/lists-data';
import { Data } from '../../../models/data';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
})
export class ListingComponent implements OnInit {
  results: any = {};
  lookuplist: any[];
  actionlist: any[];
  lookupData: any[];
  filterLookupData: any[];
  filter_Array: any[] = [];
  public record_not_exists = false;
  @Input('lookup') lookup: string;
  constructor( private _listsService: ListsService ) {
  }
  ngOnInit() {
    this.getAll(this.lookup);
  }
  getAll(id: any) {
    this._listsService.GetAll(id)
        .subscribe(
        data => {
            this.results = data;
            this.lookuplist = this.results['lookuplist'];
            this.actionlist = this.results['actionlist'];
            this.lookupData = this.results['lookupData'];

            this. filterLookupData = this.lookupData.sort(function (a, b) {
              return a.rowId - b.rowId;
            });
            if ( this.lookuplist.length == 0 ) {
                this.record_not_exists = true;
            } else {
                this.record_not_exists = false;
            }
            this.filter_Array = this.groupBy(this.filterLookupData, 'rowId');
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
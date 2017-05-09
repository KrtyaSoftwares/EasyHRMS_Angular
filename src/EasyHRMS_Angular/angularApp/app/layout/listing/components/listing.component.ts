import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import { ListsService } from '../../../core/services/lists-data';
import { Data } from '../../../models/data';
import { PagerService } from '../../../core/services/common/pager.service';

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
  _selectedfieldsHeading: any[] = [];
  _FilteredfieldsHeading: any[] = [];

  // pager object
    pager: any = {};

  // paged items
    pagedItems: any[];

  @Input('lookup') lookup: string;
  constructor(
    private _listsService: ListsService,
    private pagerService: PagerService
    ) {
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
            for ( let i = 0; i < this.lookuplist.length; i++ ) {
              if (this.lookuplist[i]['isVisible'] == true) {
                this._selectedfieldsHeading.push(this.lookuplist[i]);
              }
            }
            this._FilteredfieldsHeading = this.stripUndefined(this._selectedfieldsHeading);

            this._FilteredfieldsHeading.sort(function (a, b) {
              return a.fieldOrder - b.fieldOrder;
            });
            this.filter_Array = this.groupBy(this.filterLookupData, 'rowId');
            //initialize to page 1
            this.setPage(1);
        });
  }
  stripUndefined (arr: any[]) {
    return arr.reduce(function (result, item) {
      result.push( Array.isArray(item) && !item.length ? this.stripUndefined(item) : item );
      return result;
    }, []);
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

  setPage(page: number) {
      if (page < 1 || page > this.pager.totalPages) {
          return;
      }
      // get pager object from service
      this.pager = this.pagerService.getPager(this.filter_Array.length, page);
      // get current page of items
      this.pagedItems = this.filter_Array.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
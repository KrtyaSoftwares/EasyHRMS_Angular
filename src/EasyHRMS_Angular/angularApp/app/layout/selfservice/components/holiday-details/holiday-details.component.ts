import { Component, OnInit } from '@angular/core';

import { LookupDataService } from '../../../../core/services/common/lookup-data.service';
import { LookupDataModel } from '../../../../models/lookup-data.model';

@Component({
  selector: 'app-holiday-details',
  templateUrl: './holiday-details.component.html',
  //styleUrls: ['./holiday-details.component.css']
})
export class HolidayDetailsComponent implements OnInit {
    lookup = 1;
    lookupdata: any;
    lookupdataByRow: any;
    //public lookupdata: LookupDataModel[] = [];
    constructor(private lookupDataService: LookupDataService) { }

    ngOnInit() {
        this.getHolidayLookupData(this.lookup);
  }

  getHolidayLookupData(lookup: any) {
      this.lookupDataService
          .GetLookUpData(lookup)
          .subscribe(
          data => {
              this.lookupdata = data.list;
              console.log(this.lookupdata);
              this.lookupdataByRow = this.groupBy(this.lookupdata, function (item: any) {

                  return item.rowId;
                  // return [item.sensupporterid._id];
              });
              console.log(this.lookupdataByRow);
              //this.record = data;
              //this.singleRecord = this.record['list'];
              //this.array_merge();
          });
  }

  groupBy ( array: any, f: any ) {
       let groups: any = {};
      array.forEach(function (o: any) {
          let group = JSON.stringify(f(o));
          groups[group] = groups[group] || [];
          groups[group].push(o);
      });

      return Object.keys(groups).map(function (group) {
          return groups[group];
      })
  }

}

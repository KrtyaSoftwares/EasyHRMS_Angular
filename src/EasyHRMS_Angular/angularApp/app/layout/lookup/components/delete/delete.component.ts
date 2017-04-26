import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsService } from '../../../../core/services/form-defination.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
})
export class DeleteComponent implements OnInit {
  rowId: number;
  lookup: number;
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private formsService: FormsService
  ) { }

  ngOnInit() {
     this._route.params.subscribe(params => {
        this.lookup = params['lookup'];
        this.rowId = params['rowId'];
        this.DeleteTableData(this.lookup, this.rowId)
    });
  }
DeleteTableData(lookup: any, id: number) {
    this.formsService
        .Delete(lookup, id)
        .subscribe(
        data => {
          this._router.navigate(['/lookup/lists/' + this.lookup]);
        });
 }
}
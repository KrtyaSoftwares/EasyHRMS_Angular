import { Component, OnInit } from '@angular/core';
import { WorkFlowService } from './../../../../core/services/workflow/workflow.service';
import { FormsService } from './../../../../core/services/forms/forms.service';

import { PagerService } from '../../../../core/services/common/pager.service';
import { Message } from 'primeng/primeng';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';

import { InputSwitchModule } from 'primeng/primeng';

@Component({
  selector: 'app-workflows',
  templateUrl: './workflows.component.html',
})
export class WorkflowsComponent implements OnInit {
    _workflowList: any = [];
    msgs: Message[] = [];
    // pager object
    pager: any = {};
    // paged items
    pagedItems: any[];

    _formResults: any = [];
    constructor(private _workflowService: WorkFlowService,
        private _formsService: FormsService,
        private pagerService: PagerService,
        private confirmationService: ConfirmationService) { }

    ngOnInit() {
        this.GetAllWorkFlow();
    }

    GetAllWorkFlow() {
        this._workflowService
            .GetAll()
            .subscribe(
            data => {
                //console.log(data.list);
                this._workflowList = data.list;
                //initialize to page 1
                this.setPage(1);
                this.getFormname();
            });
    }

    getFormname() {

        this._workflowList.forEach((element: any) => {
            let formId = element.formName;
            this._formsService
                .GetSingle(formId)
                .subscribe(
                data => {
                    this._formResults = data;
                    element.custom_formName = this._formResults['objForms']['formName'];
                });
        });
        //initialize to page 1
        this.setPage(1);
    }

    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this._workflowList.length, page);
        // get current page of items
        this.pagedItems = this._workflowList.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

    changeStatus(event: any, id: number) {
        this._workflowService
            .ChangeWorkflowStatus(id, event)
            .subscribe(
            data => {
            });
    }


}

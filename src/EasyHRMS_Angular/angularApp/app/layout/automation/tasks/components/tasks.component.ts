import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from './../../../../core/services/tasks/task.service';

import { PagerService } from '../../../../core/services/common/pager.service';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
})
export class TasksComponent implements OnInit {

    _taskList: any = [];
    msgs: Message[] = [];
    // pager object
    pager: any = {};
    // paged items
    pagedItems: any[];
    constructor(private _taskService: TaskService, private pagerService: PagerService) { }

  ngOnInit() {
      this.GetAlltask();
  }

  GetAlltask() {
      this._taskService
          .GetAllTasks()
          .subscribe(
          data => {
              //console.log(data.list);
              this._taskList = data.list;
              //initialize to page 1
              this.setPage(1);
          });
  }

  deleteTask(id: number) {
      this._taskService
          .DeleteTask(id)
          .subscribe(
          data => {
              this.msgs = [];
              this.msgs.push({ severity: 'warn', summary: 'Insert Message', detail: 'Task Template has been Deleted Successfully!!!' });
              this.GetAlltask();
          });
  }

  setPage(page: number) {
      if (page < 1 || page > this.pager.totalPages) {
          return;
      }
      // get pager object from service
      this.pager = this.pagerService.getPager(this._taskList.length, page);
      // get current page of items
      this.pagedItems = this._taskList.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}

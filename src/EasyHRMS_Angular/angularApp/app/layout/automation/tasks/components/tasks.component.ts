import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from './../../../../core/services/tasks/task.service';

import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
})
export class TasksComponent implements OnInit {

    _taskList: any = [];
    msgs: Message[] = [];

    constructor(private _taskService: TaskService) { }

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

}

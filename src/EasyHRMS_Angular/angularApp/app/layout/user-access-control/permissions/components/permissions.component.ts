import { Component, OnInit } from '@angular/core';
import {Message} from 'primeng/primeng';

import { FormComponent  } from './form/form.component';
import { GlobalComponent } from './global/global.component';
import { AdminOperationsComponent } from './admin-operations/admin-operations.component';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
})
export class PermissionsComponent implements OnInit {
   msgs: Message[];
   constructor() { }
    ngOnInit() {
    }

  onTabChange(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Tab Expanded', detail: 'Index: ' + event.index});
    }
}

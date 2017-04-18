import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-custom-heading',
    templateUrl: './custom-heading.component.html',
})
export class CustomHeadingComponent implements OnInit {

    @Input() heading: string;

    constructor() { }

    ngOnInit() {
    }

}

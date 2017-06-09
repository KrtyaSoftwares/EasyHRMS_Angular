import { Component, OnInit } from '@angular/core';
import {
    ReactiveFormsModule,
    FormGroup,
    FormArray,
    FormBuilder,
    Validators
} from '@angular/forms';
import { Message } from 'primeng/primeng';

import {
    Router,
    ActivatedRoute
} from '@angular/router';


import { UserLoginService } from '../../core/services/user-login/userlogin.service';

import { UserLoginModel } from '../../models/userlogin/userlogin.model';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
    userLoginForm: FormGroup;
    _UserLoginModel = new UserLoginModel();
    public submitted: boolean;
    public token: string;
    msgs: Message[] = [];
    Invalid = false;
    constructor(private _userLoginService: UserLoginService,
        fb: FormBuilder,
        private _router: Router) {
        this.userLoginForm = fb.group({
            'email': [this._UserLoginModel.email, Validators.required],
            'password': [this._UserLoginModel.password, Validators.required],
            'rememberMe': [this._UserLoginModel.rememberMe]
        });
    }

    ngOnInit() {
    }

    onSubmit(value: any, isValid: boolean) {
        this.submitted = true;
        if (isValid == false) {
            //this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
            return false;
        }

        this._userLoginService.Login(this._UserLoginModel)
            .subscribe(
            data => {
                if (data == false) {
                    this.Invalid = true;
                } else {
                    this.Invalid = false;
                    this._router.navigate(['/selfservice/dashboard']);
                }
                //if (data.state == '-1') {
                //    this.Invalid = true;
                //} else {
                //    this.Invalid = false;
                //    if (data.state == '1') {
                //        this.token = data.data.accessToken;
                //        if (this.token) {
                //            localStorage.setItem('currentUser', JSON.stringify({ username: this._UserLoginModel.email, token: this.token }));
                //        }
                //        this._router.navigate(['/dashboard']);
                //    }
                //    //this._router.navigate(['/selfservice/dashboard']);
                //}
                this.submitted = false;
                this.userLoginForm.reset();
            }, response => {
                if (response.status == 404) {
                    console.log('execution failed');
                    return false;
                }
            });
    }
}

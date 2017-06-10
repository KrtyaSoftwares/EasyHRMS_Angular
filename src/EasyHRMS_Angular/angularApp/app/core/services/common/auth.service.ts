import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Message } from 'primeng/primeng';

@Injectable()
export class AuthService {

    auth_email: string;
    auth_token: string;
    auth_role: string[];
    auth_id: string;
    //customer_servicer_id: string;
    // store the URL so we can redirect after logging in
    redirectUrl: string;
    currentUser: any;
    private headers: Headers;

    msgs: Message[] = [];

    constructor(
        private http: Http,
        public router: Router
    ) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    login( user: any ) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.auth_email = user.username;
        this.auth_token = user.token;
        //this.auth_role = user.role;
        //this.auth_id = user._id;
    }

    loginStore() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.auth_email = this.currentUser.username;
        this.auth_token = this.currentUser.token;
        this.auth_role = this.currentUser.roleList;
        this.auth_id = this.currentUser.userId;
    }

    isLoggedIn() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (this.currentUser) {
            //this.setBodyClass();
            return true;
        } else {
            return false
        };
    }

    //setBodyClass() {
    //    var bodytag = document.getElementsByTagName('body')[0];
    //    bodytag.removeAttribute("class");
    //    bodytag.setAttribute('class', "body-gray");
    //}

    //removeBodyClass() {
    //    var bodytag = document.getElementsByTagName('body')[0];
    //    bodytag.removeAttribute("class");
    //    bodytag.setAttribute('class', "body-gray body-pdt60");
    //}

    getLoginUser() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.auth_email = this.currentUser.username;
        this.auth_token = this.currentUser.token;
        this.auth_role = this.currentUser.roleList;
        this.auth_id = this.currentUser.userId;
        return this.currentUser;

    }
    //getUserProfile(user_data) {
    //    this.customer_servicer_id = user_data._id;
    //}

    logout(): void {
        //this.removeBodyClass();
        localStorage.removeItem('currentUser');
        this.auth_email = '';
        this.auth_token = '';
        this.auth_role = [];
        this.auth_id = '';
        //this.customer_servicer_id = '';
    }

    authPost(url: string, body: any): Observable<any> {
        //let headers = this.initAuthHeaders();
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        if (JSON.parse(localStorage.getItem('currentUser')) != null) {
            this.auth_token = JSON.parse(localStorage.getItem('currentUser')).token;
            this.headers.append('Authorization', 'Bearer ' + this.auth_token);
        }
        return this.http.post(url, body, { headers: this.headers }).map(response => {
            if (response.status == 200) {
                return response.json();
            } else if (response.status == 401) {
                let res = response.json();
                res.error = '1';
                res.msg = 'User is UnAthorised';
                return res;
                //this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'User is not Valid' });
            }
        }).catch(e => {
            if (e.status === 401) {
                //console.log(e);
                this.router.navigateByUrl('/login');
                //this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'User is not Valid' });
                return Observable.throw('Unauthorized');
            }
        });
        //return this.http.post(url, body, { headers: headers }).toPromise()
        //    .then(response => response.json() as RequestResult)
        //    .catch(this.handleError);
    }

    authGet(url: string): Observable<any> {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        if (JSON.parse(localStorage.getItem('currentUser')) != null) {
            this.auth_token = JSON.parse(localStorage.getItem('currentUser')).token;
            this.headers.append('Authorization', 'Bearer ' + this.auth_token);
        }
        //console.log(this.auth_token);
        //console.log(this.headers);
        return this.http.get(url, { headers: this.headers }).map(response => {
            //console.log(response.json());
            if (response.status == 200) {
                //console.log(response.json());
                return response.json();
            } else if (response.status == 401) {
                let res = response.json();
                res.error = '1';
                res.msg = 'User is UnAthorised';
                return res;
                //this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'User is not Valid' });
            }
        }).catch(e => {
            if (e.status === 401) {
                console.log(e);
                this.router.navigateByUrl('/login');
                //this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'User is not Valid' });
                return Observable.throw('Unauthorized');
            }
        });
        //return this.http.get(url, { headers: headers }).toPromise()
        //    .then(response => response.json() as RequestResult)
        //    .catch(this.handleError);
    }
}
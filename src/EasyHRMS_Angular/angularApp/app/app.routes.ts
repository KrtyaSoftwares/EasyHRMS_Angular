import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', loadChildren: './layout/layout.module#LayoutModule' },
    //{ path: 'selfservice', loadChildren: './selfservicelayout/selfservicelayout.module#SelfServiceLayoutModule' },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'forgotpassword', loadChildren: './forgotpassword/forgotpassword.module#ForgotpasswordModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutes { }

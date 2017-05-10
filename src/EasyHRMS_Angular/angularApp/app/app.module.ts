import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Configuration } from './app.constants';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { CommonDataService } from './core/services/common/common-data.service';
 //import { HeaderComponent } from './shared';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutes,
        CoreModule.forRoot(),
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        //HeaderComponent
    ],
    providers: [CommonDataService],
    bootstrap: [AppComponent],
})
export class AppModule { }
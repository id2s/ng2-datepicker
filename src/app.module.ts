import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {AppHomeComponent} from './components/app-home';
import {NgDatepickerModule} from './ng-datepicker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        AppHomeComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        NgDatepickerModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { TestHomeComponent } from './testhome/testhome.component';
import { TestServiceComponent } from './testservice/testservice.component';

@NgModule({
    imports: [],
    exports: [HomeComponent],
    declarations: [HomeComponent, TestHomeComponent, TestServiceComponent],
    providers: [],
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatveComponent } from './datve.component';
import { DanhSachGheComponent } from './danhsachghe/danhsachghe.component';
import { GheComponent } from './ghe/ghe.component';

@NgModule({
    imports: [CommonModule],
    exports: [DatveComponent],
    declarations: [DatveComponent, DanhSachGheComponent, GheComponent],
    providers: [],
})
export class DatveModule { }

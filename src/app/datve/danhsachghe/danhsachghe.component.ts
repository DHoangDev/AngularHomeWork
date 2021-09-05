import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-dsghe',
    templateUrl: 'danhsachghe.component.html',
    styleUrls: ['danhsachghe.component.css']
})

export class DanhSachGheComponent implements OnInit {

    @Output() data = new EventEmitter();

    tongTien: number = 0;
    arrGhe: listGhe[] = []

    remove = (value: listGhe) => {
        this.data.emit(value)
    }

    constructor() { }

    ngOnInit(): void { }
}

interface listGhe {
    SoGhe: number,
    TenGhe: string,
    Gia: number,
    TrangThai: boolean,
    DangDat: boolean,
}
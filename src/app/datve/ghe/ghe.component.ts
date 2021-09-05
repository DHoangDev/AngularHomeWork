import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-ghe',
    templateUrl: 'ghe.component.html',
    styleUrls: ['ghe.component.css']
})

export class GheComponent implements OnInit {

    state: boolean = false;
    @Output() data = new EventEmitter();

    danhSachGhe: any[] = [
        { SoGhe: 1, TenGhe: "số 1", Gia: 100, TrangThai: false, DangDat: false },
        { SoGhe: 2, TenGhe: "số 2", Gia: 100, TrangThai: false, DangDat: false },
        { SoGhe: 3, TenGhe: "số 3", Gia: 100, TrangThai: false, DangDat: false },
        { SoGhe: 4, TenGhe: "số 4", Gia: 100, TrangThai: false, DangDat: false },
        { SoGhe: 5, TenGhe: "số 5", Gia: 100, TrangThai: false, DangDat: false },
        { SoGhe: 6, TenGhe: "số 6", Gia: 100, TrangThai: false, DangDat: false },
        { SoGhe: 7, TenGhe: "số 7", Gia: 100, TrangThai: false, DangDat: false },
        { SoGhe: 8, TenGhe: "số 8", Gia: 100, TrangThai: false, DangDat: false },
        { SoGhe: 9, TenGhe: "số 9", Gia: 100, TrangThai: false, DangDat: false },
        { SoGhe: 10, TenGhe: "số 10", Gia: 100, TrangThai: false, DangDat: false },
        { SoGhe: 11, TenGhe: "số 11", Gia: 100, TrangThai: false, DangDat: false },
        { SoGhe: 12, TenGhe: "số 12", Gia: 100, TrangThai: false, DangDat: false },
        { SoGhe: 13, TenGhe: "số 13", Gia: 100, TrangThai: false, DangDat: false },
        { SoGhe: 14, TenGhe: "số 14", Gia: 100, TrangThai: false, DangDat: false },
        { SoGhe: 15, TenGhe: "số 15", Gia: 100, TrangThai: false, DangDat: false },
        { SoGhe: 16, TenGhe: "số 16", Gia: 100, TrangThai: false, DangDat: false },
        { SoGhe: 17, TenGhe: "số 17", Gia: 100, TrangThai: false, DangDat: false },
        { SoGhe: 18, TenGhe: "số 18", Gia: 100, TrangThai: false, DangDat: false },
        { SoGhe: 19, TenGhe: "số 19", Gia: 100, TrangThai: false, DangDat: false },
        { SoGhe: 20, TenGhe: "số 20", Gia: 100, TrangThai: false, DangDat: false },
        { SoGhe: 21, TenGhe: "số 21", Gia: 100, TrangThai: false, DangDat: false },
        { SoGhe: 22, TenGhe: "số 22", Gia: 100, TrangThai: false, DangDat: false },
        { SoGhe: 23, TenGhe: "số 23", Gia: 100, TrangThai: false, DangDat: false },
        { SoGhe: 24, TenGhe: "số 24", Gia: 100, TrangThai: false, DangDat: false },
        { SoGhe: 25, TenGhe: "số 25", Gia: 100, TrangThai: false, DangDat: false },
        { SoGhe: 26, TenGhe: "số 26", Gia: 100, TrangThai: false, DangDat: false },
        { SoGhe: 27, TenGhe: "số 27", Gia: 100, TrangThai: false, DangDat: false },
        { SoGhe: 28, TenGhe: "số 28", Gia: 100, TrangThai: false, DangDat: false },
        { SoGhe: 29, TenGhe: "số 29", Gia: 100, TrangThai: false, DangDat: false },
        { SoGhe: 30, TenGhe: "số 30", Gia: 100, TrangThai: true, DangDat: false },
        { SoGhe: 31, TenGhe: "số 31", Gia: 100, TrangThai: false, DangDat: false },
        { SoGhe: 32, TenGhe: "số 32", Gia: 100, TrangThai: false, DangDat: false },
        { SoGhe: 33, TenGhe: "số 33", Gia: 100, TrangThai: false, DangDat: false },
        { SoGhe: 34, TenGhe: "số 34", Gia: 100, TrangThai: false, DangDat: false },
        { SoGhe: 35, TenGhe: "số 35", Gia: 100, TrangThai: false, DangDat: false },
        { SoGhe: 36, TenGhe: "số 36", Gia: 100, TrangThai: true, DangDat: false },
    ]

    datGhe = (value: listGhe) => {
        let danhSachGheUpdate = [...this.danhSachGhe];
        let gheDat = danhSachGheUpdate.findIndex(item => item.SoGhe === Number(value.SoGhe));
        if (gheDat !== -1) {
            if (danhSachGheUpdate[gheDat].DangDat === true) {
                let newObject = { ...danhSachGheUpdate[gheDat], DangDat: false };
                danhSachGheUpdate[gheDat] = newObject;
                this.danhSachGhe = danhSachGheUpdate;
            }
            else {
                let newObject = { ...danhSachGheUpdate[gheDat], DangDat: true };
                danhSachGheUpdate[gheDat] = newObject;
                this.danhSachGhe = danhSachGheUpdate;
            }
        }
        this.data.emit(value)
    }

    constructor() { }

    ngOnInit() { }
}

interface listGhe {
    SoGhe: number,
    TenGhe: string,
    Gia: number,
    TrangThai: boolean,
    DangDat: boolean
}
import { Component, OnInit, ViewChild } from '@angular/core';

import { DanhSachGheComponent } from './danhsachghe/danhsachghe.component';
import { GheComponent } from './ghe/ghe.component';

@Component({
  selector: 'app-datve',
  templateUrl: './datve.component.html',
  styleUrls: ['./datve.component.css']
})
export class DatveComponent implements OnInit {

  @ViewChild('tagDanhSachGhe') tagDanhSachGhe!: DanhSachGheComponent;
  @ViewChild('tagGhe') tagGhe!: GheComponent;

  danhSachGheDangDat: listGhe[] = [];

  datVe = (value: listGhe) => {
    let Tien = 0;
    let gheDangDatUpdate = [...this.danhSachGheDangDat];
    let gheDangDat = gheDangDatUpdate.findIndex(item => item.SoGhe === value.SoGhe);
    if (gheDangDat !== -1) { gheDangDatUpdate.splice(gheDangDat, 1); }
    else {
      gheDangDatUpdate.push(value)
    }
    this.danhSachGheDangDat = gheDangDatUpdate;
    for (let index = 0; index < this.danhSachGheDangDat.length; index++) {
      let element = this.danhSachGheDangDat[index].Gia;
      Tien += element;
    }
    this.tagDanhSachGhe.arrGhe = this.danhSachGheDangDat;
    this.tagDanhSachGhe.tongTien = Tien;
  }

  huyVe = (value: listGhe) => {
    this.tagGhe.datGhe(value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}

interface listGhe {
  SoGhe: number,
  TenGhe: string,
  Gia: number,
  TrangThai: boolean,
  DangDat: boolean,
}
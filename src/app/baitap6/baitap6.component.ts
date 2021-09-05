import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap6',
  templateUrl: './baitap6.component.html',
  styleUrls: ['./baitap6.component.css']
})
export class Baitap6Component implements OnInit {

  arrProduct: Product[] = [
    { id: 1, maSP: "DT", tenSP: "Điện Thoại", gia: 100000 },
    { id: 2, maSP: "LT", tenSP: "Laptop", gia: 100000 },
    { id: 3, maSP: "MTB", tenSP: "Máy Tính Bảng", gia: 100000 }
  ]

  addItem = (ma: string, ten: string, gia: string) => {
    var item = { id: this.arrProduct.length + 1, maSP: ma, tenSP: ten, gia: Number(gia) }
    this.arrProduct.push(item);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

interface Product {
  id: number,
  maSP: string,
  tenSP: string,
  gia: number
}
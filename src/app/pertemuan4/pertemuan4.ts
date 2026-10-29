import { Component } from '@angular/core';

interface Mahasiswa {
  nim: string;
  namaLengkap: string;
  ipk: number;
}

@Component({
  imports: [],
  selector: 'app-pertemuan4',
  styleUrl: './pertemuan4.css',
  templateUrl: './pertemuan4.html',
})
export class Pertemuan4 {
  nim: string = '100010481';
  namaLengkap: string = 'Made Subali';
  umur: number = 35;
  isStatusMenikah = false;

  dataNilaiSiswa: number[] = [80, 75, 80.5, 95, 100];

  dataMahasiswa: Mahasiswa[] = [
    {nim: "001", namaLengkap: "Joni", ipk: 3}
  ];

  x: number | string = "";

  jk: 'F' | 'M' = 'F';

  tes(): void {
    let jk = this.jk;

    this.isStatusMenikah = true;

    const namaLengkap: string = this.dataMahasiswa[0].namaLengkap;

    if(this.isStatusMenikah) {
      alert("Anda Sudah Menikah")
    } else {
      alert("Anda Belum Menikah")
    }

    let statusMenikah = this.isStatusMenikah ? "Anda Sudah Menikah" : "Anda Belum Menikah";

    console.log(statusMenikah);

    switch(this.jk) {
      case 'F': console.log('Female'); break;
      case 'M': console.log('Male'); break;
    }

    for(let i = 0; i < 10; i++) {
      console.log(i+1);
    }

    for(let item of this.dataNilaiSiswa) {
      console.log(item)
    }
  }

  calculateTotal(price: number, qty: number): number {
    return price * qty;
  }

  tes2(): void {
    console.log('Tes 1');
    setTimeout(() => console.log('Tes 2'), 5000);
    console.log('Tes 3');

    setInterval(() => {
      console.log("Hello")
    }, 1000);
  }
}

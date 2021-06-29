import { Component, OnInit } from '@angular/core';
import { Fatura } from 'src/app/fatura';
import { FaturaService } from 'src/app/fatura.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  faturas: Fatura[] = []

  constructor(private faturaService: FaturaService) { }

  ngOnInit(): void {
  }

  getCustomer(x) {
    this.faturaService.getById(x.target.value).subscribe(
      data => this.faturas = data
    )
  }

  loadData() {
    this.faturaService.get().subscribe(
      data => this.faturas = data
    )
  }

  deleteFatura(faturaId: number) {
    this.faturaService.delete(faturaId).subscribe(
      () => this.loadData()
    )
  }

}

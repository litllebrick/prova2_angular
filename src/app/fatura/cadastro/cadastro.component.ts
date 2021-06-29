import { Component, OnInit } from '@angular/core';
import { Fatura } from 'src/app/fatura';
import { FaturaService } from 'src/app/fatura.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  newFatura: Fatura = {} as Fatura

  constructor(private faturaService: FaturaService) {}

  ngOnInit() {
  }

  save(myForm: any) {
    this.faturaService.post(this.newFatura).subscribe(
      () => {
        myForm.reset()
        this.newFatura = {} as Fatura
      }
    )
  }

  
}

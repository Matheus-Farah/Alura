import { Transferencia } from './../../models/transferencia.model';
import { TransferenciaService } from './../../services/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {
  transferencias: any[];

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
    this.service.todasTransf().subscribe((transferencias: Transferencia[])=> {
      console.table(transferencias);
      this.transferencias = transferencias;
    });
  }

}

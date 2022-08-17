import { Transferencia } from './../../models/transferencia.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TransferenciaService } from 'src/app/services/transferencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.css']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  transferir() {
    console.log('Solicitado Nova Transferência');

    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };

    this.service.adicionarTransferencia(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },
      error => console.error(error))

  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }

  constructor(private service: TransferenciaService, private router: Router) { }

  ngOnInit(): void {
  }

}

import { NovoUsuarioService } from './novo-usuario.service';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private NovoUsuarioService: NovoUsuarioService) { }

  usuarioJaExiste() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((nomeUsuario) => this.NovoUsuarioService.verficaUsuarioExistente(nomeUsuario)),
        map((usuarioExiste) => (usuarioExiste ? { usuarioExistente: true } : null)),
        first()
      );
    };
  }
}

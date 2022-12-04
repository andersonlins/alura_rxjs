import { Acao, AcoesAPI } from './modelo/acoes';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pluck, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AcoesService {
  constructor(private httpClient: HttpClient) {}

  getAcoes(valor?: string) {
    const params = valor ? new HttpParams().append('valor', valor) : undefined;
    return this.httpClient.get<AcoesAPI>('http://localhost:3000/acoes', { params }).pipe(
      tap((api) => console.log("api", api)),
      pluck('payload'),
      map((acoes) =>
        acoes.sort((itemA, itemB) => {
          return this.ordenaPorCodigo(itemA, itemB);
        })
      )
    );
  }

  private ordenaPorCodigo(itemA: Acao, itemB: Acao) {
    if (itemA.codigo > itemB.codigo) return 1;
    if (itemB.codigo > itemA.codigo) return -1;
    if (itemA.codigo === itemB.codigo) return 0;
  }
}

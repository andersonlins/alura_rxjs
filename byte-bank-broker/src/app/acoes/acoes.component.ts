import { AcoesService } from './acoes.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { distinctUntilChanged, filter, switchMap, tap } from 'rxjs/operators';
import { merge } from 'rxjs';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent {
  acoesInput = new FormControl();
  todaAcao$ = this.acoesService.getAcoes();
  filtroAcao$ = this.acoesInput.valueChanges.pipe(
    filter((inputValue) => inputValue.length >= 3 || !inputValue.length),
    distinctUntilChanged(),
    switchMap((inputValue) => this.acoesService.getAcoes(inputValue))
  );
  acoes$ = merge(this.todaAcao$, this.filtroAcao$);
  constructor(private acoesService: AcoesService) {}
}

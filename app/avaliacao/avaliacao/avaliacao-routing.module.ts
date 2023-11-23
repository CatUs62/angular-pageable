import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AVALIACAO_ROUTES } from './avaliacao.routes';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(AVALIACAO_ROUTES)],
  exports: [RouterModule]
})
export class AvaliacaoRoutingModule { }

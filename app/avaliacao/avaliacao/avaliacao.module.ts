import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { AvaliacaoRoutingModule } from './avaliacao-routing.module';
import { ListarComponent } from './listar/listar.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ListarComponent
  ],
  imports: [
    CommonModule,
    AvaliacaoRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
  ]
})
export class AvaliacaoModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao/avaliacao.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvaliacaoRoutingModule } from './avaliacao/avaliacao/avaliacao-routing.module';
import { AvaliacaoModule } from './avaliacao/avaliacao/avaliacao.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AvaliacaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AvaliacaoRoutingModule,
    AvaliacaoModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

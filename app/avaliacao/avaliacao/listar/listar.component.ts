import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { MatTableDataSource } from '@angular/material/table';
import { Avaliacao } from '../dtos/IAvaliacao';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit, AfterViewInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  avaliacoes: Avaliacao[] = [];

  displayedColumns: string[] = ["id", "periodo", "dataInicio", "dataFim"];
  dataSource: MatTableDataSource<Avaliacao> = new MatTableDataSource<Avaliacao>(this.avaliacoes);

  constructor(private avaliacaoService: ServiceService){
    
  }

  listarAvaliacao(size: number): void{
    this.avaliacaoService.listar(size).subscribe(data => this.dataSource.data = data);
  }

  ngOnInit(): void {
    this.listarAvaliacao(1000);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.paginator.page.subscribe(page => {
      this.listarAvaliacao(1000);
    })
  }
}

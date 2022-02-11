import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SchnittService } from '../schnitt.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

export interface Spieler {
  dataId: string;
  name: string;
  club: string;
  hSchnitt: number;
  hSpiele: number;
  aSchnitt: number;
  aSpiele: number;
  gSchnitt: number;
  gSpiele: number;
  bestleistung: number;

}

@Component({
  selector: 'app-schnitt-table',
  templateUrl: './schnitt-table.component.html',
  styleUrls: ['./schnitt-table.component.css']
})
  //, AfterViewInit
export class SchnittTableComponent implements OnInit {

  displayedColumns = ['name', 'club', 'hSpiele', 'hSchnitt', 'aSpiele', 'aSchnitt', 'gSpiele', 'gSchnitt', 'bestleistung'];
  dataSource!: MatTableDataSource<Spieler>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: SchnittService) { }

  ngOnInit(): void {
    this.service.getSpielerData().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  //ngAfterViewInit() {
  //  //this.dataSource.paginator = this.paginator;
  //  this.dataSource.sort = this.sort;
  //}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

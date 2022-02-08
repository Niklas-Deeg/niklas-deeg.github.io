import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SchnittService} from '../schnitt.service'

@Component({
  selector: 'app-schnitt-table',
  templateUrl: './schnitt-table.component.html',
  styleUrls: ['./schnitt-table.component.css']
})
export class SchnittTableComponent implements OnInit {

  displayedColumns = [];


  constructor(private service: SchnittService) { }

  ngOnInit(): void {
    this.service.getSpielerData().subscribe((response) => {
      console.log('response is ', response);
    })
  }

}

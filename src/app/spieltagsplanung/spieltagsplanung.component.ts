import { Component, OnInit } from '@angular/core';
import { SchnittService } from '../schnitt.service';

export interface UserData {
  userId: number,
  displayName: string,
  username: string,
  password: string
}

@Component({
  selector: 'app-spieltagsplanung',
  templateUrl: './spieltagsplanung.component.html',
  styleUrls: ['./spieltagsplanung.component.css']
})
export class SpieltagsplanungComponent implements OnInit {

  constructor(private service: SchnittService) { }

  ngOnInit(): void {
    this.service.getUserData().subscribe((response: any) => {
      console.log(response);
    });
  }

}

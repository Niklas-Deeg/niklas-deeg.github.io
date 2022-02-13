import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  /** Based on the screen size, switch from standard to one column per row */
  //cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //  map(({ matches }) => {
  //    if (matches) {
  //      return [
  //        { title: 'Card 1', cols: 1, rows: 1 },
  //        { title: 'Card 2', cols: 1, rows: 1 },
  //        { title: 'Card 3', cols: 1, rows: 1 },
  //        { title: 'Card 4', cols: 1, rows: 1 }
  //      ];
  //    }

  //    return [
  //      { title: 'Card 1', cols: 2, rows: 1 },
  //      { title: 'Card 2', cols: 1, rows: 1 },
  //      { title: 'Card 3', cols: 1, rows: 2 },
  //      { title: 'Card 4', cols: 1, rows: 1 }
  //    ];
  //  })
  //);

  constructor(private breakpointObserver: BreakpointObserver) { }

  cardColumns$: number;
  isSmallScreen$: Observable<boolean>;

  //ngOnInit() {
  
  //}

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 992px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.cardColumns$ = 2;
          //console.log('Viewport width is 992px or greater!');
        } else {
          this.cardColumns$ = 1;
          //console.log('Viewport width is less than 992px!');
        }
      });

    //this.breakpointObserver
    //  .observe(['(min-width: 550px)'])
    //  .subscribe((state: BreakpointState) => {
    //    if (state.matches) {
    //      //this.cardColumns$ = 2;
    //    } else {
    //      //this.cardColumns$ = 1;
    //    }
    //  });

      this.isSmallScreen$ = this.breakpointObserver
      .observe(['(max-width: 550px)'])
      .pipe(map(({ matches }) => matches));
  }

}

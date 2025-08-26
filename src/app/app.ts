import { Component, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  sideMode: 'side' | 'over' = 'side';
  opened = true;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe(result => {
        if (result.matches) {
          this.sideMode = 'over';
          this.opened = false;
        } else {
          this.sideMode = 'side';
          this.opened = true;
        }
      });
  }

  closeIfOver() {
    if (this.sideMode === 'over') {
      this.opened = false;
    }
  }

}

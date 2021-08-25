import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-sidenav-toggle-buttons',
  templateUrl: './sidenav-toggle-buttons.component.html',
  styleUrls: ['./sidenav-toggle-buttons.component.scss'],
})
export class SidenavToggleButtonsComponent implements OnInit {
  public selectedVal = '';
  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.firstChild?.url
      .pipe(take(1))
      .subscribe(
        (currUrl: UrlSegment[]) => (this.selectedVal = currUrl[0].path)
      );
  }

  public onValChange(val: string) {
    let searchstring = 'bugtracker/' + val.trim();
    this.router.navigate([searchstring]);
  }
}

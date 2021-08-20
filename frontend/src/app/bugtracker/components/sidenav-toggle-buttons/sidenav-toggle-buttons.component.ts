import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-toggle-buttons',
  templateUrl: './sidenav-toggle-buttons.component.html',
  styleUrls: ['./sidenav-toggle-buttons.component.scss']
})
export class SidenavToggleButtonsComponent implements OnInit {

  public selectedVal: string;
  constructor(private router: Router) { this.selectedVal = 'user' }

  ngOnInit() { }

  public onValChange(val: string) {
    let searchstring = 'bugtracker/' + val.trim()
    console.log(searchstring)
    this.router.navigate([searchstring])
  }

  //  <mat-button-toggle-group #group="matButtonToggleGroup" [value]="selectedVal" (change)="onValChange(group.value)" >

}

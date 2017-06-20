import { Component, OnInit } from '@angular/core';

import { WeekplanlistComponent } from '../weekplanlist/weekplanlist.component';
import { WeekplantoolbarComponent } from '../weekplantoolbar/weekplantoolbar.component';
import { WeekplanpagingComponent } from '../weekplanpaging/weekplanpaging.component';

@Component({
  selector: 'app-weekplancard',
  templateUrl: './weekplancard.component.html',
  styleUrls: ['./weekplancard.component.css']
})
export class WeekplancardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

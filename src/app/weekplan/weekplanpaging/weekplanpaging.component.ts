import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-weekplanpaging',
  templateUrl: './weekplanpaging.component.html',
  styleUrls: ['./weekplanpaging.component.css']
})
export class WeekplanpagingComponent implements OnInit {
  @Output() pageChange = new EventEmitter();
  @Input() totalItems: number;
  @Input() currentPage: number;
  @Input() itemsPerPage: number;
  previousText = '上一页';
  nextText = '下一页';

  constructor() { }

  ngOnInit() {
  }

  public setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  public pageChanged(event: any): void {
    this.currentPage = event.page;
    // let filter: UsersFilter = { currentPage: event.page, pageSize: event.itemsPerPage };
    // this.pageChange.emit(filter);
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
    console.log(event);
  }

}

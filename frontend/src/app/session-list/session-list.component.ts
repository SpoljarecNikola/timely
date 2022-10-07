import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service'
import { NgForm } from '@angular/forms';
import { Session } from '../session';
import { SessionRequest } from '../sessionRequest';
import { NgxPaginationModule } from 'ngx-pagination/public-api';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {

  fileName = 'TimelySession.xlsx';

  sessions!: Session[];

  sessionToUpdate: SessionRequest = { 
    id: "",
    name: "",
    start: "",
    end: ""
  };

  pomStart: any;
  pomStop: any;
  duration: any;

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20];


  constructor(private sessionService: SessionService) {
  }

  ngOnInit() {
    this.sessionService.findAll().subscribe(data => {
      this.sessions = data;
      this.sessions.forEach((element) => {
        this.pomStart = new Date(element.start);
        this.pomStop = new Date(element.end);
        element.duration = (this.pomStop - this.pomStart) - 3600000;
      });
    });
  }

  deleteSession(id: any) {
    this.sessionService.deleteSession(id).subscribe(
      ()=> {
        this.ngOnInit();
    });
  }

  edit(session: SessionRequest){
    this.sessionToUpdate.id=session.id;
    this.sessionToUpdate.name=session.name;
    this.sessionToUpdate.start=session.start;
    this.sessionToUpdate.end=session.end;
  }

  updateSession(){
    this.sessionService.updateSession(this.sessionToUpdate).subscribe(
      ()=> {
        this.ngOnInit();
    });
  }

  onTableDataChange(event: any){
    this.page = event;
    this.ngOnInit();
  }

  onTableSizeChange(event: any): void{
    this.tableSize = event.target.value;
    this.page=1;
    this.ngOnInit();
  }

  exportToExcel(): void{
    let element = document.getElementById('tableSession');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element, {dateNF:'mm.dd.yyyy.;@'});
    ws['!cols'] = [];
    ws['!cols'][4] = { hidden: true };
    ws['!cols'][5] = { hidden: true };

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, this.fileName);
  }

}


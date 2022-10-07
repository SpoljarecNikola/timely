import { Component, OnInit, ViewChild } from '@angular/core';
import { SessionService } from '../session.service'
import { NgForm } from '@angular/forms';
import { Session } from '../session';
import {Router} from '@angular/router'
import * as bootstrap from "bootstrap";
import * as $ from "jquery";

@Component({
  selector: 'app-started-session',
  templateUrl: './started-session.component.html',
  styleUrls: ['./started-session.component.css']
})
export class StartedSessionComponent implements OnInit {

  constructor(private sessionService: SessionService, private router: Router) {
  }

  pomStart: any;
  pomStop: any;
  duration: any;
  sessionNameTemp: string = "";

  sessionStarted: Session = { 
    id: "",
    name: "",
    start: "",
    end: "",
  };

  display=false;

  ngOnInit(): void {
  }

  onPress() {
    this.display = true;
    this.pomStart = new Date();
    this.sessionStarted.start= this.pomStart.toISOString();
 }
 onPressStop(session: Session) {
    
    this.pomStop = new Date();
    this.sessionStarted.end= this.pomStop.toISOString();
    this.duration = this.pomStop-this.pomStart;
 }

  saveSession(session: Session){
    console.log(this);
    this.sessionStarted.name=this.sessionNameTemp;
    this.sessionService.save(this.sessionStarted).subscribe(
      ()=> {
        this.ngOnInit();
    });
  }

  myHide(){ 
    let name = $(".ovo").val();
    if(name){ 
      $("#exampleModalLong").hide();
      $("body").removeClass("modal-open");
      $(".modal-backdrop").hide();
      location.href="http://localhost:4200/sessions";
    } 
    }

}

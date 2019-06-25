import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-goback',
  templateUrl: './goback.component.html',
  styleUrls: ['./goback.component.scss'],
})
export class GobackComponent implements OnInit {

  constructor(private navcontroller: NavController) { }

  ngOnInit() {}

  // 后退
  goback() {
    this.navcontroller.back();
  }

}

import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  private activatedRoute = inject(ActivatedRoute);
  data: any;
  constructor() {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(
        (data: any) => {
          this.data = data;
          console.log('data:', data);
    });
  }

}

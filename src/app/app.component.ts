import { Component, OnInit } from '@angular/core';
import { CommonServicesService } from './services/common-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'FrontEnd-Practice';
  message: string;

  constructor(private _common: CommonServicesService) {}

  ngOnInit() {
    this._common.getHelloMessage().subscribe((data) => {
      this.message = data;
    });
  }
}

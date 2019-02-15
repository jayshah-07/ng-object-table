import { Component, OnInit } from '@angular/core';

import { DataService } from './services/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'object-table';
  
  data: any = {};
  constructor(private dataService: DataService){}

  ngOnInit(){
    this.dataService.getData().subscribe(
      (response) => {
        this.data = response;
        console.log("Data", this.data);
        
      }, (errorResponse: HttpErrorResponse) => {
        console.log(errorResponse.error.errors);
      }
    )
  }
}

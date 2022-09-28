import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../services/newsapi.service';

@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css']
})
export class BusinessNewsComponent implements OnInit {
//BusinessNewsData

BusNewsData:any=[]
  constructor(private api:NewsapiService) { }

  ngOnInit(): void {
    this.api.vBusNews().subscribe((result)=>{
      console.log(result.articles);
      this.BusNewsData=result.articles;
    })
  }

}

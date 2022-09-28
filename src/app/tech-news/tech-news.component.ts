import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../services/newsapi.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {
  //technewsdata
 techNewsData:any=[]
  constructor(private api:NewsapiService) { }

  ngOnInit(): void {
    this.api.vTechNews().subscribe((result)=>{
      console.log(result.articles);
      this.techNewsData=result.articles;
    })
  }

}

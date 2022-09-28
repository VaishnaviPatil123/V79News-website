import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../services/newsapi.service';

@Component({
  selector: 'app-topheadlines',
  templateUrl: './topheadlines.component.html',
  styleUrls: ['./topheadlines.component.css']
})
export class TopheadlinesComponent implements OnInit {

  constructor(private api:NewsapiService) { }
//displayheadlinesdata
topHeadlineData:any=[];
  ngOnInit(): void {
    this.api.vHeadlines().subscribe((result)=>{
      console.log(result.articles);
      this.topHeadlineData=result.articles;
    })

  }

}

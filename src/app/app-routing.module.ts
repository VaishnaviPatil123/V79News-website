import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { TopheadlinesComponent } from './topheadlines/topheadlines.component';

const routes: Routes = [
  {path:'',component:TopheadlinesComponent},
  {path:'tech',component:TechNewsComponent},
  {path:'business',component:BusinessNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

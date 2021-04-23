import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { AuthorsComponent } from './authors/authors.component';
import { NewblogsComponent } from './newblogs/newblogs.component';

const ROUTES: Routes =[
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'authors/:id/:author',component:AuthorsComponent},
  {path:'home', component: HomeComponent},
  {path:'blog', component: BlogComponent},
  {path:'about', component: AboutComponent},
  {path: '**', component: ErrorComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogComponent,
    HomeComponent,
    AuthorsComponent,
    NewblogsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

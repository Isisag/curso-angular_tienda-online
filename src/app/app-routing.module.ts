import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'***', redirectTo: "404"
  },
  {
    path:"home", redirectTo: ""
  },
  {
    path:"nosotros", component: NosotrosComponent
  },
  {
    path:"404", component: NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'}, // chemin par defaut 
  {path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent} // intercepte toute les routes (la double etoile '**') et donc faire très attention à l'ordre (mettre à la fin)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

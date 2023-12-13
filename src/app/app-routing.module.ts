import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { NotFoundComponent } from './not-found/not-found.component';

import { RegisterPagComponent } from './register-pag/register-pag.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { authGuard } from './auth.guard';
import { SinglMovieComponent } from './singl-movie/singl-movie.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [

  {path:'',redirectTo:'/login',pathMatch:'full'},
   {path:"register",component:RegisterPagComponent},
   {path:"login",component:LoginComponent},
   {path:'movies',component:MoviesComponent,canActivate:[authGuard]},
   {path:'singleMovie/:x/:y',component:SinglMovieComponent,canActivate:[authGuard]}
   ,
   {path:'tv',component:TvComponent,canActivate:[authGuard]},
   {path:'footer',component:FooterComponent},
   {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module')
    .then(m => m.SettingModule)
  },
 {path:"**",component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }

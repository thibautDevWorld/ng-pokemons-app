import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router'; 
import { PageNotFoundComponent } from './page-not-found.component';
 
// routes 
const appRoutes: Routes = [ 
 { path: '', redirectTo: 'pokemon/all', pathMatch: 'full' },
 { path: '**', component: PageNotFoundComponent }
]; 
 
@NgModule({ 
 imports: [ 
  RouterModule.forRoot(appRoutes, { enableTracing : true }) 
 ], 
 exports: [ 
  RouterModule 
 ] 
}) 
export class AppRoutingModule { }
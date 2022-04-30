import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'lazy', loadChildren: () => import('./modules/lazyloading/lazyloading.module').then(mod => mod.LazyloadingModule) },
  { path: 'user-list', component: UserListComponent },
  { path: 'user-detail', component: UserDetailComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

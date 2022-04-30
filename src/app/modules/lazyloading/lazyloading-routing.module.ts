import { HeaderFooterComponent } from './../../components/header-footer/header-footer.component';
import { ListButtonComponent } from './../../components/list-button/list-button.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomelazyComponent } from 'src/app/components/homelazy/homelazy.component';
import { UserDetailComponent } from 'src/app/components/user-detail/user-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ListButtonComponent,
  },
  {
    path: "../components/user-detail",
    component: UserDetailComponent
  },
  {
    path: "../components/header-footer",
    component:HeaderFooterComponent
  }
];

@NgModule({
  declarations: [HomelazyComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadingRoutingModule { }

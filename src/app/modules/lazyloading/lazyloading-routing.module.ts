import { ListButtonComponent } from './../../components/list-button/list-button.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from 'src/app/components/footer/footer.component';
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
  }
];

@NgModule({
  declarations: [FooterComponent, HomelazyComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadingRoutingModule { }

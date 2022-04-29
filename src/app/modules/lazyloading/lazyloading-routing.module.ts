import { ListButtonComponent } from './../../components/list-button/list-button.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { HomelazyComponent } from 'src/app/components/homelazy/homelazy.component';


const routes: Routes = [
  {
    path: '',
    component: ListButtonComponent,
  }
];

@NgModule({
  declarations: [FooterComponent, HeaderComponent, HomelazyComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadingRoutingModule { }

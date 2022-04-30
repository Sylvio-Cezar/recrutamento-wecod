import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';
import { LazyloadingModule } from './modules/lazyloading/lazyloading.module';
import { AppRoutingModule } from './app-routing.module';
import { ListButtonComponent } from './components/list-button/list-button.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { HeaderFooterComponent } from './components/header-footer/header-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ListButtonComponent,
    UserDetailComponent,
    HeaderFooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LazyloadingModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';
import { LazyloadingModule } from './modules/lazyloading/lazyloading.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
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

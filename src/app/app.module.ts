import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpInterceptorService } from './core/http/http-interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountModule } from './account/account.module';
import { CoreModule } from './core/core.module';
import {SharedModule} from './shared/shared.module'
import {AdminModule} from './admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppMaterialModule} from './app-material/app-material.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountModule,    
    AdminModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [
     {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }

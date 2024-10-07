import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AppRouting } from './app.routes'
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RateComponent } from './rate/rate.component';
import { CommonModule } from '@angular/common';
import { ReserveComponent } from './reserve/reserve.component';
import { BoxreserveComponent } from './boxreserve/boxreserve.component';


@NgModule({
  declarations: [
    AppComponent,  // Declare AppComponent here
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    RateComponent,
    ReserveComponent,
    BoxreserveComponent
  ],
  imports: [
    BrowserModule, // Use BrowserModule in the root module
    FormsModule,
    AppRouting,
    HttpClientModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent] // Bootstrap AppComponent
})
export class AppModule { }
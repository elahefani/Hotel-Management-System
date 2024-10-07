import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { HotelprofileComponent } from './hotelprofile/hotelprofile.component';
import { ShowhotelComponent } from './showhotel/showhotel.component';
import { RateComponent } from './rate/rate.component';
import { ReserveComponent } from './reserve/reserve.component';
import { BoxreserveComponent } from './boxreserve/boxreserve.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'hotelprofile', component: HotelprofileComponent },
    { path: 'showhotel', component: ShowhotelComponent },
    { path: 'rate', component: RateComponent },
    { path: 'reserve', component: ReserveComponent },
    { path: 'boxreserve', component: BoxreserveComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];



export const AppRouting = RouterModule.forRoot(routes);
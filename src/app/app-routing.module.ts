import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PhysiotherapistsComponent} from "./user-type/patient/pages/physiotherapists/physiotherapists.component";
import {PaymentsComponent} from "./user-type/patient/pages/payments/payments.component";
import {ScheduleAppointmentsComponent} from "./user-type/patient/pages/schedule-appointments/schedule-appointments.component";
import {TreatmentsComponent} from "./user-type/patient/pages/treatments/treatments.component";
import {
  MedicalAppointmentsComponent
} from "./user-type/patient/pages/medical-appointments/medical-appointments.component";
import {VideoSessionsComponent} from "./user-type/patient/pages/video-sessions/video-sessions.component";
import {
  ProfessionalProfileComponent
} from "./user-type/patient/pages/professional-profile/professional-profile.component";
import {TreatmentsInfoComponent} from "./user-type/patient/pages/treatments-info/treatments-info.component";
import {HomeComponent} from "./user-type/patient/pages/home/home.component";
import {Home2Component} from "./user-type/doctor/pages/home2/home2.component";
import {LoginComponent} from "./shared/pages/login/login.component";
import {SignupComponent} from "./shared/pages/signup/signup.component";

const routes: Routes = [
  {path:'physiotherapists', component: PhysiotherapistsComponent},
  {path:'treatments', component: TreatmentsComponent},
  {path:'treatments-info/:id', component: TreatmentsInfoComponent},
  {path:'payments', component: PaymentsComponent},
  {path:'schedule-appointments', component: ScheduleAppointmentsComponent},
  {path: 'medical-appointments', component: MedicalAppointmentsComponent},
  {path: 'video-sessions/:id', component: VideoSessionsComponent},
  {path: 'professional-profile/:id', component: ProfessionalProfileComponent},
  {path: 'home', component: HomeComponent},
  {path: 'home2', component: Home2Component},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

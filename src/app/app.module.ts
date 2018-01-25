import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListlabsPage } from "../pages/listlabs/listlabs";
import { ListpatientPage } from "../pages/listpatient/listpatient";
import { ListresultexamsPage } from "../pages/listresultexams/listresultexams";
import { ListtopicscommunityPage } from "../pages/listtopicscommunity/listtopicscommunity";
import { UtilitiesService } from "../providers/utilities.service";
import { ServiceOrderPage } from "../pages/service-order/service-order";
import { ExamsFragmentPage } from "../pages/exams-fragment/exams-fragment";
import { OrderDetailFragmentPage } from "../pages/order-detail-fragment/order-detail-fragment";
import { ProvidersFragmentPage } from "../pages/providers-fragment/providers-fragment";
import { TratamientoFragmentPage } from "../pages/tratamiento-fragment/tratamiento-fragment";
import { ExamDetailPage } from "../pages/exam-detail/exam-detail";
import { CongresosMedicosListPage } from "../pages/congresos-medicos-list/congresos-medicos-list";
import { ListchatsPage } from "../pages/listchats/listchats";
import { CongressdetailPage } from "../pages/congressdetail/congressdetail";
import { SpecialistPage } from "../pages/specialistpage/specialistpage";
import { TimeAgoPipe } from "time-ago-pipe";
import { ListpublicacionesPage } from "../pages/listpublicaciones/listpublicaciones";
import { ForumPage } from "../pages/forum/forum";
import { ListforumPage } from "../pages/listforum/listforum";
import { ListdetailforumPage } from "../pages/listdetailforum/listdetailforum";
import { ContactusPage } from "../pages/contactus/contactus";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ListlabsPage,
    ListpatientPage,
    ListresultexamsPage,
    ListtopicscommunityPage,
    ServiceOrderPage,
    ExamsFragmentPage,
    OrderDetailFragmentPage,
    ProvidersFragmentPage,
    TratamientoFragmentPage,
    ExamDetailPage,
    CongresosMedicosListPage,
    ListchatsPage,
    CongressdetailPage,
    SpecialistPage,
    TimeAgoPipe,
    ListpublicacionesPage,
    ForumPage,
    ListforumPage,
    ListdetailforumPage,
    ContactusPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ListlabsPage,
    ListpatientPage,
    ListresultexamsPage,
    ListtopicscommunityPage,
    ServiceOrderPage,
    ExamsFragmentPage,
    OrderDetailFragmentPage,
    ProvidersFragmentPage,
    TratamientoFragmentPage,
    ExamDetailPage,
    CongresosMedicosListPage,
    ListchatsPage,
    CongressdetailPage,
    SpecialistPage,
    ListpublicacionesPage,
    ForumPage,
    ListforumPage,
    ListdetailforumPage,
    ContactusPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UtilitiesService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }

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
    TratamientoFragmentPage
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
    TratamientoFragmentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UtilitiesService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }

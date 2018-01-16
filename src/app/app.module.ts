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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ListlabsPage,
    ListpatientPage,
    ListresultexamsPage,
    ListtopicscommunityPage
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
    ListtopicscommunityPage    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

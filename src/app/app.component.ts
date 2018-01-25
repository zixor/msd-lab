import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListpatientPage } from "../pages/listpatient/listpatient";
import { ListlabsPage } from "../pages/listlabs/listlabs";
import { ListtopicscommunityPage } from "../pages/listtopicscommunity/listtopicscommunity";
import { CongresosMedicosListPage } from "../pages/congresos-medicos-list/congresos-medicos-list";
import { ListchatsPage } from "../pages/listchats/listchats";
import { ContactusPage } from "../pages/contactus/contactus";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string, color:string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: "ios-analytics-outline", color: "secondary" },
      { title: 'Pacientes', component: ListpatientPage,  icon: "ios-people-outline", color: "primary" },       
      { title: 'Laboratorios', component: ListlabsPage, icon: "ios-flask-outline" , color: "warm-18" },
      { title: 'Congresos Médicos', component: CongresosMedicosListPage, icon: "ios-git-network" , color: "header" },
      { title: 'Comunidad Especialistas', component: ListtopicscommunityPage, icon: "ios-school-outline" , color: "warm-0" },
      {title: 'Contáctenos', component: ContactusPage, icon:"ios-call-outline", color:"header"}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

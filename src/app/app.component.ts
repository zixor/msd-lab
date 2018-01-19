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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'DashBoard', component: HomePage, icon: "ios-analytics" },
      { title: 'Pacientes', component: ListpatientPage,  icon: "ios-people"},       
      { title: 'Laboratorios', component: ListlabsPage, icon: "ios-flask" },
      { title: 'Congresos Médicos', component: CongresosMedicosListPage, icon: "ios-git-network" },
      { title: 'Comunidad Especialistas', component: ListchatsPage, icon: "ios-school" }
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

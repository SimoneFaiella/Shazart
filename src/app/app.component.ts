import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { PreferitiPage } from '../pages/preferiti/preferiti';
import { TabsPage } from "../pages/tabs/tabs";
import {ProfiloPage} from "../pages/profilo/profilo";
import {LastScanPage} from "../pages/last-scan/last-scan";
import {TopScanPage} from "../pages/top-scan/top-scan";
import {ScanPage} from "../pages/scan/scan";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export interface PageInterface{
  title:string;
  pageName:any;
  tabComponent?:any;
  index?:number;
  icon?:string;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  pages: PageInterface[] = [
    {title: 'Scan', pageName: ScanPage, icon: "assets/icon/pictures-icon-2.png"},
    {title: 'Profilo', pageName: TabsPage,  icon: "assets/icon/profile.png"},
    {title: 'Top scan', pageName:TopScanPage, icon:"assets/icon/iphone-gallery-icon-10.jpg"}

  ];
  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  openPage(page: PageInterface) {


      this.nav.setRoot(page.pageName);

      this.menu.close();
  }


}

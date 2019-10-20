import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

// Datepicker bootstrap module
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

// Font awesome icons module
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Angular Google Map Overlay module
import { AgmOverlays } from 'agm-overlays';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { MapComponent } from './components/map/map.component';
import { MainComponent } from './views/main/main.component';
import { LoginComponent } from './views/login/login.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { ReportsComponent } from './components/reports/reports.component';

// Angular Google Map Module
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    SideNavigationComponent,
    MapComponent,
    MainComponent,
    LoginComponent,
    FormBuilderComponent,
    ReportsComponent,
  ],
  imports: [
    ModalModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBb8WYEAxdMrklKWP8Th2UkqFNB0K5ly-c',
      libraries: ['drawing', 'visualization']
    }),
    AgmOverlays,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    AgmSnazzyInfoWindowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

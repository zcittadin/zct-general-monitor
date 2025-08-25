import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MqttModule, MqttService, IMqttServiceOptions } from 'ngx-mqtt';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './components/home/home';
import { Garden } from './components/garden/garden';
import { Pool } from './components/pool/pool';

export const MQTT_CONFIG: IMqttServiceOptions = {
  hostname: 'test.mosquitto.org',
  port: 8081,
  protocol: "wss",
  path: '/mqtt'
};

@NgModule({
  declarations: [
    App,
    Home,
    Garden,
    Pool
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    LayoutModule,
    MqttModule.forRoot(MQTT_CONFIG)
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    MqttService
  ],
  bootstrap: [App]
})
export class AppModule { }

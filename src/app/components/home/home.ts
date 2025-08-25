import { Component, OnInit, OnDestroy } from '@angular/core';
import { MqttService, IMqttMessage } from 'ngx-mqtt';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit, OnDestroy {
  receivedMessage: string = '';
  private subscription: Subscription = new Subscription;

  constructor(public mqttService: MqttService) { }

  ngOnInit(): void {
    this.subscription = this.mqttService.observe('zct_monitor/topic').subscribe((message: IMqttMessage) => {
      this.receivedMessage = message.payload.toString();
    });
  }

  publishMessage(): void {
    this.mqttService.publish('zct_monitor/topic', 'ZCT General Monitor').subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
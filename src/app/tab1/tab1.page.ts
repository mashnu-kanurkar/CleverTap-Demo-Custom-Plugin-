import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { CleverTapCustom } from 'clevertap-custom/src';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {

  constructor(private platform: Platform) {}

  ngOnInit(): void {
    if (Capacitor.isNativePlatform()) {

      CleverTapCustom.echo({value: "Custom"});
      // Register push click listener
      CleverTapCustom.addListener('onPushClicked', (data) => {
        console.log('Received from native:', data);
        alert(`Push Clicked Payload: ${JSON.stringify(data)}`);
      });
    }
  }

  // 🔹 Example method: Call from button click
  sendEvent() {
    if (!Capacitor.isNativePlatform()) return;

    CleverTapCustom.pushEvent({
      eventName: 'ClickedTabEvent',
      eventProps: {
        section: 'Tab1',
        timestamp: new Date().toISOString(),
        value: 42
      }
    }).then(() => {
      console.log('Event sent');
    }).catch(console.error);
  }

  // 🔹 User login example
  loginUser() {
    if (!Capacitor.isNativePlatform()) return;

    CleverTapCustom.onUserLogin({
      userProps: {
        Identity: '12345',
        Name: 'User Name',
        Email: 'user@example.com',
        Phone: '+911234567890',
        Gender: 'M',
        DOB: '1990-01-01'
      }
    }).then(() => {
      console.log('Login success');
    }).catch(console.error);
  }

  // 🔹 Create Notification Channel (for Android 8+)
  createChannel() {
    if (!Capacitor.isNativePlatform()) return;

    CleverTapCustom.createNotificationChannel()
      .then(() => {
        console.log('Notification channel created');
      })
      .catch(console.error);
  }
}

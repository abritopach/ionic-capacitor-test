import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Capacitor, Plugins } from '@capacitor/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  image: SafeResourceUrl;

  constructor(public navCtrl: NavController, private sanitizer: DomSanitizer) {

    console.log("Capacitor.platform: ", Capacitor.platform);
  }

  takePicture() {
    console.log("takePicture");

    const { Camera } = Plugins;

    const image = /*await*/ Camera.getPhoto({
        quality: 100,
        resultType: 'base64'
    }).then((result) => {
        console.log(result.base64_data);
        this.image = this.sanitizer.bypassSecurityTrustResourceUrl(result && result.base64_data);
    }).catch((err) => {
        console.log(err);
        console.log('Sorry pal, not going to happen');
    });
}

}

import { SwUpdate } from '@angular/service-worker';
import { Component , OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private swUpdate: SwUpdate, private translate: TranslateService) {
    translate.setDefaultLang('es');
  }

  switchLanguage(language: string) {
        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe((evt) => {
                console.log('service worker updated');
            });

            this.swUpdate.checkForUpdate().then(() => {
                // noop
            }).catch((err) => {
                console.error('error when checking for update', err);
            });
        }}

        ngOnInit(): void {
          // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
          // Add 'implements OnInit' to the class.
        }
}

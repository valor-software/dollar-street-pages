import { NgModule } from '@angular/core';

import { LoaderService } from './loader/loader.service';
import { TitleHeaderService } from './title-header/title-header.service';
import { StreetSettingsService } from './street/street.settings.service';
import { BrowserDetectionService } from './browser-detection/browser-detection.service';

@NgModule({
  providers: [
    LoaderService,
    TitleHeaderService,
    StreetSettingsService,
    BrowserDetectionService
  ]
})
export class CommonModule {
}

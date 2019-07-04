import { NgModule } from '@angular/core';

import { MainframeApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [MainframeApplicationSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [MainframeApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MainframeApplicationSharedCommonModule {}

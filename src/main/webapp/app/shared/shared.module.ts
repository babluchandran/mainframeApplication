import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MainframeApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [MainframeApplicationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [MainframeApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainframeApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: MainframeApplicationSharedModule
    };
  }
}

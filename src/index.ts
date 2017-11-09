import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FsArray } from './array.service';

export * from './array.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class FsArrayModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsArrayModule,
      providers: [FsArray]
    };
  }
}

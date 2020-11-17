import { NgModule } from '@angular/core';
import { PanelComponent } from './Panel.component';
import { BrowserModule } from '@angular/platform-browser';
import { PanelRoutingModule } from './panel-routing.module';





@NgModule({
  imports: [
    PanelRoutingModule,
  ],
  declarations: [PanelComponent],

})
export class PanelModule { }

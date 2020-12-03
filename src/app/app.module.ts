import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandMasterComponent } from './components/brand-master/brand-master.component';
import { ModelMasterComponent } from './components/model-master/model-master.component';
import { ColorMasterComponent } from './components/color-master/color-master.component';
import { ModelColorMappingComponent } from './components/model-color-mapping/model-color-mapping.component';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent,
    BrandMasterComponent,
    ModelMasterComponent,
    ColorMasterComponent,
    ModelColorMappingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardModule,
    PanelModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

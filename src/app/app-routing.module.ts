import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrandMasterComponent } from './components/brand-master/brand-master.component';
import {ModelMasterComponent } from './components/model-master/model-master.component';
import {ColorMasterComponent } from './components/color-master/color-master.component';
import {ModelColorMappingComponent } from './components/model-color-mapping/model-color-mapping.component';
const routes: Routes = [
  { path: 'brand', component: BrandMasterComponent },
  { path: 'model', component: ModelMasterComponent },
  { path: 'color', component: ColorMasterComponent },
  { path: 'colormap', component: ModelColorMappingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

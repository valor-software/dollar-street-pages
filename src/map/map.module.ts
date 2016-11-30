import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';

import { Angulartics2Module } from 'angulartics2';

import { MapComponent } from './map.component';
import { MapService } from './map.service';

@NgModule({
  declarations: [MapComponent],
  imports: [
    HttpModule,
    RouterModule,
    CommonModule,
    SharedModule,
    Angulartics2Module.forRoot()
  ],
  providers: [MapService],
  exports: []
})

export class MapModule {

}
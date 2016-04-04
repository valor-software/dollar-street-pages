import {Component, OnInit, Inject} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {HeaderWithoutSearchComponent} from '../common/headerWithoutSearch/header.component';
import {PhotographerProfileComponent} from './photographer-profile/photographer-profile.component';
import {PhotographerPlacesComponent} from './photographer-places/photographer-places.component';
import {FooterComponent} from '../common/footer/footer.component';

let tpl = require('./photographer.template.html');
let style = require('./photographer.css');

@Component({
  selector: 'photographer',
  template: tpl,
  styles: [style],
  directives: [HeaderWithoutSearchComponent, PhotographerProfileComponent, PhotographerPlacesComponent, FooterComponent]
})

export class PhotographerComponent implements OnInit {
  private title:string = 'Photographer';
  private routeParams:RouteParams;
  private photographerId:string;

  constructor(@Inject(RouteParams) routeParams) {
    this.routeParams = routeParams;
  }

  ngOnInit() {
    this.photographerId = this.routeParams.get('id');
  }
}
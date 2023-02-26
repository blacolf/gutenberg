import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchDetailPageRoutingModule } from './search-detail-routing.module';

import { SearchDetailPage } from './search-detail.page';

import { HeaderComponentModule } from '../header/header.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchDetailPageRoutingModule,
    HeaderComponentModule,
  ],
  declarations: [SearchDetailPage]
})
export class SearchDetailPageModule {}

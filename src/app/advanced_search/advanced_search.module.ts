import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdvancedSearchPage } from './advanced_search.page';
import { AdvancedSearchPageRoutingModule } from './advanced_search-routing.module';
import { HeaderComponentModule } from '../header/header.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AdvancedSearchPageRoutingModule,
    HeaderComponentModule,
  ],
  declarations: [
    AdvancedSearchPage
  ],
})
export class AdvancedSearchPageModule {}

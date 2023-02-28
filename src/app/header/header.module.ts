import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../services/api.service';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, HttpClientModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: [
    ApiService,
  ]
})
export class HeaderComponentModule {}
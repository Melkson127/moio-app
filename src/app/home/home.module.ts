import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ModalLocalComponent } from '../components/modal-local/modal-local.component';
import { HomePageRoutingModule } from './home-routing.module';
import { ModalComponent } from '../components/modal/modal.component';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ModalComponent, ModalLocalComponent]
})
export class HomePageModule {}

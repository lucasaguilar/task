import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { EventFormComponent } from './event-form/event-form.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, EventFormComponent],
  exports: [HeaderComponent, EventFormComponent],
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
})
export class ComponentsModule {}

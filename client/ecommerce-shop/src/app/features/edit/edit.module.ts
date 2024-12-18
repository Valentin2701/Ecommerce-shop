import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ]
})
export class EditModule { }

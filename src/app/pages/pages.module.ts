import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { WereComponent } from './were/were.component';



@NgModule({
  declarations: [ ProductComponent, ContactsComponent, HomeComponent, WereComponent],
  imports: [CommonModule],
  exports: [ ProductComponent, ContactsComponent, HomeComponent, WereComponent],
})
export class PagesModule {}

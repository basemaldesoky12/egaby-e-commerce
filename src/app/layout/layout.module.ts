import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViewComponent } from './view/view.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports : [
    ViewComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class LayoutModule { }

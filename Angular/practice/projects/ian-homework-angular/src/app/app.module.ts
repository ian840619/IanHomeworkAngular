import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTransferApplyFormComponent } from './data-transfer-apply-form/data-transfer-apply-form.component';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    DataTransferApplyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

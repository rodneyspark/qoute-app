import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule} from '@angular/forms';
import { QoutesComponent } from './qoutes/qoutes.component';
import { QoutesDetailsComponent } from './qoutes-details/qoutes-details.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    QoutesComponent,
    QoutesDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ArtistsComponent } from './artists/artists.component';
import { HighlightDirective } from './highlight.directive';
import { LoginComponent } from './login/login.component';
import { RegesterComponent } from './regester/regester.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ShowComponent } from './show/show.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ArtistsComponent,
    HighlightDirective,
    LoginComponent,
    RegesterComponent,
    ShowComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

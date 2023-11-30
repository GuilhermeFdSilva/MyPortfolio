import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgFor, NgIf } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';

// Providers
import { LanguagesService } from 'src/assets/services/languages/languages.service';

// Componentes
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContainerRouterComponent } from './container-router/container-router.component';
import { ProjectsComponent } from './projects/projects.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContainerRouterComponent,
    AsideMenuComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgFor,
    NgIf,
    HttpClientModule,
    // Material
    MatIconModule,
    MatDividerModule,
    MatExpansionModule,
    MatCardModule
  ],
  providers: [LanguagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

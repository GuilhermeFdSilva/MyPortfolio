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
import { MatCardModule } from '@angular/material/card';

import { MatSnackBarModule } from '@angular/material/snack-bar';

// Providers
import { DataManagerService } from './../assets/service/dataManagerService/data-manager.service';

// Componentes
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContainerRouterComponent } from './container-router/container-router.component';
import { ProjectsComponent } from './projects/projects.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { PresentationComponent } from './home/presentation/presentation.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { HeadComponent } from './projects/head/head.component';
import { ListComponent } from './projects/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerRouterComponent,
    AsideMenuComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
    DetailsComponent,
    PresentationComponent,
    CategoriesComponent,
    HeadComponent,
    ListComponent
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
    MatCardModule,
    MatSnackBarModule
  ],
  providers: [DataManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

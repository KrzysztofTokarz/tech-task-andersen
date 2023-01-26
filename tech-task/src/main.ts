/// <reference types="@angular/localize" />

import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { MatDialogModule } from '@angular/material/dialog';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(HttpClientModule, MatDialogModule)],
}).catch((err) => console.error(err));

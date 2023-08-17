import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './01-counter/counter.component';
import { CounterSnippetComponent } from './02-counterSnippet/counterSnippet.component';
import { CounterStandaloneComponent } from './03-counterStandalone/counterStandalone.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterSnippetComponent,
    CounterStandaloneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

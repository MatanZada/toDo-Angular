import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDosComponent } from './components/to-dos/to-dos.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { SearchTodoComponent } from './components/search-todo/search-todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbInputModule,
  NbButtonModule,
  NbCardModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ToDosComponent,
    ToDoComponent,
    SearchTodoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbEvaIconsModule,
    AppRoutingModule,
    NbLayoutModule,
    NbInputModule,
    NbButtonModule,
    NbCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

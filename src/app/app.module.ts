import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToDosComponent } from './components/to-dos/to-dos.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
import { FilterSearchPipe } from './Pipes/filter-search.pipe';

@NgModule({
  declarations: [
    AppComponent,

    ToDosComponent,
    ToDoComponent,
    SearchTodoComponent,
    FilterSearchPipe,
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
    FormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

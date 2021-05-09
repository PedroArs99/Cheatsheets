import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { ToDoItemComponent } from './components/to-do-item/to-do-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddToDoComponent } from './components/add-to-do/add-to-do.component';
import {FormsModule} from '@angular/forms';
import { AboutComponent } from './components/Pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ToDoItemComponent,
    HeaderComponent,
    AddToDoComponent,
    AboutComponent
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

import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { App } from './app';
// import { AppRoutingModule } from './app.routing'; //TODO: Create app.routing

import { Notes, Main } from './containers';
import { AppBar, NoteCard, NoteCreator } from './ui';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule, 
        FormsModule   
        // AppRoutingModule,
    ],
    declarations: [
        App,
        Main,
        AppBar,
        Notes,
        NoteCard,
        NoteCreator
    ],
    providers: [/* TODO: Providers go here */],
    bootstrap: [App],
})
export class AppModule { }

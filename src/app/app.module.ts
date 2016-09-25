import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { App } from './app';
// import { AppRoutingModule } from './app.routing'; //TODO: Create app.routing

import { Notes, Main } from './containers';
import { AppBar, NoteCard } from './ui';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,    
        // AppRoutingModule,
    ],
    declarations: [
        App,
        Main,
        AppBar,
        Notes,
        NoteCard
    ],
    providers: [/* TODO: Providers go here */],
    bootstrap: [App],
})
export class AppModule { }

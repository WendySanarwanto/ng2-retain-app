import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { App } from './app';
// import { AppRoutingModule } from './app.routing'; //TODO: Create app.routing

import { Notes, Main } from './containers';
import { AppBar, ColorPicker, NoteCard, NoteCreator } from './ui';

import { serviceProviders } from './services';

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
        ColorPicker,
        Notes,
        NoteCard,
        NoteCreator
    ],
    providers: [
        serviceProviders
    ],
    bootstrap: [App],
})
export class AppModule { }

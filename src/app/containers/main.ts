import { Component, OnInit } from '@angular/core';
import { Notes } from '../containers';
import { AppBar } from '../ui';

@Component({
    selector: 'main-container',
    template: `
        <div>
            <app-bar></app-bar>
            <main class="main">
                <notes-container></notes-container>
            </main>
        </div>
    `
})
export class Main implements OnInit {
    constructor() { }

    ngOnInit() { }
}
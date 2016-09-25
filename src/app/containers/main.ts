import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'main-container',
    template: `
        <div>
            <main class="main">
                content will go here
            </main>
        </div>
    `
})
export class Main implements OnInit {
    constructor() { }

    ngOnInit() { }
}
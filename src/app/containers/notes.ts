import { Component, OnInit } from '@angular/core';
import { NoteCard } from '../ui';

@Component({
    selector: 'notes-container',
    styles: [`
        .notes{
            padding-top: 50px;
        }   

        .creator{
            margin-bottom: 40px;
        }     
    `],
    template: `
        <div class="row center-xs notes">
            <div class="col-xs-6 creator">
                note creator here
            </div>
            <div class="notes col-xs-8">
                <div class="row between-xs">
                    <note-card [note]="note"></note-card>
                </div>
            </div>
        </div>
        `
})
export class Notes implements OnInit {
    note= { title: 'Chores', value: `Don't forget to clean up`, color: '#CCFF90'};

    constructor() { }

    ngOnInit() { }
}
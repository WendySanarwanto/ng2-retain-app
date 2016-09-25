import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'note-creator',
    styles: [`
        .note-creator {
            padding: 20px;
            background-color: white;
            border-radius: 3px;
        }
        .title {
            font-weight: bold;
            color: rgba(0,0,0,0.8);
        }
        .full {
            height: 100px;
        }    	    
    `],
    template: `
        <div class="note-creator shadow-2">
            <!-- <pre>{{ newNote | json }}</pre> -->
            <form class="row" (submit)="onCreateNote()" >
                <input
                    type="text"
                    [(ngModel)]="newNote.title"
                    name="newNoteTitle"
                    placeholder="Title"
                    class="col-xs-10 title"
                    *ngIf="fullform"
                >
                <input
                    type="text"
                    [(ngModel)]="newNote.value"
                    name="newNoteValue"
                    placeholder="Take a note..."
                    class="col-xs-10"
                    (focus)="toggleFullForm(true)"
                >
                <div class="actions col-xs-12 row between-xs" *ngIf="fullform">
                    <button
                    type="submit"
                    class="btn-light"                    
                    >
                    Done
                    </button>
                </div>
            </form>
        </div>        	    
    `
})
export class NoteCreator implements OnInit {
    @Output() createNote = new EventEmitter();
    newNote = { title: '', value: '' }
    fullform: boolean = false;
    constructor() { }

    ngOnInit() { }

    onCreateNote(){
        console.log(this.newNote);
        // Only trigger createNode event if title & value are not empty
        const { title, value } = this.newNote;
        if (title && value){
            this.createNote.emit({title, value});
            this.reset();
        }
    }

    reset(){
        this.newNote = { title: '', value: '' };
    }

    toggleFullForm(full:boolean){
        this.fullform = full;
    }
}
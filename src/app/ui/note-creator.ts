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
        <div class="note-creator shadow-2" [ngStyle]="{'background-color': newNote.color}">
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
                    <div col="col-xs-3">
                        <color-picker [colors]="colors"
                                (selected)="onColorSelect($event)"
                        ></color-picker>
                    </div>
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
    newNote = { title: '', value: '', color: 'white' }
    fullform: boolean = false;
    colors: Array<string> = ['#CCFF90', '#A7FFEB', '#FF8A80', '#80D8FF', '#FFD180', '#FFFF8D'];

    constructor() { }

    ngOnInit() { }
    onCreateNote(){
        console.log(this.newNote);
        // Only trigger createNode event if title & value are not empty
        const { title, value, color } = this.newNote;
        if (title && value){
            this.createNote.emit({title, value, color});
            this.reset();
        }
    }

    reset(){
        this.newNote = { title: '', value: '', color: 'white' }
    }

    toggleFullForm(full:boolean){
        this.fullform = full;
    }

    onColorSelect(color){
        this.newNote.color = color;
    }
}
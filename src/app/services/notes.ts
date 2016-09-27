import { Injectable } from '@angular/core';
import { ApiService } from './api';

@Injectable()
export class NotesService {
    path: string = '/notes';
    constructor(private _apiService: ApiService) { }

    createNote(note){
        return this._apiService.post(this.path, note)
    }

    getNotes(){
        return this._apiService.get(this.path);
    }

    completeNote(note){
        return this._apiService.delete(`${this.path}/${note.id}`);
    }
}
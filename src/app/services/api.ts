import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {
    headers: Headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });
    api_url: string = 'http://localhost:3500';
    
    constructor(private _http: Http) { }

    private getJson(response: Response){
        return response.json();
    }

    private checkError(response: Response): Response {
        if (response.status >= 200 && response.status < 300){
            return response;
        }
        
        let error = new Error(response.statusText);
        error['response'] = response;
        console.error(error);
        throw error;        
    }

    get(path: string):Observable<any> { 
        return this._http.get(`${this.api_url}${path}`, this.headers)
                .map(this.checkError)
                .catch(err=> Observable.throw(err))
                .map(this.getJson)
    }

    post(path: string, body):Observable<any> { 
        return this._http.post(
            `${this.api_url}${path}`,
            body,
            this.headers
        )
        .map(this.checkError)
        .catch(err=> Observable.throw(err))
        .map(this.getJson)
    }

    delete(path: string):Observable<any> { 
        return this._http.delete(
            `${this.api_url}${path}`,
            this.headers
        )
        .map(this.checkError)
        .catch(err=> Observable.throw(err))
        .map(this.getJson)
    }

}
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Appointment} from "../model/appointment";

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService  {

  basePath = 'http://localhost:3000/api/v1/appointments';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) {  }

  handleError(error: HttpErrorResponse){
    if(error.error instanceof Error){
      console.log(`An error occurred: ${error.error.message}`);
    }else{
      //Unsuccessful Response Error returned from Backend
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    };
    //Return Observable with Error Message to Client
    return throwError(()=> new Error('Something happened with request, please try again later'));
  }

  create(item: any): Observable<Appointment>{
    return this.http.post<Appointment>(this.basePath,JSON.stringify(item),this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));

  }
}

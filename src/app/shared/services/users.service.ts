import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Appointments} from "../model/appointments";
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";
import {catchError, Observable, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService<User> {
  endPoint = '/users';

  constructor(http: HttpClient) {
    super(http);
    this.basePath += this.endPoint;
  }



}

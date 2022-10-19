import { Injectable } from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {Physiotherapist} from "../model/physiotherapist";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PhysiotherapistsService extends BaseService<Physiotherapist>{

  //endPoint = 'http://localhost:3000/api/v1/physiotherapists'

  constructor(http:HttpClient) {
    super(http);
    this.basePath = 'http://localhost:3000/api/v1/physiotherapists'; // this.endPoint;
  }
}

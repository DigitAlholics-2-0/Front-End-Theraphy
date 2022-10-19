import { Injectable } from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {Physiotherapist} from "../model/physiotherapist";
import {HttpClient} from "@angular/common/http";
import {TreatmentPatient} from "../model/treatments_by_patient";

@Injectable({
  providedIn: 'root'
})
export class TreatmentsByPatientService extends BaseService<TreatmentPatient>{
  endPoint = '/treatments_by_patient';

  constructor(http: HttpClient) {
    super(http);
    this.basePath += this.endPoint;
  }
}

import { Component, OnInit } from '@angular/core';
import {Observable, take} from "rxjs";
import {Physiotherapist} from "../../model/physiotherapist";
import {ActivatedRoute} from "@angular/router";
import {PhysiotherapistsService} from "../../services/physiotherapists.service";
import {Treatment} from "../../model/treatment";
import {TreatmentsService} from "../../services/treatments.service";
import {TreatmentPatient} from "../../model/treatments_by_patient";
import {TreatmentsByPatientService} from "../../services/treatments-by-patient.service";
import {Appointments} from "../../../../shared/model/appointments";
import {AppointmentsService} from "../../../../shared/services/appointments.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  physiotherapists: Physiotherapist[]=[];
  treatments: Treatment[]=[];
  myTreatments: TreatmentPatient[]=[];
  appointments: Appointments[]=[];
  currentUser: number = 1;

  constructor(private physiotherapistsService: PhysiotherapistsService, private treatmentsService: TreatmentsService,
              private myTreatmentsService: TreatmentsByPatientService, private appointmentsService: AppointmentsService) { }

  ngOnInit(): void {
    this.getAllPhysiotherapists();
    this.getAllTreatments();
    this.getAllMyTreatments();
    this.getAllAppointments();
  }

  getAllAppointments(){
    this.appointmentsService.getAll().subscribe((response: any) => {
      this.appointments = response;
    })
  }

  getAllPhysiotherapists(){
    this.physiotherapistsService.getAll().subscribe((response: any) =>{
      this.physiotherapists = response;
    })
  }

  getAllTreatments(){
    this.treatmentsService.getAll().subscribe((response:any)=>{
      this.treatments = response;
    })
  }

  getAllMyTreatments(){
    this.myTreatmentsService.getAll().subscribe((response: any)=>{
      this.myTreatments = response;
    })
  }
}

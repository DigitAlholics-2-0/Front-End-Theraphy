import {Component, OnInit, ViewChild} from '@angular/core';
import {Appointment} from "../../model/appointment";
import {AppointmentsService} from "../../services/appointments.service";
import {NgForm} from "@angular/forms";
import {Observable, take} from "rxjs";
import {Physiotherapist} from "../../model/physiotherapist";
import {ActivatedRoute} from "@angular/router";
import {PhysiotherapistsService} from "../../services/physiotherapists.service";

@Component({
  selector: 'app-schedule-appointments',
  templateUrl: './schedule-appointments.component.html',
  styleUrls: ['./schedule-appointments.component.css']
})
export class ScheduleAppointmentsComponent implements OnInit {
  physiotherapist$: Observable<Physiotherapist> | undefined

  appointmentData: Appointment;

  date: string;

  //slicedate: string;





  @ViewChild('appointmentForm', {static: false})
  appointmentForm!: NgForm;


  constructor(private appointmentsService: AppointmentsService, private route:ActivatedRoute, private physiotherapistsService: PhysiotherapistsService) {
    this.appointmentData = {} as Appointment;
    this.date = "";

  }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params)=> {
      const id = params['id'];
      this.physiotherapist$ = this.physiotherapistsService.getById(id);
    })
  }

  getInputValue(inputValue:string) {
    return inputValue;
  }

  addAppointment(){
    this.appointmentData.id = 0;
    const slicedate = new Date(this.date).toLocaleString();
    //this.appointmentData.date = slicedate.slice(0,10);
    this.appointmentData.date = slicedate.split(',')[0];
    this.appointmentsService.create(this.appointmentData).subscribe((response:any) =>{
    })
  }


  onSubmit(){
    if(this.appointmentForm.form.valid){
        console.log(' about to add');
        this.addAppointment();
    }
  }

}

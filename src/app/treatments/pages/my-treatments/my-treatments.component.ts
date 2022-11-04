import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Treatment} from "../../model/treatment";
import {TreatmentsService} from "../../services/treatments.service";


@Component({
  selector: 'app-my-treatments',
  templateUrl: './my-treatments.component.html',
  styleUrls: ['./my-treatments.component.css']
})
export class MyTreatmentsComponent implements OnInit {

  treatments: Treatment[]=[];
  currentUsersTreatments: any = [1, 2, 3];

  constructor(private treatmentsService: TreatmentsService) {

  }


  ngOnInit(): void {
    this.getAllTreatments();
  }

  getAllTreatments(){
    this.treatmentsService.getAll().subscribe((response:any)=>{
      this.treatments = response;
    })
  }

}

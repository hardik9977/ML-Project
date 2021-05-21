import { Component, OnInit } from '@angular/core';
import {MissionService } from './services/mission.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  isLoading: boolean = false;
  lounches: any[];

  filterParams = {
    year : '',
    launch_success: '',
    land_success: ''
  };

  constructor(private missionService: MissionService) {}

  ngOnInit(): void {
    this.getAllMission();
  }

  getAllMission() {
    this.isLoading = true;
    this.missionService.getAllLouches().then((lounches: any[]) => {
      console.log(lounches);
      this.lounches = lounches;
      this.isLoading = false;
    }).catch((err) => {
      this.isLoading = false;
      console.log(err);
    });
  }

  filterByYear(year: string) {
    console.log(year);
    this.isLoading = true;
    this.filterParams.year = year;
    this.missionService.getLouchedByYear(this.filterParams).then((lounches: any[]) => {
      this.isLoading = false;
      this.lounches = lounches;
      console.log(lounches);
    }).catch((err) => {
      this.isLoading = false;
      console.log(err);
    });
  }

  filterByLounch(option: string) {
    this.isLoading = true;
    this.filterParams.launch_success = option;
    this.missionService.getLouchedByLouches(this.filterParams).then((lounches: any[]) => {
      console.log(lounches);
      this.isLoading = false;
      this.lounches = lounches;
    }).catch((err) => {
      console.log(err);
      this.isLoading = false;
    });
  }

  filterByLanding(option: string) {
    this.isLoading = true;
    this.filterParams.land_success = option;
    this.missionService.getLouchedByLanding(this.filterParams).then((lounches: any[]) => {
      console.log(lounches);
      this.isLoading = false;
      this.lounches = lounches;
    }).catch((err) => {
      console.log(err);
      this.isLoading = false;
    });
  }
}


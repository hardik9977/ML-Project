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
      this.lounches = lounches;
      this.isLoading = false;
    }).catch((err) => {
      this.isLoading = false;
    });
  }

  filterByYear(year: string) {
    this.isLoading = true;
    this.filterParams.year = year;
    this.missionService.getLouchedByYear(this.filterParams).then((lounches: any[]) => {
      this.isLoading = false;
      this.lounches = lounches;
    }).catch((err) => {
      this.isLoading = false;
    });
  }

  filterByLounch(option: string) {
    this.isLoading = true;
    this.filterParams.launch_success = option;
    this.missionService.getLouchedByLouches(this.filterParams).then((lounches: any[]) => {
      this.isLoading = false;
      this.lounches = lounches;
    }).catch((err) => {
      this.isLoading = false;
    });
  }

  filterByLanding(option: string) {
    this.isLoading = true;
    this.filterParams.land_success = option;
    this.missionService.getLouchedByLanding(this.filterParams).then((lounches: any[]) => {
      this.isLoading = false;
      this.lounches = lounches;
    }).catch((err) => {
      this.isLoading = false;
    });
  }
}


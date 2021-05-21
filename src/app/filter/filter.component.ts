import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  @Output() yearClick = new EventEmitter();
  @Output() lounchClick = new EventEmitter();
  @Output() landingClick = new EventEmitter();

  years: string[] = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
  ];
  options: string[] = ['True', 'False'];
  constructor() {}

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  searchByYear(year: string, event: any) {
    if (event.target.tagName !== 'P') {
      return;
    }
    if (event.target.classList.contains('active')) {
      this.yearClick.emit('');
      event.target.classList.remove('active');
    } else {
      event.target.parentElement.parentElement
        .querySelectorAll('.btn')
        .forEach((ele) => {
          ele.querySelector('p').classList.remove('active');
        });
      event.target.className = 'active';
      this.yearClick.emit(year);
    }
  }

  // tslint:disable-next-line:typedef
  searchByLaunch(option: string, event: any) {
    if (event.target.tagName !== 'P') {
      return;
    }
    if (event.target.classList.contains('active')) {
      this.lounchClick.emit('');
      event.target.classList.remove('active');
    } else {
      event.target.parentElement.parentElement
        .querySelectorAll('.btn')
        .forEach((ele) => {
          ele.querySelector('p').classList.remove('active');
        });
      event.target.className = 'active';
      this.lounchClick.emit(option);
    }
  }
  // tslint:disable-next-line:typedef
  searchByLanding(option: string, event: any) {
    if (event.target.tagName !== 'P') {
      return;
    }
    if (event.target.classList.contains('active')) {
      this.landingClick.emit('');
      event.target.classList.remove('active');
    } else {
      event.target.parentElement.parentElement
        .querySelectorAll('.btn')
        .forEach((ele) => {
          ele.querySelector('p').classList.remove('active');
        });
      event.target.className = 'active';
      this.landingClick.emit(option);
    }
  }
}

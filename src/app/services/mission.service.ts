import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';

const URL = 'https://api.spaceXdata.com/v3/launches?limit=100';

@Injectable({
  providedIn: 'root'
})

export class MissionService {
  constructor( private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getAllLouches() {
    return this.http.get(URL).toPromise();
  }

   // tslint:disable-next-line:typedef

  formParamData (filterParams) {
    // const params: {
    //   launch_year?: string,
    //   launch_success?: string,
    //   land_success?: string
    // } = {};
    let params = new HttpParams();
    if (filterParams.year !== '') {
      // params.launch_year = filterParams.year;
      params = params.set('launch_year', filterParams.year);
    }
    if (filterParams.launch_success !== '') {
      // params.launch_success = filterParams.launch_success;
      params = params.set('launch_success', filterParams.launch_success.toLocaleLowerCase());
    }
    if (filterParams.land_success !== '') {
      // params.land_success = filterParams.launch_success;
      params = params.set('land_success', filterParams.land_success.toLocaleLowerCase());
    }

    return params;
  }
  getLouchedByYear(filterParams) {
    return this.http.get(URL, { params : this.formParamData(filterParams)}).toPromise();
  }

   // tslint:disable-next-line:typedef
  getLouchedByLouches(filterParams) {
    return this.http.get(URL, { params : this.formParamData(filterParams)}).toPromise();
  }

   // tslint:disable-next-line:typedef
  getLouchedByLanding(filterParams) {
    return this.http.get(URL, { params : this.formParamData(filterParams)}).toPromise();
  }
}

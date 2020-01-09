import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http'
import { retry, catchError } from 'rxjs/operators'
import{throwError} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  post(url, data, options?) {
    if (!options) {
      options = {};
    }
    return this.http.post(url, data, options).pipe(
      retry(0), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  postToken(url, data) {
    return this.http.post(url, data).pipe(
      retry(0), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  get(url, options?) {
    if (!options) {
      options = {};
    }
    return this.http.get(url, options).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  put(url, data,options?) {
    return this.http.put(url, data,options).pipe(
      retry(0), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }
  delete(url,option?) {
    return this.http.delete(url,option).pipe(
      retry(0), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }



  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an ErrorObservable with a user-facing error message
    if (!navigator.onLine) {
      return throwError('No Internet Connection');
    }
    if (error.error && error.error.message) {
      return throwError(error.error.message);
    } else {
      // return throwError('Something bad happened; please try again later.');
      return throwError(error.error);
    }
  }
}


import { Injectable } from '@angular/core';
import { Vehicule } from "./vehicule";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, catchError, of } from 'rxjs'

@Injectable()
export class VehiculeService {

  constructor(private http:HttpClient){}
  
  getVehiculeList():Observable<Vehicule[]>{
    return this.http.get<Vehicule[]>('http://localhost:3000/vehicule').pipe(
      tap(pokemonList=>this.log(pokemonList)),
      catchError(error=>this.handleErrorValue(error,[]))
    )
  }
  
  addVehiculeList(vehicule:Vehicule):Observable<Vehicule[]>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-type':'Application/json'})
    }
    return this.http.post<Vehicule>(`http://localhost:3000/vehicule`,vehicule,httpOptions).pipe(
      tap(response=>this.log(response)),
      catchError(error=>this.handleErrorValue(error,[]))
    )
  }
  
  getVehiculeById(id:number):Observable<Vehicule>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-type':'Application/json'})
    }
    return this.http.get<Vehicule>(`http://localhost:3000/vehicule?id=${id}`,httpOptions).pipe(
      tap(response=>this.log(response)),
      catchError(error=>this.handleErrorValue(error,[]))
    )
  }
  
  private log(response:any){
    return of(response)
  }

  private handleErrorValue(error:Error,errorValue:any){
    console.log(error);
    return of(errorValue)
    
  }

}

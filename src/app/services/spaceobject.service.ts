import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ApiResult {
  bodies: Body[];
}

export interface Body {
  id: string;
  name: string;
  englishName: string;
  isPlanet: boolean;
  moons: Moon[];
  semimajorAxis: any;
  perihelion: any;
  aphelion: any;
  eccentricity: number;
  inclination: number;
  mass: Mass;
  vol: Vol;
  density: number;
  gravity: number;
  escape: number;
  meanRadius: number;
  equaRadius: number;
  polarRadius: number;
  flattening: number;
  dimension: string;
  sideralOrbit: number;
  sideralRotation: number;
  aroundPlanet: AroundPlanet;
  discoveredBy: string;
  discoveryDate: string;
  alternativeName: string;
  axialTilt: number;
  avgTemp: number;
  mainAnomaly: number;
  argPeriapsis: number;
  longAscNode: number;
  bodyType: string;
  rel: string;
}

export interface Moon {
  moon: string;
  rel: string;
}

export interface Mass {
  massValue: number;
  massExponent: number;
}

export interface Vol {
  volValue: number;
  volExponent: number;
}

export interface AroundPlanet {
  planet: string;
  rel: string;
}

@Injectable({
  providedIn: 'root'
})
export class SpaceobjectService {

  constructor(private http: HttpClient) { }

  getSpaceObjects(): Observable<ApiResult> {
    return this.http.get<ApiResult>(`${environment.baseUrl}`);
  }
 
  getSpaceObjectDetails(id: string) {
    return this.http.get(`${environment.baseUrl}/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../../shared/const';
import { CardResponse } from '../models/CardResponse.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  getCards() {
    return this.http.get<CardResponse>(URL);
  }
}

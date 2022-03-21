import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  today!: Date;

  constructor() {
    this.today = new Date();
  }
}

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  private subject = new Subject<string>();

  constructor() { }

  sendMessage(message: string) {
    this.subject.next(message)
  }

  recivedMessage(): Observable<string> {
    return this.subject.asObservable()
  }
}

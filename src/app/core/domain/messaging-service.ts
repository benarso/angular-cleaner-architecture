import {Injectable} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable, of, Subject} from 'rxjs';
import {Message} from './models/message';

@Injectable({providedIn: 'root'})
export class MessagingService {
    private subject = new Subject<Message>();

    post(message: Message) {
        this.subject.next(message);
    }

    getMessages(): Observable<Message> {
        return this.subject.asObservable();
    }
}

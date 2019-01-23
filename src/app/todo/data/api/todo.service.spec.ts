import {TestBed} from '@angular/core/testing';

import {TodoService} from './todo.service';
import {Observable} from 'rxjs';
import {Todo} from '../../domain/models/todo';

describe('TodoService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: TodoService = TestBed.get(TodoService);
        expect(service).toBeTruthy();
    });

    it('should load todos', () => {
        // Todo: Write test
    });
});

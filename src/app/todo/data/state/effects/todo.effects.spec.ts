import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TodoEffects } from './todo.effects';

describe('TodoEffects', () => {
  let actions$: Observable<any>;
  let effects: TodoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodoEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(TodoEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

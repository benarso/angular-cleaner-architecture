import {Todo} from '../../domain/models/todo';
import {Injectable} from '@angular/core';
import {Sandbox} from '../../../core/presentation/sandbox';
import {Usecase} from '../../../core/domain/usecase';
import {Observable} from 'rxjs';
import {LoadTodosUsecase} from '../../domain/usecases/load-todos';


@Injectable({
    providedIn: 'root'
})
export class TodoSandbox extends Sandbox {

    constructor(private loadTodoUsecase: LoadTodosUsecase) {
        super();
    }

    loadTodos() {
        return this.loadTodoUsecase.execute();
    }
}





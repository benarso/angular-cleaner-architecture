import {Mapper} from './mapper';
import {TodoViewmodel} from '../../viewmodels/todo-viewmodel';
import {Todo} from '../../../domain/models/todo';
import {Injectable} from '@angular/core';
import {TodoModule} from '../../../todo.module';
import {TodoPresenter} from '../todo-presenter.service';

@Injectable({
    providedIn: 'root'
})
export class TodoMapper implements Mapper<Todo, TodoViewmodel> {
    mapToModel(viewModel: TodoViewmodel): Todo {
        return {
            text: viewModel.text,
            completed: viewModel.completed,
            position: viewModel.position,
            id: viewModel.id
        };
    }

    mapToViewmodel(domainModel: Todo): TodoViewmodel {
        const viewmodel: TodoViewmodel = new TodoViewmodel();
        viewmodel.completed = domainModel.completed;
        viewmodel.text = domainModel.text;
        viewmodel.position = domainModel.position;
        viewmodel.id = domainModel.id;
        return viewmodel;
    }
}

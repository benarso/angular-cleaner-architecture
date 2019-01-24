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
        // Lazy mapping of properties... should do manual mapping
        return viewModel as unknown as Todo;
    }

    mapToViewmodel(domainModel: Todo): TodoViewmodel {
        // Lazy mapping of properties... should do manual mapping
        const viewmodel: TodoViewmodel = new TodoViewmodel();
        viewmodel.completed = domainModel.completed;
        viewmodel.text = domainModel.text;
        viewmodel.position = domainModel.position;
        return domainModel as unknown as TodoViewmodel;
    }
}

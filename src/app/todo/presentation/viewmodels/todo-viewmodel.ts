import {Editable} from '../../../core/presentation/concerns/editable';
import {ViewModel} from '../../../core/presentation/viewmodels/view-model';

export class TodoViewmodel extends ViewModel {
    text: string;
    completed: boolean;
    position: number;
    isEditing: boolean;
}


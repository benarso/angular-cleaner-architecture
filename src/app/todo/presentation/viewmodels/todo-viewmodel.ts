import {ViewModel} from '../../../core/presentation/viewmodels/view-model';

export class TodoViewmodel extends ViewModel {
    id?: string;
    text: string;
    completed: boolean;
    position: number;
    isEditing = false;
}


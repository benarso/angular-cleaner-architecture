import {EditableViewmodel} from './base/editable-viewmodel';

export class TodoViewmodel extends EditableViewmodel {
    text: string;
    completed: boolean;
    position: number;
}

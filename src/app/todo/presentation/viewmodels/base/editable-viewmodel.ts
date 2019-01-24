import {Editable} from '../traits/editable';

export class EditableViewmodel implements Editable {
    private _isEditing = false;

    set setEditing(editing) {
        this._isEditing = editing;
        if (this.isEditing) {
            this.onStartEditing();
        } else {
            this.onStopEditing();
        }
    }

    get isEditing(): boolean {
        return this._isEditing;
    }

    toggleEditing(): void {
        this.setEditing(!this.isEditing);
    }

    onStartEditing(): void {
    }

    onStopEditing(): void {
    }
}

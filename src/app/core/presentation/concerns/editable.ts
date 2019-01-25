export interface Editable {
    toggleEditing(): void;
    startEditing(): void;
    stopEditing(): void;
    setEditing(editing: boolean);
}


// Defines the interface of the structure of a task
interface ITodo {
    id: string,
    title: string,
    completed: boolean
}

// Defines the interface of the properties of the TodoItem component
interface ITodoItemProps {
    key: string,
    todo: ITodo,
    editing?: boolean,
    onSave: (val: any) => void;
    onDestroy: () => void;
    
}
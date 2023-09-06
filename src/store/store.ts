import { writable } from "svelte/store";

export let edit_is_on = writable(false)

export const card_todos = writable([
    {
        id: 0,
        todo_text: "Regar mis plantas",
        todo_completed: false,
        todo_eliminated: false
    },
    {
        id: 1,
        todo_text: "Ir al gym",
        todo_completed: false,
        todo_eliminated: false
    },
    {
        id: 2,
        todo_text: "grabar video",
        todo_completed: false,
        todo_eliminated: false
    }
])

export function updateCardTodos(newData:any) {
    card_todos.set(newData);
}
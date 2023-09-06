<script lang="ts">
    export let card_todo:any
    import { card_todos, updateCardTodos, edit_is_on } from "../store/store";
    import PopupCard from "./Popup_card.svelte";
    let new_todo_text = ""
    let isEditMode = false

    
    function complete_todo() {
        let index_todo = $card_todos.findIndex((e) => e.id == card_todo.id)
        

        $card_todos.splice(index_todo, 1)
        const updatedTodos = [...$card_todos];
        updateCardTodos(updatedTodos);

    }
    
    function delete_todo() {
        let index_todo = $card_todos.findIndex((e) => e.id == card_todo.id)
        
        $card_todos.splice(index_todo, 1)
        const updatedTodos = [...$card_todos];
        updateCardTodos(updatedTodos);
    }
    
    function edit_todo() {
        if ($edit_is_on) {
            let todo = $card_todos.find((e) => (e.todo_text == card_todo.todo_text))
            
            todo.todo_text = ""
            isEditMode = true

            const updatedTodos = [...$card_todos];
            updateCardTodos(updatedTodos);
        }
    }
    
    function confirm_edit() {
        let todo = $card_todos.find((e) => (e.todo_text == card_todo.todo_text))
        todo.todo_text = new_todo_text
        isEditMode = false
        $edit_is_on = false
    }
</script>

<style>
    .Todo_cards {
        width: 100vw;

        display: flex;
        justify-content: center;
        margin-top: 10px;
    }
    
    .Todo_cards_container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-radius: 5px;
        width: 80vw;
        border: 2px solid #767676;
        height: 80px;
    }

    .Todo_cards .Todo_cards_text p{
        font-size: 16px;
        font-family: "Roboto Mono", monospace;
        margin-left: 10px;
    }

    .Todo_cards_check {
        margin-right: 10px ;
    }

    input {
        border: none;
        border-bottom: 1px solid #000;
        font-family: "Roboto mono";
        margin-left: 10px;
    }

    button {
        background-color: none;
        margin-left: 10px;
    }
</style>

<!-- markup (zero or more items) goes here -->

<div class="Todo_cards" on:dblclick={delete_todo}>
    <div class="Todo_cards_container">
        <div class="Todo_cards_text">
            {#if isEditMode}
                <input type="text" placeholder={card_todo.todo_text} bind:value={new_todo_text}>
                <button on:click={confirm_edit}>aceptar</button>
                {:else}
                    <p on:click={edit_todo}>{card_todo.todo_text}</p>
            {/if}
        </div>
        <div class="Todo_cards_check" on:click={complete_todo}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l5 5l10 -10"></path>
            </svg>
        </div>
    </div>
</div>
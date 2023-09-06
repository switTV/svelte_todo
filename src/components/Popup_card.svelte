<script lang="ts">
    import { updateCardTodos, card_todos } from "../store/store";
    let text_input = ""

    function add_card(card_text:string) {
        let newTodo = {todo_text: card_text, todo_completed: false, todo_eliminated: false}
        text_input = ""
        const updatedTodos = [...$card_todos, newTodo];
        updateCardTodos(updatedTodos);
    }

</script>

<svelte:head>
    <title>Todo cards</title>
</svelte:head>

<style>
    .Popup_card {
        width: 250px;
        height: 200px;
        border-radius: 5px;
        border: #000 solid 1px;

        position: fixed;
        right: calc(50% - 130px);
        bottom: calc(0% + 30px);
        display: flex;
        align-items: center;
        background-color: rgb(255, 255, 255);
    }

    .Popup_card_forms {
        margin-left: 10px;
    }

    .Popup_card p {
        font-family: alike, sans-serif;
        font-size: 16px;
    }

    .Popup_card button {
        font-family: alike, sans-serif;
    }
</style>

<!-- markup (zero or more items) goes here -->

<div class="Popup_card">
    <div class="Popup_card_forms">
        <p>Agrega tu nuevo Todo</p>
        <input bind:value={text_input} name="texto_label" type="text" placeholder="Agrega tu texto">

        <div class="Popup_button_section">
            <button on:click={() => (add_card(text_input))}>Agregar</button>
        </div>
    </div>
</div>
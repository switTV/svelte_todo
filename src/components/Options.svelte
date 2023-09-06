<script lang="ts">
    import { card_todos, updateCardTodos, edit_is_on } from "../store/store";
    import PopupCard from "./Popup_card.svelte";

    let add_popup = false

    function pop_card() {
        add_popup = !add_popup
    }

    function edit_card() {
        $edit_is_on = !$edit_is_on
    }
</script>

<style>
    .Options {
        width: 100vw;

        display: flex;
        justify-content: center;
    }

    .Options_container {
        width: 80vw;
    }
    
    .Options_ops {
        display: grid; 
        grid-auto-columns: 1fr; 
        grid-auto-rows: 1fr; 
        grid-template-columns: 1.2fr 1.1fr; 
        grid-template-rows: 1fr; 
        width: 60px;
        gap: 0px 0px; 
        grid-template-areas: 
          "Options_pencil Options_plus"; 
          margin-top: 10px;
        border-radius: 5px;
        color: #a09d9d;
    }

    .activated {
        color: #000000;
    }

    .Options_pencil { grid-area: Options_pencil; }
    .Options_plus { grid-area: Options_plus; }
</style>

<!-- markup (zero or more items) goes here -->

<div class="Options">
    <div class="Options_container">
        <div class="Options_ops">
            <div class="Options_pencil" on:click={edit_card} class:activated={$edit_is_on == true}>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
                    <path d="M13.5 6.5l4 4"></path>
                </svg>
            </div>
            <div class="Options_plus" on:click={pop_card}>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 5l0 14"></path>
                    <path d="M5 12l14 0"></path>
                </svg>
            </div>
        </div>
        {#if add_popup == true}
            <PopupCard></PopupCard>
        {/if}
    </div>
</div>
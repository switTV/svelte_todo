<script>
    import Nav from "../components/Nav.svelte";
    import TodoCards from "../components/Todo_cards.svelte";
    import Options from "../components/Options.svelte";

    import { card_todos } from "../store/store";
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

<Nav></Nav>
{#each $card_todos as card_todo}
    <TodoCards {card_todo}></TodoCards>
{/each}
<Options></Options>

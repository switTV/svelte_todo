<script>
    // your script goes here
</script>

<style>
    .Nav {
        width: 100vw;

        display: flex;
        justify-content: center;
    }
    
    .Nav-container {
        width: 80vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .Nav-container h1 {
        font-family: "Alike", sans-serif;
        font-family: 24px;
    }
</style>

<!-- markup (zero or more items) goes here -->

<div class="Nav">
    <div class="Nav-container">
        <div class="Nav-logo">
            <h1>To-do</h1>
        </div>
        <div class="Nav-menu-bars">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 6l16 0"></path>
                <path d="M4 12l16 0"></path>
                <path d="M4 18l16 0"></path>
            </svg>
        </div>
    </div>
</div>
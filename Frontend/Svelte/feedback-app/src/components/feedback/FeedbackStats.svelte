<script lang="ts">
    import type { Feedback } from "../../models/Feedback";
    import Card from "../layout/Card.svelte";

    export let feedbackItems: Feedback[];

    $: count = feedbackItems.length;
    $: average =
        feedbackItems.reduce((acc, curr) => acc + curr.rating, 0) /
        feedbackItems.length;
</script>

<!-- HTML -->
<Card>
    {#if count > 0}
        <div class="flex-card">
            <h3>Count of reviews: {count}</h3>
            <h3>Average: {average ?? 0}</h3>
        </div>
    {:else}
        <h1>No feedback items yet</h1>
    {/if}
</Card>

<style>
    .flex-card {
        display: flex;
        justify-content: space-between;
    }
</style>

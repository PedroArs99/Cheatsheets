<script lang="ts">
    import type { Feedback } from "../../models/Feedback";
    import FeedbackItem from "./FeedbackItem.svelte";

    export let feedbackItems: Feedback[] = [];

    const handleDelete = ({type, detail}) => {
        feedbackItems = feedbackItems.filter((item) => item.id !== detail);
    }
</script>

<!-- HTML Section -->
{#each feedbackItems as fb}
    <FeedbackItem feedback={fb} on:delete-feedback-item={handleDelete} />
{/each}

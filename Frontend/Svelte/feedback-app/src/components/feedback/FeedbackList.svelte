<script lang="ts">
    import type { Feedback } from "../../models/Feedback";
    import FeedbackItem from "./FeedbackItem.svelte";
import FeedbackStats from "./FeedbackStats.svelte";

    export let feedbackItems: Feedback[] = [];

    const handleDelete = ({type, detail}) => {
        feedbackItems = feedbackItems.filter((item) => item.id !== detail);
    }
</script>

<!-- HTML Section -->
<FeedbackStats {feedbackItems}/>

{#each feedbackItems as fb}
    <FeedbackItem feedback={fb} on:delete-feedback-item={handleDelete} />
{/each}

<script lang="ts">
    import type { Feedback } from "../../models/Feedback";
    import FeedbackForm from "./FeedbackForm.svelte";
    import FeedbackItem from "./FeedbackItem.svelte";
    import FeedbackStats from "./FeedbackStats.svelte";

    export let feedbackItems: Feedback[] = [];

    const handleAdd = ({detail}) => {
        feedbackItems = [...feedbackItems, detail];
    };

    const handleDelete = ({detail }) => {
        feedbackItems = feedbackItems.filter((item) => item.id !== detail);
    };
</script>

<!-- HTML Section -->
<FeedbackForm on:add-feedback-item={handleAdd}/>

<FeedbackStats {feedbackItems} />

{#each feedbackItems as fb}
    <FeedbackItem feedback={fb} on:delete-feedback-item={handleDelete} />
{/each}

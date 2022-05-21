<script lang="ts">
    import { fade, scale } from "svelte/transition";
    import FeedbackForm from "./FeedbackForm.svelte";
    import FeedbackItem from "./FeedbackItem.svelte";
    import FeedbackStats from "./FeedbackStats.svelte";
    import { FeedbackStore } from "../store/feedback.store";

    const handleAdd = ({ detail }) => {
        FeedbackStore.update((state) => [...state, detail]);
    };

    const handleDelete = ({ detail }) => {
        FeedbackStore.update((state) =>
            state.filter((item) => item.id !== detail)
        );
    };
</script>

<!-- HTML Section -->
<FeedbackForm on:add-feedback-item={handleAdd} />

<FeedbackStats feedbackItems={$FeedbackStore} />

{#each $FeedbackStore as fb}
    <div in:scale out:fade={{ duration: 500 }}>
        <FeedbackItem feedback={fb} on:delete-feedback-item={handleDelete} />
    </div>
{/each}

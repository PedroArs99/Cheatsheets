<script lang="ts">
import { createEventDispatcher } from "svelte";

    import type { Feedback } from "../../../models/Feedback";
    import Card from "../../layout/Card.svelte";
    
    export let feedback: Feedback = undefined;

    const dispatch = createEventDispatcher();

    const handleDelete = (id) => {
        dispatch("delete-feedback-item", id);
    }
</script>

<!-- HTML -->
<Card>
    <div class="rating">
        {feedback.rating}
    </div>
    <button class="close" on:click={() => handleDelete(feedback.id)}> X </button>
    <p class="text">
        {feedback.text}
    </p>
</Card>

<!-- CSS -->
<style>
    .rating {
        position: absolute;
        top: -10px;
        left: -10px;
        width: 50px;
        height: 50px;
        background-color: #0099ff;
        color: #fff;
        border: 1px #eee solid;
        border-radius: 50%;
        padding: 10px;
        text-align: center;
        font-size: 20px;
    }

    .close {
        position: absolute;
        top: 10px;
        right: 20px;
        cursor: pointer;

        color: #000;
    }
</style>

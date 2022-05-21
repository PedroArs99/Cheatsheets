<script lang="ts">
    import Card from "../../layout/Card.svelte";
    import RatingSelect from "../../layout/RatingSelect.svelte";
    import { v4 as uuidv4 } from "uuid";
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    let messages: String[] = [];
    let rating = undefined;
    let text = "";

    const validateTextLength = (text: String) => {
        const message = "Text must be at least 10 characters long";

        if (text?.trim().length < 10) {
            messages =
                messages.indexOf(message) === -1
                    ? [...messages, message]
                    : messages;
            return false;
        } else {
            messages = messages.filter((m) => m !== message);
            return true;
        }
    };

    const validateRating = (rating: Number) => {
        const message = "Please select a rating";

        if (rating === undefined) {
            messages =
                messages.indexOf(message) === -1
                    ? [...messages, message]
                    : messages;
            return false;
        } else {
            messages = messages.filter((m) => m !== message);
            return true;
        }
    };

    const handleSubmit = (event) => {
        const feedbackItem = {
            id: uuidv4(),
            rating,
            text,
        };

        dispatch("add-feedback-item", feedbackItem);
        resetForm();
    };

    const resetForm = () => {
        text = "";
    };

    $: btnDisabled = !validateTextLength(text) && !validateRating(rating);
</script>

<!-- HTML -->
<Card>
    <header>
        <h2>How would you rate the app?</h2>
    </header>
    <form on:submit|preventDefault={handleSubmit}>
        <RatingSelect  on:rating-select={({ detail }) => (rating = detail)} />
        <div class="input-group">
            <input
                type="text"
                placeholder="Tell me something more"
                bind:value={text}
            />
            <button class="primary" type="submit" disabled={btnDisabled}
                >Send</button
            >
        </div>
        {#each messages as message}
            <div class="message">
                {message}
            </div>
        {/each}
    </form>
</Card>

<!-- CSS -->
<style>
    header {
        max-width: 400px;
        margin: auto;
    }

    header h2 {
        font-size: 22px;
        font-weight: 600;
        text-align: center;
    }

    .input-group {
        display: flex;
        flex-direction: row;
        border: 1px solid #ccc;
        padding: 8px 10px;
        border-radius: 8px;
        margin-top: 15px;
    }

    input {
        flex-grow: 2;
        border: none;
        font-size: 16px;
    }

    input:focus {
        outline: none;
    }

    .message {
        padding-top: 10px;
        text-align: center;
        color: #f84848;
    }
</style>

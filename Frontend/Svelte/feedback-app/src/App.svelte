<script lang="ts">
	import FeedbackList from "./components/feedback/FeedbackList.svelte";
	import { feedbackItems } from "./models/Feedback";
</script>

<!-- HTML-->
<main class="container">
	<FeedbackList {feedbackItems} />
</main>

<!-- CSS -->
<style>
</style>

<script>
	import Navbar from './Components/Navbar.svelte';
    import Showcase from './Components/Showcase.svelte';
    import Stacks from './Components/Stacks.svelte';
</script>

<div class="h-screen w-screen">
    <Navbar />
    <div class="relative top-16">
        <Showcase />
        <Stacks />
    </div>
</div>
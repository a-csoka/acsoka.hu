<script>
	import { each } from "svelte/internal";

    export let Name;
    export let NameLink;
    export let Title;
    export let Description;
    export let Image;

    export let Current;
    export let Limit;

    export let forceMove;

    let isHover = false
</script>

<div class="w-full h-fit overflow-y-visible">
    <img class="relative md:absolute w-full h-160 object-cover" src={Image} alt="Hiba a betöltés során!">
    <div class="relative w-full h-[40rem] md:h-160 grid grid-cols-2 md:top-0">
        <div class="grid bg-black bg-opacity-100 md:bg-opacity-90 col-span-2 md:col-span-1 md:col-start-2 content-between">
            <div class="flex flex-col my-3 mx-5 text-center md:mt-20 h-fit">
                <a class="font-Brooklyn text-3xl {(isHover ? "text-[#00c5f0]" : "")} duration-200" href={NameLink} on:mouseenter={() => isHover = true} on:mouseleave={() => isHover = false}>{Name}</a>
                <div class="font-Gilmer text-xl mb-10 {(isHover ? "text-[#00c5f0]" : "")} duration-200 w-fit self-center" on:mouseenter={() => isHover = true} on:mouseleave={() => isHover = false}>{Title}</div>
                <div class="font-Gilmer md:text-lg">{Description}</div>
            </div>
            <div class="flex w-full h-5 self-end mb-10 justify-center content-center">
                {#each {length: Limit} as _, i}
                    <button class="rounded-full border-2 border-gray-200 hover:border-[#00c5f0] aspect-square h-full mx-0.5 {Current == i ? "bg-gray-200 hover:bg-[#00c5f0]" : ""} duration-200" on:click={() => {forceMove(i)}}></button>
                {/each}
            </div>
        </div>
    </div>
</div>
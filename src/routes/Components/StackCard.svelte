<script>
    export let Name;
    export let Image;
    export let Level;
    export let Refs;
    export let Color = "bg-[{#FF0000}]";

    const skillLevels = ["Kezdő", "Haladó", "Kompetens", "Profi", "Mester"]
</script>

<div class="flex text-white {Color} bg-opacity-50 h-40 mx-2 md:mx-6 mb-2 rounded-2xl">
    <div class="flex h-full w-52 mx-3 items-center">
        <img class="w-fit h-5/6 mx-auto" src={Image} alt="Hiba a betöltés során!">
    </div>
    <div class="w-full">
        <div class="relative font-Brooklyn text-2xl md:text-4xl text-center mt-2 mb-8 h-fit">{Name}</div>
        <div class="bg-zinc-900 mx-8 rounded-2xl h-5 border-4 border-zinc-900">
            <div class="{Color} h-full rounded-2xl" style="width: {Level*(100/skillLevels.length)}%"/>
        </div>
        <div class="font-Gilmer text-xl text-center">{skillLevels[Level-1]}</div>
    </div>
</div>
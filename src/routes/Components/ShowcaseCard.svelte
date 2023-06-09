<script>
    export let Name;
    export let NameLink;
    export let Title;
    export let Description;
    export let Image;
</script>

<div class="w-full h-fit overflow-y-visible">
    <img class="relative md:absolute w-full h-160 object-cover" src={Image} alt="Hiba a betöltés során!">
    <div class="relative w-full h-fit md:h-160 grid grid-cols-2 md:top-0">
        <div class="bg-black bg-opacity-100 md:bg-opacity-90 col-span-2 md:col-span-1 md:col-start-2">
            <div class="my-3 mx-5 text-center">
                <a class="font-Brooklyn text-3xl" href={NameLink}>{Name}</a>
                <div class="font-Gilmer text-xl mb-10">{Title}</div>
                <div class="font-Gilmer text-lg">{Description}</div>
            </div>
        </div>
    </div>
</div>
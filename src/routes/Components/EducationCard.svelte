<script>
    export let Image;
    export let Name;
    export let Title;
    export let Time;
    export let Color
</script>

<div class="{Color} bg-opacity-50 mx-auto my-6 w-10/12 md:w-min-fit md:w-6/12 h-[40rem] rounded-2xl shadow-lg shadow-black">
    <div class="flex w-full h-fit mt-8">
        <img class="h-72 w-fit mx-auto" src={Image} alt="Hiba a betöltés során!">
    </div>
    <div class="text-center mt-5 text-white">
        <div class="font-Brooklyn text-4xl mb-8">{Name}</div>
        <div class="font-Gilber text-2xl">{Title}</div>
        <div class="font-Gilber text-2xl">{Time}</div>
    </div>
</div>
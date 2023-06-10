<script>
    function scrollToId(event, targetId) {
        const targetElement = document.getElementById(targetId);
        console.log(targetElement)
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
</script>

<div class="fixed top-2 flex left-[0.5%] w-[99%] h-14 bg-zinc-900 color-white text-gray-200 items-center z-50 shadow-lg shadow-black rounded-2xl">
    <div class="block w-full md:mx-12">
        <button on:click={event => document.body.scrollIntoView({ behavior: 'smooth' })} class="hidden font-Brooklyn text-xl md:block float-left hover:text-[#00c5f0] duration-200">ACSOKA.HU</button>
        <div class="flex font-Gilmer text-xs md:text-base md:float-right  justify-center">
            <button on:click={event => scrollToId(event, 'Stacks')} class="text-center mx-1 md:mx-3 hover:text-[#00c5f0] duration-200">Technológiák</button>
            <button on:click={event => scrollToId(event, 'Education')} class="text-center mx-1 md:mx-3 hover:text-[#00c5f0] duration-200">Tanulmányok</button>
            <button on:click={event => scrollToId(event, 'Contact')} class="text-center mx-1 md:mx-3 hover:text-[#00c5f0] duration-200">Elérhetőség</button>
        </div>
    </div>
</div>
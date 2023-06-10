<script>
    import ContactComponent from "./ContactComponent.svelte";
</script>

<section class="pt-8 bg-zinc-900 ">
    <div class="text-white text-center font-Gilmer text-4xl pt-8">Elérhetőség</div>

    <div id="Contact" class="grid grid-cols-1 md:grid-cols-4 py-16 mx-auto xl:mx-60 2xl:mx-96">
        <ContactComponent Image="Images/Contact/Facebook.png" Link="https://www.facebook.com/csoka.csaba2003"/>
        <ContactComponent Image="Images/Contact/Instagram.png" Link="https://www.instagram.com/acsoka_10/"/>
        <ContactComponent Image="Images/Contact/Discord.png" Link="https://discord.com/users/1117117676238688387"/>
        <ContactComponent Image="Images/Contact/Github.png" Link="https://github.com/a-csoka"/>
    </div>
</section>
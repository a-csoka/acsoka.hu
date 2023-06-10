<script>
    import { onMount } from 'svelte';
    import StackCard from "./StackCard.svelte";


    /*
        <StackCard Name="Bootstrap" Image="Images/Stacks/Bootstrap.png" Level=1 Refs="" Color="bg-[#7952B3]"/>
        <StackCard Name="MySQL" Image="Images/Stacks/MySQL.png" Level=4 Refs="" Color="bg-[#4479A1]"/>
        <StackCard Name="Tailwind CSS" Image="Images/Stacks/TailwindCSS.png" Level=2 Refs="" Color="bg-[#38B2AC]"/>
        <StackCard Name="Lua" Image="Images/Stacks/Lua.png" Level=4 Refs="" Color="bg-[#2C2D72]"/>
    */
</script>

<div class="w-full h-fit bg-[url('Images/Stacks/Background.jpg')] bg-top">
    <div class="text-white text-center font-Gilmer text-4xl pt-8">Technológiák</div>
    <div class="grid py-8 grid-cols-1 md:grid-cols-2 ">
        <StackCard Name="React" Image="Images/Stacks/React.png" Level=3 Refs="" Color="bg-[#61DBFB]"/>
        <StackCard Name="Svelte" Image="Images/Stacks/Svelte.png" Level=3 Refs="" Color="bg-[#FF3E00]"/>
        <StackCard Name="NodeJS" Image="Images/Stacks/NodeJS.png" Level=3 Refs="" Color="bg-[#339933]"/>
        <StackCard Name="C#" Image="Images/Stacks/CSHARP.png" Level=1 Refs="" Color="bg-[#9A4D8C]"/>
        <StackCard Name="Bootstrap" Image="Images/Stacks/Bootstrap.png" Level=1 Refs="" Color="bg-[#7952B3]"/>
        <StackCard Name="Tailwind CSS" Image="Images/Stacks/TailwindCSS.png" Level=2 Refs="" Color="bg-[#38B2AC]"/>
        <StackCard Name="MySQL" Image="Images/Stacks/MySQL.png" Level=4 Refs="" Color="bg-[#4479A1]"/>
        <StackCard Name="Lua" Image="Images/Stacks/Lua.png" Level=4 Refs="" Color="bg-[#2C2D72]"/>      
    </div>
</div>


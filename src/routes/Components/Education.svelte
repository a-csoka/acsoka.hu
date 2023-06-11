<script>
    import EducationCard from "./EducationCard.svelte";
</script>

<section id="Education" class="w-full h-fit bg-gradient-to-b from-black from-0% to-zinc-900 mt-[-5px]">
    <div class="text-white text-center font-Gilmer text-4xl pt-8">Tanulmányok</div>
    <div class="w-full py-8 grid grid-cols-1 md:grid-cols-2">
        <EducationCard Image="Images/Education/NTSZKI.png" Name="NTSZKI" Title="Számítógépes rendszerkarbantartó" Time="2022. 06. 16." Color="bg-[#20376B]"/>
        <EducationCard Image="Images/Education/NTSZKI.png" Name="NTSZKI" Title="Szoftverfejlesztő és -tesztelő" Time="2023. 05. 31." Color="bg-[#20376B]"/>
    </div>
</section>
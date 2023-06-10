<script>
    import { onMount } from 'svelte';
    import { slide, fly } from 'svelte/transition';
    import ShowcaseCard from './ShowcaseCard.svelte';

    let directions = [0, 100]
    let workCount = 0
    function showcaseMover(){
        setTimeout(() => {
            directions = [-100, 0]
            setTimeout(() => {
                workCount = workCount + 1
                if(workCount > works.length-1){
                    workCount = 0
                }
                directions = [0, 100]
            }, 1000)
            showcaseMover()
        }, 15000)
    }
    let ready = false;
    onMount(() => {
        ready = true
        showcaseMover()
    });
    const works = [
        {
            Name: "Magyar Hot Pursuit",
            NameLink: "https://discord.gg/x3FTPXn8KU",
            Title: "Fejlesztő",
            Description: "Egy Multi Theft Auto: San Andreas szerver, amely Lua-ban írodott és MySQL adatbázist használ. Jelenleg két féle játékmód található meg benne. Hot Pursuit, amelyben a játékosok egy vagy két személyes csapatokban üldöznek egy kiválaszott csapatot. Clan War, itt pedig két csapat küzd a pályán található pontok elfoglalásáért. A fejlesztésése során a szerver alapjáért, a kezdetleges kezelőfelületekért, valamint kisebb rendszerekért feleltem, mint például: Emeltdíjas hívások automatikus kezelése, Discord bot és webhook, járművek fájlainak titkosítása.",
            Image: "Images/Showcase/mhp.png"
        },
        {
            Name: "DBLock",
            NameLink: "https://www.acsoka.hu/dblock/",
            Title: "Készítő",
            Description: "A weboldalt egy öt fős csoportban kellett elkészítenünk egy megadott példa szerint. Az oldalt egy olasz cégnek csináltuk az Erasmus+ keretein belül, viszont később egyedül is megcsináltam körülbelül 18 óra alatt. A két felhasznált technológia a Svelte és a Bootstrap.",
            Image: "Images/Showcase/dblock.png",
        },
        {
            Name: "ReserveIt",
            NameLink: "https://github.com/a-csoka/ReserveIt",
            Title: "Társkészítő",
            Description: "Egy olyan weboldal, amelyen vállalkozások időpontokat tudnak kiosztani ügyfeleiknek. A felhasználóknak lehetőségük van saját vállalkozás létrehozására, ileltve a saját időpontjaik nyomonkövetésére. A létrehozott vállalkozások tulajdonosa tud dolgozókat felvenni, akik tudnak a felhasználók számára időpontokat kiosztani. A weboldal frontend része ReactJS-ben készült, a backend ExpressJS-ben, az adatbázis pedig MySQL alapú. Ez volt a Szoftverfejlesztő és -tesztelő szakdolgozatom, amelyet ketten dolgoztunk. A fejlesztés során a társam felelt a design elemekért, én pedig a programozásért.",
            Image: "Images/Showcase/reserveit.png",
        }
    ]
</script>


<div class="relative flex flex-row w-full min-h-fit overflow-x-clip">
    {#if ready}
        <div class="relative table-cell min-w-full h-full color-white text-gray-200 items-center" style="left: {directions[0]}%; transition: left {(directions[0] == -100 ? 1 : 0)}s">
            <ShowcaseCard Name={works[workCount].Name} NameLink={works[workCount].NameLink} Title={works[workCount].Title} Description={works[workCount].Description} Image={works[workCount].Image}/>
        </div>
        <div class="absolute min-w-full h-full color-white text-gray-200 items-center" style="left: {directions[1]}%; transition: left {(directions[1] == 0 ? 1 : 0)}s">
            <ShowcaseCard Name={works[(workCount >= works.length-1 ? 0 : workCount+1)].Name} NameLink={works[(workCount >= works.length-1 ? 0 : workCount+1)].NameLink} Title={works[(workCount >= works.length-1 ? 0 : workCount+1)].Title} Description={works[(workCount >= works.length-1 ? 0 : workCount+1)].Description} Image={works[(workCount >= works.length-1 ? 0 : workCount+1)].Image}/>
        </div>
    {/if}
</div>
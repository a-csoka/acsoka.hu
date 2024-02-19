<script>
    import { onMount } from 'svelte';
    import ShowcaseCard from './ShowcaseCard.svelte';

    let timer

    let directions = [0, 100]
    let workCount = 0
    let nextCont = 0
    let isMoving = false
    let direction = "LeftToRight"
    function showcaseMover(){
        timer = setTimeout(() => {
            forceMove((workCount+1 < works.length-1 ? workCount+1 : 0))
        }, 15000)
    }

    function forceMove(next){
        nextCont = next
        clearTimeout(timer)
        
        if(next > workCount || (next == 0 && workCount == works.length-1)){
            directions = [0, 100]
            direction = "LeftToRight"
        }else{
            directions = [-100, 0]
            direction = "RightToLeft"
        }

        timer = setTimeout(() => {
            if(direction == "RightToLeft"){
                isMoving = true
                directions = [0, 100]
            }else{
                isMoving = true
                directions = [-100, 0]
            }
            timer = setTimeout(() => {
                direction = "LeftToRight"
                workCount = next
                nextCont = workCount + 1
                if(nextCont > works.length-1){
                    nextCont = 0
                }
                isMoving = false
                directions = [0, 100]
            }, 1000)
            showcaseMover()
        }, 50)
    }
    let ready = false;
    onMount(() => {
        ready = true
        showcaseMover()
    });
    const works = [
        {
            Name: "DBLock",
            NameLink: "https://www.acsoka.hu/dblock/",
            Title: "Készítő",
            Description: "A weboldalt egy öt fős csoportban kellett elkészítenünk egy megadott példa szerint. Az oldalt egy olasz cégnek csináltuk az Erasmus+ keretein belül, viszont később egyedül is megcsináltam körülbelül 18 óra alatt. A két felhasznált technológia a Svelte és a Bootstrap.",
            Image: "Images/Showcase/dblock.png",
        },
        {
            Name: "Magyar Hot Pursuit",
            NameLink: "https://discord.gg/x3FTPXn8KU",
            Title: "Fejlesztő",
            Description: "Egy Multi Theft Auto: San Andreas szerver, amely Lua-ban írodott és MySQL adatbázist használ. Jelenleg két féle játékmód található meg benne. Hot Pursuit, amelyben a játékosok egy vagy két személyes csapatokban üldöznek egy kiválaszott csapatot. Clan War, itt pedig két csapat küzd a pályán található pontok elfoglalásáért. A fejlesztésése során a szerver alapjáért, a kezdetleges kezelőfelületekért, valamint kisebb rendszerekért feleltem, mint például: Emeltdíjas hívások automatikus kezelése, Discord bot és webhook, járművek fájlainak titkosítása.",
            Image: "Images/Showcase/mhp.png"
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


<section class="relative flex flex-row w-full min-h-fit overflow-x-clip">
    {#if ready}
        <div class="relative table-cell min-w-full h-full color-white text-gray-200 items-center" style="left: {directions[0]}%; transition: left {(isMoving ? 1 : 0)}s">
            <ShowcaseCard Name={works[(direction == "LeftToRight" ? workCount : nextCont)].Name} NameLink={works[(direction == "LeftToRight" ? workCount : nextCont)].NameLink} Title={works[(direction == "LeftToRight" ? workCount : nextCont)].Title} Description={works[(direction == "LeftToRight" ? workCount : nextCont)].Description} Image={works[(direction == "LeftToRight" ? workCount : nextCont)].Image} Current={(direction == "LeftToRight" ? workCount : nextCont)} Limit={works.length} forceMove={forceMove}/>
        </div>
        <div class="absolute min-w-full h-full color-white text-gray-200 items-center" style="left: {directions[1]}%; transition: left {(isMoving ? 1 : 0)}s">
            <ShowcaseCard Name={works[(direction == "LeftToRight" ? nextCont : workCount)].Name} NameLink={works[(direction == "LeftToRight" ? nextCont : workCount)].NameLink} Title={works[(direction == "LeftToRight" ? nextCont : workCount)].Title} Description={works[(direction == "LeftToRight" ? nextCont : workCount)].Description} Image={works[(direction == "LeftToRight" ? nextCont : workCount)].Image} Current={(direction == "LeftToRight" ? nextCont : workCount)} Limit={works.length} forceMove={forceMove}/>
        </div>
    {/if}
</section>
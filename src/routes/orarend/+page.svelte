<script>
    import { onMount } from "svelte";

    function toHoursAndMinutes(totalMinutes) {
        let minutes = totalMinutes % 60
        let hours = Math.floor(totalMinutes / 60)

        if (hours < 10) {
            hours = "0"+hours
        }

        if(minutes < 10){
            minutes = "0"+minutes
        }

        return `${hours}:${minutes}`
    }

    const Days = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek"]
    let currentDay = (new Date()).getDay()
    if (currentDay < 1 || currentDay > 5) {
        currentDay = 1
    }

    let classes = []

    const fetchClasses = async () => {
        let response = await (fetch("https://www.acsoka.hu/GetOrarend.php", {
            method: "GET",
            credentials: 'omit',
        }))
        response = await response.json()
        return response
    }
    

    onMount(async () => {
        classes = await fetchClasses()

        classes.map((element, index) => {
            classes[index].Height = ((element.EndTime-element.StartTime)/60*6)+"rem"
            if(classes[index+1] != null) {
                if(element.Day != classes[index+1].Day){
                    return
                }
                if(element.EndTime == classes[index+1].StartTime){
                    return
                }

                classes.push({
                    Name: "Szünet",
                    Classroom: "",
                    Color: "bg-[#505050] text-gray-300 border-black",
                    Day: element.Day,
                    StartTime: element.EndTime,
                    EndTime: classes[index+1].StartTime,
                    TimeText: `${toHoursAndMinutes(element.EndTime)}-${toHoursAndMinutes(classes[index+1].StartTime)}`,
                    Height: ((classes[index+1].StartTime-element.EndTime)/60*6)+"rem",

                })
            }
        })
    })
</script>

<div class="fixed flex flex-row w-full h-full overflow-y-auto overflow-x-hidden">
    <div class="relative w-16 mt-[4.5rem] h-full text-center">
        {#each {length: 15} as _, hour}
            <div class="w-16 h-[6rem] text-white">
                <div class="w-screen h-[0.1rem] bg-gray-200"/>
                <div class="font-Brooklyn text-gray-200">{(hour+8 < 10 ? "0"+(hour+8) : hour+8)}:00</div>
            </div>
        {/each}
        <div class="absolute {currentDay == (new Date).getDay() ? "" : "hidden md:block"} w-screen h-[0.1rem] bg-red-800 top-10 z-10" style="top: {(new Date().getMinutes() + new Date().getHours()*60 - 480)/60*6}rem;"/>
    </div>
    <div class="relative flex-col w-full h-full">
        <div class="relative flex flex-row h-16 text-gray-200 rounded-t-xl mt-2 font-Gilmer">
            {#each Days as DayName, Index}
                    <button class="w-full h-full border border-black rounded-t-xl {(Index + 1 == currentDay ? "bg-[#00c5f0] text-black" : "bg-zinc-800")}" on:click={() => currentDay = Index+1}>{DayName}</button>
            {/each}
        </div>
        <div class="w-full h-full">
            {#each classes as element, Index}
                <div class="absolute hidden md:block w-[20%] rounded-xl {(element.Color ? element.Color : "bg-[#009db4] border-[#006b82]")} border  " style="height: {element.Height}; left: {(element.Day-1)*20}%; top: {(element.StartTime-480)/60*6+4.5}rem;">
                    <div class="text-center font-Gilmer { (element.EndTime - element.StartTime >= 60 ? "text-lg" : "text-md") } font-bold mt-2">{element.Name}</div>
                    <div class="text-center font-Gilmer { (element.EndTime - element.StartTime >= 60 ? "text-md" : "text-xs") }">{element.Classroom}</div>
                    <div class="text-center font-Gilmer { (element.EndTime - element.StartTime >= 60 ? "text-md" : "text-xs") }">{element.TimeText}</div>
                </div>
                <div class="absolute {(element.Day == currentDay ? "block" : "hidden")} md:hidden w-[100%] rounded-xl {(element.Color ? element.Color : "bg-[#009db4] border-[#006b82]")} border " style="height: {element.Height}; top: {(element.StartTime-480)/60*6+4.5}rem;">
                    <div class="text-center font-Gilmer { (element.EndTime - element.StartTime >= 60 ? "text-lg" : "text-md") } font-bold mt-2">{element.Name}</div>
                    <div class="text-center font-Gilmer { (element.EndTime - element.StartTime >= 60 ? "text-md" : "text-xs") }">{element.Classroom}</div>
                    <div class="text-center font-Gilmer { (element.EndTime - element.StartTime >= 60 ? "text-md" : "text-xs") }">{element.TimeText}</div>
                </div>
            {/each}
        </div>
    </div>
</div>
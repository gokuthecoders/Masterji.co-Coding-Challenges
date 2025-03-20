const videosContainer = document.getElementById("videos-container")
const searchInput = document.getElementById("search-input")

async function factoryData(){
    const fetchApi = await fetch("https://api.freeapi.app/api/v1/public/youtube/videos");
    const data = await fetchApi.json();
    
    return data.data.data;
}

let newData

(
    async()=>{
        try {
            await factoryData().then(res=>{
                newData = res
            }).catch(err=>{
                console.log(err);
                
            })
            
            for (let index = 0; index < newData.length; index++) {
                videosContainer.innerHTML += 
                `
                <div class="video-card">
                <div class="thumbnail-container">
                <a href="https://www.youtube.com/watch?v=${newData[index].items.id}">
                        <img src="${newData[index].items.snippet.thumbnails.maxres.url}" alt="Video thumbnail" class="thumbnail">
                        </a>
                    </div>
                    <div class="video-info">
                        <img src="https://yt3.googleusercontent.com/6tLBV-DRVemxhmanuezR5HkHshX2g7Y46Rq8cysyO1V-nd2SaQ2Fi8cdgVM-n6v_8XZ5BEimxXI=s160-c-k-c0x00ffffff-no-rj" alt="Channel avatar" class="channel-avatar">
                        <div class="video-details">
                            <h3 class="video-title">${newData[index].items.snippet.title}</h3>
                            <p class="channel-name">${newData[index].items.snippet.channelTitle}</p>
                     </div>
                </a>
                </div>
                `
            }
        } catch (error) {
            console.log("something went wrong", error);
        }
    }
)()

searchInput.addEventListener("keyup", ()=>{
    const value = searchInput.value

    function filterVideos(searchInput) {
        const safePattern = value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); 
        const regex = new RegExp(safePattern, "i");
    
        return newData.filter((element) => regex.test(element.items.snippet.title));
    }

    const filteredVideos = filterVideos(value);
    
    if(value !== ""){
        for (let index = 0; index < filteredVideos.length; index++) {
            videosContainer.innerHTML = "";
            videosContainer.innerHTML += 
            `<div class="video-card">
            <div class="thumbnail-container">
            <a href="https://www.youtube.com/watch?v=${filteredVideos[index].items.id}">
                    <img src="${filteredVideos[index].items.snippet.thumbnails.maxres.url}" alt="Video thumbnail" class="thumbnail">
                </a>
                </div>
                <div class="video-info">
                    <img src="https://yt3.googleusercontent.com/6tLBV-DRVemxhmanuezR5HkHshX2g7Y46Rq8cysyO1V-nd2SaQ2Fi8cdgVM-n6v_8XZ5BEimxXI=s160-c-k-c0x00ffffff-no-rj" alt="Channel avatar" class="channel-avatar">
                    <div class="video-details">
                        <h3 class="video-title">${filteredVideos[index].items.snippet.title}</h3>
                        <p class="channel-name">${filteredVideos[index].items.snippet.channelTitle}</p>
                 </div>
            </div>`
        }
    }else{            
        for (let index = 0; index < newData.length; index++) {
            videosContainer.innerHTML += 
            `<div class="video-card">
            <div class="thumbnail-container">
            <a href="https://www.youtube.com/watch?v=${newData[index].items.id}">
                    <img src="${newData[index].items.snippet.thumbnails.maxres.url}" alt="Video thumbnail" class="thumbnail">
                    </a>
                </div>
                <div class="video-info">
                    <img src="https://yt3.googleusercontent.com/6tLBV-DRVemxhmanuezR5HkHshX2g7Y46Rq8cysyO1V-nd2SaQ2Fi8cdgVM-n6v_8XZ5BEimxXI=s160-c-k-c0x00ffffff-no-rj" alt="Channel avatar" class="channel-avatar">
                    <div class="video-details">
                        <h3 class="video-title">${newData[index].items.snippet.title}</h3>
                        <p class="channel-name">${newData[index].items.snippet.channelTitle}</p>
                    </div>
            </div>`
        }
    }
    
})
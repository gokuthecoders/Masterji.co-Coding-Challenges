const emojies = document.querySelectorAll(".emoji");
const dayViewButton = document.getElementById("day-view");
const weekViewButton = document.getElementById("week-view");
const monthViewButton = document.getElementById("month-view");
const moodTimelineDisplay = document.getElementById("mood-timeline");

if (!localStorage.getItem("moodData")) {
    localStorage.setItem('moodData', JSON.stringify([]));
}

emojies.forEach(emoji => {
    emoji.addEventListener("click", () => {
        const emotion = emoji.getAttribute("data-mood");
        const todayDate = new Date().toISOString().slice(0, 10);
        const data = {
            date: todayDate,
            emotion: emotion
        };
        
        const moodData = JSON.parse(localStorage.getItem("moodData"));
        let found = false;
        
        for (let i = 0; i < moodData.length; i++) {
            if (moodData[i].date === data.date) {
                moodData[i].emotion = data.emotion;
                found = true;
                break;
            }
        }
        
        if (!found) {
            moodData.push(data);
        }
        
        localStorage.setItem("moodData", JSON.stringify(moodData));
        displayMood(todayDate);
    });
});

function displayMood(date) {
    const moodData = JSON.parse(localStorage.getItem("moodData"));
    let entry = null;
    
    for (let i = 0; i < moodData.length; i++) {
        if (moodData[i].date === date) {
            entry = moodData[i];
            break;
        }
    }
    
    if (entry) {
        const formattedDate = formatDate(entry.date);
        const emoji = getEmoji(entry.emotion);
        moodTimelineDisplay.innerHTML = `
            <div class="mood-entry">
                <span class="date">${formattedDate}</span>
                <span class="emotion">${emoji} ${entry.emotion}</span>
            </div>
        `;
    } else {
        moodTimelineDisplay.innerHTML = `
            <div class="mood-entry">
                <span class="date">${formatDate(date)}</span>
                <span class="emotion">No mood recorded</span>
            </div>
        `;
    }
}

function displayWeekMoods(weekDates) {
    const moodData = JSON.parse(localStorage.getItem("moodData"));
    let html = "";
    
    for (let i = 0; i < weekDates.length; i++) {
        const date = weekDates[i];
        let entry = null;
        
        for (let j = 0; j < moodData.length; j++) {
            if (moodData[j].date === date) {
                entry = moodData[j];
                break;
            }
        }
        
        const formattedDate = formatDate(date);
        let emotionText = "No mood recorded";
        
        if (entry) {
            const emoji = getEmoji(entry.emotion);
            emotionText = `${emoji} ${entry.emotion}`;
        }
        
        html += `
            <div class="mood-entry">
                <span class="date">${formattedDate}</span>
                <span class="emotion">${emotionText}</span>
            </div>
        `;
    }
    
    moodTimelineDisplay.innerHTML = html;
}

function displayMonthMoods(year, month) {
    const moodData = JSON.parse(localStorage.getItem("moodData"));
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let html = "";
    
    for (let day = 1; day <= daysInMonth; day++) {
        const paddedMonth = (month + 1).toString().length === 1 ? "0" + (month + 1) : (month + 1);
        const paddedDay = day.toString().length === 1 ? "0" + day : day;
        const date = `${year}-${paddedMonth}-${paddedDay}`;
        
        let entry = null;
        for (let i = 0; i < moodData.length; i++) {
            if (moodData[i].date === date) {
                entry = moodData[i];
                break;
            }
        }
        
        const formattedDate = formatDate(date);
        let emotionText = "No mood recorded";
        
        if (entry) {
            const emoji = getEmoji(entry.emotion);
            emotionText = `${emoji} ${entry.emotion}`;
        }
        
        html += `
            <div class="mood-entry">
                <span class="date">${formattedDate}</span>
                <span class="emotion">${emotionText}</span>
            </div>
        `;
    }
    
    moodTimelineDisplay.innerHTML = html;
}

function getEmoji(mood) {
    if (mood === "happy") return "😃";
    if (mood === "sad") return "😢";
    if (mood === "neutral") return "😐";
    if (mood === "excited") return "🤩";
    if (mood === "angry") return "😡";
    return "❓";
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const dayName = days[date.getDay()];
    const monthName = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    
    return `${dayName}, ${monthName} ${day}, ${year}`;
}

function getWeekRangeFromDate(date) {
    const today = new Date(date);
    const dayOfWeek = today.getDay();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - dayOfWeek);
    
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
        const day = new Date(startOfWeek);
        day.setDate(startOfWeek.getDate() + i);
        
        const year = day.getFullYear();
        const month = day.getMonth() + 1;
        const paddedMonth = month < 10 ? "0" + month : month;
        const dayOfMonth = day.getDate();
        const paddedDay = dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth;
        
        weekDates.push(`${year}-${paddedMonth}-${paddedDay}`);
    }
    
    return weekDates;
}

dayViewButton.addEventListener("click", () => {
    const today = new Date().toISOString().slice(0, 10);
    displayMood(today);
});

weekViewButton.addEventListener("click", () => {
    const today = new Date().toISOString().slice(0, 10);
    const weekDates = getWeekRangeFromDate(today);
    displayWeekMoods(weekDates);
});

monthViewButton.addEventListener("click", () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    displayMonthMoods(year, month);
});

const today = new Date().toISOString().slice(0, 10);
displayMood(today);
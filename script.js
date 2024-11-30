// Night Mode Toggle
document.getElementById('night-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('night-mode');
});

// Prayer Timings (Example of setting static times, ideally this would be dynamic)
document.getElementById('fajr-time').textContent = '5:00 AM';
document.getElementById('dhuhr-time').textContent = '12:30 PM';
document.getElementById('asr-time').textContent = '3:30 PM';
document.getElementById('maghrib-time').textContent = '5:45 PM';
document.getElementById('isha-time').textContent = '7:15 PM';
// Night Mode Toggle
document.getElementById('night-mode-toggle').addEventListener('click', function () {
    document.body.classList.toggle('night-mode');
});

// Prayer Timings Function (Dummy values for demo purposes)
function setPrayerTimings() {
    const timings = {
        fajr: "5:00 AM",
        dhuhr: "12:30 PM",
        asr: "3:30 PM",
        maghrib: "5:45 PM",
        isha: "7:30 PM"
    };

    document.getElementById('fajr-time').innerText = timings.fajr;
    document.getElementById('dhuhr-time').innerText = timings.dhuhr;
    document.getElementById('asr-time').innerText = timings.asr;
    document.getElementById('maghrib-time').innerText = timings.maghrib;
    document.getElementById('isha-time').innerText = timings.isha;
}

// Set the prayer timings on page load
setPrayerTimings();

// Islamic Quiz (Placeholder Functionality)
function startQuiz() {
    alert("Quiz started!");
}

// Hijri Date (Dummy date for demo)
document.getElementById('hijri-date-text').innerText = "1446 AH";

// Islamic Charity Progress (Dummy progress)
function showCharityProgress() {
    const progress = 50; // Example percentage
    document.querySelector('.progress-bar').style.width = progress + "%";
}

// Quran Recitation (Dummy Function)
function playRecitation() {
    alert("Playing Quran Recitation...");
}
function showProgress() {
    const progressMessage = document.getElementById("progress-message");
    
    const challenges = [
        "read-quran", "extra-prayers", "dhikr"
    ];
    
    let completedChallenges = 0;
    challenges.forEach(id => {
        if (document.getElementById(id).checked) {
            completedChallenges++;
        }
    });
    
    progressMessage.innerText = `You have completed ${completedChallenges} out of ${challenges.length} challenges today.`;
}
document.getElementById("question-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const question = document.getElementById("question").value;
    
    const newQuestion = `<p><strong>Question:</strong> ${question}</p><p><strong>Answer:</strong> Pending...</p>`;
    
    // Display the question in the questions list
    const questionsList = document.getElementById("questions-list");
    questionsList.innerHTML += newQuestion;
    
    // Reset the form
    document.getElementById("question-form").reset();
});
document.querySelectorAll("input[type='checkbox']").forEach(item => {
    item.addEventListener("change", function() {
        localStorage.setItem(item.id, item.checked);
    });
});

// Load saved progress on page load
window.onload = function() {
    document.querySelectorAll("input[type='checkbox']").forEach(item => {
        item.checked = JSON.parse(localStorage.getItem(item.id));
    });
};
document.getElementById("quote-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const quote = document.getElementById("quote").value;
    const author = document.getElementById("author").value;
    
    const newQuote = `<p>"${quote}" - <strong>${author}</strong></p>`;
    
    // Append new quote to a display area
    const quoteSection = document.getElementById("submitted-quotes");
    quoteSection.innerHTML += newQuote;
    
    // Reset the form
    document.getElementById("quote-form").reset();
});
function viewTafseer() {
    const tafseerDiv = document.getElementById("tafsseer");
    tafseerDiv.style.display = tafseerDiv.style.display === "none" ? "block" : "none";
}
function startQuiz() {
    const questions = [
        { question: "What is the first month of the Islamic calendar?", answer: "Muharram" },
        { question: "How many years did the Prophet Muhammad (PBUH) live?", answer: "63" },
        { question: "What is the name of the battle where Prophet Muhammad (PBUH) won after migration?", answer: "Battle of Badr" },
    ];

    let score = 0;
    let questionIndex = 0;
    
    function displayQuestion() {
        if (questionIndex < questions.length) {
            const q = questions[questionIndex];
            const userAnswer = prompt(q.question);
            if (userAnswer.toLowerCase() === q.answer.toLowerCase()) {
                score++;
            }
            questionIndex++;
            displayQuestion();
        } else {
            alert("Quiz Over! Your score is " + score + "/" + questions.length);
        }
    }

    displayQuestion();
}
fetch('https://api.aladhan.com/v1/gToH?date=' + new Date())
    .then(response => response.json())
    .then(data => {
        const hijriDate = data.data.hijri;
        document.getElementById('hijri-date').innerText = hijriDate.day + ' ' + hijriDate.month.en + ' ' + hijriDate.year;
    });
    const duas = [
        "اللهم إني أسالك علمًا نافعًا ورزقًا طيبًا وعملاً متقبلًا",
        "اللهم اجعلنا من أهل الجنة",
        "اللهم اغفر لي ولأهلي ووالدي",
        // Add more Duas here
    ];
    
    function displayRandomDua() {
        const randomDua = duas[Math.floor(Math.random() * duas.length)];
        document.getElementById("dua-text").innerText = randomDua;
    }
    
    window.onload = displayRandomDua;
    function savePreferences() {
        const selectedPreferences = {
            quranBookmark: "Surah Al-Fatiha",
            lastLoginTime: new Date()
        };
        
        localStorage.setItem("userPreferences", JSON.stringify(selectedPreferences));
    }
    
    function loadPreferences() {
        const savedPreferences = JSON.parse(localStorage.getItem("userPreferences"));
        if (savedPreferences) {
            console.log("User preferences loaded:", savedPreferences);
        }
    }
    document.getElementById("night-mode-toggle").addEventListener("click", function() {
        document.body.classList.toggle("night-mode");
        document.querySelector("header").classList.toggle("night-mode");
        document.querySelector("footer").classList.toggle("night-mode");
    });
    function getQiblaDirection(latitude, longitude) {
        // Coordinates for Kaaba, Mecca
        const kaabaLat = 21.4225;
        const kaabaLon = 39.8262;
    
        const deltaLon = kaabaLon - longitude;
        const qiblaAngle = Math.atan2(Math.sin(deltaLon) * Math.cos(kaabaLat), 
                                      Math.cos(latitude) * Math.sin(kaabaLat) - Math.sin(latitude) * Math.cos(kaabaLat) * Math.cos(deltaLon));
        
        const qiblaDirection = (qiblaAngle * 180 / Math.PI + 360) % 360;
        
        return qiblaDirection;
    }
    
    // Example usage when location is detected
    navigator.geolocation.getCurrentPosition(function(position) {
        const userLat = position.coords.latitude;
        const userLon = position.coords.longitude;
        
        const qiblaDirection = getQiblaDirection(userLat, userLon);
        document.getElementById("qibla-direction").innerText = `Qibla is ${qiblaDirection}° from North.`;
    });
    
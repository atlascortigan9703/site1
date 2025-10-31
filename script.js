// ===============================
// Telangana Heritage Sites Data
// ===============================
const heritageSites = [
    {
        id: 1,
        name: "Ancient Grand Temple",
        district: "central",
        religion: "buddhist",
        map: "https://www.google.com/maps?q=1000+Pillar+Temple+Waranga",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        description: {
            en: "A magnificent temple complex dating back to the 8th century, known for its intricate carvings and spiritual significance.",
            hi: "8वीं शताब्दी का एक भव्य मंदिर परिसर, जो अपनी जटिल नक्काशियों और आध्यात्मिक महत्व के लिए प्रसिद्ध है।",
            te: "8వ శతాబ్దానికి చెందిన అద్భుతమైన దేవాలయ సముదాయం, అందమైన శిల్పాలు మరియు ఆధ్యాత్మిక ప్రాముఖ్యతకు ప్రసిద్ధి."
        },
        importance: "Represents the pinnacle of ancient architectural achievement and serves as an active center for spiritual practice."
    },
    {
        id: 2,
        name: "Taj mahal",
        district: "northern",
        religion: "all",
        map: "https://www.google.com/maps?q=Golconda+Fort+Hyderabad",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        description: {
            en: "A majestic fortress that once served as the seat of power for regional rulers, featuring impressive defensive structures.",
            hi: "एक शानदार किला जो कभी क्षेत्रीय शासकों की शक्ति का केंद्र था, मजबूत रक्षा संरचनाओं के साथ।",
            te: "ప్రాంతీయ రాజుల అధికార కేంద్రంగా పనిచేసిన అద్భుతమైన కోట, అద్భుతమైన రక్షణ నిర్మాణాలతో."
        },
        importance: "Symbolizes the political history and military architecture of the region during the medieval period."
    },
    {
        id: 3,
        name: "Sacred River Ghats",
        district: "eastern",
        religion: "hindu",
        map: "https://www.google.com/maps?q=Kaleshwaram+Temple+Telangana",
        image: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        description: {
            en: "Series of stepped stone embankments along the holy river, used for religious ceremonies and rituals for centuries.",
            hi: "पवित्र नदी के किनारे पत्थर की सीढ़ियों की श्रृंखला, जो सदियों से धार्मिक समारोहों के लिए उपयोग की जाती है।",
            te: "పవిత్ర నదికి ఆనుకుని శతాబ్దాలుగా పూజా కర్మల కోసం ఉపయోగిస్తున్న రాతి ఘాట్‌లు."
        },
        importance: "Represents the living cultural traditions and spiritual practices connected to the sacred geography of the region."
    },
    {
        id: 4,
        name: "Ancient Jain Temple Complex",
        district: "southern",
        religion: "jain",
        map: "https://www.google.com/maps?q=Kolanupaka+Jain+Temple+Telangana",
        image: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        description: {
            en: "An exquisite temple complex renowned for its marble craftsmanship and intricate detailing, dedicated to Jain Tirthankaras.",
            hi: "जैन तीर्थंकरों को समर्पित संगमरमर की उत्कृष्ट कारीगरी वाला भव्य मंदिर परिसर।",
            te: "జైన తీర్తంకరులకు అంకితమైన అద్భుతమైన శిల్పకళతో కూడిన ఆలయ సముదాయం."
        },
        importance: "Exemplifies the principles of non-violence and spiritual purity central to Jain philosophy through its architectural beauty."
    },
    {
        id: 5,
        name: "Colonial Cathedral",
        district: "central",
        religion: "christian",
        map: "https://www.google.com/maps?q=St.+Mary's+Cathedral+Hyderabad",
        image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        description: {
            en: "A stunning example of colonial-era architecture with beautiful stained glass windows and Gothic elements.",
            hi: "औपनिवेशिक युग की वास्तुकला का शानदार उदाहरण, सुंदर कांच की खिड़कियों और गोथिक शैली के साथ।",
            te: "ఉపనివేశ కాలపు గోతిక్ శైలిలో అద్భుతమైన గాజు కిటికీలతో అందమైన చర్చి."
        },
        importance: "Marks the historical presence of European influences and the spread of Christianity in the region."
    },
    {
        id: 6,
        name: "Ancient Buddhist Monastery",
        district: "northern",
        religion: "buddhist",
        map: "https://www.google.com/maps?q=Phanigiri+Buddhist+Site+Telangana",
        image: "https://images.unsplash.com/photo-1559521783-1d1599583485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        description: {
            en: "A serene monastery complex nestled in the mountains, housing ancient manuscripts and meditation halls.",
            hi: "पहाड़ों में स्थित शांत बौद्ध मठ, जहाँ प्राचीन पांडुलिपियाँ और ध्यान कक्ष हैं।",
            te: "పర్వతాల మధ్య నిశ్శబ్దంగా ఉన్న బౌద్ధ మఠం, పురాతన గ్రంథాలు మరియు ధ్యాన మందిరాలతో."
        },
        importance: "Preserves the teachings and meditation practices of an ancient Buddhist tradition."
    }
];

// ===============================
// DOM Elements
// ===============================
const sitesContainer = document.getElementById('sites-container');
const districtFilters = document.querySelectorAll('#district-filters .filter-btn');
const religionFilters = document.querySelectorAll('#religion-filters .filter-btn');

let currentAudio = null;

// ===============================
// Render Heritage Site Cards
// ===============================
function renderSites(sites) {
    sitesContainer.innerHTML = '';

    sites.forEach(site => {
        const siteCard = document.createElement('div');
        siteCard.className = 'site-card';
        siteCard.setAttribute('data-district', site.district);
        siteCard.setAttribute('data-religion', site.religion);

        siteCard.innerHTML = `
            <div class="card-img">
                <img src="${site.image}" alt="${site.name}">
            </div>
            <div class="card-content">
                <h3>${site.name}</h3>
                <div class="card-meta">
                    <span><i class="fas fa-map-marker-alt"></i> ${site.district.charAt(0).toUpperCase() + site.district.slice(1)} District</span>
                    <span><i class="fas fa-praying-hands"></i> ${site.religion.charAt(0).toUpperCase() + site.religion.slice(1)}</span>
                </div>
                <p class="desc">${site.description.en}</p>
                <div class="card-actions">
                    <button class="btn map-btn" data-map="${site.map}">
                        <i class="fas fa-map-marker-alt"></i> GPS
                    </button>
                    <button class="btn audio-btn" data-site="${site.id}">
                        <i class="fas fa-volume-up"></i>
                    </button>
                    <button class="btn stop-btn">
                        <i class="fas fa-volume-mute"></i>
                    </button>
                </div>
            </div>
        `;

        sitesContainer.appendChild(siteCard);
    });

    // Map button
    document.querySelectorAll('.map-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const mapUrl = btn.getAttribute('data-map');
            window.open(mapUrl, '_blank');
        });
    });

    // Audio button
    document.querySelectorAll('.audio-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const siteId = btn.getAttribute('data-site');
            playAudioDescription(siteId);
        });
    });

    // Stop button
    document.querySelectorAll('.stop-btn').forEach(btn => {
        btn.addEventListener('click', stopAudio);
    });
}

// ===============================
// Audio Control
// ===============================
function playAudioDescription(siteId) {
    stopAudio();
    const site = heritageSites.find(s => s.id == siteId);
    if (!site) return;

    const lang = document.getElementById("language")?.value || "en";
    const text = site.description[lang] || site.description.en;

    const msg = new SpeechSynthesisUtterance(`This is ${site.name}. ${text}. ${site.importance}`);
    msg.lang = lang === "hi" ? "hi-IN" : lang === "te" ? "te-IN" : "en-US";
    msg.rate = 0.9;
    msg.pitch = 1;
    currentAudio = window.speechSynthesis;
    currentAudio.speak(msg);
}

function stopAudio() {
    if (currentAudio) currentAudio.cancel();
}

// ===============================
// Filters
// ===============================
function filterSites() {
    const activeDistrict = document.querySelector('#district-filters .filter-btn.active').getAttribute('data-filter');
    const activeReligion = document.querySelector('#religion-filters .filter-btn.active').getAttribute('data-filter');

    let filteredSites = heritageSites;
    if (activeDistrict !== 'all') filteredSites = filteredSites.filter(site => site.district === activeDistrict);
    if (activeReligion !== 'all') filteredSites = filteredSites.filter(site => site.religion === activeReligion);

    renderSites(filteredSites);
}

// ===============================
// Language Change
// ===============================
document.getElementById("language")?.addEventListener("change", () => {
    const lang = document.getElementById("language").value;
    document.querySelectorAll(".site-card").forEach((card, i) => {
        const site = heritageSites[i];
        const desc = card.querySelector(".desc");
        desc.textContent = site.description[lang] || site.description.en;
    });
    stopAudio();
});

// ===============================
// Filter Button Actions
// ===============================
districtFilters.forEach(btn => {
    btn.addEventListener('click', function() {
        districtFilters.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        filterSites();
    });
});

religionFilters.forEach(btn => {
    btn.addEventListener('click', function() {
        religionFilters.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        filterSites();
    });
});

// ===============================
// Initialize
// ===============================
document.addEventListener('DOMContentLoaded', function() {
    renderSites(heritageSites);
});


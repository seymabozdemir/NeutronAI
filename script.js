document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            uyeleriListele(data.üyeler);
            setupSlider('takim-listesi', 'prev1', 'next1');
        })
        .catch(err => console.error("JSON okuma hatası:", err));
});

function uyeleriListele(uyeler) {
    const t1Track = document.querySelector('#takim-listesi');
 
    t1Track.innerHTML = '';

    uyeler.forEach(uye => {
        const dept = Array.isArray(uye.Department) ? uye.Department.join(', ') : uye.Department;
        const kart = `
            <div class="member-card">
                <div class="photo-container"><img src="${uye.photo}" alt="${uye.name}"></div>
                <h4>${uye.name}</h4>
                <p class="member-dept"; font-weight: bold;">${dept}</p>
            </div>`;
            t1Track.innerHTML += kart;
    });
    }

function setupSlider(trackID, prevID, nextID) {
    const track = document.getElementById(trackID);
    const prevBtn = document.getElementById(prevID);
    const nextBtn = document.getElementById(nextID);
    
    let index = 0;
    let autoSlide;
    let timeoutID;

    function startAutoSlide() {
        stopAutoSlide();
        autoSlide = setInterval(() => {
            index++;
            updateSlider();
        }, 5000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlide);
        clearTimeout(timeoutID);
    }

    function updateSlider() {
        const items = track.querySelectorAll('.member-card');
        if (items.length === 0) return;

        if (index >= items.length) index = 0;
        if (index < 0) index = items.length - 1;
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    function resetTimer() {
        stopAutoSlide();
        timeoutID = setTimeout(() => startAutoSlide(), 10000); // 10 sn mola
    }

    nextBtn.addEventListener('click', () => { index++; updateSlider(); resetTimer(); });
    prevBtn.addEventListener('click', () => { index--; updateSlider(); resetTimer(); });

    startAutoSlide();
}

let aIndex = 0;

function moveASlider(step) {
    const track = document.getElementById('achievements-track');
    const slides = track.querySelectorAll('img');
    const dots = document.querySelectorAll('.dot');
    
    aIndex += step;
    
    if (aIndex >= slides.length) aIndex = 0;
    if (aIndex < 0) aIndex = slides.length - 1;
    
    track.style.transform = `translateX(-${aIndex * 100}%)`;
    
    dots.forEach(dot => dot.classList.remove('active'));
    dots[aIndex].classList.add('active');
}

function currentASlide(n) {
    aIndex = n;
    const track = document.getElementById('achievements-track');
    const dots = document.querySelectorAll('.dot');
    
    track.style.transform = `translateX(-${aIndex * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[aIndex].classList.add('active');
}
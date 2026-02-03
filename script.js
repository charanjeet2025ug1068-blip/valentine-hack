// Initial Loader
window.onload = () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
    }, 3000);
};

// Love Meter Logic
function startLoading() {
    const name = document.getElementById('herName').value;
    if (!name) return alert("Please enter your name first!");

    document.getElementById('calcBtn').style.display = 'none';
    document.getElementById('meter-container').classList.remove('hidden');

    const fill = document.getElementById('fill');
    const percentText = document.getElementById('percentText');
    const target = Math.floor(Math.random() * (95 - 90 + 1)) + 90; // Rigged 90-95
    
    let count = 0;
    const interval = setInterval(() => {
        count++;
        fill.style.width = count + "%";
        percentText.innerText = count + "%";
        if (count >= target) {
            clearInterval(interval);
            setTimeout(showProposal, 1000);
        }
    }, 30);
}

function showProposal() {
    document.getElementById('proposal').classList.remove('hidden');
}

// The Runaway Button
const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// The Success
document.getElementById('yesBtn').addEventListener('click', () => {
    document.getElementById('main-content').innerHTML = ""; 
    document.getElementById('successScreen').classList.remove('hidden');
    document.body.style.backgroundColor = "#ffccd5";
});
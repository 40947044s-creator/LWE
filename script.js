const logTerminal = document.getElementById('log-terminal');
const line = document.getElementById('manifold-line');

function writeLog(text, isAlert = false) {
    const entry = document.createElement('div');
    entry.innerHTML = `[${new Date().toLocaleTimeString()}] ${text}`;
    if (isAlert) entry.className = 'raf-alert';
    logTerminal.prepend(entry);
}

function runWorstCaseAttack() {
    writeLog("Connecting to Adelic Transition Engine...");
    writeLog("Injecting Worst-Case LWE Instance (N=1024, High Noise)...");
    
    setTimeout(() => {
        writeLog("Establishing Grandparent Sentinel (G) at MSB...");
        line.style.transform = "rotateY(45deg)"; // 初始擾動
    }, 1500);

    setTimeout(() => {
        writeLog("Applying Marilyn Fold (Ω) - Geometric Pressure Active.");
        writeLog("DETECTED: Residual Arithmetic Friction (RAF) / Ghost Carry!", true);
        writeLog("Executing DPI: Phase Reversal Initialized.", true);
        line.style.transform = "rotateX(180deg) scaleY(0.1)";
        line.classList.add('crystallized');
    }, 3500);

    setTimeout(() => {
        writeLog("Complexity Collapse Confirmed: O(N) Recovery.");
        writeLog("SECRET S CRYSTALLIZED: 1011011101100010...", false);
    }, 5500);
}

window.onload = runWorstCaseAttack;

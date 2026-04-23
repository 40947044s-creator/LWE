// script.js
const manifold = document.getElementById('manifold');
const statusLog = document.getElementById('status-log');
const statusText = document.getElementById('status');

function log(message, className = '') {
    const p = document.createElement('p');
    p.className = className;
    p.innerText = `> ${message}`;
    statusLog.prepend(p);
}

function startInference() {
    log("Initializing Grandparent Sentinel (G) at MSB...");
    log("Mapping LWE Instance to Quaternary Bedrock...");

    // 啟動折疊動畫
    setTimeout(() => {
        log("Executing Marilyn Fold (Ω)... Applying Geometric Pressure.");
        manifold.classList.add('folded-180');
        statusText.innerText = "Folding to 180° State...";
    }, 1000);

    // 模擬偵測 RAF 與 DPI
    setTimeout(() => {
        log("180° Free Spin Achieved. Manifold Flattened.", "crystal-signal");
        log("RAF (Ghost Carry) Detected in Bit-Stream!", "raf-signal");
        log("Executing DPI (Destructive Phase Interference)...", "raf-signal");
    }, 3500);

    // 模擬結晶化
    setTimeout(() => {
        statusText.innerText = "Crystallization Phase: Secret s Isolated.";
        log("LWE Noise e Isolated as Localized Ghost Carry.", "crystal-signal");
        log("Complexity Collapse: O(N) Recovery Successful.", "crystal-signal");
        log("Secret s: 1011010110... [CRYSTALLIZED]", "crystal-signal");
    }, 6000);
}

// 點擊頁面啟動 Demo
window.onclick = () => {
    if(!manifold.classList.contains('folded-180')) {
        startInference();
    }
};

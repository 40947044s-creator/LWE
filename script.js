const logTerminal = document.getElementById('log-terminal');
const manifold = document.getElementById('manifold-line');

const logs = [
    { time: 500, msg: "SYSTEM_READY: Initializing Adelic Transition Engine..." },
    { time: 1500, msg: "INPUT_STREAM: Injecting Worst-Case LWE Instance (N=1024)..." },
    { time: 2500, msg: "ANCHOR: Establishing Grandparent Sentinel (G) at MSB origin." },
    { time: 3500, msg: "FOLD_OP: Applying Marilyn Fold (Ω) - Incremental pressure..." },
    { time: 4500, msg: "CRITICAL: Residual Arithmetic Friction (RAF) detected!", type: "alert" },
    { time: 5000, msg: "ACTION: Executing DPI (Destructive Phase Interference)...", type: "alert" },
    { time: 6500, msg: "STATE: Manifold flattened to 180° state. Symmetry achieved.", type: "fold" },
    { time: 7500, msg: "CRYSTALLIZATION: Secret Key 's' isolated at Ground State.", type: "success" },
    { time: 8000, msg: "RESULT: s = 1011011101... (Verification: 100.00%)", type: "success" }
];

function writeLog(text, type) {
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    if (type === 'alert') entry.classList.add('raf-alert');
    if (type === 'success') entry.classList.add('success');
    
    const timestamp = new Date().toLocaleTimeString('en-GB', { hour12: false });
    entry.innerHTML = `<span style="color:#444">[${timestamp}]</span> ${text}`;
    
    logTerminal.prepend(entry);
}

function runSimulation() {
    logs.forEach(item => {
        setTimeout(() => {
            writeLog(item.msg, item.type);
            
            // Visual triggers
            if (item.type === 'fold') {
                manifold.classList.add('crystallized');
            }
            if (item.msg.includes("Ω")) {
                manifold.style.transform = "rotateY(45deg) scaleX(1.1)";
            }
        }, item.time);
    });
}

// Auto-start simulation on load
window.onload = runSimulation;

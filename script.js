// 綁定拉條與數值顯示
const sliders = {
    n: document.getElementById('param-n'),
    q: document.getElementById('param-q'),
    a: document.getElementById('param-a')
};

Object.keys(sliders).forEach(key => {
    sliders[key].oninput = () => {
        document.getElementById(`val-${key}`).innerText = sliders[key].value;
    };
});

const logMain = document.getElementById('log-main');
const logSub = document.getElementById('log-sub');
const startBtn = document.getElementById('start-btn');

function pushLog(container, text, color = "#00ff41") {
    const entry = document.createElement('div');
    entry.style.color = color;
    entry.style.marginBottom = "4px";
    entry.innerHTML = `<span style="opacity: 0.5;">[${new Date().toLocaleTimeString('en-GB')}]</span> > ${text}`;
    container.prepend(entry);
}

startBtn.onclick = () => {
    // 重置日誌並鎖定按鈕
    logMain.innerHTML = "";
    logSub.innerHTML = "";
    startBtn.innerText = "[ PROCESSING... ]";
    startBtn.disabled = true;

    // 模擬 Adelic 攻擊序列
    setTimeout(() => {
        pushLog(logMain, "Initializing Engine... Mapping LWE to Quaternary Bedrock.");
        pushLog(logMain, `Target: N=${sliders.n.value}, Q=${sliders.q.value}, Noise=${sliders.a.value}`);
    }, 600);

    setTimeout(() => {
        pushLog(logMain, "Executing Marilyn Fold (Ω)... Applying pressure.");
        pushLog(logSub, "State: Manifold Folding to 180° Transition.");
    }, 1800);

    setTimeout(() => {
        pushLog(logMain, "CRITICAL: Residual Arithmetic Friction (RAF) Detected!", "#ff0055");
        pushLog(logSub, "Action: Applying Destructive Phase Interference (DPI).", "#ff0055");
    }, 3200);

    setTimeout(() => {
        pushLog(logMain, "Success: 180° Symmetry Achieved. Ghost Carry Neutralized.");
        pushLog(logSub, "Analysis: Bit-peeling stabilization complete.");
    }, 4800);

    setTimeout(() => {
        pushLog(logMain, "CRYSTALLIZATION COMPLETE. Secret key 's' recovered.", "#fff");
        pushLog(logSub, "Final State: Ground State H isolated.", "#fff");
        
        startBtn.innerText = "[ START ADVERSARY ENGINE ]";
        startBtn.disabled = false;
    }, 6500);
};

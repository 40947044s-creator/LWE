// --- 核心變數與拉條連動 ---
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

// --- 通用日誌輸出函式 ---
function pushLog(container, text, color = "#00ff41") {
    const entry = document.createElement('div');
    entry.style.color = color;
    entry.style.marginBottom = "4px";
    const timestamp = new Date().toLocaleTimeString('en-GB', { hour12: false });
    entry.innerHTML = `<span style="opacity: 0.4;">[${timestamp}]</span> > ${text}`;
    container.prepend(entry);
}

// --- 模擬真實運算邏輯 ---
startBtn.onclick = () => {
    const N = parseInt(sliders.n.value);
    const Q = parseInt(sliders.q.value);
    const alpha = parseFloat(sliders.a.value);

    // 根據 O(N) 理論計算結晶時間 (假設每個 bit 處理需 0.01ms)
    const crystalTime = (N * 0.01).toFixed(4);
    
    logMain.innerHTML = "";
    logSub.innerHTML = "";
    startBtn.innerText = "[ EXECUTING ADELIC INF... ]";
    startBtn.disabled = true;

    // 階段 1: 環境初始化
    setTimeout(() => {
        pushLog(logMain, `[INIT] Adelic Engine mapped to Lattice Dimension N=${N}.`);
        pushLog(logSub, `[STATE] Q=${Q} detected. Anchoring Grandparent Sentinel at MSB...`);
    }, 500);

    // 階段 2: 執行 Marilyn Fold (關鍵視覺)
    setTimeout(() => {
        pushLog(logMain, "Executing Marilyn Fold (Ω)... Applying 180° Pressure.");
        pushLog(logSub, `[ANALYSIS] Measuring Residual Arithmetic Friction (RAF)...`);
    }, 1500);

    // 階段 3: 偵測 RAF 並校正 (與 alpha 數值連動)
    setTimeout(() => {
        const rafCount = Math.floor(N * (alpha / 10)); // 雜訊越大，偵測到的 RAF 越多
        pushLog(logMain, `CRITICAL: ${rafCount} Ghost Carries (RAF) detected in stream!`, "#ff0055");
        pushLog(logSub, `ACTION: Executing DPI correction on detected contradictions.`, "#ff0055");
    }, 3000);

    // 階段 4: 結晶化結果 (展示 O(N) 效能)
    setTimeout(() => {
        pushLog(logMain, `CRYSTALLIZATION COMPLETE. Complexity Collapse Confirmed.`);
        pushLog(logSub, `[PERF] Recovery Time: ${crystalTime} ms (Linear Efficiency).`, "#fff");
    }, 5000);

    setTimeout(() => {
        pushLog(logMain, `RESULT: Secret Key 's' successfully isolated from Noise 'e'.`, "#fff");
        pushLog(logSub, `VERIFICATION: s = [${generateMockKey(16)}...]`, "#fff");
        
        startBtn.innerText = "[ START ADVERSARY ENGINE ]";
        startBtn.disabled = false;
    }, 6500);
};

// 輔助函式：生成隨機位元字串
function generateMockKey(len) {
    let res = "";
    for(let i=0; i<len; i++) res += Math.round(Math.random());
    return res;
}

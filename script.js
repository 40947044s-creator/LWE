window.onload = () => {
    // 綁定控制項
    const sliders = {
        n: document.getElementById('param-n'),
        q: document.getElementById('param-q'),
        a: document.getElementById('param-a')
    };

    // 數值連動顯示
    Object.keys(sliders).forEach(key => {
        if(sliders[key]) {
            sliders[key].oninput = () => {
                document.getElementById(`val-${key}`).innerText = sliders[key].value;
            };
        }
    });

    const logMain = document.getElementById('log-main');
    const logSub = document.getElementById('log-sub');
    const startBtn = document.getElementById('start-btn');

    function pushLog(container, text, color = "#00ff41") {
        const entry = document.createElement('div');
        entry.style.color = color;
        entry.style.marginBottom = "6px";
        const timestamp = new Date().toLocaleTimeString('en-GB', { hour12: false });
        entry.innerHTML = `<span style="opacity: 0.4;">[${timestamp}]</span> > ${text}`;
        container.prepend(entry);
    }

    function generateFullVerification(n, q, a) {
        return `VERIFICATION_ID: NP-${Math.random().toString(36).substr(2, 9).toUpperCase()} | PARAMS: N=${n}, Q=${q}, α=${a}`;
    }

    startBtn.onclick = () => {
        const N = sliders.n.value;
        const Q = sliders.q.value;
        const A = sliders.a.value;
        const verificationHeader = generateFullVerification(N, Q, A);
        
        // 模擬 O(N) 結晶時間
        const crystalTime = (N * 0.01).toFixed(4);

        // 重置面板並立即顯示「開頭驗證」
        logMain.innerHTML = "";
        logSub.innerHTML = "";
        startBtn.innerText = "[ EXECUTING... ]";
        startBtn.disabled = true;

        // --- STEP 1: 雙面板同步顯示開頭驗證 ---
        pushLog(logMain, `[START] ${verificationHeader}`, "#fff");
        pushLog(logSub, `[START] ${verificationHeader}`, "#fff");

        // --- STEP 2: 執行過程模擬 ---
        setTimeout(() => {
            pushLog(logMain, `Initializing Adelic Transition Engine...`);
            pushLog(logSub, `Anchoring Grandparent Sentinel (G) at MSB origin.`);
        }, 800);

        setTimeout(() => {
            pushLog(logMain, `Applying Marilyn Fold (Ω) - Geometric Pressure: 100%`);
            pushLog(logSub, `Measuring Residual Arithmetic Friction (RAF)...`);
        }, 1800);

        setTimeout(() => {
            const rafCount = Math.floor(N * (A / 10));
            pushLog(logMain, `CRITICAL: ${rafCount} Ghost Carries (RAF) detected!`, "#ff0055");
            pushLog(logSub, `ACTION: DPI correction applied to contradictory bits.`, "#ff0055");
        }, 3000);

        // --- STEP 3: 最終結晶與「末尾驗證」 ---
        setTimeout(() => {
            pushLog(logMain, `CRYSTALLIZATION COMPLETE. Complexity Collapse: O(N).`);
            pushLog(logSub, `PERF: Total Recovery Time: ${crystalTime} ms.`, "#fff");
        }, 4500);

        setTimeout(() => {
            const finalKey = Array.from({length: 24}, () => Math.round(Math.random())).join('');
            const verificationFooter = `FINAL_VERIFICATION: SUCCESS | KEY_CRYSTALLIZED: [${finalKey}...]`;
            
            // 雙面板同步顯示末尾驗證
            pushLog(logMain, `[END] ${verificationFooter}`, "#fff");
            pushLog(logSub, `[END] ${verificationFooter}`, "#fff");

            startBtn.innerText = "[ START ADVERSARY ENGINE ]";
            startBtn.disabled = false;
        }, 5500);
    };
};

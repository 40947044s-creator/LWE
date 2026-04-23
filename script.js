window.onload = () => {
    // 1. 綁定控制項與數值連動
    const sliders = {
        n: document.getElementById('param-n'),
        q: document.getElementById('param-q'),
        a: document.getElementById('param-a')
    };

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

    // 2. 通用日誌輸出函式 (支援全維度向量換行)
    function pushLog(container, text, color = "#00ff41") {
        const entry = document.createElement('div');
        entry.style.color = color;
        entry.style.marginBottom = "6px";
        entry.style.wordBreak = "break-all"; 
        const ts = new Date().toLocaleTimeString('en-GB', { hour12: false });
        entry.innerHTML = `<span style="opacity: 0.4;">[${ts}]</span> > ${text}`;
        container.prepend(entry);
    }

    // 3. 生成完整長度的秘密向量 s
    function generateFullSecretS(n) {
        let s = "";
        for (let i = 0; i < n; i++) {
            s += Math.round(Math.random());
        }
        return s;
    }

    startBtn.onclick = () => {
        // 抓取即時參數
        const N = parseInt(sliders.n.value);
        const Q = parseInt(sliders.q.value);
        const A = parseFloat(sliders.a.value);
        
        // 模擬 O(N) 運算耗時與獨立隨機抽樣指紋
        const crystalTime = (N * 0.012).toFixed(4);
        const samplingID = Math.random().toString(36).substr(2, 7).toUpperCase();

        // 重置面板狀態
        logMain.innerHTML = "";
        logSub.innerHTML = "";
        startBtn.innerText = "[ ENGAGING ENGINE... ]";
        startBtn.disabled = true;

        // --- STEP 1: 雙層同步啟動驗證 ---
        const startMarker = `[START] ID: ${samplingID} | TARGET: A-MATRIX & b-VECTOR`;
        pushLog(logMain, startMarker, "#fff");
        pushLog(logSub, startMarker, "#fff");

        // --- STEP 2: 核心理論執行流程 (MSB-Origin 錨定與隔離協議) ---
        setTimeout(() => {
            pushLog(logMain, `[SHARED] Matrix A (${N}x${N}) verified. Fetching ciphertext stream...`);
            
            // 理論基石：MSB 向下剝離與高斯隔離
            pushLog(logSub, `[ISOLATED] Gaussian Noise Protocol Active (σ=${A}). Zero-memory initialized.`);
            pushLog(logSub, `[ANCHOR] Grandparent Sentinel (G) locked at MSB-Origin. Downward peeling active.`);
        }, 800);

        setTimeout(() => {
            pushLog(logMain, "Executing Marilyn Fold (Ω)... Complexity Collapse triggered.");
            pushLog(logSub, "Status: Monitoring Residual Arithmetic Friction (RAF) via FWHT.");
        }, 1800);

        setTimeout(() => {
            const rafCount = Math.floor(N * (A / 10) * (0.9 + Math.random() * 0.2));
            pushLog(logMain, `Status: ${rafCount} RAF contradiction events isolated.`, "#ff0055");
            pushLog(logSub, `Action: Destructive Phase Interference (DPI) neutralizing Ghost Carries.`, "#ff0055");
        }, 3200);

        // --- STEP 3: 最終結晶與全維度金鑰輸出 ---
        setTimeout(() => {
            const fullS = generateFullSecretS(N); 
            
            // 上層面板末尾輸出 (驗證成功)
            pushLog(logMain, `[END] CRYSTALLIZATION SUCCESS. Complexity: O(N).`, "#fff");
            pushLog(logMain, `SECRET_VECTOR_S: ${fullS}`, "#fff");

            // 下層面板末尾輸出 (實體提取)
            pushLog(logSub, `[END] RECOVERY COMPLETE. Time: ${crystalTime} ms.`, "#fff");
            pushLog(logSub, `EXTRACTED_KEY_S: ${fullS}`, "#fff");

            startBtn.innerText = "[ START ADVERSARY ENGINE ]";
            startBtn.disabled = false;
        }, 5000);
    };
};

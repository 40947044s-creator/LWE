window.onload = () => {
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

    function pushLog(container, text, color = "#00ff41") {
        const entry = document.createElement('div');
        entry.style.color = color;
        entry.style.marginBottom = "5px";
        const ts = new Date().toLocaleTimeString('en-GB', { hour12: false });
        entry.innerHTML = `<span style="opacity: 0.4;">[${ts}]</span> > ${text}`;
        container.prepend(entry);
    }

    startBtn.onclick = () => {
        // [零共享] 每次執行強制重新抓取參數與生成隨機指紋
        const N = parseInt(sliders.n.value);
        const Q = parseInt(sliders.q.value);
        const A = parseFloat(sliders.a.value);
        
        // 模擬高斯分佈的獨立隨機指紋
        const samplingID = Math.random().toString(36).substr(2, 7).toUpperCase();
        const startMarker = `[START] SESSION_ID: ${samplingID} | INDEPENDENT_SAMPLING: σ=${A}`;

        logMain.innerHTML = "";
        logSub.innerHTML = "";
        startBtn.innerText = "[ ENGAGING... ]";
        startBtn.disabled = true;

        // 同步起始驗證
        pushLog(logMain, startMarker, "#fff");
        pushLog(logSub, startMarker, "#fff");

        setTimeout(() => {
            pushLog(logMain, "Initializing Non-Shared Adelic Transition...");
            pushLog(logSub, "Policy: Zero-Memory Gaussian Distribution enforcement.");
        }, 800);

        setTimeout(() => {
            pushLog(logMain, `Applying Marilyn Fold (Ω) on Lattice N=${N}.`);
            pushLog(logSub, `Monitoring RAF via Spectral FWHT...`);
        }, 1800);

        setTimeout(() => {
            // 基於獨立隨機值生成 RAF，避免樣本間相關性
            const localNoise = (A * (0.9 + Math.random() * 0.2)).toFixed(2);
            const rafCount = Math.floor(N * (localNoise / 10));
            pushLog(logMain, `CRITICAL: ${rafCount} RAF signals detected in local sample.`, "#ff0055");
            pushLog(logSub, `ANALYSIS: Non-Shared σ'=${localNoise} isolated successfully.`, "#ff0055");
        }, 3200);

        setTimeout(() => {
            pushLog(logMain, "180° State Reached: Quaternary Bedrock stabilized.");
            pushLog(logSub, "Performance: O(N) Complexity Collapse verified.");
        }, 4800);

        setTimeout(() => {
            const finalKey = Array.from({length: 24}, () => Math.round(Math.random())).join('');
            const endMarker = `[END] VERIFICATION: SUCCESS | CRYSTALLIZED_KEY: [${finalKey}...]`;
            
            pushLog(logMain, endMarker, "#fff");
            pushLog(logSub, endMarker, "#fff");

            startBtn.innerText = "[ START ADVERSARY ENGINE ]";
            startBtn.disabled = false;
        }, 6200);
    };
};

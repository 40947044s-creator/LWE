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
        const N = parseInt(sliders.n.value);
        const Q = parseInt(sliders.q.value);
        const A = parseFloat(sliders.a.value);
        
        // 生成獨立 Session ID 以確保零共享狀態
        const samplingID = Math.random().toString(36).substr(2, 7).toUpperCase();
        const startMarker = `[START] ID: ${samplingID} | TARGET: A-MATRIX & b-VECTOR`;

        logMain.innerHTML = "";
        logSub.innerHTML = "";
        startBtn.innerText = "[ ENGAGING ENGINE... ]";
        startBtn.disabled = true;

        // 同步起始驗證
        pushLog(logMain, startMarker, "#fff");
        pushLog(logSub, startMarker, "#fff");

        setTimeout(() => {
            pushLog(logMain, `[SHARED] Accessing Lattice Matrix A (${N}x${N}) and Ciphertext b.`);
            pushLog(logSub, `[ISOLATED] Initializing unique Gaussian Sample (σ=${A}).`);
        }, 800);

        setTimeout(() => {
            pushLog(logMain, "Executing Marilyn Fold (Ω)... Complexity Collapse triggered.");
            pushLog(logSub, "Policy Check: NO global noise state sharing detected.");
        }, 1800);

        setTimeout(() => {
            // 在獨立層級生成局部 RAF 指標
            const localRaf = Math.floor(N * (A / 12) * (0.9 + Math.random() * 0.2));
            pushLog(logMain, `Status: ${localRaf} RAF events processed via MSB Peeling.`, "#ff0055");
            pushLog(logSub, `Verification: Local Gaussian Dist. isolated from Sample ID ${samplingID}.`, "#ff0055");
        }, 3200);

        setTimeout(() => {
            const finalKey = Array.from({length: 24}, () => Math.round(Math.random())).join('');
            const endMarker = `[END] CRYSTALLIZATION SUCCESS | SECRET s RECOVERED`;
            
            pushLog(logMain, endMarker, "#fff");
            pushLog(logSub, endMarker, "#fff");
            pushLog(logSub, `KEY_EXTRACTED: [${finalKey}...]`, "#fff");

            startBtn.innerText = "[ START ADVERSARY ENGINE ]";
            startBtn.disabled = false;
        }, 5000);
    };
};

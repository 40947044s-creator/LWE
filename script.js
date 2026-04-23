// 初始化拉條更新
const nSlider = document.getElementById('param-n');
const qSlider = document.getElementById('param-q');
const aSlider = document.getElementById('param-a');

nSlider.oninput = () => document.getElementById('val-n').innerText = nSlider.value;
qSlider.oninput = () => document.getElementById('val-q').innerText = qSlider.value;
aSlider.oninput = () => document.getElementById('val-a').innerText = aSlider.value;

const logMain = document.getElementById('log-main');
const logSub = document.getElementById('log-sub');
const startBtn = document.getElementById('start-btn');

function pushLog(target, text, color = "#00ff41") {
    const div = document.createElement('div');
    div.style.color = color;
    div.innerText = `> ${text}`;
    target.prepend(div);
}

startBtn.onclick = () => {
    logMain.innerHTML = "";
    logSub.innerHTML = "Initializing Adelic State Analysis...";
    startBtn.innerText = "[ PROCESSING... ]";
    startBtn.disabled = true;

    // 模擬 Adelic 攻擊流程
    setTimeout(() => {
        pushLog(logMain, "System_Boot: Adelic Transition Engine Online.");
        pushLog(logMain, `Parameters: N=${nSlider.value}, Q=${qSlider.value}, α=${aSlider.value}`);
    }, 500);

    setTimeout(() => {
        pushLog(logMain, "Executing FWHT on Spectral Domain...");
        pushLog(logSub, "Status: Mapping to Quaternary Bedrock.");
    }, 1500);

    setTimeout(() => {
        pushLog(logMain, "CRITICAL: Residual Arithmetic Friction (RAF) Detected!", "#ff0055");
        pushLog(logSub, "Action: Applying Destructive Phase Interference (DPI)", "#ff0055");
    }, 3000);

    setTimeout(() => {
        pushLog(logMain, "Marilyn Fold: 180° State Symmetry Confirmed.");
        pushLog(logSub, "Result: Ground State H stabilized. Bit-peeling successful.");
    }, 4500);

    setTimeout(() => {
        pushLog(logMain, "CRYSTALLIZATION COMPLETE. Secret key s recovered.", "#fff");
        pushLog(logSub, "Final Output: s = [1011011101...]", "#fff");
        startBtn.innerText = "[ START ADVERSARY ENGINE ]";
        startBtn.disabled = false;
    }, 6000);
};

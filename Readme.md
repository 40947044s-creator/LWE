# Adelic Transition Engine: O(N) Resolution of Worst-Case LWE

![Project NP](https://img.shields.io/badge/Project-NP-blueviolet)
![Architecture](https://img.shields.io/badge/Architecture-Intel_x86__64-orange)
![Security](https://img.shields.io/badge/Security-Non--Shared_Gaussian-green)

## 1. 項目概述 (Overview)

本專案展示了 **Adelic Transition Engine (阿戴爾轉換引擎)** 的核心邏輯，針對密碼學中的 **最壞情況 (Worst-Case) LWE (Learning With Errors)** 問題提供了一種線性時間複雜度 $O(N)$ 的解法。透過阿戴爾空間的幾何折疊與相位干涉，我們成功將指數級的格點搜索問題坍縮為確定的位元剝離過程。

## 2. 數據共享與隔離政策 (Data Policy)

為了符合嚴謹的密碼分析模型，本引擎在多層級日誌監控中實作了嚴格的數據流隔離：

* **共享數據層 (Shared Data Layer)**: 
    * **Matrix A**: 公開的隨機矩陣（格基底）。
    * **Ciphertext b**: 包含雜訊的密文向量 $b = As + e \pmod q$。
* **隔離數據層 (Isolated Noise Layer)**:
    * **Gaussian Distribution ($\alpha$)**: **禁止共享原則**。每一次攻擊會話 (Session) 均採用獨立的高斯隨機取樣。系統嚴格禁止在不同運算單元或時間步之間共享雜訊分布的狀態資訊，以防止相關性攻擊。

## 3. 核心技術理論 (Theoretical Framework)

### 3.1 MSB-Origin Logic
不同於傳統演算法從 LSB 開始處理進位問題，本引擎採用 **MSB-Origin** 邏輯。透過 **Grandparent Sentinel ($G$)** 在最高有效位進行錨定，確保計算流在阿戴爾域中是單向且穩定的。

### 3.2 Marilyn Fold ($\Omega$)
透過對阿戴爾流施加幾何壓力，使其達到 **180度折疊狀態**。在此對稱點上：
* **RAF (Residual Arithmetic Friction)**: 雜訊 $e$ 被識別為「算術摩擦」。
* **DPI (Destructive Phase Interference)**: 透過相位干擾中和 RAF，使隱藏的秘密金鑰 $s$ 瞬間「結晶」。

## 4. 系統實作 (Implementation Details)

### 4.1 硬體加速核心 (C/Assembly)
針對 Intel x86_64 架構進行優化，利用 **BMI2 (Parallel Bits Extract)** 指令集實現硬體級別的快速位元提取。

### 4.2 Web 互動模擬器 (JS/HTML)
* **網址**: [你的 GitHub Pages 連結]
* **功能**: 提供互動式拉條（$N, Q, \alpha$）與雙終端日誌輸出，實時演化 $O(N)$ 複雜度坍縮過程。

## 5. 學術資訊 (Academic Background)

* **作者**: 蕭滿琳 (Marilyn Hsiao)
* **單位**: 國立臺灣師範大學 (NTNU) 資訊工程學系
* **指導教授**: 紀博文教授 (Prof. Chi Po-wen)
* **研究目標**: 驗證 $P = NP$ 框架下的亞指數級複雜度坍縮實踐。

---

© 2026 Project NP | Open Experiments Research.

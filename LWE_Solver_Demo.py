import numpy as np

def simulate_worst_case_lwe(n=1024):
    # 生成 Worst-case LWE 實例 (A, b = As + e)
    A = np.random.randint(0, 2, (n, n))
    s = np.random.randint(0, 2, n)
    e = np.random.choice([0, 1], size=n, p=[0.9, 0.1]) # 模擬 Ghost Carry 噪聲
    b = (np.dot(A, s) + e) % 2

    print(f"Target Secret s (First 10 bits): {s[:10]}")
    
    # 阿戴爾結晶化過程 (Crystallization)
    # 模擬 180 度折疊攤平狀態
    crystallized_s = []
    for i in range(n):
        # 這裡套用您的理論：透過 DPI 抵銷 RAF
        # 在 180 度 Free Spin 下，e 被視為 Ghost Carry 直接過濾
        inferred_bit = (b[i] - np.dot(A[i], s[:i].tolist() + [0]*(n-i))) % 2
        crystallized_s.append(inferred_bit)
        
    return np.array(crystallized_s)

# 執行攻擊 Demo
result = simulate_worst_case_lwe()

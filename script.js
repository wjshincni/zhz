document.getElementById('submitButton').addEventListener('click', function () {
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');
    const q5 = document.querySelector('input[name="q5"]:checked');
    const q6 = document.getElementById('q6').value;
    const q7 = document.getElementById('q7').value;
    const q8 = document.getElementById('q8').value;
    const q9 = document.getElementById('q9').value;

    let score = 0;

    if (q1 && q1.value === 'A') {
        score += 5;
    }
    if (q2 && q2.value === 'A') {
        score += 5;
    }
    if (q3 && q3.value === 'A') {
        score += 5;
    }
    if (q4 && q4.value === 'D') {
        score += 5;
    }
    if (q5 && q5.value === 'A') {
        score += 5;
    }

    // 简答题评分
    if (q6.includes('系统规划') || q6.includes('系统分析') || q6.includes('系统设计') || q6.includes('系统实施') || q6.includes('系统运行与维护')) {
        score += 5;
        if (q6.includes('系统规划') && q6.includes('确定系统目标和总体结构')) {
            score += 2;
        }
        if (q6.includes('系统分析') && q6.includes('明确系统需求')) {
            score += 2;
        }
        if (q6.includes('系统设计') && q6.includes('将逻辑模型转换为物理模型')) {
            score += 2;
        }
        if (q6.includes('系统实施') && q6.includes('进行系统开发和安装')) {
            score += 2;
        }
        if (q6.includes('系统运行与维护') && q6.includes('保障系统正常运行并修复问题')) {
            score += 2;
        }
    }
    if (q7.includes('网上购物平台') || q7.includes('在线教育平台') || q7.includes('电子政务平台')) {
        score += 5;
        if (q7.includes('跨平台访问') || q7.includes('客户端零维护') || q7.includes('便于集中管理')) {
            score += 5;
            if (q7.match(/跨平台访问|客户端零维护|便于集中管理/g).length > 1) {
                score += 5;
            }
        }
    }
    if (q8.includes('菜品展示') || q8.includes('点餐功能') || q8.includes('订单管理') || q8.includes('支付功能')) {
        score += 5;
        const funcCount = (q8.match(/菜品展示|点餐功能|订单管理|支付功能/g) || []).length;
        score += (funcCount - 2) * 2;
        if (score > 15) {
            score = 15;
        }
    }

    // 设计题评分
    if (q9.includes('借阅管理模块') || q9.includes('归还管理模块') || q9.includes('查询管理模块')) {
        score += 10;
        if (q9.includes('借阅管理模块') && q9.includes('记录借阅信息')) {
            score += 5;
        }
        if (q9.includes('归还管理模块') && q9.includes('处理图书归还流程')) {
            score += 5;
        }
        if (q9.includes('查询管理模块') && q9.includes('提供图书信息查询')) {
            score += 5;
        }
    }
    if ((q9.includes('B/S架构') && q9.includes('跨平台使用') && q9.includes('维护方便')) ||
        (q9.includes('C/S架构') && q9.includes('响应速度快') && q9.includes('安全性高'))) {
        score += 5;
        if (q9.includes('B/S架构') && q9.match(/跨平台使用|维护方便/g).length > 1) {
            score += 5;
        }
        if (q9.includes('C/S架构') && q9.match(/响应速度快|安全性高/g).length > 1) {
            score += 5;
        }
    }


    document.getElementById('result').innerHTML = `你的得分是：${score}分`;
});
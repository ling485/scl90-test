// SCL-90 问题列表
const questions = [
    "头痛",
    "神经过敏，心中不踏实",
    "头脑中有不必要的想法或字句盘旋",
    "头晕或晕倒",
    "对异性的兴趣减退",
    "对旁人求全责备",
    "感到别人能控制您的思想",
    "责怪别人制造麻烦",
    "忘记性大",
    "担心自己的衣饰整齐及仪态的端正",
    "容易烦恼和激动",
    "胸痛",
    "害怕空旷的场所或街道",
    "感到自己的精力下降，活动减慢",
    "想结束自己的生命",
    "听到旁人听不到的声音",
    "发抖",
    "感到大多数人都不可信任",
    "胃口不好",
    "容易哭泣",
    "同异性相处时感到害羞不自在",
    "感到受骗，中了圈套或有人想抓住您",
    "无缘无故地突然感到害怕",
    "自己不能控制地大发脾气",
    "怕单独出门",
    "经常责怪自己",
    "腰痛",
    "感到难以完成任务",
    "感到孤独",
    "感到苦闷",
    "过分担忧",
    "对事物不感兴趣",
    "感到害怕",
    "您的感情容易受到伤害",
    "旁人能知道您的私下想法",
    "感到别人不理解您，不同情您",
    "感到人们对您不友好，不喜欢您",
    "做事必须做得很慢以保证做得正确",
    "心跳得很厉害",
    "恶心或胃部不舒服",
    "感到比不上他人",
    "肌肉酸痛",
    "感到有人在监视您、谈论您",
    "难以入睡",
    "做事必须反复检查",
    "难以做出决定",
    "怕乘电车、公共汽车、地铁或火车",
    "呼吸困难",
    "一阵阵发冷或发热",
    "因为感到害怕而避开某些东西、场合或活动",
    "脑子变空了",
    "身体发麻或刺痛",
    "喉咙有梗塞感",
    "感到前途没有希望",
    "不能集中注意",
    "感到身体的某一部分软弱无力",
    "感到紧张或容易紧张",
    "感到手或脚发重",
    "想到死亡的事",
    "吃得太多",
    "当别人看着您或谈论您时感到不自在",
    "有一些不属于您自己的想法",
    "有想打人或伤害他人的冲动",
    "醒得太早",
    "必须反复洗手、点数目或触摸某些东西",
    "睡得不稳不深",
    "有想摔坏或破坏东西的冲动",
    "有一些别人没有的想法或念头",
    "感到对别人神经过敏",
    "在商店或电影院等人多的地方感到不自在",
    "感到任何事情都很困难",
    "一阵阵恐惧或惊恐",
    "感到在公共场合吃东西很不舒服",
    "经常与人争论",
    "单独一人时神经很紧张",
    "别人对您的成绩没有做出恰当的评价",
    "即使和别人在一起也感到孤单",
    "感到坐立不安，心神不定",
    "感到自己没有什么价值",
    "感到熟悉的东西变成陌生或不像是真的",
    "大叫或摔东西",
    "害怕会在公共场合晕倒",
    "感到别人想占您的便宜",
    "为一些有关性的想法而很苦恼",
    "您认为应该因为自己的过错而受到惩罚",
    "感到要很快把事情做完",
    "感到自己的身体有严重问题",
    "从未感到和其他人很亲近",
    "感到自己有罪",
    "感到自己的脑子有毛病"
];

// 各维度包含的题目
const dimensions = {
    "躯体化": [1, 4, 12, 27, 40, 42, 48, 49, 52, 53, 56, 58],
    "强迫症状": [3, 9, 10, 28, 38, 45, 46, 51, 55, 65],
    "人际关系敏感": [6, 21, 34, 36, 37, 41, 61, 69, 73],
    "抑郁": [5, 14, 15, 20, 22, 26, 29, 30, 31, 32, 54, 71, 79],
    "焦虑": [2, 17, 23, 33, 39, 57, 72, 78, 80, 86],
    "敌对": [11, 24, 63, 67, 74, 81],
    "恐怖": [13, 25, 47, 50, 70, 75, 82],
    "偏执": [8, 18, 43, 68, 76, 83],
    "精神病性": [7, 16, 35, 62, 77, 84, 85, 87, 88, 90]
};

// 各维度解释
const dimensionExplanations = {
    "躯体化": {
        description: "主要反映身体不适感，包括心血管、胃肠道、呼吸和其他系统的主诉不适，和头痛、背痛、肌肉酸痛，以及焦虑的其他躯体表现。",
        low: "您在这一维度的得分较低，说明您的身体状况良好，没有明显的躯体不适症状。继续保持健康的生活方式。",
        medium: "您在这一维度有一些轻度的躯体不适，可能与压力或情绪有关。建议您关注自己的身体状况，适当休息，保持良好的作息习惯。",
        high: "您在这一维度的得分较高，可能存在较为明显的躯体不适。建议您关注自己的健康状况，必要时咨询医生，同时注意心理压力的调节。"
    },
    "强迫症状": {
        description: "主要指那些明知没有必要，但又无法摆脱的无意义的思想、冲动和行为，还有一些比较一般的认知障碍的行为征象。",
        low: "您在这一维度的得分较低，说明您没有明显的强迫症状，思维和行为较为灵活自然。",
        medium: "您在这一维度有一些轻度的强迫倾向，可能会有一些重复的想法或行为。这在很多人中都很常见，不必过度担心。",
        high: "您在这一维度的得分较高，可能存在较为明显的强迫症状。建议您尝试放松训练，必要时寻求专业心理咨询的帮助。"
    },
    "人际关系敏感": {
        description: "主要是指某些个人不自在与自卑感，特别是与其他人相比较时更加突出。在人际交往中的自卑感，心神不安，明显不自在，以及人际交流中的自我意识，消极的期待等。",
        low: "您在这一维度的得分较低，说明您在人际关系中感到舒适自在，能够与他人良好相处。",
        medium: "您在这一维度有一些轻度的人际敏感，可能在某些社交场合感到不自在。建议您尝试主动与他人交流，逐渐建立自信。",
        high: "您在这一维度的得分较高，可能在人际关系中感到明显的不自在或自卑。建议您关注自己的优点，尝试建立积极的自我认知，必要时寻求心理咨询的帮助。"
    },
    "抑郁": {
        description: "苦闷的情感与心境为代表性症状，还以生活兴趣的减退，动力缺乏，活力丧失等为特征。还表现出失望、悲观以及与抑郁相联系的认知和躯体方面的感受，另外，还包括有关死亡的思想和自杀观念。",
        low: "您在这一维度的得分较低，说明您的情绪状态良好，没有明显的抑郁症状。继续保持积极的生活态度。",
        medium: "您在这一维度有一些轻度的抑郁倾向，可能会感到偶尔的情绪低落。建议您多参加愉快的活动，与朋友交流，保持积极的生活态度。",
        high: "您在这一维度的得分较高，可能存在较为明显的抑郁症状。建议您关注自己的情绪状态，寻求家人和朋友的支持，必要时咨询专业心理医生。"
    },
    "焦虑": {
        description: "一般指那些烦躁，坐立不安，神经过敏，紧张以及由此产生的躯体征象，如震颤等。测定游离不定的焦虑及惊恐发作是本因子的主要内容，还包括一项解体感受的项目。",
        low: "您在这一维度的得分较低，说明您的情绪状态稳定，没有明显的焦虑症状。",
        medium: "您在这一维度有一些轻度的焦虑，可能会在某些情况下感到紧张。建议您尝试放松训练，如深呼吸、冥想等，帮助缓解焦虑情绪。",
        high: "您在这一维度的得分较高，可能存在较为明显的焦虑症状。建议您学习一些焦虑管理技巧，必要时寻求专业心理咨询的帮助。"
    },
    "敌对": {
        description: "主要从三方面来反映敌对的表现：思想、感情及行为。其项目包括厌烦的感觉，摔物，争论直到不可控制的脾气暴发等各方面。",
        low: "您在这一维度的得分较低，说明您的情绪较为平和，没有明显的敌对倾向。",
        medium: "您在这一维度有一些轻度的敌对情绪，可能会在某些情况下感到烦躁或易怒。建议您尝试情绪管理技巧，如深呼吸、换位思考等。",
        high: "您在这一维度的得分较高，可能存在较为明显的敌对情绪。建议您关注自己的情绪状态，尝试寻找情绪的出口，必要时寻求心理咨询的帮助。"
    },
    "恐怖": {
        description: "恐惧的对象包括出门旅行，空旷场地，人群或公共场所和交通工具。此外，还有反映社交恐怖的一些项目。",
        low: "您在这一维度的得分较低，说明您没有明显的恐怖症状，能够正常面对各种场景。",
        medium: "您在这一维度有一些轻度的恐怖倾向，可能在某些特定场景下感到不安。建议您尝试逐步暴露于这些场景，逐渐克服恐惧。",
        high: "您在这一维度的得分较高，可能存在较为明显的恐怖症状。建议您寻求专业心理咨询的帮助，如系统脱敏疗法等。"
    },
    "偏执": {
        description: "主要指投射性思维，敌对，猜疑，关系观念，妄想，被动体验和夸大等。",
        low: "您在这一维度的得分较低，说明您的思维方式较为客观，没有明显的偏执倾向。",
        medium: "您在这一维度有一些轻度的偏执倾向，可能会偶尔怀疑他人的意图。建议您尝试以更开放的心态看待事物，多与他人沟通交流。",
        high: "您在这一维度的得分较高，可能存在较为明显的偏执倾向。建议您寻求专业心理咨询的帮助，调整认知方式。"
    },
    "精神病性": {
        description: "反映各式各样的急性症状和行为，限定不严的精神病性过程的指征。此外，也可以反映精神病性行为的继发征兆和分裂性生活方式的指征。",
        low: "您在这一维度的得分较低，说明您的思维和行为较为正常，没有明显的精神病性症状。",
        medium: "您在这一维度有一些轻度的精神病性倾向，可能会有一些不寻常的想法或感受。这在很多人中都可能出现，不必过度担心。",
        high: "您在这一维度的得分较高，可能存在较为明显的精神病性症状。建议您及时寻求专业心理医生的帮助。"
    }
};

// 心理疏导建议
const guidanceMessages = [
    "给自己一些时间和空间，允许自己感受各种情绪，不要急于否定或压抑它们。",
    "尝试每天进行一些放松训练，如深呼吸、渐进式肌肉放松或冥想，帮助缓解紧张情绪。",
    "保持规律的作息时间，充足的睡眠对心理健康非常重要。",
    "适当进行体育锻炼，运动可以释放内啡肽，改善情绪状态。",
    "与亲朋好友保持联系，分享您的感受，寻求社会支持。",
    "培养一些兴趣爱好，让自己在空闲时间有事可做，丰富生活内容。",
    "尝试写日记，记录自己的 thoughts和感受，这有助于整理情绪。",
    "学习一些情绪管理技巧，如认知重构，学会用更积极的方式看待问题。",
    "保持健康的饮食习惯，均衡的营养对心理健康也有积极影响。",
    "如果感到情绪困扰持续存在，不要犹豫寻求专业心理咨询的帮助。"
];

// 全局变量
let currentQuestion = 0;
let answers = new Array(90).fill(0);
const ADMIN_PASSWORD = "ling4850"; // 管理员密码，可修改

// 固定测试兑换码（永久有效）
const fixedCodes = {
    "TEST1": { expires: "2099-12-31" },
    "TEST2": { expires: "2099-12-31" },
    "TEST3": { expires: "2099-12-31" }
};

// 密钥（用于生成和验证兑换码签名）
const SECRET_KEY = "scl90_secret_key_2024";

// 生成简单的哈希值（用于签名）
function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash).toString(36).toUpperCase().slice(0, 4);
}

// 生成4位兑换码（2位随机 + 2位校验码）
function generateSignedCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let baseCode = '';
    for (let i = 0; i < 2; i++) {
        baseCode += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    // 获取15天后的日期作为有效期
    const expires = new Date();
    expires.setDate(expires.getDate() + 15);
    const expiresStr = expires.toISOString().split('T')[0];
    // 生成2位校验码（基于密钥和有效期）
    const checksum = simpleHash(baseCode + SECRET_KEY + expiresStr).slice(0, 2);
    return baseCode + checksum;
}

// 验证4位兑换码（检查签名和有效期）
function verifySignedCode(code) {
    if (!code || code.length !== 4) return false;
    
    const baseCode = code.slice(0, 2);
    const checksum = code.slice(2, 4);
    
    // 检查未来15天内是否有匹配的校验码
    const now = new Date();
    for (let i = 0; i <= 15; i++) {
        const checkDate = new Date(now);
        checkDate.setDate(checkDate.getDate() + i);
        const checkDateStr = checkDate.toISOString().split('T')[0];
        const expectedChecksum = simpleHash(baseCode + SECRET_KEY + checkDateStr).slice(0, 2);
        if (checksum === expectedChecksum) return true;
    }
    
    // 检查过去15天（防止系统时间误差）
    for (let i = 1; i <= 15; i++) {
        const checkDate = new Date(now);
        checkDate.setDate(checkDate.getDate() - i);
        const checkDateStr = checkDate.toISOString().split('T')[0];
        const expectedChecksum = simpleHash(baseCode + SECRET_KEY + checkDateStr).slice(0, 2);
        if (checksum === expectedChecksum) return true;
    }
    
    return false;
}

// 从本地存储加载兑换码（仅用于管理员界面显示）
function loadCodes() {
    const codes = localStorage.getItem('scl90_codes');
    if (!codes) {
        localStorage.setItem('scl90_codes', JSON.stringify(fixedCodes));
        return fixedCodes;
    }
    const existingCodes = JSON.parse(codes);
    const mergedCodes = { ...fixedCodes, ...existingCodes };
    localStorage.setItem('scl90_codes', JSON.stringify(mergedCodes));
    return mergedCodes;
}

// 保存兑换码到本地存储（仅用于管理员界面显示）
function saveCodes(codes) {
    localStorage.setItem('scl90_codes', JSON.stringify(codes));
}

// 生成带签名的6位兑换码
function generateRandomCode() {
    return generateSignedCode();
}

// 计算15天后的日期
function getExpirationDate() {
    const date = new Date();
    date.setDate(date.getDate() + 15);
    return date.toISOString().split('T')[0];
}

// 验证兑换码
function verifyCode() {
    const codeInput = document.getElementById('code-input');
    const codeError = document.getElementById('code-error');
    const codeVerificationSection = document.getElementById('code-verification');
    const introSection = document.getElementById('intro');

    if (codeInput) {
        const code = codeInput.value.trim().toUpperCase();

        if (!code) {
            codeError.textContent = '请输入兑换码';
            return;
        }

        // 检查是否为固定测试兑换码
        if (fixedCodes[code]) {
            codeError.textContent = '';
            codeVerificationSection.classList.remove('active');
            introSection.classList.add('active');
            console.log('兑换码验证成功：固定测试码');
            return;
        }

        // 检查是否为有效的4位带签名兑换码
        if (verifySignedCode(code)) {
            codeError.textContent = '';
            codeVerificationSection.classList.remove('active');
            introSection.classList.add('active');
            console.log('兑换码验证成功：带签名兑换码');
            return;
        }

        codeError.textContent = '兑换码无效或已过期';
        console.log('兑换码验证失败：签名无效、格式不正确或已过期');
    }
}

// 管理员登录
function adminLogin() {
    const passwordInput = document.getElementById('admin-password');
    const loginError = document.getElementById('login-error');
    const adminLoginSection = document.getElementById('admin-login');
    const adminPanelSection = document.getElementById('admin-panel');

    if (passwordInput) {
        const password = passwordInput.value;
        if (password === ADMIN_PASSWORD) {
            loginError.textContent = '';
            adminLoginSection.classList.remove('active');
            adminPanelSection.classList.add('active');
            displayCodeList();
            console.log('管理员登录成功');
        } else {
            loginError.textContent = '密码错误';
            console.log('管理员登录失败：密码错误');
        }
    }
}

// 显示兑换码列表
function displayCodeList() {
    const codeTableBody = document.getElementById('code-table-body');
    if (codeTableBody) {
        const validCodes = loadCodes();
        codeTableBody.innerHTML = '';

        // 过滤出未过期的兑换码
        const now = new Date();
        Object.entries(validCodes).forEach(([code, info]) => {
            const expires = new Date(info.expires);
            if (now <= expires) {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${code}</td>
                    <td>${info.expires}</td>
                    <td><button onclick="deleteCode('${code}')">删除</button></td>
                `;
                codeTableBody.appendChild(row);
            }
        });
    }
}

// 生成新兑换码
function generateNewCode() {
    const generateResult = document.getElementById('generate-result');
    const validCodes = loadCodes();
    
    // 生成新码，确保不重复
    let newCode;
    do {
        newCode = generateRandomCode();
    } while (validCodes[newCode]);
    
    // 设置15天有效期
    const expires = getExpirationDate();
    validCodes[newCode] = { expires };
    
    // 保存并显示
    saveCodes(validCodes);
    displayCodeList();
    
    if (generateResult) {
        generateResult.innerHTML = `
            <div class="success-message">
                <p>生成成功！</p>
                <p>新兑换码：<strong>${newCode}</strong></p>
                <p>有效期至：${expires}</p>
            </div>
        `;
    }
    
    console.log('生成新兑换码:', newCode, '有效期至:', expires);
}

// 删除兑换码
function deleteCode(code) {
    const validCodes = loadCodes();
    delete validCodes[code];
    saveCodes(validCodes);
    displayCodeList();
    console.log('删除兑换码:', code);
}

// 管理员退出
function adminLogout() {
    const adminPanelSection = document.getElementById('admin-panel');
    const adminLoginSection = document.getElementById('admin-login');
    if (adminPanelSection && adminLoginSection) {
        adminPanelSection.classList.remove('active');
        adminLoginSection.classList.add('active');
        document.getElementById('admin-password').value = '';
        console.log('管理员退出');
    }
}

// 页面加载完成后初始化
window.onload = function() {
    console.log('页面加载完成');

    // 检查是否为管理员访问
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('admin')) {
        const codeVerificationSection = document.getElementById('code-verification');
        const adminLoginSection = document.getElementById('admin-login');
        if (codeVerificationSection && adminLoginSection) {
            codeVerificationSection.classList.remove('active');
            adminLoginSection.classList.add('active');
        }
    }

    // 绑定兑换码验证按钮事件
    const verifyBtn = document.getElementById('verify-btn');
    if (verifyBtn) {
        verifyBtn.addEventListener('click', verifyCode);
        console.log('兑换码验证按钮事件绑定成功');
    }

    // 绑定管理员登录按钮事件
    const loginBtn = document.getElementById('login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', adminLogin);
        console.log('管理员登录按钮事件绑定成功');
    }

    // 绑定生成兑换码按钮事件
    const generateCodeBtn = document.getElementById('generate-code-btn');
    if (generateCodeBtn) {
        generateCodeBtn.addEventListener('click', generateNewCode);
        console.log('生成兑换码按钮事件绑定成功');
    }

    // 绑定退出按钮事件
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', adminLogout);
        console.log('退出按钮事件绑定成功');
    }

    // 绑定开始测评按钮事件
    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', startQuestionnaire);
        console.log('开始测评按钮事件绑定成功');
    }

    // 绑定下一题按钮事件
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
        nextBtn.addEventListener('click', goToNext);
        console.log('下一题按钮事件绑定成功');
    }

    // 绑定上一题按钮事件
    const prevBtn = document.getElementById('prev-btn');
    if (prevBtn) {
        prevBtn.addEventListener('click', goToPrevious);
        console.log('上一题按钮事件绑定成功');
    }

    // 绑定重新测评按钮事件
    const restartBtn = document.getElementById('restart-btn');
    if (restartBtn) {
        restartBtn.addEventListener('click', restartQuestionnaire);
        console.log('重新测评按钮事件绑定成功');
    }

    // 绑定选项变更事件
    const options = document.querySelectorAll('.options input');
    options.forEach(option => {
        option.addEventListener('change', function(e) {
            saveAnswer(e);
            // 点击选项后直接跳转到下一题
            if (currentQuestion < 89) {
                loadQuestion(currentQuestion + 1);
            } else {
                // 最后一题，更新按钮为"测试完毕，查看结果"
                updateSubmitButton();
            }
        });
    });
    console.log('选项变更事件绑定成功');
};

// 开始测评
function startQuestionnaire() {
    console.log('开始测评');
    const introSection = document.getElementById('intro');
    const questionnaireSection = document.getElementById('questionnaire');
    if (introSection && questionnaireSection) {
        introSection.classList.remove('active');
        questionnaireSection.classList.add('active');
        loadQuestion(0);
        console.log('切换到问卷页面成功');
    }
}

// 加载问题
function loadQuestion(index) {
    currentQuestion = index;
    console.log('加载问题:', index + 1);

    // 更新问题信息
    const questionNumber = document.getElementById('question-number');
    const questionText = document.getElementById('question-text');
    if (questionNumber && questionText) {
        questionNumber.textContent = `问题 ${index + 1}/90`;
        questionText.textContent = questions[index];
    }

    // 更新进度条
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    if (progressBar && progressText) {
        const progress = ((index + 1) / 90) * 100;
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${index + 1}/90`;
    }

    // 更新导航按钮状态
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (prevBtn) {
        prevBtn.disabled = index === 0;
    }
    if (nextBtn) {
        if (index === 89) {
            nextBtn.textContent = '测试完毕，查看结果';
        } else {
            nextBtn.textContent = '下一题';
        }
    }

    // 恢复之前的答案
    const options = document.querySelectorAll('.options input');
    options.forEach(option => {
        option.checked = option.value == answers[index];
    });
}

// 保存答案
function saveAnswer(e) {
    answers[currentQuestion] = parseInt(e.target.value);
    console.log('保存答案:', currentQuestion, answers[currentQuestion]);
}

// 上一题
function goToPrevious() {
    if (currentQuestion > 0) {
        loadQuestion(currentQuestion - 1);
    }
}

// 下一题
function goToNext() {
    // 检查当前题目是否已作答
    if (answers[currentQuestion] === 0) {
        alert('请回答当前题目后再进入下一题');
        return;
    }

    if (currentQuestion < 89) {
        loadQuestion(currentQuestion + 1);
    } else {
        // 检查是否所有题目都已作答
        const unansweredQuestions = [];
        for (let i = 0; i < answers.length; i++) {
            if (answers[i] === 0) {
                unansweredQuestions.push(i + 1);
            }
        }

        if (unansweredQuestions.length > 0) {
            alert('您还有以下题目未作答：' + unansweredQuestions.join(', ') + '\n请返回作答后再提交');
            // 跳转到第一个未作答的题目
            loadQuestion(unansweredQuestions[0] - 1);
            return;
        }

        // 提交答案
        calculateResults();
    }
}

// 更新提交按钮
function updateSubmitButton() {
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
        nextBtn.textContent = '测试完毕，查看结果';
    }
}

// 计算结果
function calculateResults() {
    console.log('计算结果');

    // 计算总分
    const totalScore = answers.reduce((sum, score) => sum + score, 0);
    const averageScore = (totalScore / 90).toFixed(2);

    // 计算阳性项目数（得分 >= 2）
    const positiveCount = answers.filter(score => score >= 2).length;
    const positiveSum = answers.filter(score => score >= 2).reduce((sum, score) => sum + score, 0);
    const positiveAverage = positiveCount > 0 ? (positiveSum / positiveCount).toFixed(2) : 0;

    // 计算各维度得分
    const dimensionScores = {};
    for (const [dimension, questionIndices] of Object.entries(dimensions)) {
        const score = questionIndices.reduce((sum, index) => sum + answers[index - 1], 0);
        const average = (score / questionIndices.length).toFixed(2);
        dimensionScores[dimension] = { score, average };
    }

    // 显示结果
    displayResults(totalScore, averageScore, positiveCount, positiveAverage, dimensionScores);
}

// 获取参考结果级别
function getResultLevel(score, type = 'dimension') {
    if (type === 'total') {
        if (score <= 160) return { level: '正常', color: 'normal' };
        else if (score <= 250) return { level: '轻度', color: 'mild' };
        else if (score <= 350) return { level: '中度', color: 'moderate' };
        else return { level: '重度', color: 'severe' };
    } else {
        const avg = parseFloat(score);
        if (avg < 2) return { level: '正常', color: 'normal' };
        else if (avg < 3) return { level: '轻度', color: 'mild' };
        else if (avg < 4) return { level: '中度', color: 'moderate' };
        else return { level: '重度', color: 'severe' };
    }
}

// 显示结果
function displayResults(totalScore, averageScore, positiveCount, positiveAverage, dimensionScores) {
    console.log('显示结果');

    // 更新结果摘要
    const totalScoreEl = document.getElementById('total-score');
    const totalReferenceEl = document.getElementById('total-reference');
    const averageScoreEl = document.getElementById('average-score');
    const positiveCountEl = document.getElementById('positive-count');
    const positiveAverageEl = document.getElementById('positive-average');
    
    if (totalScoreEl) totalScoreEl.textContent = totalScore;
    
    // 添加总分参考结果
    const totalLevel = getResultLevel(totalScore, 'total');
    if (totalReferenceEl) {
        totalReferenceEl.textContent = `(${totalLevel.level})`;
        totalReferenceEl.className = `result-reference ${totalLevel.color}`;
    }
    
    if (averageScoreEl) averageScoreEl.textContent = averageScore;
    if (positiveCountEl) positiveCountEl.textContent = positiveCount;
    if (positiveAverageEl) positiveAverageEl.textContent = positiveAverage;

    // 生成维度得分表格
    const dimensionTableBody = document.getElementById('dimension-table-body');
    if (dimensionTableBody) {
        dimensionTableBody.innerHTML = '';
        for (const [dimension, { score, average }] of Object.entries(dimensionScores)) {
            const level = getResultLevel(average);
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${dimension}</td>
                <td>${score}</td>
                <td>${average}</td>
                <td class="result-level ${level.color}">${level.level}</td>
            `;
            dimensionTableBody.appendChild(row);
        }
    }

    // 生成维度得分图表
    generateDimensionChart(dimensionScores);

    // 生成各维度详细解释
    generateDimensionInterpretations(dimensionScores);

    // 生成心理疏导建议
    generateGuidance();

    // 生成结果解释
    const interpretationEl = document.getElementById('interpretation');
    if (interpretationEl) {
        let interpretation = '<p>测评结果仅供参考，不能作为诊断依据。如有需要，请咨询专业心理医生。</p>';

        // 总分提示
        let totalInterpretation = '';
        if (totalScore <= 160) {
            totalInterpretation = `<p><strong>总分提示：</strong>您的总分为${totalScore}分，处于正常范围，心理状态良好，无明显症状困扰。继续保持积极的生活态度和健康的生活方式。</p>`;
        } else if (totalScore <= 250) {
            totalInterpretation = `<p><strong>总分提示：</strong>您的总分为${totalScore}分，处于轻度范围，可能存在一些轻微的心理不适或症状。建议您关注自己的心理状态，可以通过自我调节、运动、放松训练等方式改善，如症状持续或加重，建议寻求心理咨询帮助。</p>`;
        } else if (totalScore <= 350) {
            totalInterpretation = `<p><strong>总分提示：</strong>您的总分为${totalScore}分，处于中度范围，整体心理痛苦较明显，可能在多个方面存在症状困扰。建议您积极寻求心理咨询或专业评估，通过专业帮助改善心理状态。</p>`;
        } else {
            totalInterpretation = `<p><strong>总分提示：</strong>您的总分为${totalScore}分，处于重度范围，整体心理痛苦较明显，可能存在多个维度的症状。建议您尽快寻求心理咨询或精神科医生的专业评估和帮助，以便获得适当的治疗和支持。</p>`;
        }
        interpretation += totalInterpretation;

        if (positiveCount > 43) {
            interpretation += '<p><strong>阳性项目数提示：</strong>您的阳性项目数超过43项（2分及以上），可考虑筛查阳性，提示可能在多个方面存在一些症状。建议您更多地关注自己的心理健康，必要时寻求专业帮助。</p>';
        } else {
            interpretation += '<p><strong>阳性项目数提示：</strong>您的阳性项目数在正常范围内（≤43项），说明您在大多数项目上没有明显的症状感受。</p>';
        }

        // 检查是否有因子分≥2分
        let highFactorCount = 0;
        for (const [dimension, { average }] of Object.entries(dimensionScores)) {
            if (parseFloat(average) >= 2) {
                highFactorCount++;
            }
        }

        if (highFactorCount > 0) {
            interpretation += `<p><strong>因子分提示：</strong>您有${highFactorCount}个维度的因子分≥2分，可考虑筛查阳性或进一步检查。建议您关注这些维度的症状表现，必要时寻求专业心理咨询的帮助。</p>`;
        } else {
            interpretation += '<p><strong>因子分提示：</strong>您所有维度的因子分都低于2分，说明各方面症状均不明显，心理状态良好。</p>';
        }

        interpretationEl.innerHTML = `<h3>结果解释</h3>${interpretation}`;
    }

    // 切换到结果页面
    const questionnaireSection = document.getElementById('questionnaire');
    const resultsSection = document.getElementById('results');
    if (questionnaireSection && resultsSection) {
        questionnaireSection.classList.remove('active');
        resultsSection.classList.add('active');
        console.log('切换到结果页面成功');
    }
}

// 生成维度得分图表
function generateDimensionChart(dimensionScores) {
    const dimensionChartEl = document.getElementById('dimension-chart');
    if (dimensionChartEl) {
        const ctx = dimensionChartEl.getContext('2d');

        // 准备数据
        const labels = Object.keys(dimensionScores);
        const scores = Object.values(dimensionScores).map(item => parseFloat(item.average));

        // 销毁之前的图表
        if (window.dimensionChart) {
            window.dimensionChart.destroy();
        }

        // 创建新图表
        window.dimensionChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: labels,
                datasets: [{
                    label: '各维度均分',
                    data: scores,
                    backgroundColor: 'rgba(76, 175, 80, 0.2)',
                    borderColor: 'rgba(76, 175, 80, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(76, 175, 80, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(76, 175, 80, 1)'
                }]
            },
            options: {
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 5,
                        ticks: {
                            stepSize: 1
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `均分: ${context.parsed.r.toFixed(2)}`;
                            }
                        }
                    }
                }
            }
        });
        console.log('生成图表成功');
    }
}

// 生成各维度详细解释
function generateDimensionInterpretations(dimensionScores) {
    const dimensionInterpretationsEl = document.getElementById('dimension-interpretations');
    if (dimensionInterpretationsEl) {
        dimensionInterpretationsEl.innerHTML = '<h3>各维度详细解释</h3>';

        for (const [dimension, { score, average }] of Object.entries(dimensionScores)) {
            const avg = parseFloat(average);
            let level = '';

            if (avg <= 2) {
                level = 'low';
            } else if (avg <= 3) {
                level = 'medium';
            } else {
                level = 'high';
            }

            const explanation = dimensionExplanations[dimension];
            const interpretationItem = document.createElement('div');
            interpretationItem.className = 'dimension-interpretation-item';
            interpretationItem.innerHTML = `
                <h4>${dimension}</h4>
                <p><strong>维度说明：</strong>${explanation.description}</p>
                <p><strong>得分情况：</strong>${score} (均分: ${average})</p>
                <p><strong>结果解释：</strong>${explanation[level]}</p>
            `;
            dimensionInterpretationsEl.appendChild(interpretationItem);
        }
        console.log('生成维度解释成功');
    }
}

// 生成心理疏导建议
function generateGuidance() {
    const guidanceEl = document.getElementById('guidance');
    if (guidanceEl) {
        let guidanceContent = '<h3>结果说明</h3>';
        guidanceContent += '<p>本报告基于您的自评数据生成，可作为心理状态的参考，但不能替代专业医生的诊断。如果某些结果让您感到担忧，建议与心理咨询师或精神科医生进一步沟通。</p>';
        
        guidanceContent += '<h3>心理疏导建议</h3>';
        guidanceContent += '<p>亲爱的朋友，以下是一些温和的心理疏导建议，希望能对您有所帮助：</p>';

        guidanceMessages.forEach((message, index) => {
            guidanceContent += `<p>${index + 1}. ${message}</p>`;
        });

        guidanceContent += '<p>请记住，每个人的成长都需要时间，给自己一些耐心和空间。您并不孤独，我们都在努力成为更好的自己。</p>';

        guidanceEl.innerHTML = guidanceContent;
        console.log('生成疏导建议成功');
    }
}

// 重新测评
function restartQuestionnaire() {
    console.log('重新测评');

    // 重置变量
    currentQuestion = 0;
    answers = new Array(90).fill(0);

    // 重置选项
    const options = document.querySelectorAll('.options input');
    options.forEach(option => {
        option.checked = false;
    });

    // 切换到兑换码验证页面
    const resultsSection = document.getElementById('results');
    const codeVerificationSection = document.getElementById('code-verification');
    if (resultsSection && codeVerificationSection) {
        resultsSection.classList.remove('active');
        codeVerificationSection.classList.add('active');
        console.log('切换到兑换码验证页面成功');
    }
}
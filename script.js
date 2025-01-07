document.getElementById('start-button').addEventListener('click', () => {
    document.getElementById('introduction').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('progress-container').classList.remove('hidden');
    currentPage = 1; // 初期ページを1に設定
    loadQuestions();
});

// 質問データ
const questions = [
    // **1. コスパ指数（Cost-Performance Index）**
    { 
        id: 1, 
        text: "日用品を購入する際、価格と質のバランスを重視しますか？",
        parameter: "Cost-Performance Index"
    },
    { 
        id: 2, 
        text: "食材を選ぶ際、割引やセール品を優先しますか？",
        parameter: "Cost-Performance Index"
    },
    { 
        id: 3, 
        text: "長期的に使えるものを買うために少し高い商品を選ぶことがありますか？",
        parameter: "Cost-Performance Index"
    },
    { 
        id: 4, 
        text: "不要なものを安くても買わない傾向がありますか？",
        parameter: "Cost-Performance Index"
    },
    { 
        id: 5, 
        text: "新製品が出ると、性能と価格を比較して購入を考えますか？",
        parameter: "Cost-Performance Index"
    },
    // **2. 未来設計指数（Future Design Index）**
    { 
        id: 6, 
        text: "貯金や投資など、将来のための計画を重視しますか？",
        parameter: "Future Design Index"
    },
    { 
        id: 7, 
        text: "老後の生活や教育費を考慮して消費行動を決めることが多いですか？",
        parameter: "Future Design Index"
    },
    { 
        id: 8, 
        text: "高価なものでも、将来的に価値があると思えば購入しますか？",
        parameter: "Future Design Index"
    },
    { 
        id: 9, 
        text: "健康や長寿のためにお金を使うことが多いですか？",
        parameter: "Future Design Index"
    },
    { 
        id: 10, 
        text: "家計簿や予算計画を立てるのが習慣になっていますか？",
        parameter: "Future Design Index"
    },
    // **3. 思いやりの消費指数（Empathy Spending Index）**
    { 
        id: 11, 
        text: "プレゼントやギフト選びに時間をかけますか？",
        parameter: "Empathy Spending Index"
    },
    { 
        id: 12, 
        text: "周囲の人に喜んでもらえる消費をすることが多いですか？",
        parameter: "Empathy Spending Index"
    },
    { 
        id: 13, 
        text: "チャリティや寄付に積極的に参加しますか？",
        parameter: "Empathy Spending Index"
    },
    { 
        id: 14, 
        text: "他人に助けを求められた際、金銭的に支援することが多いですか？",
        parameter: "Empathy Spending Index"
    },
    { 
        id: 15, 
        text: "特別なイベントには、他人のためにお金を使うことを躊躇しませんか？",
        parameter: "Empathy Spending Index"
    },
    // **4. 自己成長チャレンジ指数（Self-Growth Challenge Index）**
    { 
        id: 16, 
        text: "新しいスキルや知識を習得するためにお金を使いますか？",
        parameter: "Self-Growth Challenge Index"
    },
    { 
        id: 17, 
        text: "資格取得や自己啓発のための本や講座に投資しますか？",
        parameter: "Self-Growth Challenge Index"
    },
    { 
        id: 18, 
        text: "セミナーやワークショップに参加することが好きですか？",
        parameter: "Self-Growth Challenge Index"
    },
    { 
        id: 19, 
        text: "健康管理やフィットネスにお金をかけることがありますか？",
        parameter: "Self-Growth Challenge Index"
    },
    { 
        id: 20, 
        text: "学びや自己成長において価格より内容を重視しますか？",
        parameter: "Self-Growth Challenge Index"
    },
    // **5. エコと社会貢献指数（Eco & Social Contribution Index）**
    { 
        id: 21, 
        text: "環境に配慮した商品を選ぶことを心がけますか？",
        parameter: "Eco & Social Contribution Index"
    },
    { 
        id: 22, 
        text: "持続可能なライフスタイルに興味がありますか？",
        parameter: "Eco & Social Contribution Index"
    },
    { 
        id: 23, 
        text: "リサイクル可能なものを優先的に購入しますか？",
        parameter: "Eco & Social Contribution Index"
    },
    { 
        id: 24, 
        text: "地元の小規模事業やフェアトレード商品を選ぶことが多いですか？",
        parameter: "Eco & Social Contribution Index"
    },
    { 
        id: 25, 
        text: "無駄を省く消費行動を常に意識していますか？",
        parameter: "Eco & Social Contribution Index"
    },
    // **6. 楽しみと癒し指数（Joy & Relaxation Index）**
    { 
        id: 26, 
        text: "旅行やレジャーにお金を使うことを楽しみますか？",
        parameter: "Joy & Relaxation Index"
    },
    { 
        id: 27, 
        text: "趣味や娯楽に時間とお金を費やすことが多いですか？",
        parameter: "Joy & Relaxation Index"
    },
    { 
        id: 28, 
        text: "美味しい食事や特別な体験にお金をかけることが好きですか？",
        parameter: "Joy & Relaxation Index"
    },
    { 
        id: 29, 
        text: "ストレス発散のために消費することが多いですか？",
        parameter: "Joy & Relaxation Index"
    },
    { 
        id: 30, 
        text: "日々の小さな楽しみ（カフェ、スイーツなど）に投資するのが好きですか？",
        parameter: "Joy & Relaxation Index"
    },
    // **7. 安心と備え指数（Security & Preparedness Index）**
    { 
        id: 31, 
        text: "緊急事態や災害に備えて物資を購入することが多いですか？",
        parameter: "Security & Preparedness Index"
    },
    { 
        id: 32, 
        text: "健康保険や生命保険に加入する際、慎重に選びますか？",
        parameter: "Security & Preparedness Index"
    },
    { 
        id: 33, 
        text: "万が一に備えた貯蓄や商品を購入することがありますか？",
        parameter: "Security & Preparedness Index"
    },
    { 
        id: 34, 
        text: "安全性を優先して高価な商品を選ぶことがありますか？",
        parameter: "Security & Preparedness Index"
    },
    { 
        id: 35, 
        text: "家族や自分のための保険や保証制度を重視しますか？",
        parameter: "Security & Preparedness Index"
    },
    // **8. 日常のアート指数（Everyday Artfulness Index）**
    { 
        id: 36, 
        text: "デザインや美しさを重視して商品を選ぶことが多いですか？",
        parameter: "Everyday Artfulness Index"
    },
    { 
        id: 37, 
        text: "自分が気に入るアートや装飾品にお金を使いますか？",
        parameter: "Everyday Artfulness Index"
    },
    { 
        id: 38, 
        text: "ファッションやインテリアのセンスにこだわりますか？",
        parameter: "Everyday Artfulness Index"
    },
    { 
        id: 39, 
        text: "見た目や外見の美しさにお金をかけることが多いですか？",
        parameter: "Everyday Artfulness Index"
    },
    { 
        id: 40, 
        text: "ユニークで個性的な商品を選ぶ傾向がありますか？",
        parameter: "Everyday Artfulness Index"
    },
    // **9. 実用性へのこだわり指数（Practicality Focus Index）**
    { 
        id: 41, 
        text: "実用的で機能的な商品を優先して選びますか？",
        parameter: "Practicality Focus Index"
    },
    { 
        id: 42, 
        text: "必要最低限のもので生活を整えるのが得意ですか？",
        parameter: "Practicality Focus Index"
    },
    { 
        id: 43, 
        text: "消耗品は価格よりも性能を重視して選びますか？",
        parameter: "Practicality Focus Index"
    },
    { 
        id: 44, 
        text: "多目的に使える商品を選ぶことが多いですか？",
        parameter: "Practicality Focus Index"
    },
    { 
        id: 45, 
        text: "買い物では「役に立つかどうか」を最優先に考えますか？",
        parameter: "Practicality Focus Index"
    },
    // **10. ブランド価値観指数（Brand Values Index）**
    { 
        id: 46, 
        text: "ブランド品を選ぶ際、そのブランドの信頼性を重視しますか？",
        parameter: "Brand Values Index"
    },
    { 
        id: 47, 
        text: "高級ブランドや限定品に魅力を感じることがありますか？",
        parameter: "Brand Values Index"
    },
    { 
        id: 48, 
        text: "他人に良い印象を与えるためにブランド品を購入することがありますか？",
        parameter: "Brand Values Index"
    },
    { 
        id: 49, 
        text: "ブランドの社会的責任（CSR）を気にすることが多いですか？",
        parameter: "Brand Values Index"
    },
    { 
        id: 50, 
        text: "商品を購入する際、ブランド名で判断することが多いですか？",
        parameter: "Brand Values Index"
    },
];

// ページごとの質問数
const questionsPerPage = 10;
const totalPages = Math.ceil(questions.length / questionsPerPage);
let currentPage = 1;

// ユーザーの回答を保存するオブジェクト
let userAnswers = {};

// ロードされた質問を表示
function loadQuestions() {
    const quizSection = document.getElementById('quiz');
    const questionsContainer = document.getElementById('questions-container');
    questionsContainer.innerHTML = ''; // 既存の質問をクリア

    const start = (currentPage - 1) * questionsPerPage;
    const end = start + questionsPerPage;
    const currentQuestions = questions.slice(start, end);

    currentQuestions.forEach(q => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question', 'fade-in');

        const questionText = document.createElement('p');
        questionText.textContent = `${q.id}. ${q.text}`;
        questionDiv.appendChild(questionText);

        // ラジオボタンの作成
        for(let i=1; i<=5; i++) {
            const label = document.createElement('label');
            label.textContent = i;
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question-${q.id}`;
            input.value = i;

            // 既に回答がある場合はチェックを付ける
            if(userAnswers[`question-${q.id}`] === i) {
                input.checked = true;
            }

            label.prepend(input);
            questionDiv.appendChild(label);
        }

        questionsContainer.appendChild(questionDiv);
    });

    // プログレスバーを更新
    updateProgressBar();

    // ナビゲーションボタンの表示/非表示を調整
    document.getElementById('prev-button').style.display = currentPage === 1 ? 'none' : 'inline-block';
    document.getElementById('next-button').style.display = currentPage === totalPages ? 'none' : 'inline-block';
    document.getElementById('submit-button').style.display = currentPage === totalPages ? 'inline-block' : 'none';
}

// プログレスバーを更新
function updateProgressBar(isComplete = false) {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    let progressPercent = 0;

    if (currentPage === 1) {
        progressPercent = 0;
    } else if (currentPage === 2) {
        progressPercent = 20;
    } else if (currentPage === 3) {
        progressPercent = 40;
    } else if (currentPage === 4) {
        progressPercent = 60;
    } else if (currentPage === 5) {
        progressPercent = 80;
    }

    progressBar.style.width = `${progressPercent}%`;
    progressText.textContent = `${progressPercent}%`;
}

// 次へボタンのイベントリスナー
document.getElementById('next-button').addEventListener('click', () => {
    if(saveAnswers()) {
        currentPage++;
        loadQuestions();
        window.scrollTo(0, 0); // ページトップにスクロール
    }
});

// 前へボタンのイベントリスナー
document.getElementById('prev-button').addEventListener('click', () => {
    currentPage--;
    loadQuestions();
    window.scrollTo(0, 0); // ページトップにスクロール
});

// 結果を見るボタンのイベントリスナー
document.getElementById('submit-button').addEventListener('click', () => {
    if(saveAnswers()) {
        calculateResults();
    }
});

// ユーザーの回答を保存する関数
function saveAnswers() {
    const currentQuestions = questions.slice((currentPage -1) * questionsPerPage, currentPage * questionsPerPage);
    let allAnswered = true;

    currentQuestions.forEach(q => {
        const radios = document.getElementsByName(`question-${q.id}`);
        let answered = false;
        radios.forEach(radio => {
            if (radio.checked) {
                userAnswers[`question-${q.id}`] = parseInt(radio.value);
                answered = true;
            }
        });
        if (!answered) {
            allAnswered = false;
        }
    });

    if (!allAnswered) {
        alert("全ての質問に回答してください！");
        return false;
    }

    return true;
}

// 診断結果を計算する関数
function calculateResults() {
    const scores = {
        "Cost-Performance Index": [],
        "Future Design Index": [],
        "Empathy Spending Index": [],
        "Self-Growth Challenge Index": [],
        "Eco & Social Contribution Index": [],
        "Joy & Relaxation Index": [],
        "Security & Preparedness Index": [],
        "Everyday Artfulness Index": [],
        "Practicality Focus Index": [],
        "Brand Values Index": []
    };

    let allAnswered = true;

    questions.forEach(q => {
        const answer = userAnswers[`question-${q.id}`];
        if (answer !== undefined) {
            scores[q.parameter].push(answer);
        } else {
            allAnswered = false;
        }
    });

    if (!allAnswered) {
        alert("全ての質問に回答してください！");
        return;
    }

    // 各パラメーターの平均スコアを計算
    const averageScores = {};
    for (let param in scores) {
        const total = scores[param].reduce((a, b) => a + b, 0);
        const avg = total / scores[param].length;
        averageScores[param] = avg.toFixed(1);
    }

    displayResults(averageScores);
}

// 結果を表示する関数
function displayResults(averageScores) {
    // プログレスバーを非表示にする
    document.getElementById('progress-container').classList.add('hidden');
    
    document.getElementById('quiz').style.display = 'none';
    const resultSection = document.getElementById('result');
    resultSection.style.display = 'block';

    // 結果をクリア
    resultSection.innerHTML = '';

    // 全体的な評価
    const highParams = Object.keys(averageScores).filter(param => averageScores[param] >= 4.0);
    let overallType = "バランスの取れた消費者タイプ！";

    if (highParams.length === 1) {
        overallType = `${highParams[0]}を重視する消費者タイプ！`;
    } else if (highParams.length > 1) {
        overallType = `${highParams.join('、')}を重視する消費者タイプ！`;
    }

    const overallDiv = document.createElement('div');
    overallDiv.classList.add('overall-result', 'fade-in');

    const overallTitle = document.createElement('h2');
    overallTitle.textContent = "あなたの消費行動タイプ";
    overallDiv.appendChild(overallTitle);

    const overallDesc = document.createElement('p');
    overallDesc.textContent = overallType;
    overallDiv.appendChild(overallDesc);

    // デカゴン（10角形）で結果を表示
    const decagonContainer = document.createElement('div');
    decagonContainer.classList.add('result-decahedron'); // クラス名を修正

    // SVGを使用して10角形を作成
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "500");
    svg.setAttribute("height", "500");
    svg.setAttribute("viewBox", "0 0 100 100");

    // 外枠のデカゴン
    const outerPolygon = document.createElementNS(svgNS, "polygon");
    const angle = 36; // 360 / 10 = 36 degrees per vertex
    let outerPoints = "";
    for(let i=0; i<10; i++) {
        const x = 50 + 40 * Math.cos((angle * i - 90) * Math.PI / 180);
        const y = 50 + 40 * Math.sin((angle * i - 90) * Math.PI / 180);
        outerPoints += `${x},${y} `;
    }
    outerPolygon.setAttribute("points", outerPoints.trim());
    outerPolygon.setAttribute("fill", "#ffeb3b");
    outerPolygon.setAttribute("stroke", "#333");
    outerPolygon.setAttribute("stroke-width", "1");
    svg.appendChild(outerPolygon);

    // 各カテゴリの位置にテキストを追加
    const categories = Object.keys(averageScores);
    categories.forEach((param, i) => {
        const label = document.createElementNS(svgNS, "text");
        const x = 50 + 45 * Math.cos((angle * i - 90) * Math.PI / 180);
        const y = 50 + 45 * Math.sin((angle * i - 90) * Math.PI / 180);
        label.setAttribute("x", x);
        label.setAttribute("y", y);
        label.setAttribute("text-anchor", "middle");
        label.setAttribute("font-size", "3");
        label.setAttribute("font-family", "'Arial', sans-serif"); // フォントファミリーを明示
        label.classList.add("category-label");
        label.textContent = param;
        svg.appendChild(label);
    });

    // ユーザーのスコアをプロットする
    const scorePoints = [];
    categories.forEach((param, i) => {
        const score = averageScores[param];
        // スコア1〜5をスケールして半径を決定（1〜5を8〜40にスケーリング）
        const scaledScore = (score / 5) * 40; // 最大40
        const scoreX = 50 + scaledScore * Math.cos((angle * i - 90) * Math.PI / 180);
        const scoreY = 50 + scaledScore * Math.sin((angle * i - 90) * Math.PI / 180);
        scorePoints.push(`${scoreX},${scoreY}`);
    });

    // 内枠のデカゴン（スコアを結んだ多角形）
    const innerPolygon = document.createElementNS(svgNS, "polygon");
    innerPolygon.setAttribute("points", scorePoints.join(' '));
    innerPolygon.setAttribute("fill", "rgba(0, 121, 107, 0.5)"); // 半透明
    innerPolygon.setAttribute("stroke", "#00796b");
    innerPolygon.setAttribute("stroke-width", "1");
    innerPolygon.classList.add("score-polygon");
    svg.appendChild(innerPolygon);

    // 各スコアポイントに円を描画
    categories.forEach((param, i) => {
        const score = averageScores[param];
        const scaledScore = (score / 5) * 40;
        const scoreX = 50 + scaledScore * Math.cos((angle * i - 90) * Math.PI / 180);
        const scoreY = 50 + scaledScore * Math.sin((angle * i - 90) * Math.PI / 180);

        const scoreCircle = document.createElementNS(svgNS, "circle");
        scoreCircle.setAttribute("cx", scoreX);
        scoreCircle.setAttribute("cy", scoreY);
        scoreCircle.setAttribute("r", "2");
        scoreCircle.classList.add("score-circle");
        svg.appendChild(scoreCircle);
    });

    decagonContainer.appendChild(svg);
    overallDiv.appendChild(decagonContainer);

    resultSection.prepend(overallDiv);

    // 各パラメーターの結果を表示
    for (let param in averageScores) {
        const paramDiv = document.createElement('div');
        paramDiv.classList.add('result-parameter', 'fade-in');

        const paramName = document.createElement('h3');
        paramName.textContent = param;
        paramDiv.appendChild(paramName);

        const paramScore = document.createElement('p');
        paramScore.textContent = `スコア: ${averageScores[param]}`;
        paramDiv.appendChild(paramScore);

        // スコアの意味と追加情報を追加
        const scoreDesc = document.createElement('p');
        const score = parseFloat(averageScores[param]);
        if (score >= 4.0) {
            scoreDesc.textContent = "高い意識";
            scoreDesc.style.color = "#4CAF50"; // 緑
            // 高スコアの特徴を追加
            const feature = document.createElement('p');
            feature.textContent = getHighScoreFeature(param);
            feature.style.color = "#388E3C";
            paramDiv.appendChild(feature);
        } else if (score >= 3.0) {
            scoreDesc.textContent = "中程度の意識";
            scoreDesc.style.color = "#FFC107"; // 黄色
        } else {
            scoreDesc.textContent = "低い意識";
            scoreDesc.style.color = "#F44336"; // 赤
            // 低スコアの改善提案を追加
            const suggestion = document.createElement('p');
            suggestion.textContent = getLowScoreSuggestion(param);
            suggestion.style.color = "#D32F2F";
            paramDiv.appendChild(suggestion);
        }
        paramDiv.appendChild(scoreDesc);

        resultSection.appendChild(paramDiv);
    }
}

// 高スコアの特徴を返す関数（各パラメーターごとにカスタマイズ）
function getHighScoreFeature(param) {
    const features = {
        "Cost-Performance Index": "コスパに優れた消費者タイプ！お得な買い物を楽しんでいます。",
        "Future Design Index": "未来を見据えた計画的な消費者タイプ！将来のために賢くお金を使っています。",
        "Empathy Spending Index": "思いやりのある消費者タイプ！周囲の人を大切にするためにお金を使います。",
        "Self-Growth Challenge Index": "自己成長を重視する消費者タイプ！常にスキルや知識を磨いています。",
        "Eco & Social Contribution Index": "エコ意識が高い消費者タイプ！環境や社会に配慮した選択をしています。",
        "Joy & Relaxation Index": "楽しみと癒しを大切にする消費者タイプ！日常に彩りを加えています。",
        "Security & Preparedness Index": "安心と備えを重視する消費者タイプ！リスクに備えて賢くお金を使います。",
        "Everyday Artfulness Index": "アートを愛する消費者タイプ！美しいデザインや個性的な商品を選びます。",
        "Practicality Focus Index": "実用性を重視する消費者タイプ！必要なものを効率的に選んでいます。",
        "Brand Values Index": "ブランド価値を重視する消費者タイプ！信頼できるブランドを選んでいます。"
    };
    return features[param] || "";
}

// 低スコアの改善提案を返す関数（各パラメーターごとにカスタマイズ）
function getLowScoreSuggestion(param) {
    const suggestions = {
        "Cost-Performance Index": "コスパを意識してみましょう。価格と品質のバランスを考えて買い物をすると良いですよ。",
        "Future Design Index": "将来の計画を立てることをお勧めします。貯金や投資を始めてみましょう。",
        "Empathy Spending Index": "周囲の人への思いやりを持つことも大切です。ギフト選びや寄付などを検討してみてください。",
        "Self-Growth Challenge Index": "自己成長にもっと力を入れてみましょう。新しいスキルや知識を習得するための時間を作ってみてください。",
        "Eco & Social Contribution Index": "環境や社会に配慮した消費を心がけてみましょう。リサイクルやフェアトレード商品を選ぶと良いですよ。",
        "Joy & Relaxation Index": "日常の楽しみを増やしてみましょう。趣味やレジャーに少しずつ時間を使ってみてください。",
        "Security & Preparedness Index": "リスクに備えるための準備を始めましょう。保険や緊急備蓄を検討してみてください。",
        "Everyday Artfulness Index": "デザインやアートにもっと興味を持ってみましょう。美しいものに触れることで生活が豊かになります。",
        "Practicality Focus Index": "実用性を意識してみましょう。必要なものを優先的に選ぶことで、生活がスムーズになります。",
        "Brand Values Index": "信頼できるブランドを探してみましょう。ブランドの背景や価値観を調べて選ぶと良いですよ。"
    };
    return suggestions[param] || "";
}

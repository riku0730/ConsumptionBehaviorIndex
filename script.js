// 質問データの定義
const questions = [
    // **1. コスパ指数（Cost-Performance Index）**
    { 
        id: 1, 
        text: "日用品を購入する際、価格と質のバランスを重視しますか？",
        parameter: "コスパ指数"
    },
    { 
        id: 2, 
        text: "食材を選ぶ際、割引やセール品を優先しますか？",
        parameter: "コスパ指数"
    },
    { 
        id: 3, 
        text: "長期的に使えるものを買うために少し高い商品を選ぶことがありますか？",
        parameter: "コスパ指数"
    },
    { 
        id: 4, 
        text: "不要なものを安くても買わない傾向がありますか？",
        parameter: "コスパ指数"
    },
    { 
        id: 5, 
        text: "新製品が出ると、性能と価格を比較して購入を考えますか？",
        parameter: "コスパ指数"
    },
    // **2. 未来設計指数（Future Design Index）**
    { 
        id: 6, 
        text: "貯金や投資など、将来のための計画を重視しますか？",
        parameter: "未来設計指数"
    },
    { 
        id: 7, 
        text: "老後の生活や教育費を考慮して消費行動を決めることが多いですか？",
        parameter: "未来設計指数"
    },
    { 
        id: 8, 
        text: "高価なものでも、将来的に価値があると思えば購入しますか？",
        parameter: "未来設計指数"
    },
    { 
        id: 9, 
        text: "健康や長寿のためにお金を使うことが多いですか？",
        parameter: "未来設計指数"
    },
    { 
        id: 10, 
        text: "家計簿や予算計画を立てるのが習慣になっていますか？",
        parameter: "未来設計指数"
    },
    // **3. 思いやりの消費指数（Empathy Spending Index）**
    { 
        id: 11, 
        text: "プレゼントやギフト選びに時間をかけますか？",
        parameter: "思いやりの消費指数"
    },
    { 
        id: 12, 
        text: "周囲の人に喜んでもらえる消費をすることが多いですか？",
        parameter: "思いやりの消費指数"
    },
    { 
        id: 13, 
        text: "チャリティや寄付に積極的に参加しますか？",
        parameter: "思いやりの消費指数"
    },
    { 
        id: 14, 
        text: "他人に助けを求められた際、金銭的に支援することが多いですか？",
        parameter: "思いやりの消費指数"
    },
    { 
        id: 15, 
        text: "特別なイベントには、他人のためにお金を使うことを躊躇しませんか？",
        parameter: "思いやりの消費指数"
    },
    // **4. 自己成長チャレンジ指数（Self-Growth Challenge Index）**
    { 
        id: 16, 
        text: "新しいスキルや知識を習得するためにお金を使いますか？",
        parameter: "自己成長チャレンジ指数"
    },
    { 
        id: 17, 
        text: "資格取得や自己啓発のための本や講座に投資しますか？",
        parameter: "自己成長チャレンジ指数"
    },
    { 
        id: 18, 
        text: "セミナーやワークショップに参加することが好きですか？",
        parameter: "自己成長チャレンジ指数"
    },
    { 
        id: 19, 
        text: "健康管理やフィットネスにお金をかけることがありますか？",
        parameter: "自己成長チャレンジ指数"
    },
    { 
        id: 20, 
        text: "学びや自己成長において価格より内容を重視しますか？",
        parameter: "自己成長チャレンジ指数"
    },
    // **5. エコと社会貢献指数（Eco & Social Contribution Index）**
    { 
        id: 21, 
        text: "環境に配慮した商品を選ぶことを心がけますか？",
        parameter: "エコと社会貢献指数"
    },
    { 
        id: 22, 
        text: "持続可能なライフスタイルに興味がありますか？",
        parameter: "エコと社会貢献指数"
    },
    { 
        id: 23, 
        text: "リサイクル可能なものを優先的に購入しますか？",
        parameter: "エコと社会貢献指数"
    },
    { 
        id: 24, 
        text: "地元の小規模事業やフェアトレード商品を選ぶことが多いですか？",
        parameter: "エコと社会貢献指数"
    },
    { 
        id: 25, 
        text: "無駄を省く消費行動を常に意識していますか？",
        parameter: "エコと社会貢献指数"
    },
    // **6. 楽しみと癒し指数（Joy & Relaxation Index）**
    { 
        id: 26, 
        text: "旅行やレジャーにお金を使うことを楽しみますか？",
        parameter: "楽しみと癒し指数"
    },
    { 
        id: 27, 
        text: "趣味や娯楽に時間とお金を費やすことが多いですか？",
        parameter: "楽しみと癒し指数"
    },
    { 
        id: 28, 
        text: "美味しい食事や特別な体験にお金をかけることが好きですか？",
        parameter: "楽しみと癒し指数"
    },
    { 
        id: 29, 
        text: "ストレス発散のために消費することが多いですか？",
        parameter: "楽しみと癒し指数"
    },
    { 
        id: 30, 
        text: "日々の小さな楽しみ（カフェ、スイーツなど）に投資するのが好きですか？",
        parameter: "楽しみと癒し指数"
    },
    // **7. 安心と備え指数（Security & Preparedness Index）**
    { 
        id: 31, 
        text: "緊急事態や災害に備えて物資を購入することが多いですか？",
        parameter: "安心と備え指数"
    },
    { 
        id: 32, 
        text: "健康保険や生命保険に加入する際、慎重に選びますか？",
        parameter: "安心と備え指数"
    },
    { 
        id: 33, 
        text: "万が一に備えた貯蓄や商品を購入することがありますか？",
        parameter: "安心と備え指数"
    },
    { 
        id: 34, 
        text: "安全性を優先して高価な商品を選ぶことがありますか？",
        parameter: "安心と備え指数"
    },
    { 
        id: 35, 
        text: "家族や自分のための保険や保証制度を重視しますか？",
        parameter: "安心と備え指数"
    },
    // **8. 日常のアート指数（Everyday Artfulness Index）**
    { 
        id: 36, 
        text: "デザインや美しさを重視して商品を選ぶことが多いですか？",
        parameter: "日常のアート指数"
    },
    { 
        id: 37, 
        text: "自分が気に入るアートや装飾品にお金を使いますか？",
        parameter: "日常のアート指数"
    },
    { 
        id: 38, 
        text: "ファッションやインテリアのセンスにこだわりますか？",
        parameter: "日常のアート指数"
    },
    { 
        id: 39, 
        text: "見た目や外見の美しさにお金をかけることが多いですか？",
        parameter: "日常のアート指数"
    },
    { 
        id: 40, 
        text: "ユニークで個性的な商品を選ぶ傾向がありますか？",
        parameter: "日常のアート指数"
    },
    // **9. 実用性へのこだわり指数（Practicality Focus Index）**
    { 
        id: 41, 
        text: "実用的で機能的な商品を優先して選びますか？",
        parameter: "実用性へのこだわり指数"
    },
    { 
        id: 42, 
        text: "必要最低限のもので生活を整えるのが得意ですか？",
        parameter: "実用性へのこだわり指数"
    },
    { 
        id: 43, 
        text: "消耗品は価格よりも性能を重視して選びますか？",
        parameter: "実用性へのこだわり指数"
    },
    { 
        id: 44, 
        text: "多目的に使える商品を選ぶことが多いですか？",
        parameter: "実用性へのこだわり指数"
    },
    { 
        id: 45, 
        text: "買い物では「役に立つかどうか」を最優先に考えますか？",
        parameter: "実用性へのこだわり指数"
    },
    // **10. ブランド価値観指数（Brand Values Index）**
    { 
        id: 46, 
        text: "ブランド品を選ぶ際、そのブランドの信頼性を重視しますか？",
        parameter: "ブランド価値観指数"
    },
    { 
        id: 47, 
        text: "高級ブランドや限定品に魅力を感じることがありますか？",
        parameter: "ブランド価値観指数"
    },
    { 
        id: 48, 
        text: "他人に良い印象を与えるためにブランド品を購入することがありますか？",
        parameter: "ブランド価値観指数"
    },
    { 
        id: 49, 
        text: "ブランドの社会的責任（CSR）を気にすることが多いですか？",
        parameter: "ブランド価値観指数"
    },
    { 
        id: 50, 
        text: "商品を購入する際、ブランド名で判断することが多いですか？",
        parameter: "ブランド価値観指数"
    },
];

// ページごとの質問数
const questionsPerPage = 10;
const totalPages = Math.ceil(questions.length / questionsPerPage);
let currentPage = 1;

// ユーザーの回答を保存するオブジェクト
let userAnswers = {};

// ページロード時に初期設定
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    startButton.addEventListener('click', () => {
        if (document.getElementById('consent-checkbox').checked) {
            document.getElementById('intro').classList.add('hidden');
            document.getElementById('progress-container').classList.remove('hidden');
            document.getElementById('questions-container').classList.remove('hidden');
            loadQuestions();
            updateProgressBar();
        } else {
            alert("プライバシーポリシーに同意してください！");
        }
    });
    updateButtonTexts();
});

// ロードされた質問を表示
function loadQuestions() {
    const questionsContainer = document.getElementById('questions-container');
    const navigationButtons = document.getElementById('navigation-buttons');
    // 質問コンテナをクリア
    questionsContainer.innerHTML = `
        <!-- 質問がここに動的に挿入されます -->
        <!-- ナビゲーションボタンを質問コンテナ内に配置 -->
        <div class="navigation-buttons hidden" id="navigation-buttons">
            <button id="prev-button" class="nav-button">前へ</button>
            <button id="next-button" class="nav-button">次へ</button>
            <button id="submit-button" class="nav-button hidden">結果を見る</button>
        </div>
    `;
    // 上書きされたため、再度取得
    const updatedNavigationButtons = document.getElementById('navigation-buttons');

    // 質問データを表示
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
            label.textContent = `${i}点`;
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

        questionsContainer.insertBefore(questionDiv, updatedNavigationButtons);
    });

    // ナビゲーションボタンを再度設定
    updatedNavigationButtons.classList.remove('hidden');

    // ナビゲーションボタンの表示/非表示を調整
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const submitButton = document.getElementById('submit-button');

    if(currentPage === 1) {
        prevButton.classList.add('hidden');
        updatedNavigationButtons.classList.add('single-button'); // 1ページ目は右揃え
    } else {
        prevButton.classList.remove('hidden');
        updatedNavigationButtons.classList.remove('single-button');
    }

    if(currentPage < totalPages) {
        nextButton.classList.remove('hidden');
        submitButton.classList.add('hidden');
    } else {
        nextButton.classList.add('hidden');
        submitButton.classList.remove('hidden');
    }

    // プログレスバーを更新
    updateProgressBar();

    // ボタンイベントの再設定
    setNavigationButtonEvents();
}

// プログレスバーを更新
function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    let progressPercent = 0;

    progressPercent = ((currentPage - 1) / totalPages) * 100;
    progressBar.style.width = `${progressPercent}%`;
    progressText.textContent = `${progressPercent.toFixed(0)}%`;
}

// ナビゲーションボタンのイベントを設定
function setNavigationButtonEvents() {
    const nextButton = document.getElementById('next-button');
    const prevButton = document.getElementById('prev-button');
    const submitButton = document.getElementById('submit-button');

    // イベントリスナーを一度削除してから再設定（重複防止）
    nextButton.replaceWith(nextButton.cloneNode(true));
    const newNextButton = document.getElementById('next-button');

    prevButton.replaceWith(prevButton.cloneNode(true));
    const newPrevButton = document.getElementById('prev-button');

    submitButton.replaceWith(submitButton.cloneNode(true));
    const newSubmitButton = document.getElementById('submit-button');

    newNextButton.addEventListener('click', () => {
        if(saveAnswers()) {
            currentPage++;
            loadQuestions();
            updateProgressBar();
            window.scrollTo(0, 0); // ページトップにスクロール
        }
    });

    newPrevButton.addEventListener('click', () => {
        currentPage--;
        loadQuestions();
        updateProgressBar();
        window.scrollTo(0, 0); // ページトップにスクロール
    });

    newSubmitButton.addEventListener('click', () => {
        if(saveAnswers()) {
            calculateResults();
        }
    });
}

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
        "コスパ指数": [],
        "未来設計指数": [],
        "思いやりの消費指数": [],
        "自己成長チャレンジ指数": [],
        "エコと社会貢献指数": [],
        "楽しみと癒し指数": [],
        "安心と備え指数": [],
        "日常のアート指数": [],
        "実用性へのこだわり指数": [],
        "ブランド価値観指数": []
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
    decagonContainer.classList.add('result-decahedron');

    // SVGを使用して10角形を作成
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "600"); // .result-decahedronの幅に合わせる
    svg.setAttribute("height", "600");
    svg.setAttribute("viewBox", "0 0 220 220"); // viewBoxを調整してラベルが見切れないようにする

    // グラフを中央に配置
    const group = document.createElementNS(svgNS, "g");
    group.setAttribute("transform", "translate(10,10)"); // 少し余白を取る

    // 外枠のデカゴン
    const outerPolygon = document.createElementNS(svgNS, "polygon");
    const angle = 36; // 360 / 10 = 36 degrees per vertex
    let outerPoints = "";
    for(let i=0; i<10; i++) {
        const x = 100 + 90 * Math.cos((angle * i - 90) * Math.PI / 180);
        const y = 100 + 90 * Math.sin((angle * i - 90) * Math.PI / 180);
        outerPoints += `${x},${y} `;
    }
    outerPolygon.setAttribute("points", outerPoints.trim());
    outerPolygon.setAttribute("fill", "#ffeb3b");
    outerPolygon.setAttribute("stroke", "#333");
    outerPolygon.setAttribute("stroke-width", "1");
    group.appendChild(outerPolygon);

    // 各カテゴリの位置にテキストを追加
    const categories = [
        "コスパ指数",
        "未来設計指数",
        "思いやりの消費指数",
        "自己成長チャレンジ指数",
        "エコと社会貢献指数",
        "楽しみと癒し指数",
        "安心と備え指数",
        "日常のアート指数",
        "実用性へのこだわり指数",
        "ブランド価値観指数"
    ];
    categories.forEach((param, i) => {
        const label = document.createElementNS(svgNS, "text");
        const x = 100 + 105 * Math.cos((angle * i - 90) * Math.PI / 180);
        const y = 100 + 105 * Math.sin((angle * i - 90) * Math.PI / 180);
        label.setAttribute("x", x);
        label.setAttribute("y", y);
        label.setAttribute("text-anchor", "middle");
        label.setAttribute("font-size", "6");
        label.setAttribute("font-family", "'Arial', sans-serif");
        label.classList.add("category-label");
        label.textContent = param;
        group.appendChild(label);
    });

    // ユーザーのスコアをプロットする
    const scorePoints = [];
    categories.forEach((param, i) => {
        const score = averageScores[param];
        // スコア1〜5をスケールして半径を決定（1〜5を0〜90にスケーリング）
        const scaledScore = ((score - 1) / 4) * 90; // スコア1が0、スコア5が90
        const scoreX = 100 + scaledScore * Math.cos((angle * i - 90) * Math.PI / 180);
        const scoreY = 100 + scaledScore * Math.sin((angle * i - 90) * Math.PI / 180);
        scorePoints.push(`${scoreX},${scoreY}`);
    });

    // 内枠のデカゴン（スコアを結んだ多角形）
    const innerPolygon = document.createElementNS(svgNS, "polygon");
    innerPolygon.setAttribute("points", scorePoints.join(' '));
    innerPolygon.setAttribute("fill", "rgba(0, 121, 107, 0.5)"); // 半透明
    innerPolygon.setAttribute("stroke", "#00796b");
    innerPolygon.setAttribute("stroke-width", "1");
    innerPolygon.classList.add("score-polygon");
    group.appendChild(innerPolygon);

    // 各スコアポイントに円を描画
    categories.forEach((param, i) => {
        const score = averageScores[param];
        const scaledScore = ((score - 1) / 4) * 90;
        const scoreX = 100 + scaledScore * Math.cos((angle * i - 90) * Math.PI / 180);
        const scoreY = 100 + scaledScore * Math.sin((angle * i - 90) * Math.PI / 180);

        const scoreCircle = document.createElementNS(svgNS, "circle");
        scoreCircle.setAttribute("cx", scoreX);
        scoreCircle.setAttribute("cy", scoreY);
        scoreCircle.setAttribute("r", "5");
        scoreCircle.classList.add("score-circle");
        group.appendChild(scoreCircle);
    });

    svg.appendChild(group); // グループをSVGに追加
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

    // 高スコアの特徴を返す関数（各パラメーターごとにカスタマイズ）
    function getHighScoreFeature(param) {
        const features = {
            "コスパ指数": "コスパに優れた消費者タイプ！お得な買い物を楽しんでいます。",
            "未来設計指数": "未来を見据えた計画的な消費者タイプ！将来のために賢くお金を使っています。",
            "思いやりの消費指数": "思いやりのある消費者タイプ！周囲の人を大切にするためにお金を使います。",
            "自己成長チャレンジ指数": "自己成長を重視する消費者タイプ！常にスキルや知識を磨いています。",
            "エコと社会貢献指数": "エコ意識が高い消費者タイプ！環境や社会に配慮した選択をしています。",
            "楽しみと癒し指数": "楽しみと癒しを大切にする消費者タイプ！日常に彩りを加えています。",
            "安心と備え指数": "安心と備えを重視する消費者タイプ！リスクに備えて賢くお金を使います。",
            "日常のアート指数": "アートを愛する消費者タイプ！美しいデザインや個性的な商品を選びます。",
            "実用性へのこだわり指数": "実用性を重視する消費者タイプ！必要なものを効率的に選んでいます。",
            "ブランド価値観指数": "ブランド価値を重視する消費者タイプ！信頼できるブランドを選んでいます。"
        };
        return features[param] || "";
    }

    // 低スコアの改善提案を返す関数（各パラメーターごとにカスタマイズ）
    function getLowScoreSuggestion(param) {
        const suggestions = {
            "コスパ指数": "コスパを意識してみましょう。価格と品質のバランスを考えて買い物をすると良いですよ。",
            "未来設計指数": "将来の計画を立てることをお勧めします。貯金や投資を始めてみましょう。",
            "思いやりの消費指数": "周囲の人への思いやりを持つことも大切です。ギフト選びや寄付などを検討してみてください。",
            "自己成長チャレンジ指数": "自己成長にもっと力を入れてみましょう。新しいスキルや知識を習得するための時間を作ってみてください。",
            "エコと社会貢献指数": "環境や社会に配慮した消費を心がけてみましょう。リサイクルやフェアトレード商品を選ぶと良いですよ。",
            "楽しみと癒し指数": "日常の楽しみを増やしてみましょう。趣味やレジャーに少しずつ時間を使ってみてください。",
            "安心と備え指数": "リスクに備えるための準備を始めましょう。保険や緊急備蓄を検討してみてください。",
            "日常のアート指数": "デザインやアートにもっと興味を持ってみましょう。美しいものに触れることで生活が豊かになります。",
            "実用性へのこだわり指数": "実用性を意識してみましょう。必要なものを優先的に選ぶことで、生活がスムーズになります。",
            "ブランド価値観指数": "信頼できるブランドを探してみましょう。ブランドの背景や価値観を調べて選ぶと良いですよ。"
        };
        return suggestions[param] || "";
    }

    // ユーザーデータをGoogle Sheetsに送信する関数
    function sendDataToGoogleSheets(data) {
        const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL'; // ここにデプロイしたApps ScriptのURLを貼り付け

        fetch(scriptURL, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(response => {
            console.log('Success:', response);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    // ナビゲーションボタンのテキストを日本語に設定
    function updateButtonTexts() {
        const prevButton = document.getElementById('prev-button');
        const nextButton = document.getElementById('next-button');
        const submitButton = document.getElementById('submit-button');

        if(prevButton) prevButton.textContent = "前へ";
        if(nextButton) nextButton.textContent = "次へ";
        if(submitButton) submitButton.textContent = "結果を見る";
    }
}

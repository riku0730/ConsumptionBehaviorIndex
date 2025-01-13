// 質問データの定義
const questions = [
    // **1. コスパ指数（Cost-Performance Index）**
    { 
        id: 1, 
        text: "購入前に同じ商品の価格を複数の店舗やウェブサイトで比較することが多いですか？",
        parameter: "コスパ指数"
    },
    { 
        id: 2, 
        text: "デザインやブランドよりも、価格と機能を優先して商品を選ぶことが多いですか？",
        parameter: "コスパ指数"
    },
    { 
        id: 3, 
        text: "無駄を防ぐため、必要な分だけを計画的に購入していますか？",
        parameter: "コスパ指数"
    },
    { 
        id: 4, 
        text: "長期間使える商品には、多少高くてもお金を出すことを躊躇しませんか？",
        parameter: "コスパ指数"
    },
    { 
        id: 5, 
        text: "割引やポイント制度を利用するために、購入時期を調整することがありますか？",
        parameter: "コスパ指数"
    },
    // **2. 未来設計指数（Future Design Index）**
    { 
        id: 6, 
        text: "緊急時に備えた貯金を、意識的に行っていますか？",
        parameter: "未来設計指数"
    },
    { 
        id: 7, 
        text: "将来のために、保険や投資商品を選ぶ際に内容をしっかり調べますか？",
        parameter: "未来設計指数"
    },
    { 
        id: 8, 
        text: "趣味や楽しみよりも、将来の生活の安定を優先して支出を考えることがありますか？",
        parameter: "未来設計指数"
    },
    { 
        id: 9, 
        text: "老後の生活資金を確保するための行動を始めていますか？",
        parameter: "未来設計指数"
    },
    { 
        id: 10, 
        text: "教育やスキルアップのための支出を、短期的な楽しみより優先することがありますか？",
        parameter: "未来設計指数"
    },
    // **3. 思いやりの消費指数（Empathy Spending Index）**
    { 
        id: 11, 
        text: "贈り物を選ぶ際、自分の好みよりも相手が喜ぶことを優先しますか？",
        parameter: "思いやりの消費指数"
    },
    { 
        id: 12, 
        text: "家族や友人のために、高品質な商品を選ぶことがありますか？",
        parameter: "思いやりの消費指数"
    },
    { 
        id: 13, 
        text: "チャリティや募金活動に積極的に参加することが多いですか？",
        parameter: "思いやりの消費指数"
    },
    { 
        id: 14, 
        text: "特別なイベントや記念日のために、他人のためにお金を使うことを惜しみませんか？",
        parameter: "思いやりの消費指数"
    },
    { 
        id: 15, 
        text: "自分の支出が他人を喜ばせることに繋がると感じると満足感を得ますか？",
        parameter: "思いやりの消費指数"
    },
    // **4. 自己成長チャレンジ指数（Self-Growth Challenge Index）**
    { 
        id: 16, 
        text: "趣味や娯楽よりも、スキルアップや健康管理にお金を使うことを優先しますか？",
        parameter: "自己成長チャレンジ指数"
    },
    { 
        id: 17, 
        text: "高額でも自己成長に繋がる講座や学びのための出費を考えますか？",
        parameter: "自己成長チャレンジ指数"
    },
    { 
        id: 18, 
        text: "将来のキャリアアップや学びのために、短期的な贅沢を控えることがありますか？",
        parameter: "自己成長チャレンジ指数"
    },
    { 
        id: 19, 
        text: "健康を保つために、ジムや健康食品などに継続的にお金を使いますか？",
        parameter: "自己成長チャレンジ指数"
    },
    { 
        id: 20, 
        text: "自己成長のための投資を最優先に考えることが多いですか？",
        parameter: "自己成長チャレンジ指数"
    },
    // **5. エコと社会貢献指数（Eco & Social Contribution Index）**
    { 
        id: 21, 
        text: "商品を選ぶ際、環境に配慮した素材や製造方法を重視しますか？",
        parameter: "エコと社会貢献指数"
    },
    { 
        id: 22, 
        text: "リサイクル可能な商品やエコ対応の包装を積極的に選びますか？",
        parameter: "エコと社会貢献指数"
    },
    { 
        id: 23, 
        text: "サステナブルなブランドを応援するために、その商品を購入することがありますか？",
        parameter: "エコと社会貢献指数"
    },
    { 
        id: 24, 
        text: "地域産の商品を全国ブランドよりも優先して購入することがありますか？",
        parameter: "エコと社会貢献指数"
    },
    { 
        id: 25, 
        text: "自分の消費が環境や社会に良い影響を与えると考えると満足感を得ますか？",
        parameter: "エコと社会貢献指数"
    },
    // **6. 楽しみと癒し指数（Joy & Relaxation Index）**
    { 
        id: 26, 
        text: "家計を管理する中で、旅行や趣味にお金を使うことを優先しますか？",
        parameter: "楽しみと癒し指数"
    },
    { 
        id: 27, 
        text: "自分へのご褒美として、特別な体験や贅沢品を購入することがありますか？",
        parameter: "楽しみと癒し指数"
    },
    { 
        id: 28, 
        text: "日々のストレス解消のために、予定外の支出をすることがありますか？",
        parameter: "楽しみと癒し指数"
    },
    { 
        id: 29, 
        text: "生活の実用性よりも、自分の楽しみにお金を使うことが多いですか？",
        parameter: "楽しみと癒し指数"
    },
    { 
        id: 30, 
        text: "趣味や娯楽への支出が、生活の大きな満足感に繋がると感じますか？",
        parameter: "楽しみと癒し指数"
    },
    // **7. 安心と備え指数（Security & Preparedness Index）**
    { 
        id: 31, 
        text: "災害時の備蓄品や非常食を定期的に確認・補充していますか？",
        parameter: "安心と備え指数"
    },
    { 
        id: 32, 
        text: "健康や安全に関する商品やサービスには、他の支出より優先的にお金を使いますか？",
        parameter: "安心と備え指数"
    },
    { 
        id: 33, 
        text: "必要以上の備えは避けつつも、最低限のリスク対策を行っていますか？",
        parameter: "安心と備え指数"
    },
    { 
        id: 34, 
        text: "保険やセキュリティ対策など、安心感を得るための支出を重視しますか？",
        parameter: "安心と備え指数"
    },
    { 
        id: 35, 
        text: "緊急時に必要な準備を整えていると自信を持って言えますか？",
        parameter: "安心と備え指数"
    },
    // **8. 日常のアート指数（Everyday Artfulness Index）**
    { 
        id: 36, 
        text: "デザインや美しさを重視して、実用性を二の次にすることがありますか？",
        parameter: "日常のアート指数"
    },
    { 
        id: 37, 
        text: "生活空間を美しく整えるために、少し高価なインテリアを購入することがありますか？",
        parameter: "日常のアート指数"
    },
    { 
        id: 38, 
        text: "自分の個性を表現できるファッションや雑貨を選ぶことが多いですか？",
        parameter: "日常のアート指数"
    },
    { 
        id: 39, 
        text: "見た目の美しさを優先して商品を購入することが多いですか？",
        parameter: "日常のアート指数"
    },
    { 
        id: 40, 
        text: "流行やおしゃれさを重要視して商品を選びますか？",
        parameter: "日常のアート指数"
    },
    // **9. 実用性へのこだわり指数（Practicality Focus Index）**
    { 
        id: 41, 
        text: "日常的に多用途で使える商品を選ぶことを重視しますか？",
        parameter: "実用性へのこだわり指数"
    },
    { 
        id: 42, 
        text: "耐久性が高い商品を見た目より優先して購入しますか？",
        parameter: "実用性へのこだわり指数"
    },
    { 
        id: 43, 
        text: "必要最低限の機能があれば十分だと感じることが多いですか？",
        parameter: "実用性へのこだわり指数"
    },
    { 
        id: 44, 
        text: "購入する際、商品のレビューや評価を確認する習慣がありますか？",
        parameter: "実用性へのこだわり指数"
    },
    { 
        id: 45, 
        text: "実用性の高い商品を選ぶことが満足感に繋がりますか？",
        parameter: "実用性へのこだわり指数"
    },
    // **10. ブランド価値観指数（Brand Values Index）**
    { 
        id: 46, 
        text: "信頼できるブランドの商品を選ぶことが多いですか？",
        parameter: "ブランド価値観指数"
    },
    { 
        id: 47, 
        text: "ブランドの社会貢献やストーリーに共感して商品を購入しますか？",
        parameter: "ブランド価値観指数"
    },
    { 
        id: 48, 
        text: "ブランド品に投資することを、自分のステータス向上と感じることがありますか？",
        parameter: "ブランド価値観指数"
    },
    { 
        id: 49, 
        text: "他人に良い印象を与えるためにブランド品を購入することがありますか？",
        parameter: "ブランド価値観指数"
    },
    { 
        id: 50, 
        text: "ブランドの品質を信頼しているため、多少高価でも購入を考えますか？",
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
    console.log("ページがロードされました");
    const startButton = document.getElementById('start-button');
    startButton.addEventListener('click', () => {
        console.log("スタートボタンがクリックされました");
        // バリデーションチェック
        const consent = document.getElementById('consent-checkbox').checked;
        const age = document.getElementById('user-age').value;
        const genderElements = document.getElementsByName('user-gender');
        let gender = '';
        genderElements.forEach(radio => {
            if (radio.checked) {
                gender = radio.value;
            }
        });

        if (!consent) {
            alert("プライバシーポリシーに同意してください！");
            console.log("プライバシーポリシーに同意していません");
            return;
        }

        if (!age) {
            alert("年代を選択してください！");
            console.log("年代が選択されていません");
            return;
        }

        if (!gender) {
            alert("性別を選択してください！");
            console.log("性別が選択されていません");
            return;
        }

        // ユーザー情報を保存
        userAnswers['age'] = age;
        userAnswers['gender'] = gender;

        // イントロを隠して質問コンテナを表示
        document.getElementById('intro').classList.add('hidden');
        document.getElementById('progress-container').classList.remove('hidden');
        document.getElementById('questions-container').classList.remove('hidden');
        loadQuestions();
        updateProgressBar();
    });
    updateButtonTexts();
});

// ロードされた質問を表示
function loadQuestions() {
    console.log(`現在のページ: ${currentPage}`);
    const questionsContainer = document.getElementById('questions-container');
    const navigationButtons = document.getElementById('navigation-buttons');

    // 質問コンテナをクリア（ナビゲーションボタンを保持）
    questionsContainer.innerHTML = ''; // 完全にクリア

    // 質問コンテナにナビゲーションボタンを再追加
    questionsContainer.appendChild(navigationButtons);

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

        questionsContainer.insertBefore(questionDiv, navigationButtons);
    });

    // ナビゲーションボタンの表示/非表示を調整
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const submitButton = document.getElementById('submit-button');

    if(currentPage === 1) {
        prevButton.classList.add('hidden');
        navigationButtons.classList.add('single-button'); // 1ページ目は右揃え
    } else {
        prevButton.classList.remove('hidden');
        navigationButtons.classList.remove('single-button');
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
    console.log(`プログレスバーを更新: ${progressPercent}%`);
}

// ナビゲーションボタンのイベントを設定
function setNavigationButtonEvents() {
    console.log("ナビゲーションボタンのイベントを設定します");
    const nextButton = document.getElementById('next-button');
    const prevButton = document.getElementById('prev-button');
    const submitButton = document.getElementById('submit-button');

    // 次へボタン
    nextButton.onclick = () => {
        console.log("次へボタンがクリックされました");
        if(saveAnswers()) {
            currentPage++;
            loadQuestions();
            updateProgressBar();
            window.scrollTo(0, 0); // ページトップにスクロール
        }
    };

    // 前へボタン
    prevButton.onclick = () => {
        console.log("前へボタンがクリックされました");
        currentPage--;
        loadQuestions();
        updateProgressBar();
        window.scrollTo(0, 0); // ページトップにスクロール
    };

    // 結果を見るボタン
    submitButton.onclick = () => {
        console.log("結果を見るボタンがクリックされました");
        if(saveAnswers()) {
            calculateResults();
            sendDataToGoogleSheets(userAnswers); // データ送信
        }
    };
}

// ユーザーの回答を保存する関数
function saveAnswers() {
    console.log("ユーザーの回答を保存します");
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

    // 既にイントロでユーザー情報を取得しているため、ここでは再取得しない
    // ユーザー情報の再チェックは不要

    if (!allAnswered) {
        alert("全ての質問に回答してください！");
        console.log("全ての質問に回答されていません");
        return false;
    }

    console.log("全ての質問に回答済み");
    return true;
}

// 診断結果を計算する関数
function calculateResults() {
    console.log("診断結果を計算中...");
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
        console.log("全ての質問に回答されていません");
        return;
    }

    // 各パラメーターの平均スコアを計算
    const averageScores = {};
    for (let param in scores) {
        const total = scores[param].reduce((a, b) => a + b, 0);
        const avg = total / scores[param].length;
        averageScores[param] = avg.toFixed(1);
    }

    console.log("平均スコア:", averageScores);
    displayResults(averageScores);
}

// 診断結果を表示する関数
function displayResults(averageScores) {
    console.log("診断結果を表示します");
    // プログレスバーを非表示にする
    document.getElementById('progress-container').classList.add('hidden');
    
    // クイズコンテナを非表示にする
    document.getElementById('questions-container').style.display = 'none';
    
    // 結果セクションを表示する
    const resultSection = document.getElementById('result');
    resultSection.style.display = 'block';

    // 結果をクリア
    resultSection.innerHTML = '';

    // 全体的な評価
    const highParams = Object.keys(averageScores).filter(param => averageScores[param] >= 4.0); // 4.0以上を高スコアとする
    let overallType = getOverallType(highParams.length); // 修正箇所
    userAnswers['overallType'] = overallType; // データ送信用に追加

    // 全体的な評価を作成
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
        const score = parseFloat(averageScores[param]);
        // スコア1～5をスケールして半径を決定（1～5を0～90にスケーリング）
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
        const score = parseFloat(averageScores[param]);
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

    // グラフとテキストをまとめて配置
    const combinedContainer = document.createElement('div');
    combinedContainer.style.display = 'flex';
    combinedContainer.style.flexDirection = 'column';
    combinedContainer.style.alignItems = 'center';
    combinedContainer.style.gap = '20px'; // グラフとテキストの間隔を調整

    combinedContainer.appendChild(decagonContainer);
    combinedContainer.appendChild(overallDiv);

    resultSection.appendChild(combinedContainer);

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
        if (score >= 4.0) { // 高スコア（80%以上）
            scoreDesc.textContent = "高い意識";
            scoreDesc.style.color = "#4CAF50"; // 緑
            // 高スコアの特徴を追加
            const feature = document.createElement('p');
            feature.textContent = getHighScoreFeature(param);
            feature.style.color = "#388E3C";
            paramDiv.appendChild(feature);
        } else if (score >= 3.0) { // 中スコア（50〜79%）
            scoreDesc.textContent = "中程度の意識";
            scoreDesc.style.color = "#FFC107"; // 黄色
            // 中スコアの説明を追加
            const mediumDesc = document.createElement('p');
            mediumDesc.textContent = getMediumScoreDescription(param);
            mediumDesc.style.color = "#FF9800";
            paramDiv.appendChild(mediumDesc);
        } else { // 低スコア（49%以下）
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
            "コスパ指数": "あなたは価格と価値を非常に重視する消費者です。商品の価格や機能を徹底的に比較し、より良い選択をすることを心がけています。このスキルは、長期的な節約や効率的な消費に大きく役立つでしょう。",
            "未来設計指数": "あなたは計画的な消費を重視するタイプです。将来の生活や安心感を見据えて、貯蓄やリスク対策をしっかり行っています。この姿勢は長期的な成功や安定につながります。",
            "思いやりの消費指数": "あなたは他人のためにお金を使うことに喜びを感じる、思いやりのある消費者です。贈り物や特別なイベントに積極的にお金を使い、周囲の人々を喜ばせることを大切にしています。",
            "自己成長チャレンジ指数": "あなたは自己成長のための投資に積極的です。学びやスキルアップ、健康管理に対して高い意識を持ち、それに対する支出を惜しみません。この姿勢はあなたの将来に大きく役立つでしょう。",
            "エコと社会貢献指数": "あなたは環境や社会貢献を非常に重視する消費者です。エコ商品やサステナブルブランドを選び、消費を通じて社会や環境に貢献することを大切にしています。",
            "楽しみと癒し指数": "あなたは自分の楽しみや癒しを重視するタイプです。趣味や娯楽、旅行などに積極的にお金を使い、日常生活を充実させています。",
            "安心と備え指数": "あなたは安全性やリスクへの備えを重視する消費者です。非常食や保険、健康対策など、将来への備えに対する意識が非常に高いです。",
            "日常のアート指数": "あなたはデザインや美しさを非常に重視する消費者です。商品の実用性だけでなく、見た目や感性を大切にした選択を行うことが特徴です。",
            "実用性へのこだわり指数": "あなたは実用性や効率性を非常に重視する消費者です。商品の耐久性や多用途性を重要視し、日常の効率的な消費を心がけています。",
            "ブランド価値観指数": "あなたはブランド価値を非常に重視するタイプです。信頼性やステータスを求め、ブランド品に積極的に投資します。"
        };
        return features[param] || "";
    }

    // 中スコアの説明文を返す関数（各パラメーターごとにカスタマイズ）
    function getMediumScoreDescription(param) {
        const mediumDescriptions = {
            "コスパ指数": "あなたはコスパを意識する一方で、必要に応じて価格以外の価値を重視する柔軟なタイプです。賢い買い物を意識しつつ、デザインや品質など他の要素も大事にしています。",
            "未来設計指数": "あなたは未来設計を意識しつつも、日常の楽しみや必要性とのバランスを大切にしています。柔軟な判断ができるため、計画と実際の消費の両方を上手く組み合わせています。",
            "思いやりの消費指数": "あなたは他人への配慮を持ちながらも、自分のニーズとのバランスを大切にするタイプです。適度に他人を喜ばせつつ、無理のない範囲で消費行動を行っています。",
            "自己成長チャレンジ指数": "あなたは自己成長を意識しつつも、日常の楽しみや他の目的を優先する傾向があります。状況に応じて適切に成長のための投資を行っています。",
            "エコと社会貢献指数": "あなたは環境や社会貢献に対して適度な関心を持つタイプです。状況に応じてエコや社会的な要素を意識して選ぶことがあります。",
            "楽しみと癒し指数": "あなたは楽しみや癒しを重視しつつも、必要に応じて節約や計画性も意識するタイプです。バランスの取れた消費行動が特徴です。",
            "安心と備え指数": "あなたは安全性やリスク対策を適度に意識しつつ、日常の消費とのバランスを取るタイプです。必要に応じて備える柔軟性があります。",
            "日常のアート指数": "あなたはデザインや美しさを意識しつつも、価格や実用性も考慮したバランス型の消費者です。",
            "実用性へのこだわり指数": "あなたは実用性を意識しつつも、状況に応じてデザインやブランドを考慮する柔軟な消費者です。",
            "ブランド価値観指数": "あなたはブランド価値を意識しつつも、必要に応じて価格や実用性を重視する柔軟なタイプです。"
        };
        return mediumDescriptions[param] || "";
    }

    // 低スコアの改善提案を返す関数（各パラメーターごとにカスタマイズ）
    function getLowScoreSuggestion(param) {
        const suggestions = {
            "コスパ指数": "あなたはコスパよりも他の価値（デザインやブランド、感覚的な要素など）を優先する消費傾向があります。価格を気にしない分、消費における自由度が高いタイプです。",
            "未来設計指数": "あなたは未来設計よりも現在の生活や楽しみに重きを置く傾向があります。短期的な満足感を優先するタイプですが、将来の計画を少し意識することで、さらなる安心感を得られるかもしれません。",
            "思いやりの消費指数": "あなたは自分のための消費を優先する傾向があります。他人への配慮よりも、自分の満足感や価値観を重視するタイプです。",
            "自己成長チャレンジ指数": "あなたは自己成長への投資よりも、日常の楽しみや他の目的を優先する傾向があります。ただ、少し意識を向けることで新しい可能性が広がるかもしれません。",
            "エコと社会貢献指数": "あなたは環境や社会貢献よりも、価格や実用性など他の要素を優先する消費傾向があります。ただ、少し意識を向けることで新しい選択肢が広がるかもしれません。",
            "楽しみと癒し指数": "あなたは楽しみや癒しよりも、実用性や必要性を優先する消費傾向があります。少し自分の楽しみに目を向けても良いかもしれません。",
            "安心と備え指数": "あなたは安全性やリスクへの備えよりも、現在の楽しみや必要性を優先する傾向があります。少し意識を向けることで安心感が増すかもしれません。",
            "日常のアート指数": "あなたはデザインや美しさよりも、実用性や価格を優先する傾向があります。ただ、少し美的な要素に目を向けることで新たな満足感を得られるかもしれません。",
            "実用性へのこだわり指数": "あなたは実用性よりも、感覚的な要素やデザインなどを優先する傾向があります。ただ、少し実用性に目を向けることで選択肢が広がるかもしれません。",
            "ブランド価値観指数": "あなたはブランドよりも、価格や実用性、デザインなど他の要素を優先する消費傾向があります。"
        };
        return suggestions[param] || "";
    }

    // 新しく追加する関数: 高スコアの個数に応じたタイプを返す
    function getOverallType(count) {
        const typeMapping = {
            0: "ニュートラル型",
            1: "単軸特化型",
            2: "デュアルフォーカス型",
            3: "トリプルフォーカス型",
            4: "バランス重視型",
            5: "マルチバランサー型",
            6: "多軸エキスパート",
            7: "多面的スペシャリスト",
            8: "万能型プレイヤー",
            9: "オールラウンドマスター",
            10: "パーフェクトバランサー"
        };
        return typeMapping[count] || "バランスの取れた消費者タイプ！"; // デフォルト値
    }

    // ユーザーデータをGoogle Sheetsに送信する関数
    function sendDataToGoogleSheets(data) {
        const scriptURL = "https://script.google.com/macros/s/AKfycbwTNBjy_y5Yx3R49QbM0qNOWdva4K7ltygYNEbzOXwVqOrPGzz8gogJHUYX07gq7Z9L2w/exec"; // ここにデプロイしたApps ScriptのURLを貼り付け

        // userAnswers から answers 配列を構築
        const answers = [];
        for(let i = 1; i <= 50; i++) {
            answers.push(data[`question-${i}`]);
        }

        // 各指数の平均スコアを構築
        const indexAverages = {
            "コスパ指数": parseFloat(data["コスパ指数"]),
            "未来設計指数": parseFloat(data["未来設計指数"]),
            "思いやりの消費指数": parseFloat(data["思いやりの消費指数"]),
            "自己成長チャレンジ指数": parseFloat(data["自己成長チャレンジ指数"]),
            "エコと社会貢献指数": parseFloat(data["エコと社会貢献指数"]),
            "楽しみと癒し指数": parseFloat(data["楽しみと癒し指数"]),
            "安心と備え指数": parseFloat(data["安心と備え指数"]),
            "日常のアート指数": parseFloat(data["日常のアート指数"]),
            "実用性へのこだわり指数": parseFloat(data["実用性へのこだわり指数"]),
            "ブランド価値観指数": parseFloat(data["ブランド価値観指数"])
        };

        // 送信データの構築
        const dataToSend = {
            age: data.age,
            gender: data.gender,
            answers: answers,
            ...indexAverages
        };

        showLoading(); // ローディング表示

        fetch(scriptURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        })
        .then(response => response.json())
        .then(response => {
            console.log('Success:', response);
            hideLoading(); // ローディング非表示
            if(response.result === "success") {
                alert('データの送信に成功しました！');
                // 必要に応じてフォームのリセットや結果ページへの遷移など
                resetForm(); // フォームのリセット
            } else {
                alert('データ送信に失敗しました: ' + response.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            hideLoading(); // ローディング非表示
            alert('データ送信中にエラーが発生しました。再度お試しください。');
        });
    }

    // フォームをリセットする関数
    function resetForm() {
        // プログレスバーをリセット
        const progressBar = document.getElementById('progress-bar');
        const progressText = document.getElementById('progress-text');
        progressBar.style.width = `0%`;
        progressText.textContent = `0%`;

        // 結果セクションを非表示にする
        const resultSection = document.getElementById('result');
        resultSection.style.display = 'none';

        // イントロを再表示し、フォームをリセット
        document.getElementById('intro').classList.remove('hidden');
        document.getElementById('questions-container').style.display = 'none';
        document.getElementById('progress-container').classList.add('hidden');

        // ユーザーの回答をリセット
        userAnswers = {};

        // 現在のページをリセット
        currentPage = 1;

        // フォームのリセット
        const ageSelect = document.getElementById('user-age');
        ageSelect.selectedIndex = 0;

        const genderElements = document.getElementsByName('user-gender');
        genderElements.forEach(radio => radio.checked = false);

        const consentCheckbox = document.getElementById('consent-checkbox');
        consentCheckbox.checked = false;
    }

    // ローディングインジケーターの表示・非表示を制御
    function showLoading() {
        document.getElementById('loading').classList.remove('hidden');
    }

    function hideLoading() {
        document.getElementById('loading').classList.add('hidden');
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

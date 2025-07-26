// Aplikacja mobilna CyberCoin Tapper
// Wersja 1.0.1 - Zoptymalizowana i przyspieszona

// --- Konfiguracja gry ---
const translations = {
    pl: {
        // Tapper View
        dailyRewardsButton: "Nagrody Dziennie",
        walletButton: "Portfel",
        leagueName: "Brązowa Liga",
        nextLeagueText: "Następna: ",
        workInProgress: "Trwają prace i przepraszamy za utrudnienia.",
        energyDisplay: "Energia",
        boostButton: "Boost",
        turboIndicator: "TURBO",
        eventIndicator: "GORĄCZKA TRX!",
        gemsCurrency: "Gemy",
        accumulatedText: "Zgromadzone:",
        collectButton: "Odbierz",
        
        // Upgrades View
        upgradesTitle: "Ulepszenia",
        upgradeTapPower: "Moc Kliknięcia",
        upgradePassiveIncome: "Dochód Pasywny",
        upgradeMaxEnergy: "Maks. Energia",
        purchaseButton: "Kup",
        
        // Farm View
        farmTitle: "Farma Danych",
        incomePerHour: "Dochód na godzinę",
        accumulatedFarmText: "Zgromadzone (do odbioru):",
        
        // Shop View
        shopTitle: "Sklep z Kosmetykami",
        
        // Inventory View
        inventoryTitle: "Ekwipunek",
        activateItem: "Aktywuj",
        
        // Boosts View
        boostsTitle: "Wzmacniacze",
        turboBoostTitle: "Turbo Boost",
        turboBoostDescription: "Zwiększa zysk z kliknięcia x5. Trwa 30 sekund.",
        readyText: "Gotowy!",
        cooldownText: "Gotowy za: ",
        activateButton: "Aktywuj",
        
        // Tasks View
        tasksTitle: "Zadania",
        challengesTitle: "Wyzwania",
        taskClaimReward: "Odbierz",
        taskCompleted: "Ukończono!",
        taskConnectTelegram: "Połącz Telegram",
        taskJoinDiscord: "Dołącz do Discord",
        taskFollowX: "Obserwuj na X",
        taskShareTwitter: "Udostępnij na X",
        taskPlayMiniGame: "Zagraj w minigrę",
        challengeReachBalance: "Osiągnij {value} TRX",
        challengeReachTaps: "Wykonaj {value} kliknięć",
        
        // Leaderboard View
        leaderboardTitle: "Ranking",
        yourRankTitle: "Twój Ranking",
        
        // Modals
        dailyRewardsTitle: "Nagrody Dziennie",
        walletTitle: "Mój Portfel",
        
        // Toasts
        toastNotEnoughTrx: "Niewystarczająca ilość TRX!",
        toastAlreadyPurchased: "Już zakupiono!",
        toastUpgradeSuccess: "Ulepszenie zakupione!",
        toastPassiveCollected: "Odebrano dochód pasywny!",
        toastEnergyFull: "Energia jest pełna!",
        toastBoostActive: "Boost jest aktywny!",
        toastBoostReady: "Boost jest już gotowy!",
        toastRewardClaimed: "Nagroda odebrana!",
        toastTurboActivated: "Turbo aktywowane na 30 sekund!",
        
        // Chat
        chatTitle: "Wsparcie Cyfrowe",
        chatWelcome: "Witaj! Jak mogę Ci pomóc? Wybierz temat lub wpisz swoje pytanie.",
        chatPlaceholder: "Wpisz swoją wiadomość...",
        chatSendButton: "Wyślij",
        topicGameInfo: "Informacje o grze",
        topicBugsReport: "Zgłoś błąd",
        topicAccountHelp: "Pomoc z kontem",
        chatResponseInfo: "CyberCoin Tapper to gra typu 'tap-to-earn', w której zbierasz wirtualne TRX, klikając na ekran. Możesz ulepszać swoje narzędzia, kupować boty do automatycznego kopania i rywalizować w rankingach. To wczesna wersja gry, więc spodziewaj się wielu nowych funkcji!",
        chatResponseBugs: "Dziękuję za zgłoszenie błędu! Przekażemy Twój opis naszemu zespołowi. Napisz dokładnie, co się stało, a my postaramy się to naprawić jak najszybciej.",
        chatResponseAccount: "W sprawach dotyczących konta prosimy o kontakt z naszym wsparciem technicznym za pośrednictwem e-maila: support@cybercoin.tapper. Daj nam znać, jeśli masz problem z logowaniem lub innymi danymi konta.",
        chatResponseDefault: "Przepraszam, nie zrozumiałem Twojego pytania. Możesz spróbować wybrać jeden z gotowych tematów lub przeformułować swoje pytanie?",
    },
    en: {
        // Tapper View
        dailyRewardsButton: "Daily Rewards",
        walletButton: "Wallet",
        leagueName: "Bronze League",
        nextLeagueText: "Next: ",
        workInProgress: "Work in progress, sorry for the inconvenience.",
        energyDisplay: "Energy",
        boostButton: "Boost",
        turboIndicator: "TURBO",
        eventIndicator: "TRX RUSH!",
        gemsCurrency: "Gems",
        accumulatedText: "Accumulated:",
        collectButton: "Collect",

        // Upgrades View
        upgradesTitle: "Upgrades",
        upgradeTapPower: "Tap Power",
        upgradePassiveIncome: "Passive Income",
        upgradeMaxEnergy: "Max Energy",
        purchaseButton: "Purchase",

        // Farm View
        farmTitle: "Data Farm",
        incomePerHour: "Income per Hour",
        accumulatedFarmText: "Accumulated (to collect):",

        // Shop View
        shopTitle: "Cosmetics Shop",

        // Inventory View
        inventoryTitle: "Inventory",
        activateItem: "Activate",

        // Boosts View
        boostsTitle: "Boosts",
        turboBoostTitle: "Turbo Boost",
        turboBoostDescription: "Increases tap profit by 5x. Lasts 30 seconds.",
        readyText: "Ready!",
        cooldownText: "Ready in: ",
        activateButton: "Activate",

        // Tasks View
        tasksTitle: "Tasks",
        challengesTitle: "Challenges",
        taskClaimReward: "Claim",
        taskCompleted: "Completed!",
        taskConnectTelegram: "Connect Telegram",
        taskJoinDiscord: "Join Discord",
        taskFollowX: "Follow on X",
        taskShareTwitter: "Share on X",
        taskPlayMiniGame: "Play Mini-Game",
        challengeReachBalance: "Reach {value} TRX",
        challengeReachTaps: "Perform {value} taps",

        // Leaderboard View
        leaderboardTitle: "Leaderboard",
        yourRankTitle: "Your Rank",

        // Modals
        dailyRewardsTitle: "Daily Rewards",
        walletTitle: "My Wallet",

        // Toasts
        toastNotEnoughTrx: "Not enough TRX!",
        toastAlreadyPurchased: "Already purchased!",
        toastUpgradeSuccess: "Upgrade purchased!",
        toastPassiveCollected: "Passive income collected!",
        toastEnergyFull: "Energy is full!",
        toastBoostActive: "Boost is active!",
        toastBoostReady: "Boost is already ready!",
        toastRewardClaimed: "Reward claimed!",
        toastTurboActivated: "Turbo activated for 30 seconds!",
        
        // Chat
        chatTitle: "Digital Support",
        chatWelcome: "Hello! How can I help you? Choose a topic or type your question.",
        chatPlaceholder: "Type your message...",
        chatSendButton: "Send",
        topicGameInfo: "Game Info",
        topicBugsReport: "Report Bug",
        topicAccountHelp: "Account Help",
        chatResponseInfo: "CyberCoin Tapper is a 'tap-to-earn' game where you collect virtual TRX by tapping the screen. You can upgrade your tools, buy bots for automatic mining, and compete in leaderboards. This is an early version of the game, so expect many new features!",
        chatResponseBugs: "Thank you for reporting the bug! We will pass your description to our team. Please provide details on what happened, and we will try to fix it as soon as possible.",
        chatResponseAccount: "For account-related issues, please contact our technical support via email: support@cybercoin.tapper. Let us know if you have problems with login or other account data.",
        chatResponseDefault: "Sorry, I didn't understand your question. You can try selecting one of the topics or rephrase your question?",
    }
};

let currentLang = 'pl';
const tapperView = document.getElementById('view-tapper');
const upgradesView = document.getElementById('view-upgrades');
const farmView = document.getElementById('view-farm');
const shopView = document.getElementById('view-shop');
const inventoryView = document.getElementById('view-inventory');
const boostsView = document.getElementById('view-boosts');
const tasksView = document.getElementById('view-tasks');
const leaderboardView = document.getElementById('view-leaderboard');

const views = {
    'tapper': tapperView,
    'upgrades': upgradesView,
    'farm': farmView,
    'shop': shopView,
    'inventory': inventoryView,
    'boosts': boostsView,
    'tasks': tasksView,
    'leaderboard': leaderboardView,
};

let game = {
    balance: 0,
    gems: 0,
    tapPower: 20, // PRZYSPIESZONO: Zwiększono domyślną moc kliknięcia z 1 na 20
    energy: 5000,
    maxEnergy: 5000, // PRZYSPIESZONO: Zwiększono domyślną max. energię z 1000 na 5000
    energyRestoreRate: 10, // PRZYSPIESZONO: Zwiększono szybkość regeneracji energii z 1 na 10
    passiveIncomePerSecond: 0,
    accumulatedPassiveIncome: 0,
    lastPassiveIncomeTime: Date.now(),
    lastLogin: Date.now(),
    league: 'Bronze',
    totalTaps: 0,
    upgrades: {},
    bots: {},
    cosmetics: {},
    inventory: {},
    tasks: {
        'telegram': { completed: false, reward: { type: 'gems', amount: 5 } },
        'discord': { completed: false, reward: { type: 'gems', amount: 5 } },
        'x': { completed: false, reward: { type: 'gems', amount: 5 } },
    },
    challenges: [
        { id: 'balance1', name: 'Osiągnij 100 TRX', goal: 100, current: 0, reward: { type: 'trx', amount: 50 }, completed: false },
        { id: 'balance2', name: 'Osiągnij 1000 TRX', goal: 1000, current: 0, reward: { type: 'trx', amount: 200 }, completed: false },
        { id: 'taps1', name: 'Wykonaj 500 kliknięć', goal: 500, current: 0, reward: { type: 'gems', amount: 1 }, completed: false },
        { id: 'taps2', name: 'Wykonaj 2000 kliknięć', goal: 2000, current: 0, reward: { type: 'gems', amount: 2 }, completed: false },
    ],
    dailyRewards: {
        lastClaimDate: null,
        claimedDays: 0,
    },
    boosts: {
        turbo: {
            duration: 30000, // PRZYSPIESZONO: Zwiększono czas trwania turbo z 20s na 30s
            cooldown: 1800000, // PRZYSPIESZONO: Skrócono cooldown z 1h do 30min
            lastUsed: 0,
        },
    },
    settings: {
        musicEnabled: true,
    },
    playerInfo: {
        id: 'user123',
        name: 'CyberTapper',
    }
};

const upgrades = {
    tapPower1: { name: "Ulepszenie kliknięcia", type: 'tap', cost: 100, effect: 10, level: 1, maxLevel: 10 },
    tapPower2: { name: "Ulepszenie kliknięcia 2", type: 'tap', cost: 500, effect: 20, level: 1, maxLevel: 10 },
    passiveIncome1: { name: "Automatyczny Kopalnia", type: 'passive', cost: 200, effect: 1, level: 1, maxLevel: 10, income: 10 }, // PRZYSPIESZONO: Zwiększono bazowy dochód z 1 na 10
    passiveIncome2: { name: "Zaawansowana Kopalnia", type: 'passive', cost: 1000, effect: 1, level: 1, maxLevel: 10, income: 50 }, // PRZYSPIESZONO: Zwiększono bazowy dochód z 10 na 50
    maxEnergy1: { name: "Większy Akumulator", type: 'energy', cost: 300, effect: 500, level: 1, maxLevel: 5 },
};

const bots = {
    bot1: { name: "Prosty Bot", description: "Automatycznie kopie 1 TRX/h", cost: 500, income: 1, purchased: false },
    bot2: { name: "Zaawansowany Bot", description: "Automatycznie kopie 5 TRX/h", cost: 2000, income: 5, purchased: false },
};

const cosmetics = {
    bg1: { id: 'bg1', name: "Neonowy Puls", type: 'background', cost: 1000, active: false },
    bg2: { id: 'bg2', name: "Glitch Matrix", type: 'background', cost: 2500, active: false },
};

const leaderboardData = [
    { name: "CyberKing", score: 1200000, league: 'Diamond' },
    { name: "TRX_Master", score: 950000, league: 'Platinum' },
    { name: "NeonWarrior", score: 750000, league: 'Gold' },
    { name: "TapHero", score: 500000, league: 'Gold' },
    { name: "BitMiner", score: 250000, league: 'Silver' },
    { name: "DataDiver", score: 100000, league: 'Silver' },
    { name: "PixelPaladin", score: 50000, league: 'Bronze' },
    { name: "CodeCrusader", score: 25000, league: 'Bronze' },
    { name: "Epsilon", score: 10000, league: 'Bronze' },
];

const leagues = {
    'Bronze': 0,
    'Silver': 10000,
    'Gold': 50000,
    'Platinum': 100000,
    'Diamond': 500000,
};

const dailyRewards = [
    { type: 'trx', amount: 1000, icon: 'fas fa-coins' },
    { type: 'trx', amount: 2000, icon: 'fas fa-coins' },
    { type: 'gems', amount: 1, icon: 'fas fa-gem' },
    { type: 'trx', amount: 3000, icon: 'fas fa-coins' },
    { type: 'gems', amount: 2, icon: 'fas fa-gem' },
    { type: 'trx', amount: 5000, icon: 'fas fa-coins' },
    { type: 'gems', amount: 3, icon: 'fas fa-gem' },
];

let backgroundMusic;

// --- Dźwięki i Muzyka ---
// Tone.js Synth do generowania dźwięków
const synth = new Tone.Synth({
    oscillator: {
        type: "sine"
    },
    envelope: {
        attack: 0.001,
        decay: 0.1,
        sustain: 0.01,
        release: 0.1
    }
}).toDestination();

function playTapSound() {
    synth.triggerAttackRelease("C4", "8n");
}

function playPurchaseSound() {
    synth.triggerAttackRelease(["C4", "E4", "G4"], "4n");
}

function playCollectSound() {
    synth.triggerAttackRelease("C5", "8n");
}

function initMusic() {
    backgroundMusic = new Tone.Player({
        url: "https://tonedata.github.io/audio/loop/48000/10_16bit_5.mp3",
        loop: true,
        autostart: true,
    }).toDestination();
    backgroundMusic.volume.value = -12;
    backgroundMusic.autostart = true;
}

function toggleMusic() {
    if (Tone.context.state !== 'running') {
        Tone.start();
        initMusic();
    }
    if (backgroundMusic.state === 'started') {
        backgroundMusic.stop();
        game.settings.musicEnabled = false;
    } else {
        backgroundMusic.start();
        game.settings.musicEnabled = true;
    }
    updateMusicButtonIcon();
    saveGame();
}

function updateMusicButtonIcon() {
    const musicButton = document.getElementById('music-toggle-button');
    if (game.settings.musicEnabled) {
        musicButton.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
        musicButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
}

// --- Funkcje główne ---
function initGame() {
    loadGame();
    setupEventListeners();
    updateUI();
    
    // Przyspieszono: Interwały
    setInterval(restoreEnergy, 500); // Odnawia energię co 0.5s zamiast 1s
    setInterval(updatePassiveIncome, 1000); // Odnawia pasywny dochód co 1s
    
    checkPassiveIncome();
    checkDailyRewards();
    checkAllChallenges();
    updateMusicButtonIcon();
    
    // Start music on first user interaction
    document.body.addEventListener('click', () => {
        if (Tone.context.state !== 'running') {
            Tone.start();
            initMusic();
        }
    }, { once: true });

    // Initial language setup
    setLanguage(currentLang);
}

function updateUI() {
    // Tapper View
    document.getElementById('balance-display').textContent = formatNumber(game.balance);
    document.getElementById('gems-display').textContent = formatNumber(game.gems);
    document.getElementById('energy-display').textContent = formatNumber(game.energy);
    document.getElementById('max-energy-display').textContent = formatNumber(game.maxEnergy);
    document.getElementById('energy-bar').style.width = `${(game.energy / game.maxEnergy) * 100}%`;
    document.getElementById('passive-income-display').textContent = `+${formatNumber(game.passiveIncomePerSecond * 3600)}/h`;
    
    // Farm View
    document.getElementById('farm-income-display').textContent = `${formatNumber(game.passiveIncomePerSecond * 3600)} TRX/h`;
    document.getElementById('accumulated-farm-display').textContent = formatNumber(Math.floor(game.accumulatedPassiveIncome));
    
    // League Progress
    updateLeagueProgress();
    
    // Update active view
    renderUpgrades();
    renderFarmBots();
    renderCosmetics();
    renderInventory();
    renderTasks();
    renderChallenges();
    renderLeaderboard();
    
    // Update Wallet
    if (document.getElementById('wallet-modal').classList.contains('flex')) {
        document.getElementById('wallet-trx').textContent = formatNumber(game.balance);
        document.getElementById('wallet-gems').textContent = formatNumber(game.gems);
    }
    
    // Update daily rewards button icon
    updateDailyRewardsButton();

    translateElements();
}

function updateDailyRewardsButton() {
    const today = new Date().toDateString();
    const lastClaim = game.dailyRewards.lastClaimDate;
    const dailyRewardsButton = document.getElementById('daily-rewards-button');
    if (lastClaim !== today) {
        dailyRewardsButton.innerHTML = `<i class="fas fa-calendar-check text-xl text-green-400"></i> <span data-translate-key="dailyRewardsButton">Nagrody Dziennie</span>`;
        dailyRewardsButton.classList.add('animate-pulse');
    } else {
        dailyRewardsButton.innerHTML = `<i class="fas fa-calendar-alt text-xl text-yellow-300"></i> <span data-translate-key="dailyRewardsButton">Nagrody Dziennie</span>`;
        dailyRewardsButton.classList.remove('animate-pulse');
    }
}

function switchView(viewId) {
    Object.values(views).forEach(view => {
        view.classList.add('hidden');
    });
    
    Object.keys(views).forEach(navId => {
        const navButton = document.getElementById(`nav-${navId}`);
        if (navButton) {
            navButton.classList.remove('active');
        }
    });

    const activeView = document.getElementById(viewId);
    if (activeView) {
        activeView.classList.remove('hidden');
    }

    const activeNav = document.getElementById(`nav-${viewId.replace('view-', '')}`);
    if (activeNav) {
        activeNav.classList.add('active');
    }
    
    updateUI();
}

function formatNumber(num) {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return Math.floor(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// --- Zapis/Wczytanie Gry ---
function saveGame() {
    localStorage.setItem('cyberCoinGame', JSON.stringify(game));
}

function loadGame() {
    const savedGame = JSON.parse(localStorage.getItem('cyberCoinGame'));
    if (savedGame) {
        // Only load if the saved game is a newer version or compatible
        game = { ...game, ...savedGame };
        
        // Convert to numbers if necessary
        game.balance = Number(game.balance);
        game.gems = Number(game.gems);
        game.tapPower = Number(game.tapPower);
        game.energy = Number(game.energy);
        game.maxEnergy = Number(game.maxEnergy);
        game.energyRestoreRate = Number(game.energyRestoreRate);
        game.passiveIncomePerSecond = Number(game.passiveIncomePerSecond);
        game.accumulatedPassiveIncome = Number(game.accumulatedPassiveIncome);
        game.lastPassiveIncomeTime = Number(game.lastPassiveIncomeTime);
        game.lastLogin = Number(game.lastLogin);
        game.totalTaps = Number(game.totalTaps);

        // Ensure boosts structure is correct
        if (!game.boosts) {
            game.boosts = { turbo: { duration: 30000, cooldown: 1800000, lastUsed: 0 } };
        } else if (!game.boosts.turbo) {
            game.boosts.turbo = { duration: 30000, cooldown: 1800000, lastUsed: 0 };
        }
        
        // Re-check for new challenges after loading
        checkAllChallenges();
    }
}

// --- Obsługa zdarzeń ---
function setupEventListeners() {
    // Tapper button
    document.getElementById('logo-container').addEventListener('click', handleTap);
    
    // Navigation
    document.getElementById('nav-tapper').addEventListener('click', () => switchView('view-tapper'));
    document.getElementById('nav-upgrades').addEventListener('click', () => switchView('view-upgrades'));
    document.getElementById('nav-farm').addEventListener('click', () => switchView('view-farm'));
    document.getElementById('nav-shop').addEventListener('click', () => switchView('view-shop'));
    document.getElementById('nav-inventory').addEventListener('click', () => switchView('view-inventory'));
    document.getElementById('nav-boosts').addEventListener('click', () => switchView('view-boosts'));
    document.getElementById('nav-tasks').addEventListener('click', () => switchView('view-tasks'));
    document.getElementById('nav-leaderboard').addEventListener('click', () => switchView('view-leaderboard'));
    
    // Other buttons
    document.getElementById('boost-button').addEventListener('click', () => switchView('view-boosts'));
    document.getElementById('daily-rewards-button').addEventListener('click', () => toggleModal('daily-rewards-modal'));
    document.getElementById('close-daily-rewards-modal').addEventListener('click', () => toggleModal('daily-rewards-modal', false));
    document.getElementById('wallet-button').addEventListener('click', () => toggleModal('wallet-modal'));
    document.getElementById('close-wallet-modal').addEventListener('click', () => toggleModal('wallet-modal', false));
    document.getElementById('collect-farm-button').addEventListener('click', collectPassiveIncome);
    document.getElementById('chat-fab').addEventListener('click', () => toggleModal('chat-modal'));
    document.getElementById('close-chat-modal').addEventListener('click', () => toggleModal('chat-modal', false));
    document.getElementById('chat-send-button').addEventListener('click', handleChatInput);
    document.getElementById('chat-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleChatInput();
    });
    document.getElementById('music-toggle-button').addEventListener('click', toggleMusic);

    // Language buttons
    document.getElementById('lang-pl').addEventListener('click', () => setLanguage('pl'));
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
}

function handleTap(event) {
    if (game.energy <= 0) {
        showToast(translations[currentLang].toastEnergyFull);
        return;
    }
    
    playTapSound();
    
    // Przyspieszono: Większy bonus z turbo
    let tapValue = game.tapPower * (game.turboActive ? 5 : 1); 
    
    game.balance += tapValue;
    game.energy -= 1;
    game.totalTaps += 1;
    
    showFloatingText(event.clientX, event.clientY, `+${tapValue}`);
    createParticleEffect(event.clientX, event.clientY);

    // Update challenges
    game.challenges.forEach(c => {
        if (c.id.includes('taps')) {
            c.current = game.totalTaps;
        }
        if (c.id.includes('balance')) {
            c.current = game.balance;
        }
    });

    updateUI();
    saveGame();
}

function restoreEnergy() {
    if (game.energy < game.maxEnergy) {
        game.energy += game.energyRestoreRate;
        if (game.energy > game.maxEnergy) {
            game.energy = game.maxEnergy;
        }
        updateUI();
        saveGame();
    }
}

function updatePassiveIncome() {
    const now = Date.now();
    const timeElapsed = (now - game.lastPassiveIncomeTime) / 1000;
    
    // Obliczanie dochodu pasywnego
    const passiveIncomeThisPeriod = game.passiveIncomePerSecond * timeElapsed;
    game.accumulatedPassiveIncome += passiveIncomeThisPeriod;

    game.lastPassiveIncomeTime = now;
    
    // Enable/disable collect button
    const collectButton = document.getElementById('collect-farm-button');
    if (collectButton) {
        collectButton.disabled = game.accumulatedPassiveIncome < 1;
        collectButton.classList.toggle('disabled-button', game.accumulatedPassiveIncome < 1);
    }
    
    const accumulatedPassiveDisplay = document.getElementById('accumulated-passive-display');
    if (accumulatedPassiveDisplay) {
        accumulatedPassiveDisplay.textContent = formatNumber(Math.floor(game.accumulatedPassiveIncome));
    }

    // Update the farm view's accumulated display
    const accumulatedFarmDisplay = document.getElementById('accumulated-farm-display');
    if (accumulatedFarmDisplay) {
        accumulatedFarmDisplay.textContent = formatNumber(Math.floor(game.accumulatedPassiveIncome));
    }

    saveGame();
}

function collectPassiveIncome() {
    if (game.accumulatedPassiveIncome > 0) {
        game.balance += Math.floor(game.accumulatedPassiveIncome);
        game.accumulatedPassiveIncome = 0;
        showToast(translations[currentLang].toastPassiveCollected);
        playCollectSound();
        updateUI();
        saveGame();
    }
}

// --- Renderowanie widoków ---
function renderUpgrades() {
    const list = document.getElementById('upgrades-list');
    if (!list) return;
    list.innerHTML = '';
    
    Object.entries(upgrades).forEach(([id, upgrade]) => {
        const currentLevel = game.upgrades[id] ? game.upgrades[id].level : 0;
        const isMaxLevel = currentLevel >= upgrade.maxLevel;
        const cost = upgrade.cost + (currentLevel * upgrade.cost * 0.5);
        const effect = upgrade.effect * (currentLevel + 1);
        const nameKey = `upgrade${upgrade.type === 'tap' ? 'TapPower' : upgrade.type === 'passive' ? 'PassiveIncome' : 'MaxEnergy'}`;

        const upgradeDiv = document.createElement('div');
        upgradeDiv.className = `p-4 bg-[var(--container-bg)] rounded-lg border border-[var(--border-color)] flex items-center justify-between transition-colors duration-200 ${isMaxLevel ? 'task-completed' : ''}`;
        upgradeDiv.innerHTML = `
            <div>
                <h3 class="text-xl font-orbitron font-bold">${translations[currentLang][nameKey]} ${currentLevel + 1}</h3>
                <p class="text-sm text-gray-400 mt-1">${upgrade.name}</p>
                <p class="text-xs text-gray-500 mt-1">${upgrade.description || ''}</p>
                <p class="text-sm text-cyan-400 mt-2">${isMaxLevel ? 'Maksymalny poziom' : `Koszt: ${formatNumber(cost)} TRX`}</p>
            </div>
            <button id="upgrade-${id}" class="px-4 py-2 rounded-lg font-bold text-white bg-green-600 hover:bg-green-700 transition-colors duration-200">
                ${isMaxLevel ? translations[currentLang].taskCompleted : translations[currentLang].purchaseButton}
            </button>
        `;
        list.appendChild(upgradeDiv);
        
        const button = document.getElementById(`upgrade-${id}`);
        if (isMaxLevel || game.balance < cost) {
            button.disabled = true;
            button.classList.add('disabled-button');
            if (isMaxLevel) button.classList.remove('bg-green-600', 'hover:bg-green-700');
        } else {
            button.disabled = false;
            button.classList.remove('disabled-button');
        }

        if (!isMaxLevel) {
            button.addEventListener('click', () => purchaseUpgrade(id, upgrade, cost, effect));
        }
    });
}

function purchaseUpgrade(id, upgrade, cost, effect) {
    if (game.balance >= cost) {
        game.balance -= cost;
        if (!game.upgrades[id]) {
            game.upgrades[id] = { level: 0 };
        }
        game.upgrades[id].level++;
        
        // Apply effect
        if (upgrade.type === 'tap') {
            game.tapPower += upgrade.effect;
        } else if (upgrade.type === 'passive') {
            game.passiveIncomePerSecond += upgrade.income / 3600;
        } else if (upgrade.type === 'energy') {
            game.maxEnergy += upgrade.effect;
        }

        showToast(translations[currentLang].toastUpgradeSuccess);
        playPurchaseSound();
        updateUI();
        saveGame();
    } else {
        showToast(translations[currentLang].toastNotEnoughTrx);
    }
}

function renderFarmBots() {
    const list = document.getElementById('bots-list');
    if (!list) return;
    list.innerHTML = '';

    Object.entries(bots).forEach(([id, bot]) => {
        const isPurchased = game.bots[id] && game.bots[id].purchased;
        const botDiv = document.createElement('div');
        botDiv.className = `p-4 bg-[var(--container-bg)] rounded-lg border border-[var(--border-color)] flex items-center justify-between transition-colors duration-200 ${isPurchased ? 'task-completed' : ''}`;
        botDiv.innerHTML = `
            <div>
                <h3 class="text-xl font-orbitron font-bold">${bot.name}</h3>
                <p class="text-sm text-gray-400 mt-1">${bot.description}</p>
                <p class="text-sm text-cyan-400 mt-2">${isPurchased ? 'Zakupiono' : `Koszt: ${formatNumber(bot.cost)} TRX`}</p>
            </div>
            <button id="bot-${id}" class="px-4 py-2 rounded-lg font-bold text-white bg-green-600 hover:bg-green-700 transition-colors duration-200">
                ${isPurchased ? translations[currentLang].taskCompleted : translations[currentLang].purchaseButton}
            </button>
        `;
        list.appendChild(botDiv);

        const button = document.getElementById(`bot-${id}`);
        if (isPurchased || game.balance < bot.cost) {
            button.disabled = true;
            button.classList.add('disabled-button');
        } else {
            button.disabled = false;
            button.classList.remove('disabled-button');
            button.addEventListener('click', () => purchaseBot(id, bot.cost, bot.income));
        }
    });
}

function purchaseBot(id, cost, income) {
    if (game.balance >= cost) {
        game.balance -= cost;
        game.bots[id] = { purchased: true };
        game.passiveIncomePerSecond += income / 3600;
        showToast("Bot zakupiony! Do końca życia.");
        playPurchaseSound();
        updateUI();
        saveGame();
    } else {
        showToast(translations[currentLang].toastNotEnoughTrx);
    }
}

function renderCosmetics() {
    const list = document.getElementById('cosmetics-list');
    if (!list) return;
    list.innerHTML = '';
    
    Object.entries(cosmetics).forEach(([id, cosmetic]) => {
        const isOwned = game.cosmetics[id] && game.cosmetics[id].owned;
        const isActive = game.cosmetics[id] && game.cosmetics[id].active;
        
        const cosmeticDiv = document.createElement('div');
        cosmeticDiv.className = `p-4 bg-[var(--container-bg)] rounded-lg border border-[var(--border-color)] flex flex-col items-center justify-center text-center transition-colors duration-200 ${isActive ? 'border-[var(--cyber-cyan)]' : ''}`;
        cosmeticDiv.innerHTML = `
            <div class="h-24 w-full bg-gray-800 rounded-lg flex items-center justify-center mb-2">
                <p class="text-gray-400 text-sm">Podgląd</p>
            </div>
            <h3 class="text-lg font-orbitron font-bold">${cosmetic.name}</h3>
            <p class="text-sm text-gray-400 mt-1">${isOwned ? 'Posiadasz' : `Koszt: ${formatNumber(cosmetic.cost)} TRX`}</p>
            <button id="cosmetic-${id}" class="mt-4 px-4 py-2 rounded-lg font-bold text-white transition-colors duration-200">
                ${isOwned ? (isActive ? 'Aktywny' : 'Aktywuj') : 'Kup'}
            </button>
        `;
        list.appendChild(cosmeticDiv);
        
        const button = document.getElementById(`cosmetic-${id}`);
        if (isOwned) {
            button.classList.add('bg-blue-600', 'hover:bg-blue-700');
            if (isActive) {
                button.disabled = true;
                button.classList.add('disabled-button');
                button.classList.remove('bg-blue-600', 'hover:bg-blue-700');
            } else {
                button.disabled = false;
                button.classList.remove('disabled-button');
                button.addEventListener('click', () => activateCosmetic(id));
            }
        } else {
            button.classList.add('bg-green-600', 'hover:bg-green-700');
            if (game.balance < cosmetic.cost) {
                button.disabled = true;
                button.classList.add('disabled-button');
            } else {
                button.disabled = false;
                button.classList.remove('disabled-button');
                button.addEventListener('click', () => purchaseCosmetic(id, cosmetic.cost));
            }
        }
    });
}

function purchaseCosmetic(id, cost) {
    if (game.balance >= cost) {
        game.balance -= cost;
        game.cosmetics[id] = { owned: true, active: false };
        showToast("Kosmetyk zakupiony!");
        playPurchaseSound();
        updateUI();
        saveGame();
    } else {
        showToast(translations[currentLang].toastNotEnoughTrx);
    }
}

function activateCosmetic(id) {
    // Deactivate all other cosmetics of the same type
    Object.keys(game.cosmetics).forEach(key => {
        if (cosmetics[key].type === cosmetics[id].type) {
            game.cosmetics[key].active = false;
        }
    });
    // Activate the selected one
    game.cosmetics[id].active = true;
    showToast(`${cosmetics[id].name} aktywowany!`);
    updateUI();
    saveGame();
}

function renderInventory() {
    const list = document.getElementById('inventory-list');
    if (!list) return;
    list.innerHTML = '';
    
    // Check for owned cosmetic items
    const ownedCosmetics = Object.entries(game.cosmetics).filter(([id, item]) => item.owned);
    
    if (ownedCosmetics.length === 0) {
        list.innerHTML = `<p class="text-center text-gray-500 col-span-2 md:col-span-3">Brak przedmiotów w ekwipunku.</p>`;
    } else {
        ownedCosmetics.forEach(([id, item]) => {
            const cosmetic = cosmetics[id];
            const isActive = item.active;
            const inventoryItem = document.createElement('div');
            inventoryItem.className = `p-4 bg-[var(--container-bg)] rounded-lg border border-[var(--border-color)] flex flex-col items-center justify-center text-center transition-colors duration-200 ${isActive ? 'border-2 border-[var(--cyber-cyan)]' : ''}`;
            inventoryItem.innerHTML = `
                <div class="h-24 w-full bg-gray-800 rounded-lg flex items-center justify-center mb-2">
                    <p class="text-gray-400 text-sm">Podgląd</p>
                </div>
                <h3 class="text-lg font-orbitron font-bold">${cosmetic.name}</h3>
                <p class="text-sm text-gray-400 mt-1">${isActive ? 'Aktywny' : 'Nieaktywny'}</p>
                <button id="inv-cosmetic-${id}" class="mt-4 px-4 py-2 rounded-lg font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 ${isActive ? 'disabled-button' : ''}">
                    ${isActive ? translations[currentLang].activateItem : translations[currentLang].activateItem}
                </button>
            `;
            list.appendChild(inventoryItem);
            
            const button = document.getElementById(`inv-cosmetic-${id}`);
            if (isActive) {
                button.disabled = true;
                button.classList.add('disabled-button');
                button.classList.remove('bg-blue-600', 'hover:bg-blue-700');
            } else {
                button.disabled = false;
                button.classList.remove('disabled-button');
                button.addEventListener('click', () => activateCosmetic(id));
            }
        });
    }
}

function renderTasks() {
    const list = document.getElementById('tasks-list');
    if (!list) return;
    list.innerHTML = '';

    Object.entries(game.tasks).forEach(([id, task]) => {
        const taskDiv = document.createElement('div');
        taskDiv.className = `p-4 bg-[var(--container-bg)] rounded-lg border border-[var(--border-color)] flex items-center justify-between transition-colors duration-200 ${task.completed ? 'task-completed' : ''}`;
        taskDiv.innerHTML = `
            <div>
                <h3 class="text-xl font-orbitron font-bold">${translations[currentLang][`task${id.charAt(0).toUpperCase() + id.slice(1)}`]}</h3>
                <p class="text-sm text-gray-400 mt-1">Nagroda: <span class="font-bold">${task.reward.amount} ${task.reward.type === 'gems' ? 'Gemy' : 'TRX'}</span></p>
            </div>
            <button id="task-${id}" class="px-4 py-2 rounded-lg font-bold text-white bg-yellow-600 hover:bg-yellow-700 transition-colors duration-200">
                ${task.completed ? translations[currentLang].taskCompleted : translations[currentLang].taskClaimReward}
            </button>
        `;
        list.appendChild(taskDiv);

        const button = document.getElementById(`task-${id}`);
        if (task.completed) {
            button.disabled = true;
            button.classList.add('disabled-button');
            button.classList.remove('bg-yellow-600', 'hover:bg-yellow-700');
        } else {
            button.disabled = false;
            button.classList.remove('disabled-button');
            button.addEventListener('click', () => completeTask(id));
        }
    });
}

function completeTask(taskId) {
    const task = game.tasks[taskId];
    if (task && !task.completed) {
        // Here you would add logic to verify if the task is truly completed
        // For now, we'll just mark it as done for demonstration
        task.completed = true;
        if (task.reward.type === 'trx') {
            game.balance += task.reward.amount;
        } else if (task.reward.type === 'gems') {
            game.gems += task.reward.amount;
        }
        showToast(translations[currentLang].toastRewardClaimed);
        playPurchaseSound();
        updateUI();
        saveGame();
    }
}

function renderChallenges() {
    const list = document.getElementById('challenges-list');
    if (!list) return;
    list.innerHTML = '';
    
    game.challenges.forEach(challenge => {
        const isCompleted = challenge.current >= challenge.goal;
        const challengeDiv = document.createElement('div');
        challengeDiv.className = `p-4 bg-[var(--container-bg)] rounded-lg border border-[var(--border-color)] flex flex-col transition-colors duration-200 ${isCompleted ? 'challenge-completed' : ''}`;
        challengeDiv.innerHTML = `
            <div class="flex items-center justify-between">
                <h3 class="text-xl font-orbitron font-bold">${challenge.name.replace('{value}', formatNumber(challenge.goal))}</h3>
                <p class="text-sm font-bold text-gray-400">${challenge.current}/${formatNumber(challenge.goal)}</p>
            </div>
            <div class="challenge-progress-bar mt-2">
                <div class="challenge-progress-fill" style="width: ${Math.min(100, (challenge.current / challenge.goal) * 100)}%;"></div>
            </div>
            <div class="flex items-center justify-between mt-4">
                <p class="text-sm text-gray-400">Nagroda: <span class="font-bold">${challenge.reward.amount} ${challenge.reward.type === 'gems' ? 'Gemy' : 'TRX'}</span></p>
                <button id="challenge-${challenge.id}" class="px-4 py-2 rounded-lg font-bold text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200">
                    ${challenge.completed ? translations[currentLang].taskCompleted : translations[currentLang].taskClaimReward}
                </button>
            </div>
        `;
        list.appendChild(challengeDiv);
        
        const button = document.getElementById(`challenge-${challenge.id}`);
        if (challenge.completed || challenge.current < challenge.goal) {
            button.disabled = true;
            button.classList.add('disabled-button');
            button.classList.remove('bg-purple-600', 'hover:bg-purple-700');
        } else {
            button.disabled = false;
            button.classList.remove('disabled-button');
            button.addEventListener('click', () => claimChallenge(challenge.id));
        }
    });
}

function claimChallenge(challengeId) {
    const challenge = game.challenges.find(c => c.id === challengeId);
    if (challenge && challenge.current >= challenge.goal && !challenge.completed) {
        challenge.completed = true;
        if (challenge.reward.type === 'trx') {
            game.balance += challenge.reward.amount;
        } else if (challenge.reward.type === 'gems') {
            game.gems += challenge.reward.amount;
        }
        showToast(translations[currentLang].toastRewardClaimed);
        playPurchaseSound();
        updateUI();
        saveGame();
    }
}

function checkAllChallenges() {
    game.challenges.forEach(challenge => {
        if (!challenge.completed) {
            if (challenge.id.includes('taps')) {
                challenge.current = game.totalTaps;
            }
            if (challenge.id.includes('balance')) {
                challenge.current = game.balance;
            }
        }
    });
}

function updateLeagueProgress() {
    const leaguesArray = Object.entries(leagues).sort((a, b) => a[1] - b[1]);
    let currentLeague = 'Bronze';
    let nextLeagueReq = Infinity;
    let currentLeagueReq = 0;

    for (let i = 0; i < leaguesArray.length; i++) {
        if (game.balance >= leaguesArray[i][1]) {
            currentLeague = leaguesArray[i][0];
            currentLeagueReq = leaguesArray[i][1];
            if (i + 1 < leaguesArray.length) {
                nextLeagueReq = leaguesArray[i + 1][1];
            } else {
                nextLeagueReq = Infinity;
            }
        } else {
            break;
        }
    }
    
    game.league = currentLeague;
    
    const leagueProgress = document.getElementById('league-progress');
    const nextLeagueText = document.getElementById('next-league-req');
    const leagueName = document.getElementById('league-name');
    
    leagueName.textContent = translations[currentLang].leagueName.replace('Bronze', currentLeague);
    
    if (nextLeagueReq === Infinity) {
        leagueProgress.style.width = '100%';
        nextLeagueText.textContent = 'Maks. Liga';
    } else {
        const progress = ((game.balance - currentLeagueReq) / (nextLeagueReq - currentLeagueReq)) * 100;
        leagueProgress.style.width = `${progress}%`;
        nextLeagueText.textContent = formatNumber(nextLeagueReq);
    }
}

function renderLeaderboard() {
    const list = document.getElementById('leaderboard-list');
    if (!list) return;
    list.innerHTML = '';
    
    const combinedLeaderboard = [...leaderboardData, { name: game.playerInfo.name, score: game.balance, league: game.league }];
    
    const sortedLeaderboard = combinedLeaderboard.sort((a, b) => b.score - a.score);
    
    const playerRank = sortedLeaderboard.findIndex(p => p.name === game.playerInfo.name) + 1;
    document.getElementById('player-rank-display').textContent = `#${playerRank}`;

    sortedLeaderboard.forEach((player, index) => {
        const isPlayer = player.name === game.playerInfo.name;
        const playerDiv = document.createElement('div');
        playerDiv.className = `p-3 rounded-lg border border-[var(--border-color)] flex items-center justify-between ${isPlayer ? 'bg-[var(--player-highlight-bg)] border-[var(--player-highlight-border)] font-bold' : 'bg-[var(--container-bg)]'}`;
        playerDiv.innerHTML = `
            <div class="flex items-center space-x-3">
                <span class="w-6 text-center text-gray-400 font-bold">#${index + 1}</span>
                <i class="fas fa-user-circle text-xl text-gray-400"></i>
                <span>${player.name}</span>
            </div>
            <div class="flex items-center space-x-2">
                <span class="text-sm text-gray-400">${player.league}</span>
                <span class="font-orbitron font-bold text-cyan-400">${formatNumber(player.score)}</span>
            </div>
        `;
        list.appendChild(playerDiv);
    });
}

function toggleModal(modalId, show = true) {
    const modal = document.getElementById(modalId);
    if (show) {
        modal.classList.remove('hidden');
        if (modalId === 'daily-rewards-modal') {
            renderDailyRewardsCalendar();
        }
    } else {
        modal.classList.add('hidden');
    }
}

function showFloatingText(x, y, text) {
    const floatingText = document.createElement('div');
    floatingText.className = 'floating-text font-orbitron';
    floatingText.textContent = text;
    floatingText.style.left = `${x}px`;
    floatingText.style.top = `${y}px`;
    document.body.appendChild(floatingText);
    
    floatingText.addEventListener('animationend', () => {
        floatingText.remove();
    });
}

function createParticleEffect(x, y) {
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.className = 'tap-particle';
        const size = Math.random() * 8 + 4; // size between 4 and 12
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position around the tap
        const offsetX = (Math.random() - 0.5) * 50;
        const offsetY = (Math.random() - 0.5) * 50;
        particle.style.left = `${x + offsetX}px`;
        particle.style.top = `${y + offsetY}px`;

        // Random animation direction
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 100 + 50;
        const finalX = x + distance * Math.cos(angle);
        const finalY = y + distance * Math.sin(angle);
        
        particle.style.setProperty('--final-x', `${finalX - x}px`);
        particle.style.setProperty('--final-y', `${finalY - y}px`);

        // Use custom animation for movement
        particle.style.animation = `particleMove 1s ease-out forwards, particleFadeOut 1s ease-out forwards`;
        
        const styleSheet = document.styleSheets[0];
        const keyframes = `@keyframes particleMove {
            to { transform: translate(${finalX - x}px, ${finalY - y}px) scale(0.2); }
        }`;
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

        document.body.appendChild(particle);
        
        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    }
}

// --- Boosts Logic ---
let turboTimer;
let turboCooldownTimer;

function activateBoost(boostId) {
    const boost = game.boosts[boostId];
    if (!boost || game.turboActive || (Date.now() - boost.lastUsed < boost.cooldown)) {
        showToast(translations[currentLang].toastBoostReady);
        return;
    }
    
    game.turboActive = true;
    boost.lastUsed = Date.now();
    
    document.getElementById('turbo-indicator').classList.remove('hidden');
    document.getElementById('activate-turbo-button').classList.add('disabled-button');
    document.getElementById('activate-turbo-button').disabled = true;

    showToast(translations[currentLang].toastTurboActivated);
    
    turboTimer = setTimeout(() => {
        game.turboActive = false;
        document.getElementById('turbo-indicator').classList.add('hidden');
        showToast("Turbo się skończyło!");
        
        // Start cooldown timer
        startBoostCooldownTimer(boostId);
    }, boost.duration);
    
    saveGame();
}

function startBoostCooldownTimer(boostId) {
    const boost = game.boosts[boostId];
    const timerElement = document.getElementById('turbo-cooldown-timer');
    const button = document.getElementById('activate-turbo-button');
    
    button.classList.add('disabled-button');
    button.disabled = true;

    turboCooldownTimer = setInterval(() => {
        const timeElapsed = Date.now() - boost.lastUsed;
        const timeLeft = boost.cooldown - timeElapsed;
        
        if (timeLeft <= 0) {
            clearInterval(turboCooldownTimer);
            timerElement.textContent = translations[currentLang].readyText;
            button.classList.remove('disabled-button');
            button.disabled = false;
        } else {
            timerElement.textContent = translations[currentLang].cooldownText + formatTime(timeLeft);
        }
    }, 1000);
}

function formatTime(ms) {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    
    const h = hours > 0 ? hours + "h " : "";
    const m = minutes > 0 ? minutes + "m " : "";
    const s = seconds > 0 ? seconds + "s" : "";
    
    return h + m + s;
}

// Check turbo cooldown on startup
window.onload = () => {
    initGame();
    if (game.boosts.turbo.lastUsed) {
        const timeElapsed = Date.now() - game.boosts.turbo.lastUsed;
        if (timeElapsed < game.boosts.turbo.cooldown) {
            startBoostCooldownTimer('turbo');
        }
    }
};

// --- Daily Rewards ---
function renderDailyRewardsCalendar() {
    const calendar = document.getElementById('daily-rewards-calendar');
    if (!calendar) return;
    calendar.innerHTML = '';
    
    dailyRewards.forEach((reward, index) => {
        const day = index + 1;
        const isClaimed = index < game.dailyRewards.claimedDays;
        const isCurrentDay = index === game.dailyRewards.claimedDays;
        
        const dayDiv = document.createElement('div');
        dayDiv.className = `calendar-day ${isClaimed ? 'claimed' : ''} ${isCurrentDay ? 'current-day' : ''}`;
        
        let rewardIcon = '';
        if (reward.type === 'trx') {
            rewardIcon = `<i class="fas fa-coins reward-icon"></i>`;
        } else if (reward.type === 'gems') {
            rewardIcon = `<i class="fas fa-gem reward-icon gem-icon"></i>`;
        }
        
        dayDiv.innerHTML = `
            <span>Dzień ${day}</span>
            ${rewardIcon}
            <span>${formatNumber(reward.amount)}</span>
            <button id="claim-day-${day}" class="mt-2 px-3 py-1 text-xs rounded-full disabled-button">
                ${isClaimed ? translations[currentLang].taskCompleted : (isCurrentDay ? translations[currentLang].taskClaimReward : `Dzień ${day}`)}
            </button>
        `;
        
        calendar.appendChild(dayDiv);
        
        const button = document.getElementById(`claim-day-${day}`);
        if (isCurrentDay && !isClaimed) {
            button.classList.remove('disabled-button');
            button.classList.add('bg-[var(--cyber-cyan)]', 'text-[var(--bg-color)]');
            button.addEventListener('click', () => claimDailyReward(day));
        }
    });
}

function checkDailyRewards() {
    const today = new Date().toDateString();
    if (game.dailyRewards.lastClaimDate !== today) {
        // Reset claimedDays if a new week has started
        const lastClaimDate = new Date(game.dailyRewards.lastClaimDate);
        if (lastClaimDate.getDay() > new Date().getDay() || new Date().getTime() - lastClaimDate.getTime() > 7 * 24 * 60 * 60 * 1000) {
            game.dailyRewards.claimedDays = 0;
        }
    }
}

function claimDailyReward(day) {
    const today = new Date().toDateString();
    if (game.dailyRewards.lastClaimDate === today || game.dailyRewards.claimedDays !== day - 1) {
        showToast("Nie możesz jeszcze odebrać tej nagrody.");
        return;
    }
    
    const reward = dailyRewards[day - 1];
    if (reward.type === 'trx') {
        game.balance += reward.amount;
    } else if (reward.type === 'gems') {
        game.gems += reward.amount;
    }
    
    game.dailyRewards.claimedDays++;
    game.dailyRewards.lastClaimDate = today;
    
    showToast(translations[currentLang].toastRewardClaimed);
    playPurchaseSound();
    updateUI();
    saveGame();
    renderDailyRewardsCalendar(); // Re-render to update the calendar UI
}


// --- Chatbot Logic ---
function handleChatInput() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (message) {
        addChatMessage('user', message);
        input.value = '';
        processChatRequest(message);
    }
}

function handleChatTopic(topic) {
    let response = '';
    switch(topic) {
        case 'game_info':
            response = translations[currentLang].chatResponseInfo;
            break;
        case 'bugs_report':
            response = translations[currentLang].chatResponseBugs;
            break;
        case 'account_help':
            response = translations[currentLang].chatResponseAccount;
            break;
    }
    addChatMessage('support', response);
}

function processChatRequest(message) {
    setTimeout(() => {
        let response = translations[currentLang].chatResponseDefault;
        if (message.toLowerCase().includes('info') || message.toLowerCase().includes('gra')) {
            response = translations[currentLang].chatResponseInfo;
        } else if (message.toLowerCase().includes('błąd') || message.toLowerCase().includes('bug')) {
            response = translations[currentLang].chatResponseBugs;
        } else if (message.toLowerCase().includes('konto') || message.toLowerCase().includes('pomoc')) {
            response = translations[currentLang].chatResponseAccount;
        }
        addChatMessage('support', response);
    }, 1000);
}

function addChatMessage(sender, message) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}`;
    messageDiv.textContent = message;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Attach event listeners to chat topic buttons
document.querySelectorAll('.chat-topic-button').forEach(button => {
    button.addEventListener('click', (e) => {
        const topic = e.target.dataset.topic;
        handleChatTopic(topic);
    });
});

// --- Toast Notifications ---
function showToast(message) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast show fixed bottom-24 left-1/2 transform -translate-x-1/2 md:bottom-auto md:top-4 md:left-auto md:right-4';
    toast.textContent = message;
    
    // Remove all previous toasts to only show the last one
    toastContainer.innerHTML = ''; 
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.remove('show');
        toast.addEventListener('transitionend', () => {
            toast.remove();
        });
    }, 3000);
}

// --- Language Switcher ---
function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-lang]').forEach(button => {
        button.classList.toggle('active', button.dataset.lang === lang);
    });
    translateElements();
    saveGame();
}

function translateElements() {
    document.querySelectorAll('[data-translate-key]').forEach(element => {
        const key = element.dataset.translateKey;
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });

    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.dataset.translatePlaceholder;
        if (translations[currentLang][key]) {
            element.placeholder = translations[currentLang][key];
        }
    });
    
    // Special translations for dynamic content
    const nextLeagueText = document.getElementById('next-league-req');
    if (nextLeagueText) {
        nextLeagueText.parentNode.innerHTML = translations[currentLang].nextLeagueText + `<span id="next-league-req">${nextLeagueText.textContent}</span>`;
    }

    // Re-render views to apply translations
    renderUpgrades();
    renderFarmBots();
    renderCosmetics();
    renderInventory();
    renderTasks();
    renderChallenges();
    renderLeaderboard();
    updateUI();
}

// Initializer
document.addEventListener('DOMContentLoaded', initGame);

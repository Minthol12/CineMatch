const moviePool = [
    // --- ORIGINAL 6 (Kept your original Unsplash links) ---
    { name: "DARK", origin: "Germany", year: "2017", genre: "Sci-Fi", audioEN: "Dark_EN.mp3", audioNative: "Dark_GER.mp3", img: "https://images.unsplash.com/photo-1505672678657-cc7037095e60?w=600" },
    { name: "SPIRITED AWAY", origin: "Japan", year: "2001", genre: "Anime", img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600" },
    { name: "INCEPTION", origin: "USA", year: "2010", genre: "Action", audioEN: "Inception.mp3", img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600" },
    { name: "HOW TO SELL DRUGS ONLINE FAST", origin: "Germany", year: "2019", genre: "Comedy", img: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=600" },
    { name: "ATTACK ON TITAN", origin: "Japan", year: "2013", genre: "Anime", img: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=600" },
    { name: "RUN LOLA RUN", origin: "Germany", year: "1998", genre: "Thriller", img: "https://images.unsplash.com/photo-1541560052-5e137f229371?w=600" },

    // --- USA (Blockbusters & Classics) ---
    { name: "THE GODFATHER", origin: "USA", year: "1972", genre: "Crime", img: "https://tse4.mm.bing.net/th?q=The+Godfather+movie+scene&w=600" },
    { name: "PULP FICTION", origin: "USA", year: "1994", genre: "Crime", img: "https://tse4.mm.bing.net/th?q=Pulp+Fiction+movie+scene&w=600" },
    { name: "BREAKING BAD", origin: "USA", year: "2008", genre: "Drama", img: "https://tse4.mm.bing.net/th?q=Breaking+Bad+series+scene&w=600" },
    { name: "STRANGER THINGS", origin: "USA", year: "2016", genre: "Sci-Fi", img: "https://tse4.mm.bing.net/th?q=Stranger+Things+scene&w=600" },
    { name: "THE MATRIX", origin: "USA", year: "1999", genre: "Sci-Fi", img: "https://tse4.mm.bing.net/th?q=The+Matrix+movie+scene&w=600" },
    { name: "FRIENDS", origin: "USA", year: "1994", genre: "Comedy", img: "https://tse4.mm.bing.net/th?q=Friends+tv+show+scene&w=600" },
    { name: "THE OFFICE", origin: "USA", year: "2005", genre: "Comedy", img: "https://tse4.mm.bing.net/th?q=The+Office+US+scene&w=600" },
    { name: "INTERSTELLAR", origin: "USA", year: "2014", genre: "Sci-Fi", img: "https://tse4.mm.bing.net/th?q=Interstellar+movie+scene&w=600" },
    { name: "FIGHT CLUB", origin: "USA", year: "1999", genre: "Drama", img: "https://tse4.mm.bing.net/th?q=Fight+Club+movie+scene&w=600" },
    { name: "FORREST GUMP", origin: "USA", year: "1994", genre: "Drama", img: "https://tse4.mm.bing.net/th?q=Forrest+Gump+movie+scene&w=600" },
    { name: "GAME OF THRONES", origin: "USA", year: "2011", genre: "Fantasy", img: "https://tse4.mm.bing.net/th?q=Game+of+Thrones+scene&w=600" },
    { name: "THE DARK KNIGHT", origin: "USA", year: "2008", genre: "Action", img: "https://tse4.mm.bing.net/th?q=The+Dark+Knight+movie+scene&w=600" },
    { name: "AVENGERS: ENDGAME", origin: "USA", year: "2019", genre: "Action", img: "https://tse4.mm.bing.net/th?q=Avengers+Endgame+scene&w=600" },
    { name: "TITANIC", origin: "USA", year: "1997", genre: "Romance", img: "https://tse4.mm.bing.net/th?q=Titanic+movie+scene&w=600" },
    { name: "STAR WARS: A NEW HOPE", origin: "USA", year: "1977", genre: "Sci-Fi", img: "https://tse4.mm.bing.net/th?q=Star+Wars+A+New+Hope+scene&w=600" },
    { name: "JURASSIC PARK", origin: "USA", year: "1993", genre: "Adventure", img: "https://tse4.mm.bing.net/th?q=Jurassic+Park+movie+scene&w=600" },
    { name: "THE LION KING", origin: "USA", year: "1994", genre: "Animation", img: "https://tse4.mm.bing.net/th?q=The+Lion+King+1994+scene&w=600" },
    { name: "BACK TO THE FUTURE", origin: "USA", year: "1985", genre: "Sci-Fi", img: "https://tse4.mm.bing.net/th?q=Back+to+the+Future+movie+scene&w=600" },
    { name: "THE SHAWSHANK REDEMPTION", origin: "USA", year: "1994", genre: "Drama", img: "https://tse4.mm.bing.net/th?q=Shawshank+Redemption+scene&w=600" },
    { name: "THE SIMPSONS", origin: "USA", year: "1989", genre: "Animation", img: "https://tse4.mm.bing.net/th?q=The+Simpsons+scene&w=600" },
    { name: "SEINFELD", origin: "USA", year: "1989", genre: "Comedy", img: "https://tse4.mm.bing.net/th?q=Seinfeld+scene&w=600" },
    { name: "THE SOPRANOS", origin: "USA", year: "1999", genre: "Crime", img: "https://tse4.mm.bing.net/th?q=The+Sopranos+scene&w=600" },
    { name: "THE WIRE", origin: "USA", year: "2002", genre: "Crime", img: "https://tse4.mm.bing.net/th?q=The+Wire+HBO+scene&w=600" },
    { name: "LOST", origin: "USA", year: "2004", genre: "Adventure", img: "https://tse4.mm.bing.net/th?q=Lost+tv+show+scene&w=600" },
    { name: "THE WALKING DEAD", origin: "USA", year: "2010", genre: "Horror", img: "https://tse4.mm.bing.net/th?q=The+Walking+Dead+scene&w=600" },
    { name: "AVATAR", origin: "USA", year: "2009", genre: "Sci-Fi", img: "https://tse4.mm.bing.net/th?q=Avatar+2009+movie+scene&w=600" },
    { name: "GLADIATOR", origin: "USA", year: "2000", genre: "Action", img: "https://tse4.mm.bing.net/th?q=Gladiator+movie+scene&w=600" },
    { name: "THE SIXTH SENSE", origin: "USA", year: "1999", genre: "Thriller", img: "https://tse4.mm.bing.net/th?q=The+Sixth+Sense+movie+scene&w=600" },
    { name: "GOODFELLAS", origin: "USA", year: "1990", genre: "Crime", img: "https://tse4.mm.bing.net/th?q=Goodfellas+movie+scene&w=600" },
    { name: "SAVING PRIVATE RYAN", origin: "USA", year: "1998", genre: "War", img: "https://tse4.mm.bing.net/th?q=Saving+Private+Ryan+scene&w=600" },
    { name: "SCHINDLER'S LIST", origin: "USA", year: "1993", genre: "History", img: "https://tse4.mm.bing.net/th?q=Schindlers+List+movie+scene&w=600" },
    { name: "THE SILENCE OF THE LAMBS", origin: "USA", year: "1991", genre: "Thriller", img: "https://tse4.mm.bing.net/th?q=Silence+of+the+Lambs+scene&w=600" },
    { name: "THE SHINING", origin: "USA", year: "1980", genre: "Horror", img: "https://tse4.mm.bing.net/th?q=The+Shining+movie+scene&w=600" },
    { name: "ETERNAL SUNSHINE", origin: "USA", year: "2004", genre: "Romance", img: "https://tse4.mm.bing.net/th?q=Eternal+Sunshine+Spotless+Mind+scene&w=600" },
    { name: "JAWS", origin: "USA", year: "1975", genre: "Thriller", img: "https://tse4.mm.bing.net/th?q=Jaws+movie+scene&w=600" },
    { name: "DIE HARD", origin: "USA", year: "1988", genre: "Action", img: "https://tse4.mm.bing.net/th?q=Die+Hard+movie+scene&w=600" },
    { name: "TERMINATOR 2", origin: "USA", year: "1991", genre: "Action", img: "https://tse4.mm.bing.net/th?q=Terminator+2+movie+scene&w=600" },
    { name: "ROCKY", origin: "USA", year: "1976", genre: "Drama", img: "https://tse4.mm.bing.net/th?q=Rocky+movie+scene&w=600" },
    { name: "TOY STORY", origin: "USA", year: "1995", genre: "Animation", img: "https://tse4.mm.bing.net/th?q=Toy+Story+movie+scene&w=600" },
    { name: "GHOSTBUSTERS", origin: "USA", year: "1984", genre: "Comedy", img: "https://tse4.mm.bing.net/th?q=Ghostbusters+1984+scene&w=600" },
    { name: "HOME ALONE", origin: "USA", year: "1990", genre: "Comedy", img: "https://tse4.mm.bing.net/th?q=Home+Alone+movie+scene&w=600" },
    { name: "CASABLANCA", origin: "USA", year: "1942", genre: "Romance", img: "https://tse4.mm.bing.net/th?q=Casablanca+movie+scene&w=600" },
    { name: "CITIZEN KANE", origin: "USA", year: "1941", genre: "Drama", img: "https://tse4.mm.bing.net/th?q=Citizen+Kane+scene&w=600" },
    { name: "PSYCHO", origin: "USA", year: "1960", genre: "Horror", img: "https://tse4.mm.bing.net/th?q=Psycho+1960+scene&w=600" },
    { name: "THE WIZARD OF OZ", origin: "USA", year: "1939", genre: "Fantasy", img: "https://tse4.mm.bing.net/th?q=Wizard+of+Oz+movie+scene&w=600" },
    { name: "GONE WITH THE WIND", origin: "USA", year: "1939", genre: "Romance", img: "https://tse4.mm.bing.net/th?q=Gone+with+the+Wind+scene&w=600" },

    // --- JAPAN (Anime & Live Action) ---
    { name: "AKIRA", origin: "Japan", year: "1988", genre: "Anime", img: "https://tse4.mm.bing.net/th?q=Akira+anime+scene&w=600" },
    { name: "MY NEIGHBOR TOTORO", origin: "Japan", year: "1988", genre: "Anime", img: "https://tse4.mm.bing.net/th?q=My+Neighbor+Totoro+scene&w=600" },
    { name: "YOUR NAME", origin: "Japan", year: "2016", genre: "Anime", img: "https://tse4.mm.bing.net/th?q=Your+Name+anime+scene&w=600" },
    { name: "SEVEN SAMURAI", origin: "Japan", year: "1954", genre: "Action", img: "https://tse4.mm.bing.net/th?q=Seven+Samurai+movie+scene&w=600" },
    { name: "NEON GENESIS EVANGELION", origin: "Japan", year: "1995", genre: "Anime", img: "https://tse4.mm.bing.net/th?q=Neon+Genesis+Evangelion+scene&w=600" },
    { name: "ONE PIECE", origin: "Japan", year: "1999", genre: "Anime", img: "https://tse4.mm.bing.net/th?q=One+Piece+anime+scene&w=600" },
    { name: "COWBOY BEBOP", origin: "Japan", year: "1998", genre: "Anime", img: "https://tse4.mm.bing.net/th?q=Cowboy+Bebop+scene&w=600" },
    { name: "PRINCESS MONONOKE", origin: "Japan", year: "1997", genre: "Anime", img: "https://tse4.mm.bing.net/th?q=Princess+Mononoke+scene&w=600" },
    { name: "BATTLE ROYALE", origin: "Japan", year: "2000", genre: "Thriller", img: "https://tse4.mm.bing.net/th?q=Battle+Royale+movie+scene&w=600" },
    { name: "GODZILLA", origin: "Japan", year: "1954", genre: "Sci-Fi", img: "https://tse4.mm.bing.net/th?q=Godzilla+1954+scene&w=600" },
    { name: "FULLMETAL ALCHEMIST", origin: "Japan", year: "2009", genre: "Anime", img: "https://tse4.mm.bing.net/th?q=Fullmetal+Alchemist+Brotherhood+scene&w=600" },
    { name: "DEATH NOTE", origin: "Japan", year: "2006", genre: "Anime", img: "https://tse4.mm.bing.net/th?q=Death+Note+anime+scene&w=600" },
    { name: "DEMON SLAYER", origin: "Japan", year: "2019", genre: "Anime", img: "https://tse4.mm.bing.net/th?q=Demon+Slayer+anime+scene&w=600" },
    { name: "SHOPLIFTERS", origin: "Japan", year: "2018", genre: "Drama", img: "https://tse4.mm.bing.net/th?q=Shoplifters+movie+scene&w=600" },
    { name: "DRIVE MY CAR", origin: "Japan", year: "2021", genre: "Drama", img: "https://tse4.mm.bing.net/th?q=Drive+My+Car+movie+scene&w=600" },
    { name: "JUJUTSU KAISEN", origin: "Japan", year: "2020", genre: "Anime", img: "https://tse4.mm.bing.net/th?q=Jujutsu+Kaisen+anime+scene&w=600" },
    { name: "ALICE IN BORDERLAND", origin: "Japan", year: "2020", genre: "Thriller", img: "https://tse4.mm.bing.net/th?q=Alice+in+Borderland+scene&w=600" },
    { name: "HOWL'S MOVING CASTLE", origin: "Japan", year: "2004", genre: "Anime", img: "https://tse4.mm.bing.net/th?q=Howls+Moving+Castle+scene&w=600" },
    { name: "RASHOMON", origin: "Japan", year: "1950", genre: "Drama", img: "https://tse4.mm.bing.net/th?q=Rashomon+movie+scene&w=600" },

    // --- FRANCE ---
    { name: "AMELIE", origin: "France", year: "2001", genre: "Romance", img: "https://tse4.mm.bing.net/th?q=Amelie+movie+scene&w=600" },
    { name: "LEON: THE PROFESSIONAL", origin: "France", year: "1994", genre: "Action", img: "https://tse4.mm.bing.net/th?q=Leon+The+Professional+scene&w=600" },
    { name: "LA HAINE", origin: "France", year: "1995", genre: "Drama", img: "https://tse4.mm.bing.net/th?q=La+Haine+movie+scene&w=600" },
    { name: "THE INTOUCHABLES", origin: "France", year: "2011", genre: "Comedy", img: "https://tse4.mm.bing.net/th?q=The+Intouchables+movie+scene&w=600" },
    { name: "LUPIN", origin: "France", year: "2021", genre: "Crime", img: "https://tse4.mm.bing.net/th?q=Lupin+Netflix+scene&w=600" },
    { name: "BLUE IS THE WARMEST COLOR", origin: "France", year: "2013", genre: "Romance", img: "https://tse4.mm.bing.net/th?q=Blue+Is+The+Warmest+Color+scene&w=600" },
    { name: "A PROPHET", origin: "France", year: "2009", genre: "Crime", img: "https://tse4.mm.bing.net/th?q=A+Prophet+movie+scene&w=600" },
    { name: "PORTRAIT OF A LADY ON FIRE", origin: "France", year: "2019", genre: "Drama", img: "https://tse4.mm.bing.net/th?q=Portrait+of+a+Lady+on+Fire+scene&w=600" },
    { name: "THE ARTIST", origin: "France", year: "2011", genre: "Comedy", img: "https://tse4.mm.bing.net/th?q=The+Artist+movie+scene&w=600" },
    { name: "PERSEPOLIS", origin: "France", year: "2007", genre: "Animation", img: "https://tse4.mm.bing.net/th?q=Persepolis+movie+scene&w=600" },
    { name: "AMOUR", origin: "France", year: "2012", genre: "Drama", img: "https://tse4.mm.bing.net/th?q=Amour+movie+Haneke+scene&w=600" },
    { name: "TAKEN", origin: "France", year: "2008", genre: "Action", img: "https://tse4.mm.bing.net/th?q=Taken+movie+scene&w=600" },
    { name: "RAW", origin: "France", year: "2016", genre: "Horror", img: "https://tse4.mm.bing.net/th?q=Raw+movie+2016+scene&w=600" },
    { name: "THE FIFTH ELEMENT", origin: "France", year: "1997", genre: "Sci-Fi", img: "https://tse4.mm.bing.net/th?q=The+Fifth+Element+movie+scene&w=600" },
    { name: "TAXI", origin: "France", year: "1998", genre: "Action", img: "https://tse4.mm.bing.net/th?q=Taxi+1998+movie+scene&w=600" },

    // --- GERMANY ---
    { name: "DAS BOOT", origin: "Germany", year: "1981", genre: "War", img: "https://tse4.mm.bing.net/th?q=Das+Boot+movie+scene&w=600" },
    { name: "THE LIVES OF OTHERS", origin: "Germany", year: "2006", genre: "Drama", img: "https://tse4.mm.bing.net/th?q=The+Lives+of+Others+scene&w=600" },
    { name: "METROPOLIS", origin: "Germany", year: "1927", genre: "Sci-Fi", img: "https://tse4.mm.bing.net/th?q=Metropolis+1927+scene&w=600" },
    { name: "GOODBYE LENIN", origin: "Germany", year: "2003", genre: "Comedy", img: "https://tse4.mm.bing.net/th?q=Goodbye+Lenin+scene&w=600" },
    { name: "BABYLON BERLIN", origin: "Germany", year: "2017", genre: "Crime", img: "https://tse4.mm.bing.net/th?q=Babylon+Berlin+scene&w=600" },
    { name: "ALL QUIET ON THE WESTERN FRONT", origin: "Germany", year: "2022", genre: "War", img: "https://tse4.mm.bing.net/th?q=All+Quiet+on+the+Western+Front+2022+scene&w=600" },
    { name: "DOWNFALL", origin: "Germany", year: "2004", genre: "History", img: "https://tse4.mm.bing.net/th?q=Downfall+movie+scene&w=600" },
    { name: "BARBARIANS", origin: "Germany", year: "2020", genre: "Action", img: "https://tse4.mm.bing.net/th?q=Barbarians+Netflix+scene&w=600" },
    { name: "THE WAVE", origin: "Germany", year: "2008", genre: "Thriller", img: "https://tse4.mm.bing.net/th?q=The+Wave+2008+movie+scene&w=600" },
    { name: "DEUTSCHLAND 83", origin: "Germany", year: "2015", genre: "Thriller", img: "https://tse4.mm.bing.net/th?q=Deutschland+83+scene&w=600" },
    { name: "VICTORIA", origin: "Germany", year: "2015", genre: "Crime", img: "https://tse4.mm.bing.net/th?q=Victoria+2015+movie+scene&w=600" },
    { name: "NOSFERATU", origin: "Germany", year: "1922", genre: "Horror", img: "https://tse4.mm.bing.net/th?q=Nosferatu+1922+scene&w=600" },
    { name: "FUNNY GAMES", origin: "Germany", year: "1997", genre: "Thriller", img: "https://tse4.mm.bing.net/th?q=Funny+Games+1997+scene&w=600" },
    { name: "M", origin: "Germany", year: "1931", genre: "Thriller", img: "https://tse4.mm.bing.net/th?q=M+1931+movie+scene&w=600" },

    // --- AUSTRALIA ---
    { name: "MAD MAX: FURY ROAD", origin: "Australia", year: "2015", genre: "Action", img: "https://tse4.mm.bing.net/th?q=Mad+Max+Fury+Road+scene&w=600" },
    { name: "CROCODILE DUNDEE", origin: "Australia", year: "1986", genre: "Comedy", img: "https://tse4.mm.bing.net/th?q=Crocodile+Dundee+scene&w=600" },
    { name: "THE BABADOOK", origin: "Australia", year: "2014", genre: "Horror", img: "https://tse4.mm.bing.net/th?q=The+Babadook+scene&w=600" },
    { name: "MOULIN ROUGE", origin: "Australia", year: "2001", genre: "Musical", img: "https://tse4.mm.bing.net/th?q=Moulin+Rouge+movie+scene&w=600" },
    { name: "ANIMAL KINGDOM", origin: "Australia", year: "2010", genre: "Crime", img: "https://tse4.mm.bing.net/th?q=Animal+Kingdom+movie+scene&w=600" },
    { name: "BABE", origin: "Australia", year: "1995", genre: "Family", img: "https://tse4.mm.bing.net/th?q=Babe+movie+scene&w=600" },
    { name: "GALLIPOLI", origin: "Australia", year: "1981", genre: "War", img: "https://tse4.mm.bing.net/th?q=Gallipoli+movie+scene&w=600" },
    { name: "WENTWORTH", origin: "Australia", year: "2013", genre: "Drama", img: "https://tse4.mm.bing.net/th?q=Wentworth+tv+show+scene&w=600" },
    { name: "HEARTBREAK HIGH", origin: "Australia", year: "2022", genre: "Drama", img: "https://tse4.mm.bing.net/th?q=Heartbreak+High+2022+scene&w=600" },
    { name: "LION", origin: "Australia", year: "2016", genre: "Drama", img: "https://tse4.mm.bing.net/th?q=Lion+movie+scene&w=600" },
    { name: "WOLF CREEK", origin: "Australia", year: "2005", genre: "Horror", img: "https://tse4.mm.bing.net/th?q=Wolf+Creek+movie+scene&w=600" },
    { name: "STRICTLY BALLROOM", origin: "Australia", year: "1992", genre: "Romance", img: "https://tse4.mm.bing.net/th?q=Strictly+Ballroom+movie+scene&w=600" },
    { name: "BLUEY", origin: "Australia", year: "2018", genre: "Animation", img: "https://tse4.mm.bing.net/th?q=Bluey+cartoon+scene&w=600" },
    { name: "MAD MAX", origin: "Australia", year: "1979", genre: "Action", img: "https://tse4.mm.bing.net/th?q=Mad+Max+1979+scene&w=600" },
    { name: "THE PIANO", origin: "Australia", year: "1993", genre: "Drama", img: "https://tse4.mm.bing.net/th?q=The+Piano+movie+scene&w=600" }
];
let currentGame;
let lives = 6;

// NEW: This helps the game be less "strict"
function normalize(text) {
    return text.toUpperCase()
               .replace(/^(THE|A|AN)\s+/, "") // Removes "The ", "A ", "An " from start
               .replace(/[:]/g, "")           // Removes colons
               .trim();
}

function initGame() {
    // 1. Logic to prevent repeats
    if (playedMovies.length === moviePool.length) playedMovies = [];
    let available = moviePool.filter(m => !playedMovies.includes(m.name));
    
    // 2. Pick and track movie
    currentGame = available[Math.floor(Math.random() * available.length)];
    playedMovies.push(currentGame.name);

    // 3. Update UI Elements
    const img = document.getElementById('mysteryImage');
    img.src = currentGame.img;
    img.className = "blur-level-6";

    // Fixes the "Loading" bug
    document.getElementById('starterHint').innerText = `ORIGIN: ${currentGame.origin}`;
    
    // Dynamic button text
    const nativeBtn = document.querySelector(".audio-btn-native");
    if (nativeBtn) nativeBtn.innerText = `🔊 ${currentGame.origin}`;

    // 4. Reset State
    document.getElementById('hintBar').innerHTML = "";
    document.getElementById('movieInput').value = "";
    lives = 6;
    updateLives();
}

function checkMovie() {
    const input = document.getElementById('movieInput');
    const userGuess = normalize(input.value);
    const correctTitle = normalize(currentGame.name);

    if (userGuess === "") return;

    if (userGuess === correctTitle) {
        showModal(true);
    } else {
        lives--;
        updateDifficulty();
        // Visual shake effect for wrong answer
        document.querySelector('.glass-shell').classList.add('shake');
        setTimeout(() => document.querySelector('.glass-shell').classList.remove('shake'), 500);
        
        if (lives <= 0) showModal(false);
    }
    input.value = "";
}

function updateDifficulty() {
    document.getElementById('mysteryImage').className = `blur-level-${lives}`;
    updateLives();
    
    const hintBar = document.getElementById('hintBar');
    // More aggressive hinting to make it easier
    if (lives === 5) {
        hintBar.innerHTML += `<span class="hint-pill">📅 ${currentGame.year}</span>`;
    }
    if (lives === 4) {
        hintBar.innerHTML += `<span class="hint-pill">🎭 ${currentGame.genre}</span>`;
    }
    if (lives === 2) {
        // Ultimate hint: Show the first letter
        hintBar.innerHTML += `<span class="hint-pill">🔤 Starts with: ${currentGame.name[0]}</span>`;
    }
}

function showModal(isWin) {
    document.getElementById('resultModal').style.display = "flex";
    document.getElementById('modalTitle').innerText = isWin ? "🏆 CORRECT" : "❌ OUT OF ENERGY";
    document.getElementById('modalMessage').innerText = `It was: ${currentGame.name}`;
    document.getElementById('mysteryImage').className = "blur-level-1";
}


let playedMovies = []; 

function initGame() {
    // Reset if all movies seen
    if (playedMovies.length === moviePool.length) {
        playedMovies = []; 
    }

    // Filter out played movies
    let availableMovies = moviePool.filter(m => !playedMovies.includes(m.name));
    
    // Pick from available list
    currentGame = availableMovies[Math.floor(Math.random() * availableMovies.length)];
    playedMovies.push(currentGame.name);
    
    // Rest of your original code...
    const img = document.getElementById('mysteryImage');
    img.src = currentGame.img;
    img.className = "blur-level-6";
    // ... etc

    document.getElementById('starterHint').innerText = `ORIGIN: ${currentGame.origin}`;
}

function updateLives() {
    document.getElementById('livesDisplay').innerText = "⚡".repeat(lives);
}
let currentPlayingAudio = null; // Add this at the top with playedMovies

function playAudio(type) {
    if (currentPlayingAudio) {
        currentPlayingAudio.pause();
        currentPlayingAudio.currentTime = 0;
    }

    // Logic: If 'NATIVE', play audioNative; else play audioEN
    let src = type === 'NATIVE' ? currentGame.audioNative : currentGame.audioEN;
    
    if (src) {
        currentPlayingAudio = new Audio("audio/" + src);
        currentPlayingAudio.play();
    }
}

window.onload = initGame;
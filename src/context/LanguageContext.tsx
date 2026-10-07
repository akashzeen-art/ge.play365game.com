import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "de" | "en";

interface Translations {
  playNow: string;
  home: string;
  games: string;
  categories: string;
  welcomeTo: string;
  experienceUltimate: string;
  whereEvery: string;
  instantAccess: string;
  exploreCategories: string;
  exploreDesc: string;
  actionTitle: string;
  puzzleTitle: string;
  top10Title: string;
  arcadeTitle: string;
  action: string;
  puzzle: string;
  top10: string;
  arcade: string;
  moreGames: string;
  journeyStarts: string;
  discoverEndless: string;
  jumpInto: string;
  joinCommunity: string;
  letsPlay: string;
  playAnytime: string;
  gamingHub: string;
  allRights: string;
  gameCategories: string;
  allGames: string;
  top10Games: string;
  easyToPlay: string;
  playBtn: string;
  back: string;
  playConquer: string;
  exploreEpic: string;
  thrilling: string;
  featuredGames: string;
  popularPicks: string;
  allGamesHeading: string;
  premiumGames: string;
  premiumGamesLabel: string;
  premium: string;
}

const translations: Record<Lang, Translations> = {
  de: {
    playNow: "Jetzt spielen",
    home: "Startseite",
    games: "Spiele",
    categories: "Kategorien",
    welcomeTo: "Willkommen bei Play365Game",
    experienceUltimate: "Erle<b>b</b>e die ultimative <br /> Gaming-Plattf<b>o</b>rm",
    whereEvery: "Wo jedes Spiel ein Abenteuer ist, das darauf wartet, erobert zu werden",
    instantAccess: "Play365Game bietet dir sofortigen Zugang zu Hunderten von Spielen aller Genres, von actiongeladenen Shootern bis zu kniffligen Puzzles.",
    exploreCategories: "Spielkategorien entdecken",
    exploreDesc: "Tauche ein in unsere vielfältige Spielesammlung. Von intensiver Action bis zu entspannenden Puzzles findest du dein perfektes Spielerlebnis.",
    actionTitle: "Acti<b>o</b>n",
    puzzleTitle: "Puzz<b>l</b>e",
    top10Title: "Top-<b>1</b>0-Spiele",
    arcadeTitle: "Arca<b>d</b>e",
    action: "Erlebe packende Actionspiele mit intensiven Kämpfen, epischen Schlachten und adrenalingeladenem Gameplay.",
    puzzle: "Fordere deinen Verstand mit kniffligen Puzzles, strategischem Denken und herausfordernden Rätseln.",
    top10: "Entdecke unsere beliebtesten und angesagtesten Spiele, geliebt von Spielern weltweit.",
    arcade: "Genieße klassischen Arcade-Spaß mit Retro-inspirierten Spielen, endloser Unterhaltung und nostalgischem Flair.",
    moreGames: "Mehr <b>S</b>piele",
    journeyStarts: "deine Gaming-Reise beginnt hier",
    discoverEndless: "entdec<b>k</b>e <br /> endlos viele Spie<b>l</b>e",
    jumpInto: "Steig ein in spannendes Gameplay mit sofortigem Zugang zu topbewerteten Spielen. Fordere dich heraus, tritt weltweit an und dominiere die Bestenlisten.",
    joinCommunity: "Tritt unserer Community bei",
    letsPlay: "lass uns spi<b>e</b>len und <br /> gemeinsam <br /> ero<b>b</b>ern.",
    playAnytime: "Spielen jederzeit, überall",
    gamingHub: "Dein Gaming-Hub wartet",
    gameCategories: "Sp<b>i</b>elkategorien",
    allGames: "Alle Spiele",
    top10Games: "Top-10-Spiele",
    easyToPlay: "Einfach zu spielen",
    playBtn: "Spielen",
    back: "Zurück",
    playConquer: "Spielen & Erobern",
    exploreEpic: "Epis<b>c</b>he Spiele <br /> entdec<b>k</b>en",
    thrilling: "Tauche ein in unsere Sammlung packender Abenteuer",
    featuredGames: "Empfohlene Sp<b>i</b>ele",
    popularPicks: "Belie<b>b</b>te Auswahl",
    allGamesHeading: "<b>A</b>lle Spiele",
    premiumGames: "Premi<b>u</b>m-Spiele",
    premiumGamesLabel: "Premium-Spiele",
    premium: "Schalte exklusive Premium-Spiele mit ikonischen Charakteren, filmreifen Abenteuern und erstklassigem Gameplay frei.",
    allRights: "©Play365Game 2026. Alle Rechte vorbehalten",
  },
  en: {
    playNow: "Play Now",
    home: "Home",
    games: "Games",
    categories: "Categories",
    welcomeTo: "Welcome to Play365Game",
    experienceUltimate: "Exper<b>i</b>ence the ultimate <br /> gaming platf<b>o</b>rm",
    whereEvery: "Where every game is an adventure waiting to be conquered",
    instantAccess: "Play365Game brings you instant access to hundreds of games across all genres, from action-packed shooters to brain-teasing puzzles",
    exploreCategories: "Explore Gaming Categories",
    exploreDesc: "Dive into our diverse collection of games spanning multiple genres. From intense action to relaxing puzzles, find your perfect gaming experience.",
    actionTitle: "Acti<b>o</b>n",
    puzzleTitle: "Puzz<b>l</b>e",
    top10Title: "Top <b>1</b>0 Games",
    arcadeTitle: "Arca<b>d</b>e",
    action: "Experience heart-pounding action games with intense combat, epic battles, and adrenaline-pumping gameplay.",
    puzzle: "Challenge your mind with brain-teasing puzzles, strategic thinking, and mind-bending challenges.",
    top10: "Discover our most popular and trending games loved by players worldwide.",
    arcade: "Enjoy classic arcade fun with retro-inspired games, endless entertainment, and nostalgic vibes.",
    moreGames: "M<b>o</b>re ga<b>m</b>es",
    journeyStarts: "your gaming journey starts here",
    discoverEndless: "disc<b>o</b>ver <br /> endless g<b>a</b>mes",
    jumpInto: "Jump into thrilling gameplay with instant access to top-rated games. Challenge yourself, compete globally, and dominate the leaderboards.",
    joinCommunity: "Join Our Community",
    letsPlay: "let&#39;s pl<b>a</b>y and <br /> conquer <br /> t<b>o</b>gether.",
    playAnytime: "Play Anytime, Anywhere",
    gamingHub: "Your Gaming Hub Awaits",
    gameCategories: "G<b>a</b>me Categories",
    allGames: "All Games",
    top10Games: "Top 10 Games",
    easyToPlay: "Easy to Play",
    playBtn: "Play",
    back: "Back",
    playConquer: "Play & Conquer",
    exploreEpic: "Expl<b>o</b>re Epic <br /> G<b>a</b>mes",
    thrilling: "Dive into our collection of thrilling adventures",
    featuredGames: "Feat<b>u</b>red Games",
    popularPicks: "Pop<b>u</b>lar Picks",
    allGamesHeading: "<b>A</b>ll Games",
    premiumGames: "Premi<b>u</b>m Games",
    premiumGamesLabel: "Premium Games",
    premium: "Unlock exclusive premium games with iconic characters, cinematic adventures, and top-quality gameplay.",
    allRights: "©Play365Game 2026. All rights reserved",
  },
};

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("de");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      <div dir="ltr">{children}</div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

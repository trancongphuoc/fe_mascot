import '../css/index.css';

import tiger from '../assets/tiger.svg';
import buffalo from '../assets/buffalo.svg';
import chicken from '../assets/chicken.svg';
import dragon from '../assets/dragon.svg';
import goat from '../assets/goat.svg';
import horse from '../assets/horse.svg';
import pig from '../assets/pig.svg';
import snake from '../assets/snake.svg';

import Card from '../components/Card';
import FullCard from '../components/FullCard';
import AvatarCircle from '../components/AvatarCircle';
import PrimaryText from '../assets/primary-text.svg';
import Rule from '../assets/rule.svg';
import Arrow from '../assets/arrow.svg';
import avatar from '../assets/avatar.png';

import MyBonusToday from '../components/MyBonusToday';
import BestPlayers from '../components/BestPlayers';
import { useEffect, useState } from 'react';
import DialogBetting from '../components/DialogBetting';
import DialogLost from '../components/DialogLost';
import PopupRule from '../components/PopupRule';
import PopupResult from '../components/PopupResult';
import PopupMineResult from '../components/PopupMineResult';
import { db } from '../firebase/config';
import { ref, onValue } from "firebase/database";

const img: string[] = [buffalo, tiger, dragon, snake, horse, goat, chicken, pig];

const bets = 124;
const myInfoBetResults = [
  { card: tiger, isSelected: true, number: 7, bonus: 15, players: 7 , show: ""},
  { card: tiger, isSelected: true, number: 7, bonus: 15, players: 7 },
  { card: tiger, isSelected: true, number: 7, bonus: 15, players: 7 },
];
const leftResults = [horse, goat, pig];
const rightResults = [avatar, avatar, avatar, avatar];
const numberResult = 29;
const bettingTable = [
  { card: buffalo, isSelected: false, bonus: 5, players: 0 },
  { card: tiger, isSelected: false, bonus: 5, players: 0 },
  { card: dragon, isSelected: true, bonus: 5, players: 0 },
  { card: snake, isSelected: false, bonus: 8, players: 10 },
  { card: horse, isSelected: false, bonus: 8, players: 0 },
  { card: goat, isSelected: false, bonus: 10, players: 20 },
  { card: chicken, isSelected: false, bonus: 15, players: 0 },
  { card: pig, isSelected: false, bonus: 20, players: 0 },
];
const bestPlayers = [
  { name: "Dong Hoang Linh", avatarUrl: "https://www.ikara.co/avatar/103929910820839711115?type=LARGE&version=8", winningIcoin: 9999 },
  { name: "Doan Dai Hiep", avatarUrl: "https://www.ikara.co/avatar/103929910820839711115?type=LARGE&version=8", winningIcoin: 9999 },
  { name: "Nguyễn Hoàng Chi", avatarUrl: "https://www.ikara.co/avatar/103929910820839711115?type=LARGE&version=8", winningIcoin: 9999 },
];
const counter = 30;
const topUsers = [
  { url: 'https://www.ikara.co/avatar/103929910820839711115?type=LARGE&version=8', name: 'Lê Hải Yến', icoin: 3000 },
  { url: 'https://www.ikara.co/avatar/103929910820839711115?type=LARGE&version=8', name: 'Trần Tuấn Hùng', icoin: 1000 },
  { url: 'https://www.ikara.co/avatar/103929910820839711115?type=LARGE&version=8', name: 'Ngọc Hoàng', icoin: 9000 },
];

let history: string[] = ['tiger', 'buffalo', 'chicken', 'dragon', 'goat', 'horse', 'pig', 'snake', 'tiger', 'buffalo', 'chicken', 'dragon', 'goat', 'horse', 'pig', 'snake', 'tiger', 'buffalo', 'chicken', 'dragon', 'goat', 'horse', 'pig', 'snake', 'tiger', 'buffalo', 'chicken', 'dragon', 'goat', 'horse', 'pig', 'snake']


let mineHistory: BetInfo[] = [
  {
    time: new Date(),
    bettings: [{ zodiac: tiger, bonus: 'x3', icoin: 10 }, { zodiac: tiger, bonus: 'x5', icoin: -20 }],
    totalIcoin: -10
  },
  {
    time: new Date(),
    bettings: [{ zodiac: buffalo, bonus: 'x3', icoin: -10 }, { zodiac: tiger, bonus: 'x5', icoin: 20 }],
    totalIcoin: 10
  },
  {
    time: new Date(),
    bettings: [{ zodiac: snake, bonus: 'x3', icoin: -20 }, { zodiac: tiger, bonus: 'x5', icoin: 10 }],
    totalIcoin: -10
  },
  {
    time: new Date(),
    bettings: [{ zodiac: snake, bonus: 'x3', icoin: -20 }, { zodiac: tiger, bonus: 'x5', icoin: 10 }],
    totalIcoin: -10
  },
  {
    time: new Date(),
    bettings: [{ zodiac: snake, bonus: 'x3', icoin: -20 }, { zodiac: tiger, bonus: 'x5', icoin: 10 }],
    totalIcoin: -10
  },
  {
    time: new Date(),
    bettings: [{ zodiac: snake, bonus: 'x3', icoin: -20 }, { zodiac: tiger, bonus: 'x5', icoin: 10 }],
    totalIcoin: -10
  },
  {
    time: new Date(),
    bettings: [{ zodiac: snake, bonus: 'x3', icoin: -20 }, { zodiac: tiger, bonus: 'x5', icoin: 10 }],
    totalIcoin: -10
  },

];

let dialogType: DialogType = 'WIN';


function App() {

  useEffect(() => {
    const fetchStatus = async () => {
      console.log(db);
      const starCountRef = ref(db, 'zodiacGame/state/status');
      const zodiacCard = ref(db, 'zodiacGame/state/zodiacCard');

      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        setStatusGame(data);
        console.log('---',statusGame);
      });

      onValue(zodiacCard, (snapshot) => {
        const data = snapshot.val();
        console.log('zodiaCard', data);
      });
    }
    fetchStatus();
  }, [])

  const [statusGame, setStatusGame] = useState('PREPARESTART');

  
  const [popupState, setPopupState] = useState({
    isWinLostVisible: false,
    ruleShow: false,
    resultShow: false,
    bettingtShow: false,
    mineResultShow: false,

    selectCard: false,
  });

  const handleOpenPopup = () => {
    dialogType = 'WIN';
    setPopupState({ ...popupState, isWinLostVisible: true });
  };


  const handleOpenLostPopup = () => {
    dialogType = 'LOST';
    setPopupState({ ...popupState, isWinLostVisible: true });
  };

  const handleCloseWinLostPopup = () => setPopupState({ ...popupState, isWinLostVisible: false });
  const handleOpenRulePopup = () => setPopupState({ ...popupState, ruleShow: true });
  const handleCloseRulePopup = () => setPopupState({ ...popupState, ruleShow: false });
  const handleOpenResultPopup = () => setPopupState({ ...popupState, resultShow: true });
  const handleCloseResultPopup = () => setPopupState({ ...popupState, resultShow: false });
  const handleOpenBettingPopup = () => { setPopupState({ ...popupState, bettingtShow: true })};
  const handleCloseBettingPopup = () => setPopupState({ ...popupState, bettingtShow: false });
  const handleOpenMineResultPopup = () => { setPopupState({ ...popupState, mineResultShow: true })};
  const handleCloseMineResultPopup = () => setPopupState({ ...popupState, mineResultShow: false });


  return (
    <div className='main'>
      <section className='section-header u-margin-top-huge1'>
        <img src={PrimaryText} alt="primary_text" className='u-margin-minus-bottom-big' />
        <p className='heading-secondary'>Hôm nay {bets} Ván</p>
        <img src={Rule} onClick={handleOpenRulePopup} alt="card_background" className='section-header__rule' />
      </section>

      <div className="result mt-7-5px">
        <div className="result__left" onClick={handleOpenResultPopup}>
          <p className='result__left--text'>Kết quả</p>
          {leftResults.map((result, index) => (
            <Card key={index} card={result} className="card--zodiac__small" classNameBackground="card--zodiac__background--small mr-4px" />
          ))}
          <img src={Arrow} alt="card_background" />
        </div>
        <div className="result__right">
          {rightResults.map((result, index) => (
            <AvatarCircle key={index} avatarUrl={result} className="avatar mr-5px" />
          ))}
          <h2 className='result__right--number'>{numberResult}</h2>
        </div>
      </div>

      <section className="section-betting mt-5px">
        <p className="section-betting--counter">Đếm ngược {counter}</p>
        <div className="section-betting__content">
          {bettingTable.map((bettingCard, index) => (
            <FullCard onOpen={handleOpenBettingPopup} key={index} number={index + 1} card={bettingCard.card} isSelected={bettingCard.isSelected} bonus={bettingCard.bonus} players={bettingCard.players} />
          ))}
        </div>
      </section>

      <MyBonusToday onOpen={handleOpenMineResultPopup} bonusToday={1000} goodBets={4} totalIcoin={15000} myInfoBetReults={myInfoBetResults} />

      <BestPlayers bestPlayers={bestPlayers} />

      <button onClick={handleOpenPopup} className="open-popup-button">Open Popup</button>
      <button onClick={handleOpenLostPopup} className="open-popup-button">Open Popup</button>





      {/* Dialog when click */}
      <DialogLost show={popupState.isWinLostVisible} onClose={handleCloseWinLostPopup} dialogType={dialogType} totalIcoin={100} topUsers={topUsers} />
      <PopupRule show={popupState.ruleShow} onClose={handleCloseRulePopup} />
      <PopupResult show={popupState.resultShow} onClose={handleCloseResultPopup} zodiacs={img} history={history} />
      <DialogBetting show={popupState.bettingtShow} onClose={handleCloseBettingPopup}/>
      <PopupResult show={popupState.resultShow} onClose={handleCloseResultPopup} zodiacs={img} history={history} />
      <PopupMineResult show={popupState.mineResultShow} onClose={handleCloseMineResultPopup} mineHistory={mineHistory}/>
    </div>
  );
}

export default App;

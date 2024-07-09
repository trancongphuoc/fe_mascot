import { useEffect, useState, useContext } from 'react';
import PopupCenter from '../popup/PopupCenter';
import LottieAnimation from './AnimationOpenCard';
import animationData from '../../assets/json/animation_open_card.json';
import SVG from 'react-inlinesvg';
import { GameInfoContext } from '../../store/game-info_context';

interface PopupOpenCardProps {
  zodiacUrl: string;
}

const PopupOpenCard = ({ zodiacUrl }: PopupOpenCardProps) => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const { setModal } = useContext(GameInfoContext);

  useEffect(() => {
    const showSvgTimer = setTimeout(() => {
      setIsAnimationComplete(true);
    }, 5500); // 5.5 seconds delay

    const hideSvgTimer = setTimeout(() => {
      setIsAnimationComplete(false);
    }, 7500); // 7 seconds delay

    return () => {
      clearTimeout(showSvgTimer);
      clearTimeout(hideSvgTimer);
    }; // Cleanup timers on component unmount
  }, []);

  return (
    <PopupCenter
      className='popup-overlay-history'
      classNameChild='open-card'
    >
        <LottieAnimation
        animationData={animationData}
        style={{ width: 300, height: 300 }}
        speed={1}
        direction={1}
        onComplete={ () => setModal({state: "CLOSE", type: "GAMERESULT"})}
        className='open-card--lottie-animation'
      />
       {isAnimationComplete && <SVG src={zodiacUrl} className='open-card--img'/>}
    </PopupCenter>
  );
};

export default PopupOpenCard;

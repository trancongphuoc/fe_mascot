import PrimaryText from '../assets/primary-text.svg';
import SVG from 'react-inlinesvg';
import Rule from '../assets/rule.svg';
import { log } from '../utils/log';
import { useContext } from 'react';
import { GameInfoContext } from '../store/game-info_context';

// interface HeaderProps {
//     gameNo?: number,
//     onClickRule: () => void
// }

const Header = function Header() {
    log('<Header />');

    const { noGame, setRule: openRule } = useContext( GameInfoContext )

    return (
        <header className='section-header u-margin-top-huge1'>
            <SVG src={PrimaryText} className='u-margin-minus-bottom-big' />
            <p className='heading-secondary'>Hôm nay {noGame ?? 0} Ván</p>
            <SVG src={Rule} className='section-header__rule' onClick={() => openRule("OPEN")}/>   
        </header>
    );
};

export default Header;
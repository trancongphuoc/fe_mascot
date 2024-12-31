import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Các file chứa nội dung đa ngôn ngữ
const resources = {
  // "vi": {
  //   "translation": {
  //     "You are not registered. Please register to use the service!": "You are not registered. Please register to use the service!",
  //     "You have already registered. Please login!": "You have already registered. Please login!",
  //     "Phone Number is required!": "Phone Number is required!",
  //     "Please wait a minute before requesting a new OTP.": "Please wait a minute before requesting a new OTP.",
  //     "Invalid OTP": "Invalid OTP",
  //     "Something went wrong!": "Something went wrong!",
  //     "Today {{count}} games": "Today {{count}} games",
  //     "Result": "Result",
  //     "Rules": "Rules",
  //     "Countdown": "Countdown",
  //     "Person": "Person",
  //     "Today's bonus": "Today's bonus",
  //     "Today's predictions": "Today's predictions",
  //     "My sum": "My sum",
  //     "Top up now": "Top up now",
  //     "Master Prediction": "Master Prediction",
  //     "Previous Bonus": "Previous Bonus",
  //     "Good luck and get big prize": "Good luck and get big prize",
  //     "Confirm": "Confirm",
  //     "You missed the prize this time": "You missed the prize this time",
  //     "Don't be discouraged, keep trying, believe in yourself!": "Don't be discouraged, keep trying, believe in yourself!",
  //     "Sorry": "Sorry",
  //     "Top winner": "Top winner",
  //     "Congratulations": "Congratulations",
  //     "Excellent, you guessed this time right.": "Excellent, you guessed this time right.",
  //     "Rules of Mascot": "Rules of Mascot",
  //     "While the timer countsdown, click on the card you want to guess.": "While the timer countsdown, click on the card you want to guess.",
  //     "You click on the card to display the betting levels, each round will flip a maximum of 4 cards": "You click on the card to display the betting levels, each round will flip a maximum of 4 cards",
  //     "Continue": "Continue",
  //     "The countdown ends and the cards are automatically flipped. If you win, you will receive a prize corresponding to the bet amount.": "The countdown ends and the cards are automatically flipped. If you win, you will receive a prize corresponding to the bet amount.",
  //     "We will show the winner of the day before": "We will show the winner of the day before",
  //     "History": "History",
  //     "Bet level": "Bet level",
  //     "You do not have enough iCoin to play, please top up!": "You do not have enough iCoin to play, please top up!",
  //     "Cancel": "Cancel",
  //     "Top up": "Top up",
  //     "The connection is unstable, please check your network connection.": "The connection is unstable, please check your network connection.",
  //     "Exit": "Exit",
  //     "Reconnect": "Reconnect",
  //     "The game is currently under maintenance. Please wait a while.": "The game is currently under maintenance. Please wait a while.",
  //     "Top Day": "Top Day",
  //     "Top Month": "Top Month",
  //     "Welcome to Mascot": "Welcome to Mascot",
  //     "Enter your phone number": "Enter your phone number",
  //     "Send OTP": "Send OTP",
  //     "OTP sent to your phone number. Please fill correct OTP to login Mascot now!": "OTP sent to your phone number. Please fill correct OTP to login Mascot now!",
  //     "Go": "Go",
  //     "Login": "Login",
  //     "Resend OTP?": "Resend OTP?",
  //     "Remain": "Remain",
  //     "OTP is wrong. Please try again.": "OTP is wrong. Please try again.",
  //     "OTP has expired. Please try again.": "OTP has expired. Please try again.",
  //     "Join to MASCOT now for a chance to win 500.000 Fbu every month": "Join to MASCOT now for a chance to win 500.000 Fbu every month",
  //     "Fee 120Fbu/1000 coins/day": "Fee 120Fbu/1000 coins/day",
  //     "Your balance is not enough to register service": "Your balance is not enough to register service",
  //     "CONFIRM TO SUBSCRIBER": "CONFIRM TO SUBSCRIBER",
  //     "You registed MASCOT successfully. Service fee 120Fbu/1000 coins/day": "You registed MASCOT successfully. Service fee 120Fbu/1000 coins/day",
  //     "Fee 100Fbu/1000 coins Join to MASCOT now for a chance to win 500.000 Fbu every month": "Fee 100Fbu/1000 coins Join to MASCOT now for a chance to win 500.000 Fbu every month",
  //     "Buy more": "Buy more",
  //     "BUY": "BUY",
  //     "You have 1000 coins to join MASCOT, fee 100Fbu. Good luck to you!": "You have 1000 coins to join MASCOT, fee 100Fbu. Good luck to you!",
  //     "CLOSE": "CLOSE",
  //     "Close": "Close",
  //     "Register": "Register",
  //     "Account": "Account",
  //     "Point earn today": "Point earn today",
  //     "Point earn this month": "Point earn this month",
  //     "Unsubscribe": "Unsubscribe",
  //     "Subscribe": "Subscribe",
  //     "Log Out": "Log Out",
  //     "Next": "Next",
  //     "Choose 1 selection": "Choose 1 selection",
  //     "Warning! Are you really want to cancel?": "Warning! Are you really want to cancel?",
  //     "YES": "YES",
  //     "NO": "NO",
  //     "You have canceled successfully. Thank you!": "You have canceled successfully. Thank you!",
  //     "Notify": "Notify",
  //     "Enter OTP code here": "Enter OTP code here",
  //     "Missing game information": "Missing game information",
  //     "Missing card selection": "Missing card selection",
  //     "Missing bet amount": "Missing bet amount",
  //     "Bet up to 4 mascot cards": "Bet up to 4 mascot cards",
  //     "Round": "Round",
  //     "Betting level": "Betting level",
  //     "Are you sure?": "Are you Sure?",
      // "Time to bet not yet": "Time to bet not yet",
      // "Success": "Success",
      // "You canceled MASCOT successfully." : "You canceled MASCOT successfully."
  //   }
  // },
  "bi": {
    "translation": {
      "You are not registered. Please register to use the service!": "Ntimuriyandikisha.Mwiyandikishe kugira mukoreshe kino gisata",
      "You have already registered. Please login!": "Mwaramaze kwiyandikisha.Musabwe kwinjira mu gisata",
      "Phone Number is required!": "Inomero ya terefone irakenewe",
      "Please wait a minute before requesting a new OTP.": "Murindire akanya kugira musabe iyindi kode OTP",
      "Invalid OTP": "OTP siyo",
      "Something went wrong!": "Ubuhinga bwagoranye!",
      "Today {{count}} games": "Inkino {{count}} z'umunsi",
      "Result": "Inyishu",
      "Rules": "Amategeko",
      "Countdown": "Guharura",
      "Person": "Umuntu",
      "Today's bonus": "Bonus y'uyu munsi",
      "Today's predictions": "Ivyatigiwe uyu munsi",
      "My sum": "Vyose hamwe",
      "Top up now": "Mwinjize",
      "Master Prediction": "Gutigira nyamukuru",
      "Previous Bonus": "Bonus y'imbere",
      "Good luck and get big prize": "Tubifurije amahirwe muronke ubushimwe bushimishije",
      "Confirm": "Emeza",
      "You missed the prize this time": "Ntimwaronse agashimwe uyu mwanya",
      "Don't be discouraged, keep trying, believe in yourself!": "Ntimudebukirwe, Mugume mugerageza kandi mwifitiye icizere",
      "Sorry": "Muradutunga",
      "Top winner": "Uwambere mubatsinze",
      "Congratulations": "Turabakeje",
      "Excellent, you guessed this time right.": "Vyiza cane, Mwatigiye neza",
      "Rules of Mascot": "Amategeko agenga Mascot",
      "While the timer countsdown, click on the card you want to guess.": "Mugihe umwanya uriko uraharurwa, mufyonde kw'ikarata mushaka guha amahirwe",
      "You click on the card to display the betting levels, each round will flip a maximum of 4 cards": "Mufyonde kw'ikarata kugira werekane intambwe z'ugutigira.Intambwe yose uhindukiza nimiburiburi ikarata 4",
      "Continue": "Mubandanye",
      "The countdown ends and the cards are automatically flipped. If you win, you will receive a prize corresponding to the bet amount.": "Umwanya urarangiye kandi ikarata zica zihindura.Utsinze,uzoronka agashimwe gahuye nayo wakoresheje mugutigira",
      "We will show the winner of the day before": "Turerekana uwatsinze umunsi imbere",
      "History": "Ivyakozwe",
      "Bet level": "Intambwe yo gutigira",
      "You do not have enough iCoin to play, please top up!": "Ntamanota musigaranye. Mushiremwo ayandi",
      "Cancel": "Gukuramwo",
      "Top up": "Kwinjiza",
      "The connection is unstable, please check your network connection.": "Connection ntimeze neza.Musure murabe neza",
      "Exit": "Kuvamwo",
      "Reconnect": "Gusubiramwo",
      "The game is currently under maintenance. Please wait a while.": "Ubuhinga buriko burasubirwamwo.Murindire akanya",
      "Top Day": "Uwambere ku munsi",
      "Top Month": "Uwambere kukwezi",
      "Welcome To Mascot": "Kaze muri Mascot",
      "Enter your phone number": "Shiramwo inomero ya terefone",
      "Send OTP": "Rungika OTP",
      "OTP sent to your phone number. Please fill correct OTP to login Mascot now!": "OTP yarungitswe kuri numero yawe.Mushiremwo OTP yo kugira mwinjire muri Mascot!",
      "Go": "Genda",
      "Login": "Kwinjira",
      "Resend OTP?": "Murungike iyindi OTP?",
      "Remain": "Ibisigaye",
      "OTP is wrong. Please try again.": "OTP siyo. Mugerageze kandi",
      "OTP has expired. Please try again.": "OTP yataye igihe.Mugerageze kandi",
      "Join to MASCOT now for a chance to win 500.000 Fbu every month": "Mwiyandikishe muri Mascot hama muronke amahirwe yo gutsindira 500.000F buri kwezi",
      "Fee 120Fbu/1000 coins/day": "Fee 120F= Igiciro ni 120F",
      "Your balance is not enough to register service": "Ubutunzi bwanyu ntibukwiye kugira mwiyandikishe muri kino gisata",
      "CONFIRM TO SUBSCRIBER": "Mwemeze kugira mwiyandikishe",
      "You registed MASCOT successfully. Service fee 120Fbu/1000 coins/day": "Mwiyandikishije neza muri Mascot.<br>Igiciro: 120F kubiceri 1000 ku munsi",
      "Fee 100Fbu/1000 coins Join to MASCOT now for a chance to win 500.000 Fbu every month": "Igiciro ni 100F ku manota 1000.Koresha Mascot uronke amahirwe yo gutsindira 500.000F buri kwezi",
      "Buy more": "Kugura izindi ncuro",
      "BUY": "Kugura",
      "You have 1000 coins to join MASCOT, fee 100Fbu. Good luck to you!": "Mufise amanota 1000 kugira mukoreshe Mascot.Igiciro ni 100F.Tubifurije amahirwe",
      "CLOSE": "Mwugare",
      "Close": "Mwugare",
      "Register": "Kwiyandikisha",
      "Account": "Ikonte",
      "Point earn today": "Amanota mwaronse ku munsi",
      "Point earn this month": "Amanota mwaronse k'ukwezi",
      "Unsubscribe": "Kuvamwo",
      "Subscribe": "Iyandikishe",
      "Log Out": "Kuvamwo",
      "Next": "Igikurikira",
      "Choose 1 selection": "Hitamwo indirimbo imwe",
      "Warning! Are you really want to cancel?": "Muragaba!Mwifuza gukuramwo igisata?",
      "YES": "Ego",
      "NO": "Oya",
      "You have canceled successfully. Thank you!": "Mwakuyemwo neza igisata Mascot. Murakoze!",
      "Notify": "Menyesha",
      "Enter OTP code here": "Injiza ikode kabanga ngaha",
      "Missing game information": "Ibibura murukino",
      "Missing card selection": "Ibibura mwikarata yahiswemwo",
      "Missing bet amount": "Amafaranga abura yo gutigira",
      "Bet up to 4 mascot cards": "Tigira gushika kukarata 4 za Mascot",
      "Round": "Ikiringo",
      "Betting level": "Intambwe yo gutigira",
      "Are you sure?": "Muravyemeje?",
      "Time to bet not yet": "Ntancuro zo gutigira mufise",
      "Success": "Vyakunze",
      "You canceled MASCOT successfully." : "Mwakuyemwo neza Mascot.",
      "Enter OTP": "Shiramwo OTP"
    }
  },
  "en": {
    "translation": {
      "You are not registered. Please register to use the service!": "Ntimuriyandikisha.Mwiyandikishe kugira mukoreshe kino gisata",
      "You have already registered. Please login!": "Mwaramaze kwiyandikisha.Musabwe kwinjira mu gisata",
      "Phone Number is required!": "Inomero ya terefone irakenewe",
      "Please wait a minute before requesting a new OTP.": "Murindire akanya kugira musabe iyindi kode OTP",
      "Invalid OTP": "OTP siyo",
      "Something went wrong!": "Ubuhinga bwagoranye!",
      "Today {{count}} games": "Inkino {{count}} z'umunsi",
      "Result": "Inyishu",
      "Rules": "Amategeko",
      "Countdown": "Guharura",
      "Person": "Umuntu",
      "Today's bonus": "Bonus y'uyu munsi",
      "Today's predictions": "Ivyatigiwe uyu munsi",
      "My sum": "Vyose hamwe",
      "Top up now": "Mwinjize",
      "Master Prediction": "Gutigira nyamukuru",
      "Previous Bonus": "Bonus y'imbere",
      "Good luck and get big prize": "Tubifurije amahirwe muronke ubushimwe bushimishije",
      "Confirm": "Emeza",
      "You missed the prize this time": "Ntimwaronse agashimwe uyu mwanya",
      "Don't be discouraged, keep trying, believe in yourself!": "Ntimudebukirwe, Mugume mugerageza kandi mwifitiye icizere",
      "Sorry": "Muradutunga",
      "Top winner": "Uwambere mubatsinze",
      "Congratulations": "Turabakeje",
      "Excellent, you guessed this time right.": "Vyiza cane, Mwatigiye neza",
      "Rules of Mascot": "Amategeko agenga Mascot",
      "While the timer countsdown, click on the card you want to guess.": "Mugihe umwanya uriko uraharurwa, mufyonde kw'ikarata mushaka guha amahirwe",
      "You click on the card to display the betting levels, each round will flip a maximum of 4 cards": "Mufyonde kw'ikarata kugira werekane intambwe z'ugutigira.Intambwe yose uhindukiza nimiburiburi ikarata 4",
      "Continue": "Mubandanye",
      "The countdown ends and the cards are automatically flipped. If you win, you will receive a prize corresponding to the bet amount.": "Umwanya urarangiye kandi ikarata zica zihindura.Utsinze,uzoronka agashimwe gahuye nayo wakoresheje mugutigira",
      "We will show the winner of the day before": "Turerekana uwatsinze umunsi imbere",
      "History": "Ivyakozwe",
      "Bet level": "Intambwe yo gutigira",
      "You do not have enough iCoin to play, please top up!": "Ntamanota musigaranye. Mushiremwo ayandi",
      "Cancel": "Gukuramwo",
      "Top up": "Kwinjiza",
      "The connection is unstable, please check your network connection.": "Connection ntimeze neza.Musure murabe neza",
      "Exit": "Kuvamwo",
      "Reconnect": "Gusubiramwo",
      "The game is currently under maintenance. Please wait a while.": "Ubuhinga buriko burasubirwamwo.Murindire akanya",
      "Top Day": "Uwambere ku munsi",
      "Top Month": "Uwambere kukwezi",
      "Welcome To Mascot": "Kaze muri Mascot",
      "Enter your phone number": "Shiramwo inomero ya terefone",
      "Send OTP": "Rungika OTP",
      "OTP sent to your phone number. Please fill correct OTP to login Mascot now!": "OTP yarungitswe kuri numero yawe.Mushiremwo OTP yo kugira mwinjire muri Mascot!",
      "Go": "Genda",
      "Login": "Kwinjira",
      "Resend OTP?": "Murungike iyindi OTP?",
      "Remain": "Ibisigaye",
      "OTP is wrong. Please try again.": "OTP siyo. Mugerageze kandi",
      "OTP has expired. Please try again.": "OTP yataye igihe.Mugerageze kandi",
      "Join to MASCOT now for a chance to win 500.000 Fbu every month": "Mwiyandikishe muri Mascot hama muronke amahirwe yo gutsindira 500.000F buri kwezi",
      "Fee 120Fbu/1000 coins/day": "Fee 120F= Igiciro ni 120F",
      "Your balance is not enough to register service": "Ubutunzi bwanyu ntibukwiye kugira mwiyandikishe muri kino gisata",
      "CONFIRM TO SUBSCRIBER": "Mwemeze kugira mwiyandikishe",
      "You registed MASCOT successfully. Service fee 120Fbu/1000 coins/day": "Mwiyandikishije neza muri Mascot.<br>Igiciro: 120F kubiceri 1000 ku munsi",
      "Fee 100Fbu/1000 coins Join to MASCOT now for a chance to win 500.000 Fbu every month": "Igiciro ni 100F ku manota 1000.Koresha Mascot uronke amahirwe yo gutsindira 500.000F buri kwezi",
      "Buy more": "Kugura izindi ncuro",
      "BUY": "Kugura",
      "You have 1000 coins to join MASCOT, fee 100Fbu. Good luck to you!": "Mufise amanota 1000 kugira mukoreshe Mascot.Igiciro ni 100F.Tubifurije amahirwe",
      "CLOSE": "Mwugare",
      "Close": "Mwugare",
      "Register": "Kwiyandikisha",
      "Account": "Ikonte",
      "Point earn today": "Amanota mwaronse ku munsi",
      "Point earn this month": "Amanota mwaronse k'ukwezi",
      "Unsubscribe": "Kuvamwo",
      "Subscribe": "Iyandikishe",
      "Log Out": "Kuvamwo",
      "Next": "Igikurikira",
      "Choose 1 selection": "Hitamwo indirimbo imwe",
      "Warning! Are you really want to cancel?": "Muragaba!Mwifuza gukuramwo igisata?",
      "YES": "Ego",
      "NO": "Oya",
      "You have canceled successfully. Thank you!": "Mwakuyemwo neza igisata Mascot. Murakoze!",
      "Notify": "Menyesha",
      "Enter OTP code here": "Injiza ikode kabanga ngaha",
      "Missing game information": "Ibibura murukino",
      "Missing card selection": "Ibibura mwikarata yahiswemwo",
      "Missing bet amount": "Amafaranga abura yo gutigira",
      "Bet up to 4 mascot cards": "Tigira gushika kukarata 4 za Mascot",
      "Round": "Ikiringo",
      "Betting level": "Intambwe yo gutigira",
      "Are you sure?": "Muravyemeje?",
      "Time to bet not yet": "Ntancuro zo gutigira mufise",
      "Success": "Vyakunze",
      "You canceled MASCOT successfully." : "Mwakuyemwo neza Mascot.",
      "Enter OTP": "Shiramwo OTP"
    }
  }
};

// Khởi tạo i18n
i18n
  .use(LanguageDetector) // Phát hiện ngôn ngữ tự động
  .use(initReactI18next) // Kết nối với React
  .init({
    resources,
    fallbackLng: 'bi', // Ngôn ngữ mặc định
    interpolation: {
      escapeValue: false // React tự động escape
    }
  });

export default i18n;

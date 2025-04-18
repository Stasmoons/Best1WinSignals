const urlParams = new URLSearchParams(window.location.search);

const SUB1 = urlParams.get('sub1') || ''; 
const DEPOSIT_URL = urlParams.get('deposit_url');
const isAdm = urlParams.get('adm') || false;

const HAS_DEPOSIT = urlParams.get('has_deposit') || false;

let localeCode = urlParams.get('locale_code');
const availableLocales = ['ru', 'en', 'es'];
const LOCALE_CODE = availableLocales.includes(localeCode) ? localeCode : 'ru';


// Запрет на нажатия клавиш
if (!isAdm) {
    document.addEventListener('keydown', (e) => {
        e.preventDefault();
    });
}

const urlParams = new URLSearchParams(window.location.search);

const SUB1 = urlParams.get('sub1') || ''; 
const API_URL = urlParams.get("api_url");
const LOCALE_CODE = urlParams.get('locale_code') || 'en';
const DEPOSIT_URL = urlParams.get('deposit_url');
const isAdm = urlParams.get('adm') || false;


// Запрет на нажатия клавиш
if (!isAdm) {
    document.addEventListener('keydown', (e) => {
        e.preventDefault();
    });
}

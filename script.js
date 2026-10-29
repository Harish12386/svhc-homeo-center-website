const languageToggle=document.getElementById('languageToggle');
let currentLanguage='en';
function setLanguage(language){
  currentLanguage=language;
  document.documentElement.lang=language;
  document.querySelectorAll('[data-en][data-kn]').forEach(element=>{
    const translated=element.dataset[language];
    if(translated!==undefined){
      if(translated.includes('<em>')||translated.includes('<br>')) element.innerHTML=translated;
      else element.textContent=translated;
    }
  });
  languageToggle.textContent=language==='en'?'ಕನ್ನಡ':'English';
}
languageToggle.addEventListener('click',()=>setLanguage(currentLanguage==='en'?'kn':'en'));
document.getElementById('year').textContent=new Date().getFullYear();
const menuToggle=document.getElementById('menuToggle');
const nav=document.getElementById('nav');
menuToggle.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded',String(open));
});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');
}));
document.getElementById('whatsappButton').addEventListener('click',()=>{
  alert(currentLanguage==='en'
    ?'WhatsApp enquiries will be enabled after the store WhatsApp number is confirmed.'
    :'ಅಂಗಡಿಯ ವಾಟ್ಸಾಪ್ ಸಂಖ್ಯೆಯನ್ನು ಖಚಿತಪಡಿಸಿದ ನಂತರ ವಿಚಾರಣೆ ಸಕ್ರಿಯಗೊಳಿಸಲಾಗುತ್ತದೆ.');
});
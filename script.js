const translations = [
    "女朋友日快樂 OJ", // Chinese
    "Feliz Dia da Namorada OJ", // Portuguese
    "Happy Girlfriend Day OJ" // English
  ];
  
  let currentLanguageIndex = 0; // Default language is Chinese
  
  function translateText() {
    currentLanguageIndex = (currentLanguageIndex + 1) % translations.length;
    document.getElementById('textBlock').textContent = translations[currentLanguageIndex];
  
    if (currentLanguageIndex === 0) {
      document.getElementById('translateBtn').textContent = "Click to Translate (ZH)";
    } else if (currentLanguageIndex === 1) {
      document.getElementById('translateBtn').textContent = "Click to Translate (PT)";
    } else if (currentLanguageIndex === 2) {
      document.getElementById('translateBtn').textContent = "Click to Translate (EN)";
    }
  }
  
  document.getElementById('translateBtn').addEventListener('click', translateText);
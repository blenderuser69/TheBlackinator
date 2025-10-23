
// --- CONTENT SCRIPT PART ---
if (!window.__themeInjected) {
  window.__themeInjected = true;

  // Inject Tailwind once
  if (!document.getElementById('tailwind-cdn')) {
    const tailwindScript = document.createElement('script');
    tailwindScript.id = 'tailwind-cdn';
    tailwindScript.src = 'https://cdn.tailwindcss.com';
    document.head.appendChild(tailwindScript);
  }

  // Store original page styles
  const originalStyles = {
    bodyClass: document.body.className,
    bodyBg: document.body.style.background,
    inputs: [],
    divs: [],
    spans: [],
    a: [],//
    headings: [],
    headers: [],
    originalColor: document.body.style.backgroundColor,
  };

  document.querySelectorAll('input').forEach(el => originalStyles.inputs.push({el, bg: el.style.backgroundColor, color: el.style.color}));
  document.querySelectorAll('div').forEach(el => originalStyles.divs.push({el, color: el.style.color}));
  document.querySelectorAll('span').forEach(el => originalStyles.spans.push({el, color: el.style.color}));
  document.querySelectorAll('a').forEach(el => originalStyles.a.push({el, color: el.style.color}));
  document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(el => originalStyles.headings.push({el, color: el.style.color}));
  document.querySelectorAll('header').forEach(el => originalStyles.headers.push({el, color: el.style.backgroundColor}))

  window.__themeStatus = false;

  function Theme(isOn) {
    const body = document.body;

    if (isOn) {
      // Apply your custom theme
      document.body.style.backgroundColor = 'black';
      document.querySelectorAll('input').forEach(el => { el.style.backgroundColor = 'cyan'; el.style.color = 'black'; });
      document.querySelectorAll('div').forEach(el => el.style.color = 'purple');
      document.querySelectorAll('span').forEach(el => el.style.color = 'purple');
      document.querySelectorAll('a').forEach(el => el.style.color = 'purple');
      document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(el => el.style.color = 'blue');
      document.querySelectorAll('header').forEach(el => el.style.backgroundColor = 'blue');
    } else {
      // Restore original styles
      body.className = originalStyles.bodyClass;
      body.style.background = originalStyles.bodyBg;
      body.style.backgroundColor = originalStyles.originalColor;

      originalStyles.inputs.forEach(obj => { obj.el.style.backgroundColor = obj.bg; obj.el.style.color = obj.color; });
      originalStyles.divs.forEach(obj => obj.el.style.color = obj.color);
      originalStyles.spans.forEach(obj => obj.el.style.color = obj.color);
      originalStyles.a.forEach(obj => obj.el.style.color = obj.color);
      originalStyles.headings.forEach(obj => obj.el.style.color = obj.color);
      originalStyles.headers.forEach(obj => obj.el.style.backgroundColor = obj.color);
    }
  }

  // Listen for messages from popup
  chrome.runtime.onMessage.addListener(msg => {
    if (msg.action === 'toggleTheme') {
      window.__themeStatus = !window.__themeStatus;
      Theme(window.__themeStatus);
    }
  });

  // Apply default theme (OFF) initially
  Theme(window.__themeStatus);
}

// --- POPUP BUTTON PART ---
const toggleButton = document.getElementById('on_off');
if (toggleButton) {
  toggleButton.addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.tabs.sendMessage(tab.id, { action: 'toggleTheme' });
  });
}

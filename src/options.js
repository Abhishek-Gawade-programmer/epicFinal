/**
 * Code of the options page
 */
window.addEventListener('load', function() {
    showImageBackground.onclick = switchBackground;
    backgroundColor.onchange = switchBackgroundColor;
    textFontColor.onchange = switchTextFontColor;
    textBackgroundColor.onchange = switchTextBackgroundColor;
    textBackgroundOpacity.onchange = switchTextBackgroundColor;
    enableDarkMode.onclick = switchDarkMode;
    showText.onclick = switchText;
    showSites.onclick = switchSites;
    showEditBackground.onclick = switchEditBackgroundColor;
    userInfo.onsubmit = saveUserData;
    userInfo.onreset = saveUserData;
    showTime.onclick = switchTime;
    showDate.onclick = switchDate;
    // openSettingsSearchEngine.onclick = openSearchEngineSettings;

    loadConfigurations();
});

/**
 * Load extension configurations and set the switch states
 */
async function loadConfigurations() {
    let userName = await getItemBackground('name');
    let userRollId = await getItemBackground('rollid');
    let textBackground = await getItemBackground('textbackgroundcolor');

    textFontColor.value = await getItemBackground('textcolor');
    textBackgroundColor.value = textBackground.slice(0,-2);
    textBackgroundOpacity.value = parseInt(textBackground.slice(-2), 16);
    backgroundColor.value = await getItemBackground('color');
    showImageBackground.checked = await getItemBackground('background') === 'true';
    enableDarkMode.checked = await getItemBackground('darkmode') === 'true';
    showText.checked = await getItemBackground('text') === 'true';
    showSites.checked = await getItemBackground('sites') === 'true';
    showTime.checked = await getItemBackground('time') === 'true';
    showDate.checked = await getItemBackground('date') === 'true';
    showEditBackground.checked = await getItemBackground('editbackgroundcolor') === 'true';
    // userInfo.username.value = userName;
    // userInfo.rollid.value = userRollId;

    if (!showImageBackground.checked) {
        document.querySelector('.color-selector-box').style.display = 'flex';
    }

    if (showText.checked || showTime.checked || showDate.checked) {
        document.querySelector('.color-selector-box1').style.display = 'flex';
        document.querySelector('.color-selector-box2').style.display = 'flex';
        document.querySelector('.color-selector-box3').style.display = 'flex';
    }
}

/**
 * Save the user information from form
 */
function saveUserData(ev) {
    ev.preventDefault();

    if (ev.type == 'reset') {
        ev.target.username.value = '';
        ev.target.rollid.value = '';
        localStorage.removeItem('name');
        localStorage.removeItem('rollid');
        setTimeout(()=>alert('User Data Cleared'), 500);
        return;
    }

    setItemBackground('name', ev.target.username.value);
    setItemBackground('rollid', ev.target.rollid.value);
    alert("User Data Saved");
}


/**
 * Save the option for switch background
 */
function switchBackground(ev) {
    const value = ev.target.checked;
    const colorSelector = document.querySelector(".color-selector-box");
    setItemBackground('background', value.toString());

    if (!value) {
        colorSelector.style.display = 'flex';
    } else {
        colorSelector.style = '';
    }
}

function switchBackgroundColor(ev) {
    const value = ev.target.value;
    setItemBackground('color', value);
}

/**
 * Save the option for switch Text
 */
function switchText(ev) {
    const value = ev.target.checked;
    setItemBackground('text', value.toString());
    if (showText.checked || showTime.checked || showDate.checked) {
        document.querySelector('.color-selector-box1').style.display = 'flex';
        document.querySelector('.color-selector-box2').style.display = 'flex';
        document.querySelector('.color-selector-box3').style.display = 'flex';
    } else {
        document.querySelector('.color-selector-box1').style = '';
        document.querySelector('.color-selector-box2').style = '';
        document.querySelector('.color-selector-box3').style = '';
    }
}

/**
 * Save the option for the switch Sites
 */
function switchSites(ev) {
    const value = ev.target.checked;
    setItemBackground('sites', value.toString());
}

function switchTime(ev){
    const value = ev.target.checked;
    setItemBackground('time', value.toString());
    
    if (showText.checked || showTime.checked || showDate.checked) {
        document.querySelector('.color-selector-box1').style.display = 'flex';
        document.querySelector('.color-selector-box2').style.display = 'flex';
        document.querySelector('.color-selector-box3').style.display = 'flex';
    } else {
        document.querySelector('.color-selector-box1').style = '';
        document.querySelector('.color-selector-box2').style = '';
        document.querySelector('.color-selector-box3').style = '';
    }

}

function switchDate(ev){
    console.log("Date", ev.target.checked);
    const value = ev.target.checked;
    setItemBackground('date', value.toString());
    
    if (showText.checked || showTime.checked || showDate.checked) {
        document.querySelector('.color-selector-box1').style.display = 'flex';
        document.querySelector('.color-selector-box2').style.display = 'flex';
        document.querySelector('.color-selector-box3').style.display = 'flex';
    } else {
        document.querySelector('.color-selector-box1').style = '';
        document.querySelector('.color-selector-box2').style = '';
        document.querySelector('.color-selector-box3').style = '';
    }
}

function switchDarkMode(ev) {
    console.log("DarkeMode", ev.target.checked);
    const value = ev.target.checked;
    setItemBackground('darkmode', value.toString());
}

function switchTextFontColor(ev) {
    const color = textFontColor.value;
    setItemBackground('textcolor', color);
}

function switchTextBackgroundColor(ev) {
    const opacity = parseInt(textBackgroundOpacity.value);
    const color = textBackgroundColor.value + opacity.toString(16).padStart(2, '0');
    setItemBackground('textbackgroundcolor', color);
    console.log("opacity", opacity, "color", color);
}

function switchEditBackgroundColor(ev) {
    const value = ev.target.checked;
    setItemBackground('editbackgroundcolor', value.toString());
}

function openSearchEngineSettings(ev) {
    chrome.tabs.create({url:"chrome://settings/searchEngines/"});
    setItemBackground('searchenginetext', "true");
}

function promisify(fn) {
    return new Promise((accept, cancel) => {
        fn(accept);
    })
}

async function getItemBackground(key) {
    return promisify(r => chrome.runtime.sendMessage({
        use: "getItem",
        key
    }, r));
}

async function setItemBackground(key, value) {
    return promisify(r => chrome.runtime.sendMessage({
        use: "setItem",
        key,
        value
    }, r));
}

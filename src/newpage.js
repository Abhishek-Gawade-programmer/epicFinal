/**
 * Code to handle the page UI behaviour following
 * the current configurations
 */

import { ImagesSet } from "/src/imagesSet.js";

var isEpicBrowser = true;
var pageState = "normal";
var userTopSites = null;
var suggestionTimerId = null;
var lastKey = null;

// Variable to track the index of the last displayed ad
var lastAdIndex = 0;

// Variable to track whether the ad has been displayed in the current session
var adDisplayed = false;

// Load the last ad index from storage or initialize it if not present
chrome.storage.local.get(["lastAdIndex", "adDisplayed"], (result) => {
  lastAdIndex = result.lastAdIndex || 0;
  adDisplayed = result.adDisplayed || false;
});

chrome.topSites.get((topSites) => {
  userTopSites = [...topSites];
});

window.addEventListener("load", function () {
  init();
});

window.addEventListener("storage", function () {
  configNewPageLayout();
});

// chrome.storage.onChanged.addListener(function () {
//   configNewPageLayout();
// });

async function getCountryCode() {
  console.log("getCountryCode", "getCountryCode");
  const getRawData = () => {
    return new Promise((resolve) => {
      const xmlhttp = new XMLHttpRequest();

      xmlhttp.open("GET", "https://update.epicbrowser.com/?country="); // Live link.
      xmlhttp.setRequestHeader("x-api-key", "kTpOzP4m4S4rJlCa18Kv1CXdZifnNTL4");

      xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState === 4) {
          if (xmlhttp.status === 200) {
            // console.log(response);
            resolve(xmlhttp.responseText);
          }
          resolve(null);
        }
      };

      xmlhttp.send();
    });
  };

  const resp = await getRawData();
  chrome.storage.local.set({ userCountry: resp });
  return resp;
}

function init() {
  chrome.storage.local.get(["uniqueUserId"], (result) => {
    if (!result.uniqueUserId) {
      const uniqueUserId = generateUUID();
      chrome.storage.local.set({ uniqueUserId: uniqueUserId });
    }
  });
  chrome.storage.local.get(["userCountry"], (result) => {
    if (!result.userCountry) {
      getCountryCode();
    }
  });
  chrome.storage.local.get(["ads"], (result) => {
    if (!result.ads) {
      getAdsfromServer();
    }
  });

  configNewPageLayout();
  newSiteForm.onsubmit = addSite;
  newSiteForm.onreset = addSite;
  editMySites.onclick = editSites;
  editMotivationalText.onclick = editSites;
  searchText.oninput = getSuggestions;
  searchText.onblur = clearSuggestions;
  // browsingHistory.onclick = switchBrowsingHistory;
  // dontDeleteDataOnClose.onclick = switchDeleteDataOnClose;
  // closeSearchEngineText.onclick = hideSearchEngineText;
  // showSearchEngineSettings.onclick = hideSearchEngineText;

  const colorSelectors = document.querySelectorAll(".color-selector");

  for (let selector of colorSelectors) {
    selector.onchange = changeTextColor;
  }

  if (!isEpicBrowser) {
    document.querySelector(".extensions-settings").classList.add("no-epic");
  }

  setTimeout(function () {
    updateTrackersCount();
    updateFingerprintCount();
  }, 200);

  // displayRandomAd(); // **************************************************************
  // Display the ad if it hasn't been displayed yet
  if (!adDisplayed) {
    // displayRandomAd(); //
  }
}

/**
 * Configure the Page Layout following the user preferences defined
 * in the Options page.
 */
async function configNewPageLayout() {
  const background = (await getItemBackground("background")) === "true";
  const darkmode = (await getItemBackground("darkmode")) === "true";
  const sites = (await getItemBackground("sites")) === "true";
  const text = (await getItemBackground("text")) === "true";
  const userName = await getItemBackground("name");
  const rollid = await getItemBackground("rollid");
  const userText = await getItemBackground("focustext");
  const prizeText = await getItemBackground("prizetext");
  const textBackgroundColor = await getItemBackground("textbackgroundcolor");
  const textColor = await getItemBackground("textcolor");
  const editBackgroundColor =
    (await getItemBackground("editbackgroundcolor")) === "true";
  const time = await getItemBackground("time");
  const date = await getItemBackground("date");
  const fetchedAt = await getItemBackground("fetchedAt");
  const lastImage = await getItemBackground("lastimage");
  const showSearchEngineText =
    (await getItemBackground("searchenginetext")) === "true";

  // browsingHistory.checked = await getItemBackground('browsingHistory') === 'true';
  // dontDeleteDataOnClose.checked = await getItemBackground('dontDeleteDataOnClose') === 'true';

  textContainer.style = "";
  sitesContainer.style = "";

  const fetchedDate = new Date(parseInt(fetchedAt));
  const now = new Date();

  if (
    !lastImage ||
    fetchedDate.toLocaleDateString() != now.toLocaleDateString()
  ) {
    console.log(
      "need fetch",
      fetchedDate.toLocaleDateString(),
      now.toLocaleDateString()
    );
    // updateBackgroundImage();
    updateTextPrize();
    setItemBackground("fetchedAt", now.getTime().toString());
    displayRandomAd(); //
  }

  showTimeAndDate(time === "true", date === "true");

  if (!background) {
    const color = await getItemBackground("color");
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = color ? color : "#c5c6c3";
  } else if (lastImage != null) {
    const bg = "url('/html/images/RollPhotos/" + lastImage + "')";
    document.body.style.backgroundImage = bg;
  }

  if (!showSearchEngineText) {
    document.querySelector(".search-engine-text").style.display = "block";
  }

  if (darkmode) {
    const searchbox = document.querySelector(".searchbox");
    const searchbutton = document.querySelector(
      ".searchbutton,.searchbutton-darkmode"
    );

    searchbox.style.background = "black";
    searchbox.style.color = "white";
    searchbutton.setAttribute("class", "searchbutton-darkmode");
  } else {
    const searchbox = document.querySelector(".searchbox");
    const searchbutton = document.querySelector(
      ".searchbutton,.searchbutton-darkmode"
    );

    searchbox.style = "";
    searchbutton.setAttribute("class", "searchbutton");
  }

  if (userName || rollid) {
    document.querySelector(".signin-signup").style.display = "none";
    document.querySelector(".account-info").style.display = "block";
    document
      .querySelector(".searchbox-container")
      .setAttribute("action", "http://142.93.185.233/" + rollid + "/search/");

    userInfo.innerText = userName + " " + rollid;
  } else {
    // document.querySelector('.searchbox-container').setAttribute('action', "http://searchyahoo.epicbrowser.com/?searchterms="); // After converting from local storage to chrome storage, after selecting the epicsearch.in as search engine, query was going over yahoo. To fix that commented this line.
    document.querySelector(".account-info").style.display = "none";
    document.querySelector(".signin-signup").style.display = "block";
  }

  if (editBackgroundColor) {
    document.querySelector(".toppages-label").style.backgroundColor =
      textBackgroundColor;
    document.querySelector("#textContainer").style.backgroundColor =
      textBackgroundColor;
    editMySites.style.backgroundColor = "";
    mySitesTxt.style.backgroundColor = "";
    document.querySelector(
      "#textContainer .motivational-text"
    ).style.backgroundColor = "";
    //editMotivationalText.style.backgroundColor = textBackgroundColor;
    document.querySelector(
      "#textContainer .motivational-text"
    ).style.paddingRight = "";
    document.querySelector(
      "#textContainer .motivational-text"
    ).style.paddingLeft = "";
    mySitesTxt.style.paddingLeft = "";
    mySitesTxt.style.paddingRight = "";
  } else {
    document.querySelector(
      "#textContainer .motivational-text"
    ).style.backgroundColor = "";
    document.querySelector(
      "#textContainer .motivational-text"
    ).style.paddingRight = "10px";
    document.querySelector(
      "#textContainer .motivational-text"
    ).style.paddingLeft = "10px";
    mySitesTxt.style.backgroundColor = "";
    mySitesTxt.style.paddingLeft = "10px";
    mySitesTxt.style.paddingRight = "10px";
    document.querySelector(".toppages-label").style = "";
    document.querySelector("#textContainer").style = "";
    editMySites.style.backgroundColor = ""; //textBackgroundColor;
    editMotivationalText.style.backgroundColor = ""; //textBackgroundColor;
  }

  if (text) {
    textContainer.style.display = "flex";
  }

  if (sites) {
    sitesContainer.style.display = "flex";
  }

  if (userText) {
    document.querySelector(".motivational-text").innerText = userText;
  }

  if (prizeText) {
    document.querySelector(".text-prize").innerHTML = prizeText;
  } else {
    updateTextPrize();
  }

  if (textColor) {
    changeTextColor({
      target: {
        value: textColor,
      },
    });
  }

  const newPageState = text + sites;

  switch (newPageState) {
    case 0:
      pageContainer.style.minHeight = "50vh";
      pageContainer.style.marginTop = "50vh";
      break;
    case 1:
      pageContainer.style.minHeight = "60vh";
      pageContainer.style.marginTop = "40vh";
      break;
    case 2:
    default:
      pageContainer.style = "";
  }

  chrome.topSites.get(populateSites);
}

// ***** Shilad : Creating an icon for the site - Addsite *****
function createIconFromURL(url) {
  // Extract the first three letters from the URL
  var letters = url.substring(0, 4);

  // Create a canvas element to draw the icon
  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");

  canvas.width = 45; // Width of the canvas
  canvas.height = 45; // Height of the canvas (equal width to create a circle)

  // Calculate the radius for the circle
  var radius = canvas.width / 2;

  // Set the background color to #00000052 (semi-transparent black)
  // context.fillStyle = "#00000052";
  context.fillStyle = "#00000000"; // Made it transparent.
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Create a circular path
  context.beginPath();
  context.arc(radius, radius, radius, 0, Math.PI * 2);
  context.closePath();

  // Clip the canvas to the circular path
  context.clip();

  // Customize text appearance (font, size, color, etc.)
  context.font = "16px sans-serif"; // Font size reduced to 14px, using sans-serif

  // Set the font color to white
  context.fillStyle = "#fff";

  // Measure the text dimensions
  var textMetrics = context.measureText(letters);

  // Ext Developer code ==>>
  // Reduce letters if resulting width is bigger than canvas width
  while (textMetrics.width > canvas.width) {
    letters = letters.slice(0, -1);
    textMetrics = context.measureText(letters);
  } // Ext Developer code <<==

  var textWidth = textMetrics.width;
  var textHeight =
    textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent;

  // Calculate the position for horizontal and vertical centering
  var x = (canvas.width - textWidth) / 2;
  var y =
    (canvas.height - textHeight) / 2 + textMetrics.actualBoundingBoxAscent;

  // Draw the letters on the canvas
  context.fillText(letters, x, y);

  // Convert the canvas to an image URL
  var iconUrl = canvas.toDataURL("image/png");

  // Create an image element to display the icon
  var iconImage = document.createElement("img");
  iconImage.src = iconUrl;

  // Return the image element
  return iconImage;
}

// Ext Developer code ==>>
function toDataURL(url) {
  return fetch(url)
    .then((response) => response.blob())
    .then(
      (blob) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        })
    );
}

function isValidFaviconDataUrl(dataUrl) {
  const base64StringLength = dataUrl.length;
  const estimatedDataSize = (base64StringLength * 6) / 8;
  // Now, you can estimate the image dimensions based on the data size.
  // For example, if you assume a common format like JPEG:
  // JPEG images often have a header that's larger than 100 bytes. So, you can
  // consider an image to be larger than 1x1 if the estimated data size is greater
  // than 100 bytes.
  return dataUrl.startsWith("data:image/") && estimatedDataSize > 100;
} // Ext Developer code <<==

function fetchFavIcon(urlHostname) {
  return new Promise((resolve, reject) => {
    // First, check if the favicon is already stored in Chrome storage
    chrome.storage.local.get([urlHostname], (result) => {
      if (result[urlHostname] && isValidFaviconDataUrl(result[urlHostname])) {
        // Ext Developer code ==>> Added isValidFaviconDataURL function call.
        // Favicon is in storage, create an img element and resolve with it
        // console.log("Favicon icon found for the urlHostname in storage: ", urlHostname);
        const favicon = document.createElement("img");
        favicon.src = result[urlHostname];
        favicon.setAttribute("width", "50"); // Set the width to 50 pixels (adjust as needed)
        favicon.setAttribute("height", "50"); // Set the height to 50 pixels (adjust as needed)
        resolve(favicon);
      } else {
        // Favicon not in storage, attempt to fetch from the website's domain and save it
        // Check if the urlHostname contains "www." or not
        const hasWWW = urlHostname.includes("www.");

        // Construct the favicon URL based on the presence of "www."
        const faviconUrl = hasWWW
          ? `https://${urlHostname}/favicon.ico`
          : `https://www.${urlHostname}/favicon.ico`;

        // console.log("Fetching favicon from urlHostname: ", faviconUrl);
        const favicon = document.createElement("img");
        favicon.setAttribute("width", "50"); // Set the width to 50 pixels (adjust as needed)
        favicon.setAttribute("height", "50"); // Set the height to 50 pixels (adjust as needed)
        // favicon.src = faviconUrl;           // Ext Developer code -- Commented
        favicon.setAttribute("crossorigin", "anonymous");
        favicon.style.display = "block";
        favicon.style.margin = "auto";

        // Function to handle a successful favicon load
        const handleFaviconLoad = () => {
          // Favicon loaded successfully, store it in Chrome storage
          chrome.storage.local.set({ [urlHostname]: favicon.src }, () => {
            console.log("Favicon saved for urlHostname: ", faviconUrl);
          });
          resolve(favicon);
        };

        // Function to handle errors (e.g., favicon not found)
        const handleFaviconError = () => {
          // Handle errors with a custom icon
          const customIcon = createIconFromURL(urlHostname);
          // console.log("Favicon created using the urlHostname: ", urlHostname);
          favicon.src = customIcon.src;
          // Reject the promise to signal that there was an error
          reject(new Error("Favicon not found"));
        };

        // Add event listeners to handle load and error events
        favicon.addEventListener("load", handleFaviconLoad);
        favicon.addEventListener("error", handleFaviconError);

        // Ext Developer code ==>>
        // 1. Try loading favicon from https://www.example.com/favicon.ico`
        toDataURL(faviconUrl)
          .then((dataUrl) => {
            if (!isValidFaviconDataUrl(dataUrl)) {
              throw Error("Favicon not found in ", faviconUrl);
            }
            favicon.src = dataUrl;
          })
          .catch(() => {
            // 2. If #1 fails, try parsing favicon from the DOM of https://www.example.com/
            const url = hasWWW
              ? `https://${urlHostname}/`
              : `https://www.${urlHostname}/`;
            fetch(url)
              .then((response) => response.text())
              .then((htmlText) => {
                const parser = new DOMParser();
                const html = parser.parseFromString(htmlText, "text/html");
                // get url of favicon and convert relative url(/favicon.png) to absolute(https://www.site.com/favicon.png)
                const domFaviconUrl = new URL(
                  html.querySelector("link[rel*='icon']").getAttribute("href"),
                  url
                ).href;
                return toDataURL(domFaviconUrl);
              })
              .then((dataUrl) => {
                if (!isValidFaviconDataUrl(dataUrl)) {
                  throw Error("Favicon not found in ", url);
                }
                favicon.src = dataUrl;
              })
              // 3. If #2 fails, create favicon from host letters
              .catch(handleFaviconError);
          }); // Ext Developer code <<==
      }
    });
  });
}

// **********************

function createGridItem(title, url, id) {
  const item = document.createElement("div");
  const removeButton = document.createElement("div");
  const imgContainer = document.createElement("div");
  const link = document.createElement("a");
  const favicon = document.createElement("img");

  if (url != null) {
    url = new URL(url);

    removeButton.innerText = "X";
    removeButton.onclick = removeSite;

    link.setAttribute("href", url.href);
    link.setAttribute(
      "class",
      `${(id + "").startsWith("site") ? id : "site" + id}`
    );

    var urlHostname = url.hostname;

    fetchFavIcon(urlHostname)
      .then((iconElement) => {
        // Favicon is resolved, set it as the source
        favicon.src = iconElement.src;
        // console.log('Favicon loaded successfully');
      })
      .catch((error) => {
        console.error("Error loading favicon:", error);
      });

    favicon.setAttribute("crossorigin", "anonymous");
    favicon.setAttribute(
      "class",
      `${(id + "").startsWith("site") ? id : "site" + id}`
    );

    removeButton.setAttribute(
      "class",
      `${(id + "").startsWith("site") ? id : "site " + id} remove-item`
    );
    removeButton.setAttribute("title", "Remove Site");
    imgContainer.setAttribute(
      "class",
      `${(id + "").startsWith("site") ? id : "site " + id} page-container`
    );
    item.setAttribute(
      "class",
      `${(id + "").startsWith("site") ? id : "site " + id} user_sites`
    );

    item.appendChild(removeButton);

    item.onclick = openSite;
  } else {
    favicon.setAttribute("src", "images/add.png");
    imgContainer.setAttribute("class", `page-container`);
    item.setAttribute("id", "add-site-item");
    item.onclick = addSite;
  }

  favicon.setAttribute("alt", title);
  favicon.setAttribute("title", title);

  item.setAttribute("title", title);

  imgContainer.appendChild(favicon);
  link.appendChild(imgContainer);
  item.appendChild(link);

  return item;
}

/**
 * Populate the topsites container using the chrome.topSites API
 * or the localStorage data
 */
function populateSites(topSites) {
  const siteGrid = document.querySelector(".toppages-grid");
  let userSites;

  chrome.storage.local.get(["userSites"], function (items) {
    userSites = items.userSites;

    callMe(items.userSites);
  });

  function callMe(userSites) {
    let totalSites = 0;
    siteGrid.innerHTML = "";

    /**
     * Check if the user has preferences configured
     * if so, fill the grid items with user preference.
     * Otherwise, use the topSites API to fill the grid
     */

    if (userSites && Object.keys(userSites).length > 0) {
      for (var id of Object.keys(userSites)) {
        const site =
          typeof userSites[id] == "string"
            ? JSON.parse(userSites[id])
            : userSites[id];

        const item = createGridItem(site.title, site.url, id);

        siteGrid.appendChild(item);

        totalSites++;
      }
    } else {
      // for (let idx = 0; idx < topSites.length; idx++) {
      //     const site = topSites[idx];
      //     const item = createGridItem(site.title, site.url, idx);
      //     siteGrid.appendChild(item);
      //     totalSites++;
      // }
    }

    /*for (;totalSites < 24; totalSites++)
        siteGrid.appendChild(createGridItem('Add a site', null, totalSites));*/

    siteGrid.appendChild(createGridItem("Add a site", null, totalSites));
  }
}

/**
 * Control the button to add new sites and the popup
 */
function addSite(ev) {
  // let userSites;
  chrome.storage.local.get(["userSites"], function (items) {
    // userSites = items.userSites;

    callMe(items.userSites);
  });

  function callMe(userSites) {
    var userSites = userSites;

    const newSitePopup = document.querySelector(".new-site-popup");
    const formData = {
      url:
        newSiteForm.siteUrl.value.indexOf("http://") == -1 &&
        newSiteForm.siteUrl.value.indexOf("https://") == -1
          ? "https://" + newSiteForm.siteUrl.value
          : newSiteForm.siteUrl.value,
      title: newSiteForm.siteUrl.value,
    };
    const state = newSiteForm.siteId.value != "" ? "editsite" : "newsite";
    let firstTime = false;

    let id = newSiteForm.siteId.value;

    /**
     * function to handle the click in plus item
     */
    const onAdd = () => {
      newSitePopup.style.display = "block";

      if (state === "editsite") {
        newSiteForm.submitBtn.value = "Save and Exit";
        newSiteForm.resetBtn.value = "Remove";
      } else {
        newSiteForm.resetBtn.value = "Cancel";
      }
    };

    /**
     * function to handle the click in popup submit
     */
    const onSubmit = () => {
      /**
       * First time that the user set the preferred sites.
       * So we need to initialize the other topsites in the json
       */
      if (!userSites) {
        firstTime = true;
        userSites = {};
        // for (let _idx = 0; _idx < userTopSites.length; _idx++) {
        //     userSites['site' + _idx] = {
        //         url: userTopSites[_idx].url,
        //         title: userTopSites[_idx].title
        //     };
        // }
      }

      /**
       * New site to Add - Creating the elements...
       */
      if (id == "") {
        do {
          const count = Math.round(Math.random() * 100000);
          id = "site" + count;
        } while (userSites[id]);

        if (!formData.url.startsWith("http")) {
          formData.url = "https://" + formData.url;
        }

        const grid = document.querySelector(".toppages-grid");
        const addItems = document.querySelector(".add-site-item");
        const newItem = createGridItem(formData.title, formData.url, id);

        grid.insertBefore(newItem, addItems);
        console.log("parent", grid, "ref id " + id, addItems, "node", newItem);
      }

      userSites[id] = formData;
    };

    /**
     * function to handle the click in popup reset
     */
    const onReset = () => {
      if (state === "editsite") {
        userSites[id] = undefined;
      }
      newSitePopup.style = "";

      pageState = "normal";

      removeSite(event);
    };

    /**
     * Run internal callback
     */
    switch (ev.type) {
      case "click":
        newSiteForm.resetBtn.value = state === "editsite" ? "Remove" : "Cancel";
        onAdd();
        return;
        break;
      case "submit":
        onSubmit();
        break;
      case "reset":
        onReset();
        return;
        break;
      default:
        break;
    }

    chrome.storage.local.set(
      {
        userSites: userSites,
      },
      function (items) {
        // Data's been saved
      }
    );
  }
}

/**
 * Removes a site from the list
 */
function removeSite(ev) {
  const id = ev.target.classList[0];
  // let userSites;

  chrome.storage.local.get(["userSites"], function (items) {
    // userSites = items;

    callMe(items.userSites);
  });

  function callMe(userSites) {
    if (!userSites) {
      // chrome.topSites.get((topSites) => {
      //     const removeId = id;
      //     // let userPref;

      //     chrome.storage.local.get(["userSites"], function (items) {
      //         // userPref = items.userSites;

      //         callMe(items.userSites)
      //     });

      //     function callMe(userPref) {
      //         if (!userPref)
      //             userPref = {};

      //         for (let idx in topSites) {
      //             userPref['site' + idx] = {
      //                 url: topSites[idx].url,
      //                 title: topSites[idx].title
      //             };
      //         }

      //         if (userPref[removeId]) {
      //             userPref[removeId] = undefined;
      //         }

      //         chrome.storage.local.set({
      //             "userSites": userPref
      //         }, function () {
      //             // Data's been saved
      //         });

      //         // document.location.reload();
      //         init();
      //     }
      // });
      return;
    } else if (userSites[id]) {
      delete userSites[id];
    }

    chrome.storage.local.set(
      {
        userSites: userSites,
      },
      function () {
        // Data's been saved
        // document.location.reload();
        init();
      }
    );
  }
}

/**
 * Callback to handle the click on sites icons
 */
function openSite(ev) {
  // const userSites = null;

  chrome.storage.local.get(["userSites"], function (items) {
    // userSites = items;

    callMe(items.userSites);
  });

  function callMe(userSites) {
    console.log("page State : ", pageState);

    if (
      pageState != "edit" ||
      ev.target.getAttribute("class") === "remove-item"
    )
      return;

    ev.preventDefault();

    let target = ev.target;

    while (!target.classList[0]) target = target;

    const id = target.classList[0];
    console.log("page Id : ", id);
    if (userSites && userSites[id]) {
      newSiteForm.siteId.value = id;
      newSiteForm.siteUrl.value = userSites[id].url;
      // newSiteForm.siteTitle.value = userSites[id].title;
    }

    addSite({
      type: "click",
    });
  }
}

/**
 * Handle
 */
function editSites(ev) {
  const colorSelectors = document.querySelectorAll(".color-selector");
  const sites = document.querySelectorAll(".remove-item");

  pageState = pageState == "edit" ? "normal" : "edit";

  for (let site of sites) {
    site.style.display = pageState == "edit" ? "block" : "none";
  }

  if (pageState === "normal") {
    editMySites.innerText = "(edit)";
    editMySites.style = "";
  } else {
    editMySites.innerText = "[ exit edit mode ]";
    editMySites.style.backgroundColor = "black";
    editMySites.style.color = "white";
    editMySites.style.fontWeight = "bold";
  }

  /*for (let selector of colorSelectors) {
        selector.style.display = pageState === 'normal' ? 'none' : 'inline-block';
    }*/

  editText(ev);
}

async function editText(ev) {
  const before = await getItemBackground("focustext");
  const text = document.querySelector(".motivational-text");

  if (pageState === "normal") {
    text.removeAttribute("contentEditable");
    editMotivationalText.innerText = "(edit)";
    editMotivationalText.style = "";
  } else {
    text.setAttribute("contentEditable", true);
    text.focus();
    editMotivationalText.innerText = "[ exit edit mode ]";
    editMotivationalText.style.backgroundColor = "black";
    editMotivationalText.style.color = "white";
    editMotivationalText.style.fontWeight = "bold";
  }

  if (text.innerText != before) {
    setItemBackground("focustext", text.innerText);
  }
}

async function changeTextColor(ev) {
  const selectors = document.querySelectorAll('input[type="color"]');
  const focusText = document.querySelector(".text-container");
  const links_above_searchText = document.querySelectorAll(
    ".links_below_search>small>span>a"
  );

  const mySitesText = document.querySelector(".toppages-label");
  const color = ev.target.value;
  const textBackground = await getItemBackground("textbackgroundcolor");

  for (let selector of selectors) selector.value = color;

  // MY CODE

  links_above_searchText[0].style.color = color;
  // links_above_searchText[0].style.fontWeight = "bold";
  links_above_searchText[1].style.color = color;
  links_above_searchText[2].style.color = color;
  links_above_searchText[3].style.color = color;

  // MY CODE

  focusText.style.color = color;
  //document.querySelector('.motivational-text').style.backgroundColor = textBackground;
  //document.querySelector('#mySitesTxt').style.backgroundColor = textBackground;

  mySitesText.style.color = color;

  timeAndDateContainer.style.color = color;
  timeAndDateContainer.style.backgroundColor = textBackground;

  setItemBackground("textcolor", color);
}

/**
 * Interval function to change the Hour text
 */
var minute = null;
var seconds = null;

function showTimeAndDate(toShowTime, toShowDate) {
  timeAndDateContainer.style = "";

  if (seconds) {
    clearInterval(seconds);
  }

  if (minute) {
    clearInterval(minute);
  }

  if (!toShowTime) {
    timeContainer.style.display = "none";
  } else {
    timeContainer.style = "";
    timeContainer.innerText = new Date().toLocaleTimeString();
    seconds = setInterval(
      function () {
        timeContainer.innerText = new Date().toLocaleTimeString();
        dateContainer.innerText = " " + new Date().toLocaleDateString();
      },
      1000,
      toShowDate
    );
  }

  if (!toShowDate) {
    dateContainer.style.display = "none";
  } else {
    dateContainer.style = "";
    dateContainer.innerText = new Date().toLocaleDateString();
    minute = setInterval(function () {
      dateContainer.innerText = new Date().toLocaleDateString();
    }, 60 * 1000);
  }

  if (!toShowDate && !toShowTime) timeAndDateContainer.style.display = "none";
}

/**
 * Updates the backgroundImage
 *
 * randomly choose the image from the unshowed images set
 */
async function updateBackgroundImage() {
  let showBackgroundImg = (await getItemBackground("background")) === "true";
  let pastImages = JSON.parse((await getItemBackground("pastimages")) || "[]");
  let lastImage = await getItemBackground("lastimage");

  if (!showBackgroundImg) return;

  if (
    pastImages == null ||
    Object.keys(pastImages).length == ImagesSet.length
  ) {
    pastImages = {};

    if (lastImage) pastImages[lastImage] = true;
  }

  const newImages = ImagesSet.filter((v) => pastImages[v] == undefined);
  const idx = Math.round(Math.random() * (newImages.length - 1));

  lastImage = newImages[idx];
  pastImages[newImages[idx]] = true;

  setItemBackground("lastimage", lastImage);
  setItemBackground("pastimages", JSON.stringify(pastImages));

  document.body.style.backgroundImage =
    "url('/html/images/RollPhotos/" + lastImage + "')";
}

/**
 * Very simple implementation of suggestion box
 */
async function getSuggestions(ev) {
  const text = ev.target.value;
  const getRawData = (key) => {
    return new Promise((resolve) => {
      const xmlhttp = new XMLHttpRequest();

      xmlhttp.open(
        "GET",
        "http://142.93.185.233/api/getSuggestion?hint=" +
          encodeURIComponent(key)
      );
      xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState === 4) {
          if (xmlhttp.status === 200) {
            //console.log(xmlhttp.responseText);
            resolve(JSON.parse(xmlhttp.responseText));
            return;
          }
          resolve(null);
        }
      };

      xmlhttp.send();
    });
  };

  if (text.length >= 2 && suggestionTimerId == null) {
    //console.log("triggered!", text);
    suggestionTimerId = setTimeout(
      async (key) => {
        //console.log("results for", key);
        const resp = await getRawData(key);
        if (resp) {
          clearDatalist();
          for (let suggestion of resp.suggestions) {
            const opt = document.createElement("option");
            opt.innerText = suggestion.value;
            suggestions.appendChild(opt);
          }
          console.log("datalist updated", key);
          clearTimeout(suggestionTimerId);
        }
        suggestionTimerId = null;
        if (lastKey && lastKey != key) {
          //console.log('triggered last key', lastKey);
          await getSuggestions({
            target: {
              value: lastKey,
            },
          });
        }
      },
      1000,
      text
    );
  } else if (text.length >= 2) {
    console.log("case 2");
    lastKey = text;
  } else {
    console.log("case 3");
    clearDatalist();
  }
}

function clearSuggestions(ev) {
  if (!ev.target.value.length) clearDatalist();
}

function clearDatalist() {
  console.log("clear Data List");
  suggestions.innerHTML = "";
}

// function switchBrowsingHistory(ev) {
//     const value = ev.target.checked;
//     setItemBackground('browsingHistory', value.toString());

// }
// function switchDeleteDataOnClose(ev) {
//     const value = ev.target.checked;
//     setItemBackground('dontDeleteDataOnClose', value.toString());
// }

async function updateTextPrize() {
  const getRawData = () => {
    return new Promise((resolve) => {
      const xmlhttp = new XMLHttpRequest();

      // xmlhttp.open('GET', 'https://www.finesage.com/txt.json');
      xmlhttp.open("GET", "https://nt.epicbrowser.com/txt.json"); // Live link.
      // xmlhttp.open('GET', 'https://nt.epicbrowser.com/txt_test.json'); // Test link
      xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState === 4) {
          if (xmlhttp.status === 200) {
            const resp = xmlhttp.responseText.replace(/,.*\n*\r*\}/g, "\n}");
            //console.log("resp before", xmlhttp.responseText, "resp now", resp);
            resolve(JSON.parse(resp));
            return;
          }
          resolve(null);
        }
      };

      xmlhttp.send();
    });
  };

  const data = await getRawData();
  const prefix = "";
  setItemBackground("prizetext", prefix + data.text);
  document.querySelector(".text-prize").innerHTML = prefix + data.text;
}

function hideSearchEngineText(ev) {
  const element = ev.target;
  element.style.display = "none";
  setItemBackground("searchenginetext", "true");
}

function goToSearchEngines(ev) {
  chrome.tabs.create({
    url: "chrome://settings/searchEngines/",
  });
  setItemBackground("searchenginetext", "true");
}

// MY CODE

document.addEventListener("DOMContentLoaded", function () {
  chrome.storage.local.get("firstInstall", function (data3) {
    console.log(data3.firstInstall);
    if (data3.firstInstall == "False") {
      $(".modal-window2").css("visibility", "hidden");
      $(".modal-window2").css("opacity", "0");
    } else if (data3.firstInstall == undefined) {
      $(".modal-window2").css("visibility", "visible");
      $(".modal-window2").css("opacity", "1");
    }
  });

  document
    .getElementById("first-install-modal-btn")
    .addEventListener("click", function (e) {
      e.preventDefault();

      chrome.storage.local.set(
        {
          firstInstall: "False",
        },
        function () {
          // Data's been saved boys and girls, go on home
        }
      );

      $(".modal-window2").css("visibility", "hidden");
      $(".modal-window2").css("opacity", "0");
    });

  var userSites = {};

  chrome.storage.local.get("userSites", function (data1) {
    if (data1 === undefined) {
      chrome.storage.local.get("slots", function (data2) {
        if (data2 !== undefined) {
          var slots = JSON.parse(data.slots);

          for (let i = 0; i < slots.length; i++) {
            if (
              (slots[i].url != "" &&
                `${slots[i].url}`.indexOf("http://") == 0) ||
              `${slots[i].url}`.indexOf("https://") == 0
            ) {
              userSites[`${"site" + [i]}`] = {
                title: `${slots[i].title}`,
                url: `${slots[i].url}`,
              };
            }
          }

          chrome.storage.local.set(
            {
              userSites: userSites,
            },
            function (items) {
              // Data's been saved
            }
          );
        }
      });
    }
  });
});

chrome.storage.local.get(["preferred_search_engine"], function (data) {
  if (data && data.preferred_search_engine == "change_search_epic") {
    $(".searchbox-container").attr("action", "https://epicsearch.in/search");
    $(".searchbox").attr("name", "q");
    $(".linkdiv").html(
      '<button type="default" class="change_search_yahoo">click here to set the above search box to Yahoo Search</button>'
    );
  } else if (data && data.preferred_search_engine == "change_search_yahoo") {
    $(".searchbox-container").attr(
      "action",
      "http://searchyahoo.epicbrowser.com/?searchterms="
    );
    $(".searchbox").attr("name", "searchterms");
    $(".linkdiv").html(
      '<button type="default" class="change_search_epic">click here to set the above search box to EpicSearch.in</button>'
    );
  } else {
    chrome.storage.local.set(
      {
        preferred_search_engine: "change_search_yahoo",
      },
      function () {
        // Data's been saved boys and girls, go on home
      }
    );

    $(".searchbox-container").attr(
      "action",
      "http://searchyahoo.epicbrowser.com/?searchterms="
    );
    $(".searchbox").attr("name", "searchterms");
    $(".linkdiv").html(
      '<button type="default" class="change_search_epic">click here to set the above search box to EpicSearch.in</button>'
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("extensionsPageDialog")
    .addEventListener("click", function (e) {
      e.preventDefault();
      chrome.tabs.update({
        url: "chrome://extensions",
      });
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("extensionsPageNotice")
    .addEventListener("click", function (e) {
      e.preventDefault();
      chrome.tabs.update({
        url: "chrome://extensions",
      });
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("importBookmarkts")
    .addEventListener("click", function (e) {
      e.preventDefault();
      chrome.tabs.update({
        url: "chrome://settings/importData",
      });
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("privacySettings")
    .addEventListener("click", function (e) {
      e.preventDefault();
      chrome.tabs.update({
        url: "chrome://settings/privacy",
      });
    });
});

$(".search_options").click(function (e) {
  e.preventDefault();
  $(".modal-window").css("visibility", "visible");
  $(".modal-window").css("opacity", "1");
  // $("#search_option_dialogue").show();
});

$(".modal-close").click(function (e) {
  e.preventDefault();
  $(".modal-window").css("visibility", "hidden");
  $(".modal-window").css("opacity", "0");
  // $("#search_option_dialogue").show();
});

$("#open-modal").on("click", "button.change_search_yahoo", function () {
  chrome.storage.local.get(["preferred_search_engine"], function (data) {
    console.log(
      "Data from Chrome local storage : " + data.preferred_search_engine
    );
  });

  chrome.storage.local.set(
    {
      preferred_search_engine: "change_search_yahoo",
    },
    function () {
      // Data's been saved boys and girls, go on home
    }
  );
  // setItem("epic_search", 0);
  $(".searchbox-container").attr(
    "action",
    "http://searchyahoo.epicbrowser.com/?searchterms="
  );
  $(".searchbox").attr("name", "searchterms");
  $(".linkdiv").html(
    '<button type="default" class="change_search_epic">click here to set the above search box to EpicSearch.in</button>'
  );
});

$("#open-modal").on("click", "button.change_search_epic", function () {
  chrome.storage.local.get(["preferred_search_engine"], function (data) {
    console.log(
      "Data from Chrome local storage : " + data.preferred_search_engine
    );
  });

  chrome.storage.local.set(
    {
      preferred_search_engine: "change_search_epic",
    },
    function () {
      // Data's been saved
    }
  );
  // setItem("epic_search", 1);
  $(".searchbox-container").attr("action", "https://epicsearch.in/search");
  $(".searchbox").attr("name", "q");
  $(".linkdiv").html(
    '<button type="default" class="change_search_yahoo">click here to set the above search box to Yahoo Search</button>'
  );
});

// function setItem(a, b) {
//     globalObj[a] = b;
//     var obj = {};
//     obj[a] = b;
//     chrome.storage.local.set(obj);
//     if(extStorageKeys.indexOf(a) == -1){
//         extStorageKeys.push(a);
//     }
//     chrome.storage.local.set({keys: JSON.stringify(extStorageKeys)});
//     // writeToFile(globalObj);
// }

// function getItem(a) {
//     var b = globalObj[a];
//     if(b != undefined){
//         return b;
//     } else {
//         return null;
//     }
// }

// function getword(info, tab) {
//     console.log("Word " + info.selectionText + " was clicked.");
//     chrome.tabs.create({
//         url: "http://www.google.com/search?q=" + info.selectionText
//     });
// }
// chrome.contextMenus.create({
//     title: "Search: %s",
//     contexts: ["selection"],
//     onclick: getword
// });

// regex to select id

// $(document)
//     .filter(function () {
//         return this.id.match(/(site)\d+$/);
//     }).on("contextmenu", "#site0", function (e) {
//         e.preventDefault();
//         alert("hkajksjkdj")
//         return false;
//     })

// $(document).on("contextmenu", "#site0", function (e) {
//     e.preventDefault();
//     alert("hkajksjkdj")
//     return false;
// })

// $.event.special.rightclick = {
//     bindType: "contextmenu",
//     delegateType: "contextmenu"

// };

// $(document).on("rightclick", ".page-container", function () {
//     alert("hello");
//     return false;
// });

document.onclick = hideMenu;

$(document).on("contextmenu", ".user_sites", function (e) {
  event = e;
  rightClick(e);

  console.log(e.target.classList[0]);
});

function hideMenu() {
  document.getElementById("contextMenu").style.display = "none";
}

var event;

function rightClick(e) {
  e.preventDefault();

  if (document.getElementById("contextMenu").style.display == "block") {
    hideMenu();
  } else {
    var menu = document.getElementById("contextMenu");
    menu.style.display = "block";
    menu.style.left = e.pageX + "px";
    menu.style.top = e.pageY + "px";
  }
}

function editSitesaaa(ev) {
  pageState = pageState == "edit" ? "normal" : "edit";
}

$(document).on("click", "#editUserSite", function (ev) {
  ev = event;

  hideMenu();
  editSitesaaa(ev);
  openSite(ev);
});

$(document).on("click", "#deleteUserSite", function (ev) {
  ev = event;

  editSitesaaa(ev);
  removeSite(ev);
});

// epic browser appearance settings

// document.getElementById('browsingHistory').addEventListener('click', function (ev) {
//     const value = ev.target.checked;
// });

// document.getElementById('dontDeleteDataOnClose').addEventListener('click', function (ev) {
//     const value = ev.target.checked;
// });

function IncrementNewTabCount() {
  chrome.storage.local.get("newTabCount", function (data) {
    var count = data.newTabCount;
    if (count == undefined) {
      count = 0;
    }
    count++;
    chrome.storage.local.set({
      newTabCount: count,
    });
  });
}

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete" && tab.url === "chrome://newtab/") {
    // Increment the new tab page view counter
    console.log("New Tab page opened", tab.url);
    IncrementNewTabCount();
  }

  setTimeout(function () {
    updateTrackersCount();
    updateFingerprintCount();
  }, 200);
});

function getItem(a) {
  var b = globalObj[a];
  if (b != undefined) {
    return b;
  } else {
    return null;
  }
}

function promisify(fn) {
  return new Promise((accept, cancel) => {
    fn(accept);
  });
}

let failUpdateTrackersCount = false;

function fixIncorrectTrackersCount() {
  if (failUpdateTrackersCount) return;
  failUpdateTrackersCount = true;
  setTimeout(() => {
    //call it back after a few ms
    updateTrackersCount();
  }, 300);
  return;
}

async function updateTrackersCount() {
  let newACount = await getItemBackground("newACount");
  let trackersCounter = parseInt(newACount || "0");

  if (trackersCounter < 0) {
    fixIncorrectTrackersCount();
  }
  document.getElementById("tracker-count").innerText =
    trackersCounter.toLocaleString();
}

async function updateFingerprintCount() {
  let newFSCount = await getItemBackground("newFSCount");
  let trackersCounter = parseInt(newFSCount || "0");

  if (trackersCounter != "0")
    document.getElementById("fingerprint-count").innerText =
      trackersCounter.toLocaleString() + "+";
  // Adding the "+" sign to the count
  else
    document.getElementById("fingerprint-count").innerText =
      trackersCounter.toLocaleString();
}

async function getItemBackground(key) {
  return promisify((r) =>
    chrome.runtime.sendMessage(
      {
        use: "getItem",
        key,
      },
      r
    )
  );
}

async function setItemBackground(key, value) {
  return promisify((r) =>
    chrome.runtime.sendMessage(
      {
        use: "setItem",
        key,
        value,
      },
      r
    )
  );
}

// MY CODE
// function displayRandomAd() {
//   fetch("/src/data.json")
//     .then((response) => {
//       console.log("Response status:", response.status);
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log("Data received:", data);
//       const ads = data.ads;
//       if (ads.length === 0) {
//         console.error("No ads available in the data.");
//         return;
//       }
//       const randomIndex = Math.floor(Math.random() * ads.length);
//       const ad = ads[randomIndex];

//       console.log("Selected ad:", ad);

//       // Update the descriptions in left-box and right-box
//       document.querySelector(".left-box p").innerHTML = ad["left-des"];
//       document.querySelector(".right-box p").innerHTML = ad["right-des"];
//     })
//     .catch((error) => {
//       console.error("Error fetching the ads data:", error);
//     });
// }

// Code upto data  *****

// function displayRandomAd() {
//   fetch("/src/data.json")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       const ads = data.ads;
//       if (ads.length === 0) {
//         console.error("No ads available in the data.");
//         return;
//       }

//       // Choose ad in serial format
//       const ad = ads[lastAdIndex];
//       console.log("Selected ad:", ad);

//       // Update the descriptions in left-box and right-box
//       document.querySelector(".left-box p").innerHTML = ad["left-des"];
//       document.querySelector(".right-box p").innerHTML = ad["right-des"];

//       // Update the index for next display
//       lastAdIndex = (lastAdIndex + 1) % ads.length;

//       // Save the updated index and display status to storage
//       chrome.storage.local.set({ lastAdIndex: lastAdIndex, adDisplayed: true });
//     })
//     .catch((error) => {
//       console.error("Error fetching the ads data:", error);
//     });
// }

// // Listen for Chrome restart and reset ad index
// chrome.runtime.onStartup.addListener(() => {
//   chrome.storage.local.set({ lastAdIndex: 0, adDisplayed: false }); // Reset to the first ad and flag
// });

// background.js

function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function getAdsfromServer() {
  chrome.storage.local.get(["userCountry"], (result) => {
    fetch("http://45.76.3.210/all-ads/" + result.userCountry)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const ads = data.ads;

        if (ads.length === 0) {
          console.error("No ads available in the data.");
          return;
        }
        chrome.storage.local.set({ ads: ads });
      })
      .catch((error) => {
        console.error("Error fetching the ads data:", error);
      });
  });
}

async function displayRandomAd() {
  // Choose ad in serial format
  let showBackgroundImg = (await getItemBackground("background")) === "true";

  await chrome.storage.local.get("ads", function (data) {
    let ads = data.ads;

    const ad = ads[lastAdIndex];
    console.log("Selected ad:", ad);

    // Update the descriptions in left-box and right-box
    document.querySelector(".left-box").innerHTML = ad["left_html"];
    document.querySelector(".right-box").innerHTML = ad["right_html"];

    // Update the background image for the ad
    document.body.style.backgroundImage = `url('${ad.image}')`;

    // Update the index for next display
    lastAdIndex = (lastAdIndex + 1) % ads.length;

    // Save the updated index and display status to storage
    chrome.storage.local.set({ lastAdIndex: lastAdIndex, adDisplayed: true });
  });
  if (!showBackgroundImg) return;
}

// Listen for Chrome restart and reset ad index
chrome.runtime.onStartup.addListener(() => {
  chrome.storage.local.set({ lastAdIndex: 0, adDisplayed: false }); // Reset to the first ad and flag
});

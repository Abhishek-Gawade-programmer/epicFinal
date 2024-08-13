/**
 * Extension Background Script
 */

/**
 * Redirect to affiliate link
 */
// var redirectsEbay = {};

// chrome.webRequest.onBeforeRequest.addListener(function (details) {
//     if (redirectsEbay[details.requestId])
//         return;
//     redirectsEbay[details.requestId] = true;
//     return {
//         redirectUrl: "https://ebay.to/3hK9yf2"
//     };
// }, {
//     urls: ["https://www.ebay.com/", "https://ebay.com/"]
// }, ['blocking']);

function promisify(fn) {
  return new Promise((accept, cancel) => {
    fn(accept);
  });
}

let ublock = null;
let epicfsprotection = null;
async function updateUBlockCounter() {
  if (!ublock) {
    ublock = await getExtensionIdByName("Epic AdBlocker");
    if (!ublock) return;
  }

  const blockedTrackersCount = await promisify((r) =>
    chrome.runtime.sendMessage(
      ublock,
      {
        use: "getBlockedTrackersCount",
      },
      r
    )
  );
  setItem("newACount", blockedTrackersCount);
}

async function updateFingerprintsCounter() {
  if (!epicfsprotection) {
    epicfsprotection = await getExtensionIdByName("06_epic fs protection");
    if (!epicfsprotection) return;
  }

  const blockedFingerprintsCount = await promisify((r) =>
    chrome.extension.sendMessage(
      epicfsprotection,
      {
        action: "externalAppGetTotalBlockCount",
      },
      r
    )
  );
  setItem("newFSCount", blockedFingerprintsCount);
}

chrome.tabs.onUpdated.addListener(async function (a, b, c) {
  // #agad - get data from ublock
  // var d = chrome.extension.connect("ojmkmloghldahkpgloknaapbpembjija");
  // d.postMessage({
  //     query: "getCount"
  // });
  // d.onMessage.addListener(function(a) {
  //     var b = a.answer;
  //     var c = b.indexOf(",");
  //     newACount = parseInt(b.substring(0, c));
  //     newCCount = parseInt(b.substring(c + 1));
  //     setItem("newCCount", newCCount);
  //     setItem("newACount", newACount);
  // });
  updateUBlockCounter();
  updateFingerprintsCounter();
});

// chrome.history.onVisited.addListener(function(historyItem) {
//     if (getItem("browsingHistory") == 'true') {
//         chrome.history.deleteUrl({ "url": historyItem.url });
//     }
// })

var globalObj = {};
var extStorageKeys = [];

function setItem(a, b) {
  globalObj[a] = b;
  var obj = {};
  obj[a] = b;
  chrome.storage.local.set(obj);
  if (extStorageKeys.indexOf(a) == -1) {
    extStorageKeys.push(a);
    chrome.storage.local.set({
      keys: JSON.stringify(extStorageKeys),
    });
  }
  // writeToFile(globalObj);
}

function getItem(a) {
  var b = globalObj[a];
  if (b != undefined) {
    return b;
  } else {
    return null;
  }
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.use == "getItem") {
    sendResponse(getItem(message.key));
  } else if (message.use == "setItem") {
    setItem(message.key, message.value);
  }
  return;
});

function pageLoaded() {
  var randomnumber = Math.floor(15 * Math.random());
  setItem("rand", randomnumber);
  // slots = modifyOldDataToNew();
  // save_slots = slots;
  // setItem("newCCount", 0);
  // setItem("newACount", 0);
  // void 0 == cache("slots") ? (slots = [], slots.push(createSlotStructure("Epic Private Browser", "img/how-epic-work-thumbnail.png", presetUrls[0], 0)),
  //     slots.push(createSlotStructure()), slots.push(createSlotStructure()), slots.push(createSlotStructure()),
  //     slots.push(createSlotStructure()), slots.push(createSlotStructure()), slots.push(createSlotStructure()),
  //     cache("slots", slots)) : slots = cache("slots");
  // fetchNewTabAd();
  // cleanOldData();
  setDefaultValue("color", "#c5c6c3");
  setDefaultValue("textbackgroundcolor", "#000000");
  setDefaultValue("editbackgroundcolor", "false");
  setDefaultValue("textcolor", "#FFFFFF");
  setDefaultValue("background", "true");
  setDefaultValue("darkmode", "false");
  setDefaultValue("text", "true");
  setDefaultValue("sites", "true");
  setDefaultValue("time", "false");
  setDefaultValue("date", "false");
  setDefaultValue("fetchedAt", new Date("01-01-01").getTime().toString());
  // setDefaultValue('browsingHistory', 'false');
  // setDefaultValue('dontDeleteDataOnClose', 'false');
  userAgentVersionNumber();
}

function initStorage() {
  getValuesFromStorage(function () {
    pageLoaded();
    // recursiveLoader();
  });
}

function setDefaultValue(key, defaultValue) {
  console.log(1);
  if (getItem(key) === null) {
    console.log(key);
    setItem(key, defaultValue);
  }
}

function getValuesFromStorage(callback) {
  getKeys(function () {
    getStorageObjFromKeys(0, function () {
      if (typeof callback == "function") callback();
    });
  });
}

function getStorageObjFromKeys(idx, callback) {
  var key = extStorageKeys[idx];
  if (key) {
    chrome.storage.local.get(key, function (o) {
      globalObj[key] = o[key] || null;
      idx++;
      getStorageObjFromKeys(idx, callback);
    });
  } else {
    if (typeof callback == "function") callback();
  }
}

async function getExtensionIdByName(name) {
  return new Promise((ok) =>
    chrome.management.getAll(function (exts) {
      let ext = exts.find((e) => e.name == name);
      return ok(ext ? ext.id : null);
    })
  );
}

function getKeys(callback) {
  chrome.storage.local.get("keys", function (o) {
    extStorageKeys = o["keys"] || "[]";
    try {
      extStorageKeys = JSON.parse(extStorageKeys);
    } catch (err) {
      console.log(err);
    }
    if (typeof callback == "function") callback();
  });
}

initStorage();

// ***** Shilad *****

// ***** For Epic: Setting up user agent vesion number *****
function setCookie(a, b, c) {
  // alert("In setCookie function")
  var d = new Date();
  d.setTime(d.getTime() + 24 * c * 60 * 60 * 1e3);
  var e = "expires=" + d.toGMTString();
  document.cookie = a + "=" + b + ";" + e + ";path=/";
}

function userAgentVersionNumber() {
  var a = new XMLHttpRequest();
  a.open(
    "GET",
    "http://updates.epicbrowser.com/extensions/newtab/useragent.xml",
    true
  ); // Release Server
  // a.open("GET", "http://updates.epicbrowser.com/extensions/newtab/useragent_test.xml", true);  // Test Server
  a.onreadystatechange = function () {
    // alert("In userAgentVersionNumber a.readyState: "+ a.readyState)
    if (4 == a.readyState) {
      var b = new DOMParser();
      var c = b.parseFromString(a.responseText, "text/xml");
      var newVersion =
        c.getElementsByTagName("version")[0].childNodes[0].nodeValue; // Version number from the userAgent.xml
      // var newVersion = "87.0.3987.88"; // Can test using some higer version number.
      var currentVer = getItem("uAgentVersion"); // Locally stored value
      if (currentVer == null) {
        // alert("currentVer was null, assigning the value")
        currentVer = "81.0.3987.81";
      }
      var update = false;
      // alert("In userAgentVersionNumber - currentVer: "+currentVer+"  newVersion: "+newVersion)

      var nVersion = newVersion.split(".");
      var cVersion = currentVer.split(".");

      nVersion.every(function (c, i, a) {
        if (!cVersion || parseFloat(cVersion[i]) > parseFloat(nVersion[i])) {
          return false; // Break loop when currentVer > repo version (per segment)
        } else if (parseFloat(cVersion[i]) < parseFloat(nVersion[i])) {
          update = true;
          // console.log('Update 1 '+ update)
          return false; // Break loop when repo > current version (per segment)
        }
        // console.log('Update 2 '+ update)
        return true; // continue loop
      });
      // ***** `  Can use the above version comparision or this one, both will work. ` *****
      // // Compare nVersion and currentVer segment by segment
      // for (var i = 0; i < nVersion.length; i++) {
      //     var newSegment = parseInt(nVersion[i]);
      //     var currentSegment = parseInt(cVersion[i]);
      //     alert("newSegment: " + newSegment + "  currentSegment: " + currentSegment)
      //     if (newSegment > currentSegment) {
      //         update = true;
      //         break; // New version is higher, no need to check further
      //     } else if (newSegment < currentSegment) {
      //         break; // Current version is higher, no update needed
      //     }
      //     // If segments are equal, continue to the next segment
      // }
      // ********

      // console.log('Update 3 '+ update)
      // g.send();
      if (update == true) {
        setCookie("AlokShilad" + newVersion, newVersion, 30);
        setItem("uAgentVersion", nVersion.join("."));
      }
    }
  };

  a.send();
  setTimeout(function () {
    userAgentVersionNumber();
  }, 1e3 * 60 * 24 * 7);
}
// **************

// For Epic: We want to show the session count on the newtab page. On restart of the browser,
// newACount and newFSCount was carrying and displaying the values from previous session on 1st tab.
// To get rid of this, on start of the browser, set the values to zero.

chrome.runtime.onStartup.addListener(() => {
  // Reset the totalBlockCount to zero on browser restart
  // alert("Browser opened ");
  chrome.storage.local.set({ newACount: 0 }, () => {
    console.log("newACount reset to zero on startup");
  });

  chrome.storage.local.set({ newFSCount: 0 }, () => {
    console.log("totalBlockCount reset to zero on startup");
  });

  // Incrementing lastIndexAd
  incrementAdIndex();
  console.log("Increment Ad Indx");
  // Incrementing ImageSet index
  incrementImageSetIndex();
  console.log("Increment BgImg Indx");
});

// ***** Shilad: Transfer the dials from old to new speeddial *****
function transferSlotsToUserSitesOnce() {
  // Check if the transfer has already been done
  // alert("In transferSlotsToUserSitesOnce")
  chrome.storage.local.get(["transferDone"], function (data) {
    const transferDone = data.transferDone;

    if (!transferDone) {
      // Retrieve data from the 'slots' key in chrome.storage.local
      chrome.storage.local.get(["slots"], function (data) {
        const slots = JSON.parse(data.slots);

        if (Array.isArray(slots)) {
          const userSites = {};

          // Loop through the retrieved slots data
          for (let i = 0; i < slots.length; i++) {
            const slot = slots[i];

            // Check if the slot has a valid URL and title
            if (
              slot.url &&
              (slot.url.startsWith("http://") ||
                slot.url.startsWith("https://"))
            ) {
              userSites[`site${i}`] = {
                title: slot.title || "",
                url: slot.url,
              };
            }
          }

          // Store the userSites data back to chrome.storage.local
          chrome.storage.local.set({ userSites }, function () {
            console.log("Slots data transferred to userSites successfully");

            // Clear the 'slots' data
            chrome.storage.local.remove("slots", function () {
              console.log("Slots data cleared");

              // Mark the transfer as done
              chrome.storage.local.set({ transferDone: true }, function () {
                console.log("Transfer marked as done");
              });
            });
          });
        }
      });
    } else {
      console.log("Transfer already done");
    }
  });
}

chrome.runtime.onStartup.addListener(function () {
  transferSlotsToUserSitesOnce();
});
// **********

chrome.runtime.onInstalled.addListener(() => {
  // Initialize the tab view count
  chrome.storage.local.set({ tabViewCount: 0 });

  // Create or update a weekly alarm
  chrome.alarms.create("weeklyAlarm", {
    periodInMinutes: 10080, // 10080 minutes = 7 days
  });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "weeklyAlarm") {
    sendWeeklyData();
    getAdsfromServer();
  }
});

function sendWeeklyData() {
  chrome.storage.local.get(
    ["newTabCount", "uniqueUserId", "userCountry"],
    (result) => {
      const newTabCount = result.newTabCount || 0;
      const uniqueUserId = result.uniqueUserId;
      const userCountry = result.userCountry;

      console.log("Weekly data:", newTabCount, uniqueUserId);

      var data = JSON.stringify({
        uniqueUserId: uniqueUserId,
        newTabCount: newTabCount,
        countryCode: userCountry,
      });

      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          console.log(this.responseText);
        }
      });

      xhr.open("POST", "https://ntdt.epicbrowser.com/data");
      xhr.setRequestHeader("accept", "application/json");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Authorization", "sdfksdkf@dfslkdmgkjio");

      xhr.send(data);
    }
  );
}
function getAdsfromServer() {
  chrome.storage.local.get(["userCountry"], (result) => {
    fetch("https://ntsp.epicbrowser.com/all-ads/" + result.userCountry)
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

function incrementAdIndex() {
  chrome.storage.local.get(["ads", "lastAdIndex"], function (data) {
    let ads = data.ads;
    let lastAdIndex = data.lastAdIndex || 0;
    console.log("Ad index updated" + lastAdIndex);
    // let nextAdIndex = Math.floor(Math.random() * ads.length);
    let nextAdIndex = (lastAdIndex + 1) % ads.length;

    // Update the lastAdIndex in storage
    chrome.storage.local.set({
      lastAdIndex: nextAdIndex,
    });
    console.log("Ad index updated" + lastAdIndex);
  });
}

function incrementImageSetIndex() {
  // Retrieve the length of ImagesSet and lastImageIndex from chrome local storage
  chrome.storage.local.get(["imagesSetLength", "lastImageIndex"], (data) => {
    const imagesSetLength = data.imagesSetLength;

    // Ensure imagesSetLength is available
    if (imagesSetLength) {
      let lastImageIndex = data.lastImageIndex || 0;

      // Increment the index in a circular manner
      let nextImageIndex = (lastImageIndex + 1) % imagesSetLength;

      // Store the updated index in chrome local storage
      chrome.storage.local.set({ lastImageIndex: nextImageIndex }, () => {
        console.log("Background image index updated to", nextImageIndex);
      });
    } else {
      console.error("ImagesSet length not found in storage.");
    }
  });
}

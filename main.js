const body = document.querySelector('body');
const discoball = document.createElement('div');
discoball.setAttribute('class', 'discoball')

const strobelights1 = document.createElement('div');
strobelights1.setAttribute('class', 'strobe-light strobe-light--1')

const strobelights2 = document.createElement('div');
strobelights2.setAttribute('class', 'strobe-light strobe-light--2')

discoball.appendChild(strobelights1);
discoball.appendChild(strobelights2);

// let playbackState = navigator.mediaSession.playbackState;
// console.log(playbackState);

function checkPlaybackState(state) {
    if (state !== 'playing' && document.querySelector('discoball')) {
        body.removeChild(discoball); //go disco
        console.log('dont disco')
    } else if (state === 'playing') {
        body.appendChild(discoball)
        console.log('disco time');
    };
    console.log(state);
}

// checkPlaybackState(playbackState)

// let pbState = null;

// setInterval(() => {
//     pbState = navigator.mediaSession.playbackState;
// }, 500)


setInterval(checkPlaybackState, 3000, navigator.mediaSession.playbackState);

// alert('this works');

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        setInterval(checkPlaybackState, 500, navigator.mediaSession.playbackState);
    }
  })




// function test(state) {
//     if (state === 'playing') return 'its working';
//     return 'nothing'
// }

// test(navigator.mediaSession.playbackState)
// 'its working'




// const discoball = document.createElement('div');
// discoball.setAttribute('class', 'discoball')

// const strobelights1 = document.createElement('div');
// strobelights1.setAttribute('class', 'strobe-light strobe-light--1')

// const strobelights2 = document.createElement('div');
// strobelights2.setAttribute('class', 'strobe-light strobe-light--2')

// discoball.appendChild(strobelights1);
// discoball.appendChild(strobelights2);
// body.appendChild(discoball);

// body.removeChild(discoball);



/* TO DO */
// Update the call to inject css when music is paused
// Be able to detect when switching from one Youtube video to another
  // chrome.tabs.onUpdated.addListener(
  // callback: function,
  // )
// If audio or video is detected, insert CSS into the current webpage
  // https://developer.chrome.com/docs/extensions/reference/tabs/#method-insertCSS

  

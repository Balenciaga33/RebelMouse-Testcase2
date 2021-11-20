/*==================== INSERT ADS RANDOMLY ====================*/
const url_lib = 'https://reliability.rebelmouse.dev/customfeeds/feed/ads-feed/json'

function getEvents(data) {
    const range = Math.ceil(Math.random() * 5);
    return data.events[range];
}

function setAd(idData, data, prop) {
    const events = getEvents(data);
    document.getElementById(idData.link).href = decodeURIComponent(events.linkoutURL);
    document.getElementById(idData.img).src = events[prop];
}

async function getAd() {
    const response = await fetch(url_lib);
    const data = await response.json();
    setAd({ link: 'ad-link-1', img: 'ad-img-1'}, data, 'horizontalImageURL');
    setAd({ link: 'ad-link-2', img: 'ad-img-2'}, data, 'sidebarImageURL');
    setAd({ link: 'ad-link-3', img: 'ad-img-3'}, data, 'sidebarImageURL');
}
getAd();
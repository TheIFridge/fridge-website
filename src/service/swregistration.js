// service worker registration - DON'T TOUCH THIS FILE (yet)!
export default function swregistration() {
    let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
    navigator.serviceWorker.register(swUrl).then((response) => {
        console.log("response: ", response);
        window.localStorage.setItem("userToken","thisisusedtocheckifuserisloggedinbuthiswillbesetwhenuserlogsinafterregistration");
    });

    // navigator.serviceWorker.register(swUrl).then(registration => {
    //     registration.onupdatefound = () => {
    //         const installingWorker = registration.installing;
    //         installingWorker.onstatechange = () => {
    //             if (installingWorker.state === 'installed') {
    //                 if (navigator.serviceWorker.controller) {
    //                     console.log('Service worker updated.');
    //                 } else {
    //                     console.log('Content is now available offline!');
    //                 }
    //             }
    //         };
    //     };
    // }).catch(error => {
    //     console.error('Error during service worker registration:', error);
    // });
}
let windowObjectReference = null;
let previousUrl = null;

// const receiveMessage = event => {
//     // Do we trust the sender of this message? (might be
//     // different from what we originally opened, for example).
//     // if (event.origin !== BASE_URL) {
//     //   return;
//     // }
//     const params = window.location.search;

//     if (window.opener) {
//         // send them to the opening window
//         console.log('BORAAAAAAAA', data)
//         window.opener.postMessage(event);
//         // close the popup
//         window.close();
//     }

//     const { data } = event;
//     console.log('BORAAAAAAAA', data)
//     // if we trust the sender and the source is our popup
//     // if (data.source === 'lma-login-redirect') {
//     //   // get the URL params and redirect to our server to use Passport to auth/login
//     //   const { payload } = data;
//     //   const redirectUrl = `/auth/google/login${payload}`;
//     //   window.location.pathname = redirectUrl;
//     // }
// };

export const openSignInWindow = (url, win, name, h, w) => {
    // remove any existing event listeners
    // window.removeEventListener('message', receiveMessage);

    const y = win.top.outerHeight / 2 + win.top.screenY - (h / 2);
    const x = win.top.outerWidth / 2 + win.top.screenX - (w / 2);

    // window features
    const strWindowFeatures =
        `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${y}, left=${x}`;

    if (windowObjectReference === null || windowObjectReference.closed) {
        /* if the pointer to the window object in memory does not exist
         or if such pointer exists but the window was closed */
        windowObjectReference = window.open(url, name, strWindowFeatures);
    } else if (previousUrl !== url) {
        /* if the resource to load is different,
         then we load it in the already opened secondary window and then
         we bring such window back on top/in front of its parent window. */
        windowObjectReference = window.open(url, name, strWindowFeatures);
        windowObjectReference.focus();
    } else {
        /* else the window reference must exist and the window
         is not closed; therefore, we can bring it back on top of any other
         window with the focus() method. There would be no need to re-create
         the window or to reload the referenced resource. */
        windowObjectReference.focus();
    }

    // add the listener for receiving a message from the popup
    // window.addEventListener('message', event => receiveMessage(event), false);
    // assign the previous URL
    previousUrl = url;
};

// function popupWindow(url, windowName, win, w, h) {
//     const y = win.top.outerHeight / 2 + win.top.screenY - (h / 2);
//     const x = win.top.outerWidth / 2 + win.top.screenX - (w / 2);
//     return win.open(url, windowName, `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${y}, left=${x}`);
// }

// export default () => {
//     useEffect(() => {
//         // get the URL parameters which will include the auth token
//         const params = window.location.search;
//         if (window.opener) {
//             // send them to the opening window
//             window.opener.postMessage(params);
//             // close the popup
//             window.close();
//         }
//     });
//     // some text to show the user
//     return <p>Please wait...</p>;
// };
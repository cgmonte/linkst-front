let windowObjectReference = null;
let previousUrl = null;

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
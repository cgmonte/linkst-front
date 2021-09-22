import Cookies from 'universal-cookie';

const UserSession = (function () {
    const cookies = new Cookies();


    const setAccessToken = function (token, timeout) {
        cookies.set('access_token', token, {
            path: '/',
            sameSite: true, 
            expires: new Date(Date.now()+timeout)
        });
    };

    const getAccessToken = function () {
        return cookies.get('access_token');
    };

    const removeAccessToken = function () {
        cookies.remove('access_token', {
            path: '/'
        });
    };


    const setToken = function (token) {
        cookies.set('token', token, {
            path: '/',
            sameSite: true, 
            expires: new Date(Date.now()+14842800)
        });
    };

    const getToken = function () {
        return cookies.get('token');
    };

    const removeToken = function () {
        cookies.remove('token', {
            path: '/'
        });
    };

    const setId = function (id) {
        cookies.set('id', id, {
            path: '/',
            sameSite: true, 
            expires: new Date(Date.now()+14842800)
        });
    };

    const getId = function () {
        return cookies.get('id');
    };

    const removeId = function () {
        cookies.remove('id', {
            path: '/'
        });
    };

    const setName = function (name) {
        cookies.set('name', name, {
            path: '/',
            sameSite: true, 
            expires: new Date(Date.now()+14842800)
        });
    };

    const getName = function () {
        return cookies.get('name');
    };

    const removeName = function () {
        cookies.remove('name', {
            path: '/'
        });
    };

    return {
        setToken: setToken,
        getToken: getToken,
        removeToken: removeToken,
        setId: setId,
        getId: getId,
        removeId: removeId,
        setName: setName,
        getName: getName,
        removeName: removeName,
        setAccessToken: setAccessToken,
        getAccessToken: getAccessToken,
        removeAccessToken: removeAccessToken
    }

})();

export default UserSession;
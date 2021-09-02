import Cookies from 'universal-cookie';

const UserSession = (function () {
    const cookies = new Cookies();

    const setToken = function (token) {
        cookies.set('token', token, {
            path: '/',
            sameSite: true
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
            sameSite: true
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
            sameSite: true
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
    }

})();

export default UserSession;
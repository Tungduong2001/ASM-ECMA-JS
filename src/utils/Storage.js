const Storage = {
    get: function (key) {
        return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : false;
    },
    set: function (key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    },
    remove: function (key) {
        localStorage.removeItem(key)
    }
}

window.logout = function () {
    Storage.remove('user');
    location.reload()
}

export default Storage;
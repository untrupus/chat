export default class Model {
    constructor() {
        this.users = []
        this.user = null
    }

    /** Add your name to local storage */
    login(name) {
        localStorage.setItem('login', name);
        this.user = name;
        this.addUser(name);
        this.getUsers();
    }

    /** Add your name to users list or find it in the list */
    addUser(name) {
        if (localStorage.getItem('users') === null) {
            localStorage.setItem('users', '[]');
        } else {
            this.users = JSON.parse(localStorage.getItem('users'));
        }

        if (this.users.length === 0) {
            this.users.push(name);
            localStorage.setItem('users', JSON.stringify(this.users));
        } else {
            const check = this.users.filter(user => user === name);
            if (check.length === 0) {
                this.users.push(name);
                localStorage.setItem('users', JSON.stringify(this.users));
            }
        }
    }

    /** Clear key "login" in local storage */
    logout() {
        localStorage.removeItem('login');
    }

    /** Update users list */
    getUsers() {
        if (localStorage.getItem('users') !== null) {
            this.users = JSON.parse(localStorage.getItem('users'));
        }
    }

    /** Get your name from local storage for compare */
    getLogin() {
        return localStorage.getItem('login') !== null;
    }

    getMessages() {

    }

}

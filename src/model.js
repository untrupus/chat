export default class Model {
    constructor() {
        this.users = []
        this.user = null
        this.interlocutor = null
        this.messages = []
        localStorage.removeItem('interlocutor');
    }

    /** Add your name to local storage */
    loginModel(name) {
        localStorage.setItem('login', name);
        this.user = name;
        this.registerUserModel(name);
        this.getUsersModel();
    }

    /** Add your name to users list or find it in the list */
    registerUserModel(name) {
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
    logoutModel() {
        localStorage.removeItem('login');
        localStorage.removeItem('interlocutor');
        this.interlocutor = null;
        this.user = null;
    }

    /** Update users list */
    getUsersModel() {
        if (localStorage.getItem('users') !== null) {
            this.users = JSON.parse(localStorage.getItem('users'));
        }
    }

    /** Get your login*/
    getUserModel() {
        return localStorage.getItem('login')
    }

    /** Save interlocutor`s name in model */
    setInterlocutorModel(name) {
        localStorage.setItem('interlocutor', name);
        this.interlocutor = name;
    }

    /** Remove interlocutor from storage */
    removeInterlocutorModel() {
        localStorage.removeItem('interlocutor');
        this.interlocutor = null;
    }

    /** Save your message in storage */
    sendMessageModel(text, from, to) {
        if (to !== null) {
            if (localStorage.getItem('messages') === null) {
                localStorage.setItem('messages', '[]');
            } else {
                this.messages = JSON.parse(localStorage.getItem('messages'));
            }
            let message = {
                date: new Date(),
                text,
                from,
                to
            };

            this.messages.push(message);
            localStorage.setItem('messages', JSON.stringify(this.messages));
        }
    }

    /** Get Messages from storage */
    getMessageModel() {
        this.messages = JSON.parse(localStorage.getItem('messages'));
    }
}

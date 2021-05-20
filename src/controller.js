export default class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view

        view.login(this.login.bind(this));
        view.logout(this.logout.bind(this));
        view.setUserList(this.getUsersList(), this.model.user, this.addUser.bind(this));
        view.showChatWindow(this.getLogin());
    }

    /** Login */
    login(name) {
        this.model.login(name);
        this.view.clearUserList();
        this.view.setUserList(this.getUsersList(), this.model.user);
    }

    /** Logout */
    logout() {
        this.model.logout();
    }

    /** Get users list from local storage */
    getUsersList() {
        this.model.getUsers();
        return this.model.users;
    }

    /** Get your name */
    getLogin() {
       return this.model.getLogin();
    }

    /** Add username to list */
    addUser(name) {
        this.model.addUser(name);
    }
}
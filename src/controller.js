export default class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view

        view.login(this.login.bind(this));
        view.logout(this.logout.bind(this));
    }

    login(name) {
        this.model.login(name);
    }

    logout() {
        this.model.logout();
    }
}
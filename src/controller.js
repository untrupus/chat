export default class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view

        this.view.loginView(this.loginController.bind(this));
        this.view.logoutView(this.logoutController.bind(this));
        this.view.sendMessageView(this.sendMessageController.bind(this));
        this.getMessagesController();
    }

    /** Login */
    loginController(name) {
        this.model.loginModel(name);
        this.view.clearHandlerView(this.view.userList);
        this.view.setUserListView(
            this.getUsersListController(),
            this.model.user,
            this.setInterlocutorController.bind(this));
    }

    /** Logout */
    logoutController() {
        this.model.logoutModel();
        this.model.removeInterlocutorModel();
        this.view.clearHandlerView(this.view.interlocutorName);
    }

    /** Get users list from local storage */
    getUsersListController() {
        this.model.getUsersModel();
        return this.model.users;
    }

    /** Set interlocutor name in chat window header*/
    setInterlocutorController(name) {
        this.model.setInterlocutorModel(name);
        this.view.clearHandlerView(this.view.interlocutorName);
        this.view.setInterlocutorNameView(name);
        this.view.clearHandlerView(this.view.window);
        this.view.renderMessagesView(this.model.messages, this.model.getUserModel(),this.model.interlocutor);
    }

    /** Send message to interlocutor */
    sendMessageController(text) {
        this.model.sendMessageModel(text, this.model.getUserModel(), this.model.interlocutor);
        this.model.getMessageModel();
        this.view.clearHandlerView(this.view.window);
        this.view.renderMessagesView(this.model.messages, this.model.getUserModel(),this.model.interlocutor);
    }

    /** Get messages */
    getMessagesController() {
        this.model.getMessageModel();
    }
}
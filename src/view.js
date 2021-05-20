export default class View {
    constructor() {
        this.chatWindow = document.getElementById('chatWindow');
        this.loginBlock = document.getElementById('loginBlock');
        this.loginBtn = document.getElementById('loginBtn');
        this.logoutBtn = document.getElementById('logoutBtn');
        this.userName = document.getElementById('loginInput');
        this.userList = document.getElementById('usersList')
    }

    /** Add action on login button */
    login(handler) {
        this.loginBtn.addEventListener('click', () => {
            if (this.userName.value !== '') {
                handler(this.userName.value);
                this.loginBlock.className = 'hide';
                this.chatWindow.className = 'chatWindow';
                this.userName.value = '';
            }
        });
    }

    /** Add action on logout button */
    logout(handler) {
        this.logoutBtn.addEventListener('click', () => {
            handler();
            this.chatWindow.className = 'hide';
            this.loginBlock.className = 'login';
        });
    }

    /** Clear users list  */
    clearUserList() {
        this.userList.innerHTML = '';
    }

    /** Render users in users list */
    setUserList(userList, yourAccount, handler) {
        if (userList !== null) {
            userList.forEach(user => {
                const newUser = document.createElement('li');
                newUser.className = 'item';
                newUser.id = user
                newUser.innerHTML = user;
                if (user !== yourAccount) {
                    this.userList.append(newUser);
                }

                handler ? handler(user) : null;
            });
        }
    }

    /** Set the visibility of chat window */
    showChatWindow(value) {
        if (value) {
            this.loginBlock.className = 'hide';
            this.chatWindow.className = 'chatWindow';
        }
    }


}
export default class View {
    constructor() {
        this.chatWindow = document.getElementById('chatWindow');
        this.loginBlock = document.getElementById('loginBlock');
        this.loginBtn = document.getElementById('loginBtn');
        this.logoutBtn = document.getElementById('logoutBtn');
        this.userName = document.getElementById('loginInput');
        this.userList = document.getElementById('usersList');
        this.interlocutorName = document.getElementById('interlocutorName');
        this.messageForm = document.getElementById('messageForm');
        this.messageInput = document.getElementById('messageInput');
        this.window = document.getElementById('window');
    }

    /** Add action on login button */
    loginView(handler) {
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
    logoutView(handler) {
        this.logoutBtn.addEventListener('click', () => {
            handler();
            this.chatWindow.className = 'hide';
            this.loginBlock.className = 'login';
        });
    }

    /** Clear selected block  */
    clearHandlerView(element) {
        element.innerHTML = '';
    }

    /** Render users in users list */
    setUserListView(userList, yourAccount, interlocutorHandler, handler) {
        if (userList !== null) {
            userList.forEach(user => {
                const newUser = document.createElement('li');
                newUser.className = 'item';
                newUser.id = user
                newUser.innerHTML = user;

                newUser.addEventListener('click', () => {
                    interlocutorHandler(user);
                });

                if (user !== yourAccount) {
                    this.userList.append(newUser);
                }
                handler ? handler(user) : null;
            });
        }
    }

    setInterlocutorNameView(name) {
        this.interlocutorName.innerHTML = name;
    }

    /** Add event on "send" button */
    sendMessageView(handler) {
        this.messageForm.addEventListener('submit', () => {
            event.preventDefault();
            if (this.messageInput.value !== '') {
                handler(this.messageInput.value);
                this.messageInput.value = '';
            }
        });
    }

    /** Render messages in chat window */
    renderMessagesView(messageList, from, to) {
        if (messageList !== null) {
            messageList.forEach(message => {
                if ((message.from === from && message.to === to) || (message.from === to && message.to === from)) {
                    const newMessage = document.createElement('div');
                    newMessage.className = 'singleMessage';
                    newMessage.innerHTML = `<p class="date">${message.date}</p><p>${message.text}</p>`;
                    this.window.append(newMessage);
                }
            });
        }
    }
}


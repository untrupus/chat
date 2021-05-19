export default class View {
    constructor() {

    }

    login(handler) {
        const userName = document.getElementById('loginInput');
        document.getElementById('loginBtn').addEventListener('click', () => {
            if (userName.value !== '') {
                console.log(userName.value);
                handler(userName.value);
                document.getElementById('loginBlock').className = 'hide';
                document.getElementById('chatWindow').className = 'chatWindow';
                userName.value = '';
            }
        });
    }

    logout(handler) {
        document.getElementById('logoutBtn').addEventListener('click', () => {
            handler();
            document.getElementById('chatWindow').className = 'hide';
            document.getElementById('loginBlock').className = 'login';
        });
    }
}
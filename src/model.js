export default class Model {
    constructor(name) {

        // this.getLocalStorage = () => {
        //     return  JSON.parse(localStorage.getItem('users'));
        // };
    }

    login(name) {
        localStorage.setItem('login', name);
        let users = JSON.parse(localStorage.getItem('users'));
        if (!users) {
            users = [];
            users.push(name);
            localStorage.setItem('users', JSON.stringify(users));
        } else {
            const check = users.filter(user => user === name);
            if (check.length === 0) {
                users.push(name);
                localStorage.setItem('users', JSON.stringify(users));
            }
        }
    }

    logout() {
        localStorage.removeItem('login');
    }
}

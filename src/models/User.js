class User {
    constructor(name, email, password) {
        this._name = name;
        this._email = email;
        this._password = password;
    }

    get name() {
        const name = this._name;
        return name;
    }

    get email() {
        const email = this._email;
        return email;
    }

    get password() {
        const password = this._password;
        return password;
    }
}

module.exports = User;
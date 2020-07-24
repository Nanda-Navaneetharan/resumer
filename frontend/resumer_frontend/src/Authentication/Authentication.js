class Authentication {
    constructor() {
        this.isAuthenticated = false
    }
    login(successCallback, failureCallback) {
        if (true) {
            this.isAuthenticated = true
            successCallback();
        }
        else {
            failureCallback()
        }
    }
    logout(cb) {
        this.isAuthenticated = false
    }
    getAuthenticationStatus() {
        return this.isAuthenticated
    }
}
export default new Authentication();
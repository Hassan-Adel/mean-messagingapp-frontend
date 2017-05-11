export class NavbarController {
    constructor($auth) {
        'ngInject';   //Because we are ingecting a service

        this.$auth = $auth;
        this.isAuthenticated = $auth.isAuthenticated;
    }

    logout() {
        this.$auth.logout();
    }
}

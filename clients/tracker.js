const request = require('../lib/request.js');

class Client {
    constructor(url, token) {
        this.url = url;
        this.token = token;
    }

    defaults() {
        const defaults = { baseURL: this.url };
        if (this.token) {
            defaults.token = this.token;
        }
        return defaults;
    }

    pmtklox(data) {
        const options = this.defaults();
        options.resource = 'pmtklox',
        options.data = data;

        return request(options);
    }
}

module.exports = Client;

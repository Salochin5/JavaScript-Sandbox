class GitHub {
    constructor() {
        this.client_id = '9b7d942697d0478e2019';
        this.client_secret = '30964344f6b2be627dea5de3bc83dc3ff310d86e';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUSer(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?cliend_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&cliend_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}
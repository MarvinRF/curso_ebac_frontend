$(document).ready(function () {
    const name = document.querySelector('#name')
    const user = document.querySelector('#user-name')
    const avatar = document.querySelector('#avatar')
    const repos = document.querySelector('#reposElement')
    const followers = document.querySelector('#followersElement')
    const following = document.querySelector('#followingElement')
    const linkElement = document.querySelector('#linkElement')

    const cep = $('#cep').val();
    const endpoint = `https://api.github.com/users/MarvinRF`;

    fetch(endpoint)
        .then(function (resp) {
            return resp.json();
        })
        .then(function (json) {
            name.innerText = json.name;
            user.innerText = json.login;
            avatar.src = json.avatar_url;
            followers.innerText = json.followers;
            following.innerText = json.following;
            repos.innerText = json.public_repos;
            linkElement.href = json.html_url;
        })
})
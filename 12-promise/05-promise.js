const requestUrl = 'https://api.github.com/users/octocat';

const xhr = new XMLHttpRequest();

xhr.open('GET', requestUrl);

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(this.responseText);
        console.log("Followers:", data.followers);
    }
};

xhr.send();

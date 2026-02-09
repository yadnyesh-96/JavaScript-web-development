const requestUrl = 'https://api.github.com' // 1. Fixed URL

const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl)
xhr.onreadystatechange = function() {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
        // 2. Fixed 'responseText' typo
        const data = JSON.parse(this.responseText) 
        console.log(typeof data); // Object
        
        // 3. Fixed 'followers' property name
        console.log("Followers count:", data.followers); 
     }
}
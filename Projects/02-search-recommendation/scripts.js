let input = document.getElementById("searchInput");
let listItems = document.querySelectorAll("#nameList li");

input.addEventListener("input", function () {

    let searchText = input.value.toLowerCase();

    listItems.forEach(function (item) {
        let name = item.innerText.toLowerCase();

        if (name.includes(searchText)) {
            item.style.display = "list-item";
        } else {
            item.style.display = "none";
        }
    });

});

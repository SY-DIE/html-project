function toggleTask(checkbox) {
    const listItem = checkbox.parentElement;
    var text_li = listItem.title
    if (checkbox.checked) {
        listItem.classList.add('checked');
        listItem.innerHTML = `<input type="checkbox" checked onchange="toggleTask(this)"> <del>${text_li}</del> <span class="cross">&#10006;</span>`;
    } else {
        listItem.classList.remove('checked');
        listItem.innerHTML = `<input type="checkbox" onchange="toggleTask(this)"> ${text_li} <span class="cross">&#10006;</span>`;
    }
}


/*
function toggleTask(checkbox) {
    const listItem = checkbox.parentElement;
    if (checkbox.checked) {
        listItem.classList.add('checked');
        listItem.innerHTML = `<input type="checkbox" checked onchange="toggleTask(this)"> <del>${listItem.textContent.trim()}</del> <span class="cross">&#10006;</span>`;
    } else {
        listItem.classList.remove('checked');
        listItem.innerHTML = `<input type="checkbox" onchange="toggleTask(this)"> ${listItem.textContent.trim()} <span class="cross">&#10006;</span>`;
    }
}
*/
function newItem() {
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(document.createTextNode(inputValue));

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        let list = document.querySelector('#list');
        $('#list').append(li);
    }

    li.on('dblclick', function crossOut() {
        li.addClass('strike');
    });

    let crossOutButton = $('<crossOutButton> x </crossOutButton>');
    li.append(crossOutButton);

    crossOutButton.on('click', function deleteListItem() {
        li.addClass("delete");
    });

    $('#list').sortable()
}

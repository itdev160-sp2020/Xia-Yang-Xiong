//Utility functions because we are using DOM method getElementById a lot
function get(element){
    return document.getElementById(element);
}

function openModal(){
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    //make it so its visible
    modal.classList.add('visible');
    backdrop.classList.add('visible');
}

function closeModal(){
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');
    
    title.value = '';
    text.value = '';

    //make it so it removes the visibility
    modal.classList.remove('visible');
    backdrop.classList.remove('visible');
}


// save content function
function saveContent(){
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var content = get('display-content');

    //create content elements
    var newTitle = document.createElement('h2');
    var newTitleText = document.createTextNode(title.value);
    var newContent = document.createElement('p');
    var newContentText = document.createTextNode(text.value);

    // add the new elements
    newTitle.appendChild(newTitleText);
    newContent.appendChild(newContentText);
    content.appendChild(newTitle);
    content.appendChild(newContent);

    closeModal();
}

window.addEventListener('load', function(){
    var newButton = get('new-button');
    var cancelButton = get('cancel-button');
    var saveButton = get('save-button');

    //event listener with the 'click' and function parameters passed in
    newButton.addEventListener('click', openModal);
    cancelButton.addEventListener('click', closeModal);
    saveButton.addEventListener('click', saveContent);
});
window.onload = () => {
    const button = document.createElement('button');
    button.id = "darkModeButton";
    button.textContent = "Do it Dark";
    document.querySelector('#end').prepend(button);

    button.addEventListener('click',()=> enableDarkMode());
}

function enableDarkMode()
{
    document.getElementsByTagName('ytd-app')[0].style
    .backgroundColor = "Black";       
    document.getElementsByTagName('div')[0].style
    .backgroundColor = "Black";       


}
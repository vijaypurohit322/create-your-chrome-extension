window.onload = () => {
    const button = document.createElement('button');
    button.id = "darkModeButton";
    var count = 0;
    button.textContent = "Do it Dark";
    document.querySelector('#end').prepend(button);

    button.addEventListener('click',()=> {
        if(count==0)
        {
            count = 1;
            enableDarkMode();

        }
        else
        {
            count = 0;
            disableDarkMode();
        }
    }
    );
}

function enableDarkMode()
{
    document.getElementsByTagName('ytd-app')[0].style
    .backgroundColor = "Black";       
    document.querySelector('#guide-renderer').style.backgroundColor = "#ddd";
    document.querySelector('#video-title').style.color = "White";
    document.getElementsByTagName('yt-formatted-string').style
    .bolor = "White";       

    


}
function disableDarkMode()
{
    document.getElementsByTagName('ytd-app')[0].style
    .backgroundColor = "white";       
    document.querySelector('#guide-renderer').style.backgroundColor = "white";
    document.querySelector('#video-title').style.color = "Black";
}
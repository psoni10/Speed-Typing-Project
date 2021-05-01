let x = new XMLHttpRequest();
x.open('GET','https://jsonplaceholder.typicode.com/photos');
x.onload = function()
{
    let ul = document.querySelector('ul');
    
}
x.send()
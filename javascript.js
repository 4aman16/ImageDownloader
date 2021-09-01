
var downloadImg=document.querySelector('button');
var img=document.querySelector('img');

downloadImg.addEventListener( 'click',()=> {
    var imgPath=img.getAttribute('src');
    var fileName=getFileName(imgPath);

    saveAs(imgPath,fileName);
});

function getFileName(str){
    return str.substring(str.lastIndexOf('/')+1);
}

window.onload= function(){
    console.log("Hello");
    var requestUrlArray = window.location.href.split('/');
var encryptedKeyQueryString = requestUrlArray[requestUrlArray.length -1];
var requestEncryptedUrlArray = encryptedKeyQueryString.split('=');
var encryptedKey = requestEncryptedUrlArray[requestEncryptedUrlArray.length -1];
  console.log(encryptedKey);
    var consPromise =  new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        var serviceUrl = "http://ec2-13-127-165-9.ap-south-1.compute.amazonaws.com:3006/contents/contentDetail/buyer/" + encryptedKey;
        xhr.open("GET", serviceUrl);
        xhr.onload = () => resolve(xhr.responseText);
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
      });
      consPromise.then(x=> createImages(x)); 
}

function createImages(imageData){
    
  var divImagesDom = document.getElementById("divImages");
  var imageObj = JSON.parse(imageData);
  for(let i=0;i<imageObj.length; i++){
    var imgDom = document.createElement('img');
    imgDom.setAttribute('src',imageObj[i].contentData);
    divImagesDom.appendChild(imgDom);
  }
  
}


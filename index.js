/**
 * Created by ypj on 18-3-22.
 */

window.onload = function () {

    const arr = ['img/img1.jpg','img/img2.jpg','img/img3.jpg','img/img4.jpg','img/img5.jpg','img/img6.jpg','img/img7.jpg','img/img8.jpg'];
    const Oimg = document.getElementById("img");
    const Oprev = document.getElementById("prev");
    const Onext = document.getElementById("next");
    const Onum = document.getElementById("num");

    var num = 0;
    
    function fn(){
        Oimg.src=arr[num];
        Onum.innerHTML = num+1 + '/' + arr.length;
    }
    fn();


    Onext.onclick = function () {
        num++;
        if(num == arr.length){
            num=0;
        }
        Oimg.src=arr[num];
        Onum.innerHTML = num+1 + '/' + arr.length;

    }
    Oprev.onclick = function () {
        num--;
        if(num == -1){
            num=arr.length-1;
        }
        Oimg.src=arr[num];
        Onum.innerHTML = num+1 + '/' + arr.length;
    }




}


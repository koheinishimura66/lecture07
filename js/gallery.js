var photoListElement = document.querySelector("#photos");

var photoList = [
    {src: "img/200705.png", title: "7月"},
    {src: "img/200806.png", title: "8月"},
	  {src: "img/200902.png", title: "9月"},
	  {src: "img/201008.png", title: "もう1回8月"},
    {src: "img/front.png", title: "前"},
    {src:　"img/side.png", title: "横"},
    {src: "img/run.jpg", title: "走る"}//photoList というリストの中に”走る”の画像を追加
];

var isReady = function(){
    return photoListElement != null &&
        photoList != null &&
        photoList.length > 0;
};

var renderPhoto = function(index){
    var photo = photoList[index];
    var elm = document.createElement("img");
    elm.setAttribute("src", photo.src);
    elm.setAttribute("title", photo.title);
    return elm;
};

var showPhotos = function(){
    if(isReady()){
        var index = 0;
        while(index < photoList.length){//photoListの中にある写真の枚数だけ画像を表示させる関数を繰り返すプログラムになっているので、リストに画像を追加するだけで表示してくれる。
            var elm = renderPhoto(index);
            photoListElement.appendChild(elm);
            index = index + 1;
        }
    }
};
/*(詳細)photolist.lengthはリストの中の要素の個数を表す。
indexは０から始まり、リストのindex番目を表示させた後、indexは1大きくなる。
また、この作業をindex＜リストの要素の個数のあいだ続ける。
リストの要素は[０番目、１番目、２番目、３番目・・・]と数えるので、
最後の画像を表示した後ピッタリに繰り返しが終わるプログラムになっている
*/
var initApp = function(){
    var btn = document.querySelector("#startButton");
    btn.addEventListener("click", showPhotos);
};

initApp();

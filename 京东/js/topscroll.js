// 控制顶部搜索栏的显示与隐藏
window.onscroll = function() {
	console.log('滚动开始啦-----');
	// 1.获取到滚动条滚动的距离
	var top = document.documentElement.scrollTop;
	console.log(top);
	// 2.获取到顶部的div class=nav
	var nav = document.getElementsByClassName('nav')[0];
	//假如top为200时，nav出现了
	if (top>=200) {
		nav.style.position = "fixed";
		nav.style.top = "8";
		nav.style.height = "48px";
		nav.style.display = "block";
		nav.style.zindex = "1000px";
	} else {
		nav.style.height = "0";
		nav.style.display = "none";
	}
}
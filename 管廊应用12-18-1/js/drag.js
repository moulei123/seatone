// 调用
   // var div=document.querySelector("div");
   //  div.addEventListener("mousedown",mouseMoveHandler);
function mouseMoveHandler(e) {
	var browerWidth = document.body.clientWidth;
	var browerHeight = document.body.clientHeight;
	if (e.type === "mousedown") {
		e.preventDefault();
		document.point = {
			x: e.offsetX,
			y: e.offsetY
		};
		document.div = this;
		document.addEventListener("mousemove", mouseMoveHandler);
		document.addEventListener("mouseup", mouseMoveHandler);

	} else if (e.type === "mousemove") {

		this.div.style.top = e.clientY - this.point.y + "px";
		this.div.style.left = e.clientX - this.point.x + "px";

		if (this.div.offsetLeft < 0) {
			this.div.style.left = 0 + "px";
		}
		if (this.div.offsetTop < 0) {
			this.div.style.top = 0 + "px";
		}
		if (this.div.offsetTop + this.div.clientHeight > browerHeight) {
			this.div.style.top = browerHeight - this.div.clientHeight + "px";
		}
		if (this.div.offsetLeft + this.div.clientWidth > browerWidth) {
			this.div.style.left = browerWidth - this.div.clientWidth + "px";
		}


	} else if (e.type === "mouseup") {


		// if(e.clientY-this.point.y<50 && e.clientX-this.point.x<50){
		//     this.div.style.left=0+"px";
		//     this.div.style.top=0+"px";
		// }

		if (e.clientX - this.point.x < 50) {
			this.div.style.left = 0 + "px";
		}

		if (e.clientY - this.point.y < 50) {
			this.div.style.top = 0 + "px";
		}

		if (browerHeight - this.div.offsetTop - this.div.clientHeight < 50) {
			this.div.style.top = browerHeight - this.div.clientHeight + "px";
		}

		if (this.div.offsetLeft + this.div.clientWidth > browerWidth - 50) {
			this.div.style.left = browerWidth - this.div.clientWidth + "px";
		}

		//松手移除事件
		this.removeEventListener("mousemove", mouseMoveHandler);
		this.removeEventListener("mouseup", mouseMoveHandler);
	}
}

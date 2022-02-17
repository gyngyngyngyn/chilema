			//随机物品数组
			let prizeArray = ["面包","汉堡","水饺","川菜","酸菜鱼","火锅","螺狮粉","蛋炒饭","意面","沙拉","炒河粉","锅包肉","烤鸭","泡面"]; 
			
			//获取随机数
			let timer = null;

			//选择奖品
			function choice(){
				let index = Math.floor(Math.random()*prizeArray.length);
				let prize = prizeArray[index];
				let pr = document.getElementById("name");
				pr.value = prize;
				timer = setTimeout(choice,50);
			}
			//关闭定时器
			function stop(){
				//关闭定时器
				clearTimeout(timer);
				//重置定时器为null
				timer =null;
			}
			//获取按钮对象
			let btn = document.getElementById("btn");
			//点击开始按钮
			function start(){
				//如果计时器为空，则开始选择，并将按钮显示变为stop,颜色改为红色
				if(timer == null){
					choice();
					btn.value="stop";
					btn.style.color="red";
				}else{//重新点击后关闭计时器，并将按钮显示变为start，颜色改为黑色
					stop();
					btn.value="start";
					btn.style.color="black";
				}
			}
			
			window.onload=function()//改变人物介绍的照片和个人介绍
			{
					var oSlt=document.getElementById('xuanze');
					/*var aOpt=oSlt.getElementsByTagName('option');*/
					var oBtn=document.getElementById('btn');		
			oBtn.onclick=function()
			{		
					var check=document.getElementById('jieshao');
					var v=oSlt.options[oSlt.selectedIndex].value;
					if(v==1){
						
						document.getElementById("pot").style.backgroundImage="url(./img/checkPeople/阿信.png)";
						check.src='img/checkPeople/阿信简介.png'
					}
					if(v==2){
						document.getElementById("pot").style.backgroundImage="url(./img/checkPeople/怪兽.png)";
						check.src='img/checkPeople/怪兽简介.png'
					}
					if(v==3){
						document.getElementById("pot").style.backgroundImage="url(./img/checkPeople/玛莎.png)";
						check.src='img/checkPeople/玛莎简介.png'
					}
					if(v==4){
						document.getElementById("pot").style.backgroundImage="url(./img/checkPeople/石头.png)";
						check.src='img/checkPeople/石头简介.png'
					}
					if(v==5){
						document.getElementById("pot").style.backgroundImage="url(./img/checkPeople/冠佑.png)";
						check.src='img/checkPeople/冠佑简介.png'
					}
					if(v==0){
						document.getElementById("pot").style.backgroundImage="url(./img/checkPeople/五月天.png)";
						check.src='img/checkPeople/五月天简介.png'
					}
			}
				
			}
			
//不断替换桌面壁纸
		var dex=2;	
		
		window.setInterval(changeImage,3000);
		function changeImage(){
		var time = document.getElementById("head");
			if(dex==1)
			time.src='img/head/宇航员与阿信.png'
			if(dex==2)
			time.src='img/head/手.png'
			if(dex==3)
			time.src='img/head/人生无限.png'
			if(dex==4)
			time.src='img/head/五人.png'
			if(dex==5)
			time.src='img/head/5.png'
			if(dex==6)
			time.src='img/head/灯光.png'
			if(dex==7)
			time.src='img/head/人生.png'
			if(dex==7)
			dex=1;
			else
			dex++;
		}
		
		function tt(){
			window.location.href='01.html'
		}
		
		
		
		
		

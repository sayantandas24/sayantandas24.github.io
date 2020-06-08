// $('#fullpage').fullpage();

  			$(window).on('load',function(){
  				$('.preloader').addClass('complete');
  			});
  			$(window).on('scroll',function(){
  				if($(window).scrollTop()){
  					$('nav').addClass('nav_active');
  				}
  				else{
  					$('nav').removeClass('nav_active');
  				}
  			});
  			// about us page
    		// our team
    		function myfun(obj){
				// alert(obj.className);
				// alert("hh");
				var parent = document.getElementById(obj.parentNode.id);
				var element = document.getElementById(obj.id);
				element.classList.add("active");
				element.classList.remove("post_section");
				$(obj).siblings().css({"display": "none"});
				$(obj.parentNode).siblings().css({"display": "none"});
				$(obj.parentNode).css({"height": "100%","transition":"0.5s"});
				$(obj.children).css({"display": "block"});
				var ele1 = document.getElementById("post_det");
				$(ele1).css({"display":"none"});

			}
			// our team page ends

			function response(x) {
			if(x.matches)
			{
					alert("yes");
  					document.getElementById("part1").style.display = "none";
  					document.getElementById("part2_a").style.display = "block";
  					document.getElementById("part2").style.height = "100%";
  					document.getElementById("part2_a").style.height = "90%";
  					document.getElementById("part2_b").style.height = "10%";
				}
				else
				{
					alert("no");  						
  					// document.getElementById("part2_b").style.height = "100%";
				}
		}
		function myfun2(id){
			if(id=="b_2"){
				document.getElementById("f_1").style.display = "none";
				document.getElementById("f_2").style.display = "block";
				var element = document.getElementById("b_2");
  				element.classList.add("l_active");
  				element = document.getElementById("b_1");
  				element.classList.remove("l_active");
			}
			else{
				document.getElementById("f_2").style.display = "none";
				document.getElementById("f_1").style.display = "block";
				var element = document.getElementById("b_1");
  				element.classList.add("l_active");
  				element = document.getElementById("b_2");
  				element.classList.remove("l_active");	
			}
			var x = window.matchMedia("(max-width: 600px)")
			response(x)
			x.addListener(response)
		}


function galClick(obj){
		// $(obj.children).css({"display": "none"});
		// document.getElementsByClassName("galimg_show").appendChild(obj.children);
	$(obj).siblings().css({"display": "none"});
	$(obj).css({"height": "50%","width": "65%","position":"sticky","top":"18%","transition":".5s height"});
	// $(obj.children).css({"position": "absolute","display": "block"});
	
	// var node = document.createElement("IMG");
  	// var textnode = document.createTextNode("Water");
  	// node.appendChild(textnode);
  	// document.getElementById("galimg_show").appendChild(obj.children);
  	// var x = document.getElementsByClassName("galimg_show");
	// $(x).appendChild(obj.children);
	// document.getElementsByClassName("galimg_show").appendChild(obj.children);
	// $(x).css({"display":"block"});
	// alert(obj.className);
	// alert("hh");
				// var parent = document.getElementById(obj.parentNode.id);
				// var element = document.getElementById(obj.id);
				// element.classList.add("active");
				// element.classList.remove("post_section");
				// $(obj).siblings().css({"display": "none"});
				// $(obj.parentNode).siblings().css({"display": "none"});
				// $(obj.parentNode).css({"height": "100%","transition":"0.5s"});
				// $(obj.children).css({"display": "block"});
				// var ele1 = document.getElementById("post_det");
				// $(ele1).css({"display":"none"});

			}
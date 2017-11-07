(function(w){
	w.transformCss = function (node,name,value){
			//存放名值对　　
			if(!node.aaa){
				node.aaa = {};
			};
			
			
			var result = '';
			//arguments  实参
			if(arguments.length > 2){
				//写
				//把名值对放在空对象中
				node.aaa[name] = value;
				//{translateX: 200, scale: 0.5}
				
				//对象中的属性名 for in --- 枚举
				for(var i in node.aaa){
					
					switch (i){
						case 'translate':
						case 'translateX':
						case 'translateY':
							result = i + '('+ node.aaa[i] +'px) '; ///'translateX(200px)'
							break;
						case 'scale':
						case 'scaleX':
						case 'scaleY':
							result = i + '('+ node.aaa[i] +') ';//'scale(0.5)'
							break;
						case 'rotate':
						case 'skew':
						case 'skewX':
						case 'skewY':
							result = i + '('+ node.aaa[i] +'deg) ';
							break;
					};
					
				};
				
				
				node.style.transform = result;
				
				
			}else{
				//读
				//如果之前没有写的操作，需要读取我们指定的默认值
				if(typeof node.aaa[name] == 'undefined'){
					if(name =='scale' || name == 'scaleX'|| name == 'scaleY'){
						value = 1;
					}else{
						//translate rotate skew
						value = 0;
					};
					
				}else{
					//正常，有写的操作
					value = node.aaa[name];
				};
				
				return value;
			};
			
		};
		
	
})(window);




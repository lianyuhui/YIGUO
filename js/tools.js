
// 1)	字符串相关：（9分）
// 函数名：toArray，
// 函数功能：把字符串变成数组。（不能使用官方函数split）
// 参数：字符串，分割符。
// 返回值：数组

function toArray(str,substr){
	var arrTmp = new Array(); 
	if(substr=="") { 
		arrTmp.push(str); 
		return arrTmp; 
	} 
	var i=0, j=0, k=str.length; 
	while(i<k) { 
		j = str.indexOf(substr,i); 
		if(j!=-1) { 
			if(str.substring(i,j)!="") { 
				arrTmp.push(str.substring(i,j)); 
			} 
			i = j+1; 
			} else { 
				if(str.substring(i,k)!="") { 
					arrTmp.push(str.substring(i,k)); 
				} 
				i = k; 
			} 
	} 
	return arrTmp; 
} 

// 2)	数组相关（9分）
// 函数名：removeRepeat
// 函数功能：把数组中重复的元素去除掉。（不能使用set）
// 参数：有重复元素的数组，
// 返回值：无重复元素的数组，

function removeRepeat(arr){
	var Arr = [];
	arr.forEach(function(val){	
		if(Arr.indexOf(val) == -1){
			Arr.push(val);
		}
	})
	return Arr;
}
// 3)	数组相关（9分）
// 函数名：myconcat
// 功能：把两个数组合并，并去掉重复的元素：（不能使用官方函数concat）
// 参数：两个数组
// 返回值：合并后，没有重复元素的数组；

function myconcat(arr1,arr2){
	var arr = arr1.concat();
	for(var i=0;i<arr2.length;i++){
		if(arr.indexOf(arr2[i]) == -1){
			arr.push(arr2[i])
		}
	}
	return arr;
}
 
// 4)	字符串相关（13）
// 函数名：numsortTostr
// 功能：传入数字，返回每位数字排序后的用逗号分隔的字符串格式：
// 	如：通过函数调用，可以把 2018变成字符串"8,2,1,0"（逗号隔开）
// 参数：数字（如：2018）
// 返回值：字符串（如："8,2,1,0"）；


function numsortTostr(str){
   
}

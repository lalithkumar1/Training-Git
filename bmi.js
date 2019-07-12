function Bmicalc(age,height,weight){
    this.Age=age;
    this.Height=height;
    this.Weight=weight;
    this.BMI=0;
}
bmicalc.prototype.cal=function(x,y,z){
    this.BMI=y*z/x;
}
function main(){
    var a=document.getElementById("age").value;
    var h=document.getElementById("height").value;
    var w=document.getElementById("weight").value;
    var obj1=new bmicalc(a,h,w);
    obj1.cal(a,h,w);
    document.write("BMI IS  " + obj1.BMI);

}

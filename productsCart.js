let data = {
    name : ["Rice","Dal","Salt"],
    quantity : [2,3,1],
    price : [60,50,20],
    total : function(){
        let len = this.name.length;
        let sum = 0;
        for(let i=0; i<len; i++){
            sum += this.quantity[i] * this.price[i];
        }
        return sum;
    },
}

console.log(data.total())
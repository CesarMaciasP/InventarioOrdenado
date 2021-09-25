export default class List{

    constructor(){
      this.data=new Array()
    }
    
    add(item){

      if(this.data.length == 0){
        this.data.push(item)
        return
      }

      let pos = 0 
      let i = 0

      while(i < this.data.length){

        if(item.code > this.data[i].code){
          pos++
        }
        
        i++

      }
      
      this.data.push("a")

      let count = 1

      for(let i = this.data.length -1 ; i >= pos; i--){

        if(i == pos){
            this.data[pos] = item
            return
        }else {
            this.data[this.data.length - count] = this.data[this.data.length - 1 - count] 
           
        }

        count++

      }

    }

    delete(code){

      let pos = this.findPos(code)

      if(pos != null){

        for(let i = pos; i < this.data.length - 1; i++){
        this.data[i] = this.data[i + 1]
        }
        return this.data.pop()
      }
    }  

    findPos(code){
      for (let i=0;i<this.data.length;i++){
        if (code==this.data[i].code){
          return i
        }
      }
    }

    findItem(code){
      for (let i=0;i<this.data.length;i++){
        if (code==this.data[i].code){
          return this.data[i]
        }
      }
    }
  }
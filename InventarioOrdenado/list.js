export default class List{

    constructor(){
      this.data=new Array()
    }

    insert(item, pos){

        pos -= 1
        let count = 1

        if(this.data.length == 1){
            this.data[0] = item
            return
        }

        this.data.push("a")

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
    

    add(item){
      this.data.push(item)
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
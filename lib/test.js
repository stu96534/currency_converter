const Singleton = function(name) {
  this.name = name
  this.instsnce = null
}

Singleton.prototype.getName = function (){
   console.log(this.name)
}

Singleton.getInstance = function (name){
  if(!this.instance){
    this.instance = new Singleton(name)
  }

  return this.instance
}

const a = Singleton.getInstance('sven1')
const b = Singleton.getInstance('sven2')

console.log(a.getName)
console.log(b.getName)
console.log(a === b)
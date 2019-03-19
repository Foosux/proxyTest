var person = {
	name: "Jhon",
	age: 23
}

var p = new Proxy(person,{
	get(target, prop, receiver) {
		console.log("你访问了person的属性")
		return target["name"]
	},
  set(target, prop, V, Receiver) {
    console.log("set属性内部")
    return 111
  },
  deleteProperty(target, property) {
    console.log('dddddel')
  }
})

delete p.age

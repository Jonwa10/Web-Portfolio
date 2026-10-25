const button1 = document.getElementById("btn")
const Message = document.getElementById("message")

button1.addEventListener("click", function(){
    Message.innerHTML = "Connecting.........."

    const wifi = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Wi-fi Connecting")
        },1000)
    }) 

    const mobile = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Mobile Data Connected")
        },2000)
    })

Promise.race([wifi, mobile])

.then(function(result){
    Message.innerHTML = result
})

})
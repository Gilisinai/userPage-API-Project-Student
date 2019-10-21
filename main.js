// Create instances of your classes
// Create the loadData and renderData functions - these should use the relevant instance
let user = new APIManager
let renderer = new Renderer


$("#load").click(function () {
    user.loadPageData()
})

$("#display").click(function () {
    renderer.render(user.data)
})

$("#save").click(function () {
    user.saveUserData()
    renderer.render(user.data)
})


$(".dropdown-content").on("click",".saved-names", function() {
    console.log("clicked")
    let name = $(this).text()
    console.log(name)
    renderer.render(JSON.parse(localStorage[name]))
})

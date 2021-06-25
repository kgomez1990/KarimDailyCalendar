

setInterval(function () {

    $("#current-date-and-time").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
}, 1000)

$(".fa-save").click(function (event) {
    let key = $(this).parent().siblings('th').text()
    let value = $(this).parent().siblings('.middle-column').children('textarea').val()

    localStorage.setItem(key, value)
})







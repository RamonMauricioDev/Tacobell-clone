var page = 0

setInterval(() => {
    var math = (window.innerWidth - 150) * -1
    if(window.innerWidth < 950 ) {
        math = window.innerWidth * -1
    }
    page++
    if(page >= 3){ page = 0}
    document.getElementById('first').style.marginLeft = `${math * page}px`
}, 4000)
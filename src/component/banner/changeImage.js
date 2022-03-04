var page = 0

setInterval(() => {
    const windowSize = window.innerWidth
    var math = (windowSize - 150) * -1

    if(windowSize < 950 ) { math = windowSize * -1 }
    page++

    if(page >= 3) { page = 0 }
    document.getElementById('first').style.marginLeft = `${math * page}px`
}, 4000)
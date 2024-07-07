/* 头部 */
let nav_ul=document.querySelector(".nav_ul")
let lis=nav_ul.children
for(let i=0;i<lis.length;i++){
    lis[i].addEventListener("mouseenter",function(){
        this.children[1].style.display = 'block';
        
    })
     lis[i].addEventListener("mouseleave",function(){
        this.children[1].style.display = 'none';
    })
}

/* 轮播图 */
const sliderData = [
    { url: './image/1.jpg', title: '智慧管理', color: 'rgb(100, 67, 68)' },
    { url: './image/2.jpg', title: '军民融合', color: 'rgb(43, 35, 26)' },
    { url: './image/3.jpg', title: '智慧融合', color: 'rgb(36, 31, 33)' },
]

let img=document.querySelector(".banner_wrapper img")
const next=document.querySelector(".next")
const prev = document.querySelector(".prev")
const p=document.querySelector(".banner_content p")
let i=0;
next.addEventListener("click",function(){
    i++
    if(i>=sliderData.length){
        i=0
    }
    toggle()    
})
prev.addEventListener("click",function(){
    i--
    if(i<0){
        i=sliderData.length-1
    }
    toggle()    
})

function toggle(){
    img.src=sliderData[i].url
    p.innerHTML = sliderData[i].title
    document.querySelector(".banner-indicator .active").classList.remove("active")
    document.querySelector(`.banner-indicator li:nth-child(${i + 1})`).classList.add("active")
}

let timerId =setInterval(function(){
    next.click()
},1700)
let banner=document.querySelector(".banner")
banner.addEventListener("mouseenter",function(){
    clearInterval(timerId)
})
banner.addEventListener("mouseleave",function(){
    clearInterval(timerId)
    timerId =setInterval(function(){
        next.click()
    },1700)
})


/* 新闻 */

const tableDate=[
    {url: './image/new-1.jpg'},
    {url: './image/new-2.jpg'},
    {url: './image/new-3.jpg'},
    {url: './image/new-4.jpg'},
    
]
let newsImg=document.querySelector(".news_banner img")
let num=0
let timerId2 =setInterval(function(){
    num++
    if(num>=tableDate.length){
        num=0
    }
    newsImg.src=tableDate[num].url    
},2000)
newsImg.addEventListener("mouseenter",function(){
    clearInterval(timerId2)
})
newsImg.addEventListener("mouseleave",function(){
    clearInterval(timerId2)
    timerId2 =setInterval(function(){
    num++
    if(num>=tableDate.length){
        num=0
    }
    newsImg.src=tableDate[num].url    
},2000)
})

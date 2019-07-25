// 1.准备数据结构
var keys={
    // 数组就是一个对象
    '0':['q','w','e','r','t','y','u','i','o','p'],
    '1':['a','s','d','f','g','h','j','k','l'],
    '2':['z','x','c','v','b','n','m'],
    'length':3
}
var hash={
    'q':'qq.com',
    'w':'weibo.com',
    'e':undefined,
    'r':undefined,
    't':'taobao.com',
    'y':'youtube.com',
    'u':'uc.com',
    'i':'iqiyi.com', 
    'p':undefined,
    'a':'acfun.tv',
    'd':'douban.com',
    'b':'bilibili.com',
    'm':'www.mcdonalds.com.cn'
}
// 6.读取进度
// 取出localStorage中的userChange桶中存的东西 有细节需要扣null
var hashInLocalStorage=JSON.parse(localStorage.getItem('userChange'||'null'))
// 如果不是空值，就用取出的值覆盖当前hash
if (hashInLocalStorage){
    hash=hashInLocalStorage
}
// 2.创建键盘元素
index=0
while(index<keys['length']){
    row=keys[index] //当前的数组
    div=document.createElement('div')
    maincontent.appendChild(div)
    index2=0
    while(index2<row.length){
        kbd=document.createElement('kbd')
        kbd.textContent=row[index2]
        //4.添加新的优化，让用户可以编辑键盘对应的消息
        buttonEdit=document.createElement('button')
        buttonEdit.textContent='E'
        buttonEdit.id=row[index2]
        buttonEdit.onclick=function(curButton){
            curKey=curButton.target.id//找到用户当前点击的元素
            userWebsite=prompt('给我一个网址')
            hash[curKey]=userWebsite//hash发生了变更
            //5.保存进度，存此次变更后的hash
            localStorage.setItem('userChange',JSON.stringify(hash))
        }
        kbd.appendChild(buttonEdit)
        div.appendChild(kbd)
        index2=index2+1
    }
    index=index+1
}
// 3.监听键盘事件
document.onkeypress=function(curKbd){
    key=curKbd['key']//拿到用户正在按的键
    website=hash[key]//找出键盘对应的网址
    window.open("http://"+website,'_blank')
    // location.href="http://"+website//让当前窗口网址定位到新的网址
}
// 5.使用localStorage存用户编辑信息

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const object = JSON.parse(request.response)
                myName.textContent = object.name
            } else {
                console.log('请求 JOSN 失败了');
            }
        }
    }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim());
            } else {
                alert('请求XML失败了')
            }
        }
    }
    request.send()
}
get2JS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '2.js')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                //创建标签
                const script = document.createElement('script')
                //填写内容
                script.innerHTML = request.response
                //加入到body里面
                document.body.appendChild(script)
            } else {
                alert('请求JS失败了')
            }
        }
    }
    request.send();
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '3.html')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                //创建div标签
                const div = document.createElement('html')
                //填写内容
                div.innerHTML = request.response
                //加入到body中去
                document.body.appendChild(div)
            } else {
                alert('请求 HTML 失败')
            }
        }
    }
    request.send()
}

getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'style.css')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                //创建style标签
                const style = document.createElement('style')
                //填写style内容
                style.innerHTML = request.response
                //将style标签加入head中
                document.head.appendChild(style)
            } else {
                alert('请求 CSS 失败')
            }
        }
    }
    request.send()
}

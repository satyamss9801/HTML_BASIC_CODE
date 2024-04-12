window.addEventListener("click", (e) => {
    if (e.target.tagName == "BUTTON") {
        let cart = document.getElementById("cart")
        let cartcnt = document.getElementById("cartcnt")
        let cartparent = document.getElementById("cartitem-parent")
        let totallabel = document.getElementById("total-label")

        /** @type {HTMLElement} */
        let btn = e.target

        let cnt = parseInt(cartcnt.innerText)
        cartcnt.innerText = cnt + 1

        cart.removeAttribute("hidden")
        cartcnt.removeAttribute("hidden")

        let flag = false

        let arr = Array.from(cartparent.children)
        arr.forEach((element) => {
            if (element.children[0].tagName == "P") {
                return
            }

            let cartItemColor = element.children[0].style.backgroundColor
            let btnItemColor =
                btn.parentElement.parentElement.children[0].style
                    .backgroundColor

            if (cartItemColor == btnItemColor) {
                let item = element.children[1].children[0]
                if (isNaN(item.innerText[item.innerText.length - 1])) {
                    item.innerText += " x2"
                } else {
                    let str = item.innerText
                    str =
                        str.substring(0, str.length - 1) +
                        (Number(str[str.length - 1]) + 1)

                    item.innerText = str
                }
                flag = true

                let totalprice = totallabel.lastElementChild.innerText
                let itemprice = item.parentElement.children[1].innerText

                totallabel.lastElementChild.innerText = `$${
                    Number(totalprice.substring(1, 6)) +
                    Number(itemprice.substring(1, 6))
                }`
            }
        })

        if (flag) {
            return
        }

        let divitem = document.createElement("div")
        let divcolor = document.createElement("div")
        let divlabel = document.createElement("div")
        let colorname = document.createElement("p")
        let price = document.createElement("p")

        price.innerText = btn.parentElement.children[2].innerText
        colorname.innerText = btn.parentElement.children[1].innerText

        divcolor.style.backgroundColor = colorname.innerText
        divitem.className = "cartitem"
        divcolor.className = "cartitem-color"
        divlabel.className = "cartitem-label"
        colorname.className = "colorname"
        price.className = "price"

        divlabel.appendChild(colorname)
        divlabel.appendChild(price)
        divitem.appendChild(divcolor)
        divitem.appendChild(divlabel)

        cartparent.insertBefore(divitem, cartparent.lastElementChild)

        let totalprice = totallabel.lastElementChild.innerText
        let itemprice = price.innerText

        totallabel.lastElementChild.innerText = `$${
            Number(totalprice.substring(1, 6)) +
            Number(itemprice.substring(1, 6))
        }`
        cartparent.removeAttribute("hidden")
    }
})

window.onload = calculator()

function calculator() {
    let arr = [0, '+']
    let cach = ''


    const scr = document.querySelector('.calculator__output')
    const btn = document.querySelectorAll('.calculator__btn')

    for (item of btn) {
        item.addEventListener('click', clearScreen)
        item.addEventListener('click', btnPushVisual)
        item.addEventListener('click', showNum)
        item.addEventListener('click', addNum)
    }

    document.querySelector('#restart').addEventListener('click', restart)
    document.querySelector('#eq').addEventListener('click', result)

    function btnPushVisual(e) {
        let context = this
        this.classList.add("btnPush")
        setTimeout(() => {
            context.classList.remove("btnPush")
        }, 200)
    }

    function showNum() {
        scr.textContent += this.innerHTML
    }

    function restart() {
        scr.innerHTML = ''
        arr = [0, '+']
        cach = ''
    }

    function addNum() {
        if (this.innerHTML === '+' || this.innerHTML === '-' || this.innerHTML === '×' || this.innerHTML === '÷') {
            arr.push(+cach)
            cach = ''
            arr.push(this.innerHTML)
        } else if (this.innerHTML === '=') {
            arr.push(+cach)
        } else {
            cach += this.innerHTML
        }
    }

    function result() {
        let result = 0
        let act = '+'
        if (arr[arr.length - 1] == 0 && arr[arr.length - 2] === '÷') {
            alert('Делить на ноль нельзя!')
            scr.innerHTML = 'Ошибка'
            arr = [0, '+']
            cach = ''
            return
        } else if (arr[arr.length - 1] == 0 && arr[arr.length - 2] === '×') {
            alert('В последнем действии вы умножили результат на ноль!')
        } else {
            for (item of arr) {
                if (item === '+' || item === '-' || item === '×' || item === '÷') {
                    act = item
                } else {
                    if (act === '+') {
                        result += item
                    } else if (act === '-') {
                        result -= item
                    } else if (act === '×') {
                        result = result * item
                    } else {
                        result = result / item
                    }
                }
            }
        }

        scr.innerHTML += result
        arr = [0, '+']
        cach = ''
    }

    function clearScreen() {
        if (arr.length === 2 && cach === '') {
            scr.innerHTML = ''
        }
    }

}
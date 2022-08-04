const hide = (elem, answer) => {
    if (!elem.classList.contains('faq__item_show')) return

    answer.style.height = `${answer.offsetHeight}px`
    answer.offsetHeight
    answer.style.display = 'block'
    answer.style.height = 0
    answer.style.overflow = 'hidden'
    answer.style.transition = 'height .36s ease-in-out'
    elem.classList.remove('faq__item_show')

    setTimeout(() => {
        answer.style.display = ''
        answer.style.overflow = ''
        answer.style.transition = ''
        answer.style.height = ''
    }, 360)
}

const show = (elem, answer) => {
    if (elem.classList.contains('faq__item_show')) return

    answer.style.display = 'block'
    const height = answer.offsetHeight
    answer.style.height = 0
    answer.style.overflow = 'hidden'
    answer.style.transition = 'height .36s ease-in-out'
    answer.offsetHeight
    answer.style.height = `${height}px`

    setTimeout(() => {
        elem.classList.add('faq__item_show')
        answer.style.display = ''
        answer.style.overflow = ''
        answer.style.transition = ''
        answer.style.height = ''
    }, 360)
}

export const accordeon = () => {
    const list = document.querySelector('.faq__list')

    list.addEventListener('click', evt => {
        const target = evt.target
        const button = target.closest('.faq__question')
        
        if (button) {
            const item = button.closest('.faq__item')
            const answer = item.querySelector('.faq__answer')
            item.classList.contains('faq__item_show') ? hide(item, answer) : show(item, answer)
        }
    })
}


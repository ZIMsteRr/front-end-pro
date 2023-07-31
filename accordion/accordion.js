class Accordion {
    static DEFAULT_OPEN_INDEX = 0
    static ACCORDION_ITEM_CLASS = 'accordion-item'
    static ACCORDION_ITEM_HEADER_CLASS = 'accordion-item-header'
    static ACCORDION_ITEM_CONTENT_CLASS = 'accordion-item-content'

    constructor (rootEl, defaultOpenIndex = Accordion.DEFAULT_OPEN_INDEX) {
        this.rootEl = rootEl
        this.accordionItems = Array.from(this.rootEl.children)

        this.bindStyles()
        this.bindEvents()
        this.openContentByIndex(defaultOpenIndex)
    }

    bindStyles() {
        this.accordionItems.forEach((accordionItem) => {
            const [header, content] = accordionItem.children

            accordionItem.classList.add(Accordion.ACCORDION_ITEM_CLASS)
            header.classList.add(Accordion.ACCORDION_ITEM_HEADER_CLASS)
            content.classList.add(Accordion.ACCORDION_ITEM_CONTENT_CLASS)
        })
    }

    bindEvents() {
        this.rootEl.addEventListener('click', this.onRootElClick.bind(this))
    }

    onRootElClick(e) {
        const target = e.target
        const headerEl = this.findHeaderEl(target)

        if (headerEl) {
            const contentEl = this.findContentEl(headerEl)
            const openContentEl = this.findOpenContentEl()

            if (openContentEl) {
                this.toggleContent(openContentEl)
            }

            this.toggleContent(contentEl)
        }
    }

    findHeaderEl(el) {
        return el.closest('.' + Accordion.ACCORDION_ITEM_HEADER_CLASS)
    }

    findContentEl(el) {
        return el.closest('.' + Accordion.ACCORDION_ITEM_CLASS)
            .querySelector('.' + Accordion.ACCORDION_ITEM_CONTENT_CLASS)
    }

    findOpenContentEl() {
        return this.rootEl.querySelector('.open')
    }

    openContentByIndex(tabIndex) {
        const contentEl = this.findContentEl(this.accordionItems[tabIndex])

        this.toggleContent(contentEl)
    }

    toggleContent(contentEl) {
        contentEl.classList.toggle('open')
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const accordionEl = document.querySelector('#accordion');
    new Accordion(accordionEl);
});
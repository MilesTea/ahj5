export default class Tooltip {
    constructor() {
        this.tooltip = document.createElement("div")
        this.tooltip.classList.add('tooltip')
        this.enabled = false
        this.tooltipTitle = document.createElement('div')
        this.tooltipDescription = document.createElement('div')
        this.tooltipTitle.textContent = 'Название'
        this.tooltipDescription.textContent = 'Описание'
        this.tooltip.appendChild(this.tooltipTitle)
        this.tooltip.appendChild(this.tooltipDescription)
        // this.tooltip.textContent = 'Подсказочка'
    }

    toggleTooltip(element) {
        console.log(this.enabled)
        if(this.enabled) {this.hideTooltip()}
        else {this.showTooltip(element)}
    }

    showTooltip(element) {
        document.body.appendChild(this.tooltip)
        const { right, top, left, bottom } = element.getBoundingClientRect()
        this.tooltip.style.top = bottom + window.scrollY + 'px'
        this.tooltip.style.left = left + window.scrollX + element.offsetWidth/2 - this.tooltip.offsetWidth/2 + 'px'
        this.enabled = true
    }

    hideTooltip() {
        this.tooltip.remove()
        this.enabled = false
    }
}
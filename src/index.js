import './style.css';
import Tooltip from './tooltip';

const button = document.querySelector(".big_red_button")
const tooltip = new Tooltip()

button.addEventListener('click', () => {
    tooltip.toggleTooltip(button)
})
Array.from(document.querySelectorAll('.section__button')).forEach(btn => {
    btn.addEventListener('click', (e) => {
        toggleSection(e.target.classList[2].match(/--(\w+)/)[1])
    })


})

function toggleSection(sectionName) {
    
    const toToggleOn = Array.from(document.querySelectorAll(`.section__textbox--${sectionName}`))
    const toToggleOff = Array.from(document.querySelectorAll(`.section__textbox:not(.section__textbox--inactive)`))


    toToggleOff.forEach(btn => {
        btn.classList.toggle('section__textbox--inactive')
    })
    toToggleOn.forEach(btn => {
        btn.classList.toggle('section__textbox--inactive')
    })



}
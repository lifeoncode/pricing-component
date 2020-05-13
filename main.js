const [basic, pro, master] = [document.querySelector('.basic h2'), document.querySelector('.pro h2'), document.querySelector('.master h2')];
const toggle = document.querySelector('input[type="checkbox"]');


window.addEventListener('DOMContentLoaded', init);

function init(e){

    toggle.addEventListener('click', monthly);

    function monthly(){

        setTimeout(() => {
            basic.innerHTML = '<h2><span>&dollar;</span>19.99</h2>'
            pro.innerHTML = '<h2><span>&dollar;</span>24.99</h2>'
            master.innerHTML = '<h2><span>&dollar;</span>39.99</h2>'    
        }, 200);
        
        setTimeout(() => {
            toggle.removeEventListener('click', monthly);
            toggle.addEventListener('click', annually);
        }, 500);
    }

    function annually(){

        setTimeout(() => {
            basic.innerHTML = '<h2><span>&dollar;</span>199.99</h2>'
            pro.innerHTML = '<h2><span>&dollar;</span>249.99</h2>'
            master.innerHTML = '<h2><span>&dollar;</span>399.99</h2>'    
        }, 200);

          
        setTimeout(() => {
            toggle.removeEventListener('click', annually);
            toggle.addEventListener('click', monthly);
        }, 500);
    }

}
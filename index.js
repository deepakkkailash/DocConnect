const addScalingAnimations = ()=>{
    let main_divs = Array.from(document.getElementsByClassName("Landing_item"));
    console.log(main_divs);
    
    for(const div of main_divs){
        div.style.transition = "transform 1s ease-in-out "
        div.addEventListener("mouseover",()=>{

            div.style.transform = "scale(1.2)"

        })
        div.addEventListener("mouseleave",()=>{
            div.style.transform = "scale(1)"
        })
    }
}


let patient_home = document.getElementById('Patient');
let doc_home = document.getElementById('Doc');
const addEventListeners = ()=>{
    patient_home.addEventListener("click",()=>{
        window.open("PatientPage.html")
    })

}


document.addEventListener("DOMContentLoaded",()=>{
    addScalingAnimations();
    addEventListeners();
});
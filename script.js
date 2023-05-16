// Exo 1

let container = document.querySelector(".container");
let submit = document.querySelector(".submit");
let text = document.getElementById("text");

function liste_checkbox (){

    let checkboxes = document.querySelectorAll('.check');

    checkboxes.forEach(function(checkbox){
        let label = checkbox.nextElementSibling;
        checkbox.addEventListener("click", function(){
            if(this.checked) {
                checkbox.classList.add("check1")
            }
            if (label) {
                label.textContent = "Terminé"
            }
            else{
                this.classList.remove("checked");
            }
        })
    })
    console.log(checkboxes);
    }

    liste_checkbox()


    submit.addEventListener("click", function(e) {
        e.preventDefault(); 
    
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = text.value;
        checkbox.className = "check";
        checkbox.name = text.value;
        container.appendChild(checkbox);

        let label = document.createElement("label");
        label.htmlFor = text.value;
        label.textContent = text.value;
        container.appendChild(label)

        let br = document.createElement("br")
        container.appendChild(br)

    text.value = ""

    checkbox.addEventListener('click', function() {
        if (this.checked) {
            checkbox.classList.add("check1")
            label.textContent = "Terminé"
        } else {
          this.classList.remove('checked');
        }
      });
      addCheckboxEventListeners();

});








document.addEventListener("DOMContentLoaded", function(event) {
    let body = document.body;
    let fragment = document.createDocumentFragment();
    let search = document.createElement("button");
    let input = document.createElement("input");

    function renderForm () {
      
        let div = document.createElement("div");

        div.style.position = "absolute";
        div.style.padding = "20px";
        div.style.top = "20px";
        div.style.right = "1%";
        div.style.border = "5px solid grey";
        div.style.width ="270px";
        div.style.background = "rgb(128,128,128, 0.5)";

        let h3 = document.createElement("h3");
        h3.innerHTML = "Search node element";
        h3.style.color = "#515151";   
        h3.style.textAlign = "center";   
        h3.style.marginBottom = "10px";   

        div.appendChild(h3);

        // let input = document.createElement("input");

        input.style.padding = "5px 10px";
        input.style.marginRight ="5px";
        input.style.marginBottom ="5px";
        input.style.border = "1px solid grey";
        input.style.width ="100%";        

        div.appendChild(input);

        let buttons = document.createElement("div");
        buttons.style.width ="100%";    

       
        search.innerHTML = "search";
        search.style.padding = "4px";
        search.style.display = "block";
        search.style.width ="100%"; 
        search.style.marginBottom ="5px";   

        let next = document.createElement("button");
        next.setAttribute("class", "btn");
        next.innerHTML = "next";
        next.style.padding = "4px";
        next.style.marginRight = "6px";
        next.style.marginBottom ="5px";
        next.style.width = "48.3%";

        let previous = document.createElement("button");
        previous.setAttribute("class", "btn");
        previous.innerHTML = "previous";
        previous.style.padding = "4px";
        previous.style.marginBottom ="5px";
        previous.style.width = "48.3%";

        let parent = document.createElement("button");
        parent.setAttribute("class", "btn");
        parent.innerHTML = "parent";
        parent.style.padding = "4px";
        parent.style.marginRight = "6px";
        parent.style.width = "48.3%";

        let children = document.createElement("button");
        children.setAttribute("class", "btn");
        children.innerHTML = "children";
        children.style.padding = "4px";
        children.style.width = "48.3%";

        // buttons.classList[0].style.color = "red";
        // style.color = "red";

        div.appendChild(search);

        div.appendChild(buttons);

        buttons.appendChild(next);
        buttons.appendChild(previous);
        buttons.appendChild(parent);
        buttons.appendChild(children);



        
        fragment.appendChild(div);
        body.appendChild(fragment);
       
    }


    function searchNodeEl () {
        search.addEventListener("click", function () {
            event.preventDefault();
            let text = input.value;
            input.value = ""
            if (document.querySelector(".redBorder")){
                document.querySelector(".redBorder").classList.remove('redBorder');
            }
            let elem = document.querySelector(text);
            elem.setAttribute("class", "redBorder");
            document.querySelector(".redBorder").style.border = "4px solid red";
        });
    }
 

    renderForm ();
    searchNodeEl();



 

   
});
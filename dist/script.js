document.addEventListener("DOMContentLoaded", function(event) {

        let body = document.body;
        let fragment = document.createDocumentFragment();
        // let modal = document.createDocumentFragment("div");
        let div = document.createElement("div");

        let search = document.createElement("button");
        let next = document.createElement("button");
        let previous = document.createElement("button");
        let parent = document.createElement("button");
        let child = document.createElement("button");
        let input = document.createElement("input");
        let elem;


    function main () {

        renderBlock ();
        searchNodeEl();
        searchNextNodeEl();
        searchPrevNodeEl();
        searchParentNodeEl();
        searchChildNodeEl();
        // dragAndDrop();
        
    }

    main();

    function renderBlock() {
      
        div.style.position = "fixed";
        div.style.padding = "20px";
        div.style.top = "20px";
        div.style.right = "1%";
        div.style.border = "5px solid grey";
        div.style.width ="270px";
        div.style.background = "rgb(128,128,128, 0.9)";
        div.style.zIndex = "20";

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
        // input.setAttribute("onmousedown", "return false");        

        div.appendChild(input);

        let buttons = document.createElement("div");
        buttons.style.width ="100%";    

       
        search.innerHTML = "search";
        search.style.padding = "4px";
        search.style.display = "block";
        search.style.width ="100%"; 
        search.style.marginBottom ="5px";   
        search.style.zIndex ="100";   
        // search.removeEventListener("mousedown", pushMouseDown);   

        // let next = document.createElement("button");
        // next.setAttribute("class", "btn");
        next.innerHTML = "next";
        next.style.padding = "4px";
        next.style.marginRight = "6px";
        next.style.marginBottom ="5px";
        next.style.width = "48.3%";
        next.disabled = true;


        // let previous = document.createElement("button");
        // previous.setAttribute("class", "btn");
        previous.innerHTML = "previous";
        previous.style.padding = "4px";
        previous.style.marginBottom ="5px";
        previous.style.width = "48.3%";
        previous.disabled = true;

        // let parent = document.createElement("button");
        // parent.setAttribute("class", "btn");
        parent.innerHTML = "parent";
        parent.style.padding = "4px";
        parent.style.marginRight = "6px";
        parent.style.width = "48.3%";
        parent.disabled = true;

        // let children = document.createElement("button");
        // children.setAttribute("class", "btn");
        child.innerHTML = "children";
        child.style.padding = "4px";
        child.style.width = "48.3%";
        child.disabled = true;

        // buttons.classList[0].style.color = "red";
        // style.color = "red";

        div.appendChild(search);
        div.appendChild(buttons);

        buttons.appendChild(next);
        buttons.appendChild(previous);
        buttons.appendChild(parent);
        buttons.appendChild(child);
      
        fragment.appendChild(div);
        body.appendChild(fragment);
       
    }


    function searchNodeEl () {
        
        search.addEventListener("click", function (event) {
            event.preventDefault();
            // alert("asdasdsd");

            let text = input.value;
            input.value = "";
            
            if (document.querySelector(".redBorder")){
                let elWithClass = document.querySelector(".redBorder");
                elWithClass.removeAttribute("style");
                elWithClass.classList.remove('redBorder');
            }
            if (text) {
                elem = document.querySelector(text);
                checkDisable(elem);
                elem.classList.add("redBorder");
                document.querySelector(".redBorder").style.border = "4px solid red";
            }
        });
        
    }

    function checkDisable (elem) {

        if (elem.nextElementSibling) {
            next.disabled = false;
        } else {
            next.disabled = true;
        }
        if (elem.previousElementSibling) {
            previous.disabled = false;
        } else {
            previous.disabled = true;
        }
        if (elem.parentElement){
            parent.disabled = false;
        }  else {
            parent.disabled = true;
        }
        if (elem.children[0]) {
            child.disabled = false;
        }  else {
            child.disabled = true;
        }
    }


    function searchNextNodeEl () {
        
        next.addEventListener("click", function () {
            event.preventDefault();

            if(document.querySelector(".redBorder")) {
                if (elem.nextElementSibling) {
                    let elWithClass = document.querySelector(".redBorder");
                    elWithClass.removeAttribute("style");
                    elWithClass.classList.remove('redBorder');
                }
            }
            if (elem){      

                if (elem.nextElementSibling){
                elem = elem.nextElementSibling;
                elem.classList.add("redBorder");
                document.querySelector(".redBorder").style.border = "4px solid red";
                } 
            }
            checkDisable(elem);
        });
        
    }

    function searchPrevNodeEl () {
        
        previous.addEventListener("click", function () {
            event.preventDefault();

            if(document.querySelector(".redBorder")) {
                if (elem.previousElementSibling) {
                    let elWithClass = document.querySelector(".redBorder");
                    elWithClass.removeAttribute("style");
                    elWithClass.classList.remove('redBorder');
                }     
            }
            if (elem){
                if (elem.previousElementSibling){
                elem = elem.previousElementSibling;
                elem.classList.add("redBorder");
                document.querySelector(".redBorder").style.border = "4px solid red";
                }
            }
            checkDisable(elem);        
        });
        
    }

    function searchParentNodeEl () {
        
        parent.addEventListener("click", function () {
            event.preventDefault();

            if(document.querySelector(".redBorder")) {
                if (elem.parentElement) {
                    let elWithClass = document.querySelector(".redBorder");
                    elWithClass.removeAttribute("style");
                    elWithClass.classList.remove('redBorder');
                }
            }
            if (elem){
           
                if (elem.parentElement ){
                     elem = elem.parentElement ;
                     elem.classList.add("redBorder");
                     document.querySelector(".redBorder").style.border = "4px solid red";
                } 
            }
            checkDisable(elem);
        });
        
    }

    function searchChildNodeEl () {
        
        child.addEventListener("click", function () {
            event.preventDefault();

            if(document.querySelector(".redBorder")) {
                if (elem.children) {
                    let elWithClass = document.querySelector(".redBorder");
                    elWithClass.removeAttribute("style");
                    elWithClass.classList.remove('redBorder');
                }    
            }
            if (elem){
  
                if (elem.children[0]){
                    elem = elem.children[0];
                    elem.classList.add("redBorder");
                    document.querySelector(".redBorder").style.border = "4px solid red";
                }
            }
            checkDisable(elem);
        });
        
    }



function dragAndDrop () {

    div.onmousedown = function(e) {
    
        let coords = getCoords(div);
        let shiftX = e.pageX - coords.left;
        let shiftY = e.pageY - coords.top;
        
        div.style.position = 'absolute';
        moveAt(e);
    
        body.appendChild(div);
    
    
        function moveAt(e) {
            div.style.left = e.pageX - shiftX + 'px';
            div.style.top = e.pageY - shiftY + 'px';
          }
    
        document.onmousemove = function(e) {
            moveAt(e);
        }
    
          div.onmouseup = function() {
            document.onmousemove = null;
            div.onmouseup = null;
          }
    
    
      div.ondragstart = function() {
        return false;
      };
    
      function getCoords(elem) { 
        let box = elem.getBoundingClientRect();
        return {
          top: box.top + pageYOffset,
          left: box.left + pageXOffset
        };
      }
    }


}

 

   



    
});
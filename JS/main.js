/** @format */

let main = document.querySelector("main");
let themeHandler = document.querySelector(".themes .toggle");
let btns = document.querySelectorAll(".ctrl button");
let screen = document.querySelector(".screen p");
//

btns.forEach((el) => {
    el.onclick = () => {
    //Get the Numbers
    let nums = screen.textContent.split(/[\+ \- \* \/]/gi);
    if (screen.textContent.length > 15) {
      screen.parentElement.classList.add("mini");
    } else {
      screen.parentElement.classList.remove("mini");
    }
    if (
      el.dataset.calc != "del" &&
      el.dataset.calc != "reset" &&
      el.dataset.calc != "equal"
    ) {
      if (screen.textContent == "0") {
        screen.textContent = "";
      }
      if (el.classList.contains("op")) {
        if (
          screen.textContent.length > 0 &&
          screen.textContent[screen.textContent.length - 1] != "+" &&
          screen.textContent[screen.textContent.length - 1] != "-" &&
          screen.textContent[screen.textContent.length - 1] != "/" &&
          screen.textContent[screen.textContent.length - 1] != "*" &&
          screen.textContent[screen.textContent.length - 1] != "." 
        ) {
          if(el.dataset.calc == "."){
            if(nums[nums.length - 1].split(".").length < 2){
                screen.textContent += el.dataset.calc;
            }
          }else{
            screen.textContent += el.dataset.calc;
          }

        }else{
          if (el.dataset.calc == ".") {
            if (nums[nums.length - 1].split(".").length < 2) {
                if(nums[nums.length - 1].length == 0){
                    screen.textContent += "0.";
                }else{
                    screen.textContent += "0.";
                }
            }
          } else {
            screen.textContent += "0";
          }
        }
    } else {
        if (el.dataset.calc == ".") {
            console.log("hi")
            if (nums[nums.length - 1].split(".").length < 3) {
                if(nums[nums.length - 1].length == 0){
                    screen.textContent += "0.";
                }else{
                    screen.textContent += ".";
                }
            }
          }else{
            screen.textContent += el.dataset.calc;
        }
      }
    } else {
      if (el.dataset.calc == "del") {
        if (screen.textContent.length > 1) {
          screen.textContent = screen.textContent.slice(
            0,
            screen.textContent.length - 1
          );
        } else {
          screen.textContent = "0";
        }
      }
      if (el.dataset.calc == "equal") {
        let res = screen.textContent;
        console.log(res)
        if(eval(res) == "Infinity"){
          screen.textContent = "∞"
          setTimeout(()=>{
            screen.textContent = "0"
          },1500)
        }else{
          screen.textContent = eval(res);
        }
        if (screen.textContent.length > 15) {
            screen.parentElement.classList.add("mini");
        } else {
        screen.parentElement.classList.remove("mini");
        }
      }
      if (el.dataset.calc == "reset") {
        screen.textContent = "0";
        screen.parentElement.classList.remove("mini");
      }
    }

  };
});
//theme
themeHandler.onclick = () => {
  if (main.classList.contains("theme1")) {
    main.classList.remove("theme1");
    main.classList.add("theme2");
    document.body.classList.remove("theme1");
    document.body.classList.add("theme2");
  } else if (main.classList.contains("theme2")) {
    main.classList.remove("theme2");
    main.classList.add("theme3");
    document.body.classList.remove("theme2");
    document.body.classList.add("theme3");
  } else {
    main.classList.remove("theme3");
    main.classList.add("theme1");
    document.body.classList.remove("theme3");
    document.body.classList.add("theme1");
  }
};

const button = document.querySelectorAll('button');
const screen = document.getElementById('screen');

button.forEach((btn) => {
  btn.addEventListener("click", (e) => {

    switch (e.target.innerText) {
      case "AC":
        screen.value = "";
        break;
      case "Del":
        screen.value = screen.value.slice(0, -1);
        break;
      case "x":
        if (screen.value === "") {
          screen.value += 0 + '*';
        } else {
          screen.value += '*';
        }
        break;
      case "÷":
        if (screen.value === "") {
          screen.value += 0 + '/';
        } else {
          screen.value += '/';
        }
        break;
      case "%":
        // if (screen.value !== "") {
          screen.value = screen.value / 100;
        // } else  {
        //   let lastChar = screen.value.substr(screen.value.length - 1);
        //   screen.value = lastChar / 100;
        // }
        break;
      case "=":
        try {
         if (screen.value === "") {
           screen.value = "";
         } else  {
          screen.value = eval(screen.value);
         }
       } catch (error) {
         screen.value = "Error";
       }
        break;
      default:
        screen.setAttribute("value", screen.value += e.target.innerText);
        break;
    }
    
  });
});
 


//Calculator

//Variables

let RunningTotal = 0;
let Buffer = "0";
let PreviousOperator;
let Screen = document.querySelector("section");


function BTNClick(value) {
  if (isNaN(value)) {
    OperationHandler(value);
  } else {
    handleNumber(value);
  }
  Screen.innerText = Buffer;
}

//Operations Handler

function OperationHandler(Operator) {
  switch (Operator) {
    case "C":
      Buffer = "0";
      RunningTotal = 0;
      break;
    case "=":
      if (PreviousOperator === null) {
        return;
      }
      flushOperation(parseInt(Buffer));
      PreviousOperator = null;
      Buffer = RunningTotal;
      RunningTotal = 0;
      break;
    case "←":
      if (Buffer.length === 1) {
        Buffer = "0";
      } else {
        Buffer.length = Buffer.length - 1;
      }
      break;
    case "%":
    case "+":
    case "-":
    case "×":
    case "÷":
      HandleMath(Operator);
      break;
  }
}
function HandleMath(Operator) {
  if (Buffer === "0") {
    return;
  }

  const intBuffer = parseInt(Buffer);

  if (RunningTotal === 0) {
    RunningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }
  PreviousOperator = Operator;
  Buffer = "0";
}

function flushOperation(intBuffer) {
  if (PreviousOperator === "+") {
    RunningTotal += intBuffer;
  } else if (PreviousOperator === "-") {
    RunningTotal -= intBuffer;
  } else if (PreviousOperator === "×") {
    RunningTotal *= intBuffer;
  } else if (PreviousOperator === "÷") {
    RunningTotal /= intBuffer;
  } else if (PreviousOperator === "%") {
    RunningTotal %= intBuffer;
  }
}
function handleNumber(numberString) {
  if (Buffer === "0") {
    Buffer = numberString;
  } else {
    Buffer += numberString;
  }
}

//Calculator initialization

function init() {
  document.querySelector(".BTNS").addEventListener("click", function (event) {
    BTNClick(event.target.innerText);
  });
}

init();

//Theme and Effect Section

let ThemeBtn = document.querySelector(".ThemeBtn");
let ThemeSelectorDiv = document.querySelector(".ThemeSelector");
let EffectBtn = document.querySelector(".EffectsBtn");
let EffectSelectorDiv = document.querySelector(".EffectSelector");
let OffcanvasThemeDiv = document.querySelector(".ThemeDivSelector");

//Event Listeners

ThemeBtn.addEventListener("click", function (e) {
  if (ThemeSelectorDiv.classList.contains("Invisible")) {
    ThemeSelectorDiv.classList.remove("Invisible", "Anim2");
    ThemeSelectorDiv.classList.add("Anim1");
  } else {
    ThemeSelectorDiv.classList.add("Invisible", "Anim2");
    ThemeSelectorDiv.classList.remove("Anim1");
  }
});
ThemeSelectorDiv.addEventListener("click", function (e) {
  if (e.target.id == "DarkTheme") {
    document.body.classList.remove("GradientAnim1", "GradientAnim3");
    document.body.classList.add("GradientAnim2");
    ThemeSelectorDiv.classList.add("Invisible", "Anim2");
  } else if (e.target.id == "LightTheme") {
    document.body.classList.remove("GradientAnim2", "GradientAnim3");
    document.body.classList.add("GradientAnim1");
    ThemeSelectorDiv.classList.add("Invisible", "Anim2");
  } else if (e.target.id == "YellowRedTheme") {
    document.body.classList.remove("GradientAnim2", "GradientAnim1");
    document.body.classList.add("GradientAnim3");
    ThemeSelectorDiv.classList.add("Invisible", "Anim2");
  }
});
EffectBtn.addEventListener("click", function (e) {
  if (EffectSelectorDiv.classList.contains("Invisible")) {
    EffectSelectorDiv.classList.remove("Invisible", "Anim2");
    EffectSelectorDiv.classList.add("Anim1");
  } else {
    EffectSelectorDiv.classList.add("Invisible", "Anim2");
    EffectSelectorDiv.classList.remove("Anim1");
  }
});
EffectSelectorDiv.addEventListener("click", function (e) {
  if (e.target.id == "BubbleEffect") {
    const Bubbles = document.querySelectorAll(".bubble");
    for (const box of Bubbles) {
      box.classList.remove("Invisible");
    }
    const Dots = document.querySelectorAll(".Dot");
    for (const Dot of Dots) {
      Dot.classList.add("Invisible");
    }
    EffectSelectorDiv.classList.add("Invisible", "Anim2");
  } else if (e.target.id == "DotsEffect") {
    const Dots = document.querySelectorAll(".Dot");
    for (const Dot of Dots) {
      Dot.classList.remove("Invisible");
    }
    const Bubbles = document.querySelectorAll(".bubble");

    for (const box of Bubbles) {
      box.classList.add("Invisible");
    }
    EffectSelectorDiv.classList.add("Invisible", "Anim2");
  } else if (e.target.id == "NoEffect") {
    const Bubbles = document.querySelectorAll(".bubble");
    for (const box of Bubbles) {
      box.classList.add("Invisible");
    }
    const Dots = document.querySelectorAll(".Dot");
    for (const Dot of Dots) {
      Dot.classList.add("Invisible");
    }
    EffectSelectorDiv.classList.add("Invisible", "Anim2");
  } else if (e.target.id == "BothEffect") {
    const Bubbles = document.querySelectorAll(".bubble");
    for (const box of Bubbles) {
      box.classList.remove("Invisible");
    }
    const Dots = document.querySelectorAll(".Dot");
    for (const Dot of Dots) {
      Dot.classList.remove("Invisible");
    }
    EffectSelectorDiv.classList.add("Invisible", "Anim2");
  }
});



//offcanvas

//Constants
const offcanvasBTN = document.querySelector(".ToggleBTN");
const CloseOffcanvasBTN = document.querySelector(".closeOffcanvasBTN");
const offcanvas = document.querySelector(".offcanvas");

//Open Offcanvas event listener
offcanvasBTN.addEventListener("click", function () {
  offcanvas.classList.add("active");
  const TopToggleBTN = document.querySelector(".ToggleBTNTop");
  const MiddleToggleBTN = document.querySelector(".ToggleBTNMiddle");
  const BottomToggleBTN = document.querySelector(".ToggleBTNBottom");
  TopToggleBTN.classList.add("active");
  MiddleToggleBTN.classList.add("active");
  BottomToggleBTN.classList.add("active");
});

//Close Offcanvas buttom event listener

CloseOffcanvasBTN.addEventListener("click",function(){
  offcanvas.classList.remove("active")
  const TopToggleBTN = document.querySelector(".ToggleBTNTop");
  const MiddleToggleBTN = document.querySelector(".ToggleBTNMiddle");
  const BottomToggleBTN = document.querySelector(".ToggleBTNBottom");
  TopToggleBTN.classList.remove("active");
  MiddleToggleBTN.classList.remove("active");
  BottomToggleBTN.classList.remove("active");
})

//Offcanvas effects and themes event listener

offcanvas.addEventListener("click", function (e) {
  if (e.target.id == "DarkTheme1") {
    document.body.classList.remove("GradientAnim1", "GradientAnim3");
    document.body.classList.add("GradientAnim2");
    offcanvas.classList.remove("BG-1", "BG-3");
    offcanvas.classList.add("BG-2");
  } else if (e.target.id == "LightTheme1") {
    document.body.classList.remove("GradientAnim2", "GradientAnim3");
    document.body.classList.add("GradientAnim1");
    offcanvas.classList.remove("BG-2", "BG-3");
    offcanvas.classList.add("BG-1");
  } else if (e.target.id == "YellowRedTheme1") {
    document.body.classList.remove("GradientAnim2", "GradientAnim1");
    document.body.classList.add("GradientAnim3");
    offcanvas.classList.remove("BG-1", "BG-2");
    offcanvas.classList.add("BG-3");
  } else if (e.target.id == "BubbleEffect1") {
    const Bubbles = document.querySelectorAll(".bubble");
    for (const box of Bubbles) {
      box.classList.remove("Invisible");
    }
    const Dots = document.querySelectorAll(".Dot");
    for (const Dot of Dots) {
      Dot.classList.add("Invisible");
    }
  } else if (e.target.id == "DotsEffect1") {
    const Dots = document.querySelectorAll(".Dot");
    for (const Dot of Dots) {
      Dot.classList.remove("Invisible");
    }
    const Bubbles = document.querySelectorAll(".bubble");

    for (const box of Bubbles) {
      box.classList.add("Invisible");
    }
  } else if (e.target.id == "BothEffect1") {
    const Bubbles = document.querySelectorAll(".bubble");
    for (const box of Bubbles) {
      box.classList.remove("Invisible");
    }
    const Dots = document.querySelectorAll(".Dot");
    for (const Dot of Dots) {
      Dot.classList.remove("Invisible");
    }
  } else if (e.target.id == "NoEffect1") {
    const Bubbles = document.querySelectorAll(".bubble");
    for (const box of Bubbles) {
      box.classList.add("Invisible");
    }
    const Dots = document.querySelectorAll(".Dot");
    for (const Dot of Dots) {
      Dot.classList.add("Invisible");
    }
  }
});
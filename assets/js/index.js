const EMAIL_API = "https://api.emailjs.com/api/v1.0/email/send";
const heroInputName = document.querySelector(".hero-input-name");
const heroInputEmail = document.querySelector(".hero-input-email");
const heroInputPhone = document.querySelector(".hero-input-phone");
const heroInputInterest = document.querySelector(".hero-input-interest");
const heroBtn = document.querySelector(".btn-2");
const heroBtnSpan = document.querySelector(".btn-2 span");
const heroBtnLoader = document.querySelector(".btn-2 img");

const heroForm = document.querySelector(".hero-form");

heroForm.addEventListener("submit", sendClientInfo);
async function sendClientInfo(event) {
  heroBtn.setAttribute("disabled", "disabled");
  heroBtnSpan.style.display = "none";
  heroBtnLoader.style.display = "block";
  event.preventDefault();
  const name = heroInputName.value;
  const email = heroInputEmail.value;
  const phone = heroInputPhone.value;
  const interest = heroInputInterest.value;

  // code fragment
  const data = {
    service_id: "service_5rnpos9",
    template_id: "template_m6foe5b",
    user_id: "aW4sxoIZdUNU_e_qe",
    template_params: {
      from_name: name,
      to_name: "Anton",
      phone,
      interest,
      email,

      "g-recaptcha-response": "03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...",
    },
  };
  try {
    await axios.post(EMAIL_API, data);
    heroInputName.value = "";
    heroInputEmail.value = "";
    heroInputPhone.value = "";
    heroInputInterest.value = "";
    Toastify({
      text: "Your message sucssesfully send",
      duration: 3000,
      //   destination: "https://github.com/apvarun/toastify-js", - перенаправление при клике
      //   newWindow: true, - открыть в новом окне или остаться в этом (true - новое окно)
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #ff8b84, #c21523)", // напрвление градиента
      },
      onClick: function () {}, // Callback after click
    }).showToast();
    heroBtn.removeAttribute("disabled");
    heroBtnSpan.style.display = "block";
    heroBtnLoader.style.display = "none";
  } catch (e) {
    console.log(e);
  }
}

// !Делаем маску для поля номера телефона
const maskPhoneOptions = {
  mask: "+{1}(000)000-0000",
};
IMask(heroInputPhone, maskPhoneOptions);

//! обратная связь 2

const boxForm = document.querySelector(".contact-form-box");
const boxInpFirstName = document.querySelector(".first-name");
const boxInpEmail = document.querySelector(".email");
const boxInpNumber = document.querySelector(".number");
const boxInpMessage = document.querySelector(".message");

const sendMessageBtn = document.querySelector(".message-send");
const sendMessageSpan = document.querySelector(".message-send span");
const sendMessageImg = document.querySelector(".message-send img");

boxForm.addEventListener("submit", sendClientInfoBottom);

async function sendClientInfoBottom(event) {
  event.preventDefault();
  sendMessageBtn.setAttribute("disabled", "disabled");
  sendMessageSpan.style.display = "none";
  sendMessageImg.style.display = "block";
  const name = boxInpFirstName.value;
  const email = boxInpEmail.value;
  const phone = boxInpNumber.value;
  const message = boxInpMessage.value;

  // code fragment
  const data = {
    service_id: "service_5rnpos9",
    template_id: "template_m6foe5b",
    user_id: "aW4sxoIZdUNU_e_qe",
    template_params: {
      from_name: name,
      to_name: "Anton",
      phone,
      message,
      email,

      "g-recaptcha-response": "03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...",
    },
  };
  try {
    await axios.post(EMAIL_API, data);
    boxInpFirstName.value = "";
    boxInpEmail.value = "";
    boxInpNumber.value = "";
    boxInpMessage.value = "";
    Toastify({
      text: "Your message sucssesfully send",
      duration: 3000,
      //   destination: "https://github.com/apvarun/toastify-js", - перенаправление при клике
      //   newWindow: true, - открыть в новом окне или остаться в этом (true - новое окно)
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #ff8b84, #c21523)", // напрвление градиента
      },
      onClick: function () {}, // Callback after click
    }).showToast();
    sendMessageBtn.removeAttribute("disabled");
    sendMessageSpan.style.display = "block";
    sendMessageImg.style.display = "none";
  } catch (e) {
    console.log(e);
  }
}
IMask(boxInpNumber, maskPhoneOptions);

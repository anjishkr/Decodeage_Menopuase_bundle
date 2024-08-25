document.addEventListener("DOMContentLoaded", () => {
  const dropdownBtns = document.querySelectorAll(".dropdown-btn");

  dropdownBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const dropdownContent = this.nextElementSibling;
      dropdownContent.classList.toggle("show");
    });
  });

  document.addEventListener("click", (event) => {
    dropdownBtns.forEach(function (btn) {
      let dropdownContent = btn.nextElementSibling;
      if (!event.target.matches(".dropdown-btn") && !event.target.matches(".dropdown-content")) {
        dropdownContent.classList.remove("show");
      }
    });
  });
});




// const btnQtyMinus = document.getElementById('span1')
// const btnQtyPlus = document.getElementById('span3')
// let spn = document.getElementById('span2')
// let count = 1;


// btnQtyMinus.addEventListener('click', () => {
//     if (count > 1) {
//         count--;
//         spn.innerText = count;
//         console.log("-")
//     }

// })
// btnQtyPlus.addEventListener('click', () => {
//     count++;
//     spn.innerText = count;
//     console.log("+")
// })

const btnQtyMinus = document.getElementById('minus')
const btnQtyPlus = document.getElementById('plus')
let spn = document.getElementById('item-quantity')
let count = 1;


btnQtyMinus.addEventListener('click', () => {
  if (count > 1) {
    count--;
    spn.innerText = count;
  }

})
btnQtyPlus.addEventListener('click', () => {
  count++;
  spn.innerText = count;
})

document.addEventListener('DOMContentLoaded', function () {
  const subscribeRadio = document.getElementById('subscribe');
  const subscription_discount = document.getElementById("subscription-discount");
  const otherRadio = document.getElementById('one-time');
  const border1 = document.getElementById('blue-border-1');
  const border2 = document.getElementById('blue-border-2');
  const radioListData = document.getElementById('radio-list-data');


  function updateBorders() {
    if (subscribeRadio.checked) {
      border1.style.border = 'none';
      border2.style.border = '1px solid #1125d0';
      subscription_discount.style.marginTop = "20px"
      subscription_discount.style.display = "flex";
      radioListData.style.display = 'block';
    } else if (otherRadio.checked) {
      border1.style.border = '1px solid #1125d0';
      border2.style.border = 'none';
      radioListData.style.display = 'none';
      subscription_discount.style.display = "none";

    } else {
      border1.style.border = 'none';
      border2.style.border = 'none';
      radioListData.style.display = 'none';
      subscription_discount.style.display = "none";

    }
  }

  updateBorders();

  subscribeRadio.addEventListener('change', updateBorders);
  otherRadio.addEventListener('change', updateBorders);
});

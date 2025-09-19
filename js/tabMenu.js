const tabButtons = document.querySelectorAll(".tab-button li");
// console.log(tabButtons);
const tabContents = document.querySelectorAll(".tab-contents > ul > li");
// console.log(tabContents);

tabButtons.forEach((tabButton, index) => {
  tabButton.addEventListener("click", (e) => {
    e.preventDefault(); // a 태그 기본동작 방지
    // console.log(`${index}탭버튼 클릭!`);

    tabButtons.forEach((item) => {
      item.classList.remove("active");
    });
    tabContents.forEach((item) => {
      item.classList.remove("active");
    });

    tabButton.classList.add("active");
    tabContents[index].classList.add("active");
  });
});

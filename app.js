/***** METHOD I *****/

// const tabBtns = document.querySelectorAll(".tab-btn");
// const articles = document.querySelectorAll(".content");

// tabBtns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     // remove active class for buttons
//     tabBtns.forEach(function (btn) {
//       btn.classList.remove("active");
//     });
//     // add active class to clicked button
//     e.currentTarget.classList.add("active");
//     // remove active class for articles
//     articles.forEach(function (article) {
//       article.classList.remove("active");
//     });
//     // add active class for desired article
//     const id = e.currentTarget.dataset.id;
//     currentSection = document.getElementById(id);
//     currentSection.classList.add("active");
//   });
// });

/***** METHOD II *****/
const aboutArticle = document.querySelector(".about");
const tabBtns = document.querySelectorAll(".tab-btn");
const contentList = document.querySelectorAll(".content");

aboutArticle.addEventListener("click", function (e) {
  // button
  const id = e.target.dataset.id;
  if (id) {
    tabBtns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
  }
  //   content
  contentList.forEach(function (content) {
    content.classList.remove("active");
  });
  const currentSection = document.getElementById(id);
  currentSection.classList.add("active");
});

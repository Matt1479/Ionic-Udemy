const courseName = document.querySelector("#course-name");
const courseRating = document.querySelector("#course-rating");
const confirmBtm = document.querySelector("#confirm-btn");
const coursesOutput = document.querySelector("#courses-output");

const presentAlert = async () => {
  const alert = document.createElement("ion-alert");
  alert.header = "Invalid inputs";
  alert.message = "Please enter a valid name and rating.";
  alert.buttons = ["OK"];

  document.body.appendChild(alert);
  await alert.present();
};

const clear = () => {
  courseName.value = "";
  courseRating.value = "";
};

confirmBtm.addEventListener("click", () => {
  const name = courseName.value;
  const rating = courseRating.value;

  if (name.trim().length < 1 || rating < 1 || rating > 5 || rating.length < 1) {
    presentAlert();
    return;
  }
  const newCourse = document.createElement("ion-item");
  newCourse.innerHTML = "<b>" + name + " - " + rating + "/5" + "</b>";

  coursesOutput.appendChild(newCourse);

  clear();
});

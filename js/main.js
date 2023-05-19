selectedType = eSubjects.geometry;
selectedQuestions = [];
timer = new Timer();
startDlg = new StartDialog();
dataBuilder = new DataBuilder();

/*-------------------------------------------*/

function startQuiz(data) {
  $(".questions-panel").addClass("show");
  timer.start();
}

/*-------------------------------------------*/

function showStartDlg() {
  $(".start-panel").hide();
  startDlg.show();
}

/*-------------------------------------------*/

function registerEvents() {
  $(".start-btn").on("click", () => {
    showStartDlg();
  });
}

//-----------------------------------------------------

function onInit() {
  registerEvents();

  startDlg.set((data) => {
    startQuiz(data);
  })
}

//-----------------------------------------------------

showLoader = (show) => {

}

//-----------------------------------------------------

$(document).ready(() => {
  showLoader(true);

  dataBuilder.build(() => {
    onInit();
    showLoader(false);
  })
});

selectedType = eSubjects.geometry;
selectedQuestions = [];
timer = new Timer();
startDlg = new StartDialog();

function showQuestion(index) {
  $(`.body`).html('');

  let question = questions_bank[index];
  if (question) {
    question.q.forEach((item) => {
      $(`.body`).html(`<div><img src="../assets/questions/${item}.png"></div>`);
    })
  }
}

//-----------------------------------------------------

function buildSelectedQuestionsArr() {

  selectedQuestions = [];

  questions_bank.forEach((question, index) => {
    if (question.type === selectedType) {
      selectedQuestions.push(index)
    }
  })

  selectedQuestions = _.shuffle(selectedQuestions);
}

/*-------------------------------------------*/

function showStartDlg() {
  $(".start-panel").hide();
  startDlg.show();
}

/*-------------------------------------------*/

function startQuiz(data) {
  debugger;
  console.log(data);
  $(".questions-panel").addClass("show");
  timer.start();
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

$(document).ready(() => {
  onInit();
});

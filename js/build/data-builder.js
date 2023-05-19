function DataBuilder() {

  jsonLoader = new JsonLoader();
  fileValidator = new FileValidator();

  tests = [];
  filesUrls = [
    "../../assets/questions/MALLO/2022/w/data.json",
    "../../assets/questions/MALLO/2022/sp/data.json",
    "../../assets/questions/MALLO/2022/su/data.json",
    "../../assets/questions/MALLO/2022/a/data.json"
  ];

  //-----------------------------------------

  buildQuestion = (test, question, chapter) => {
    let qInfo = question.split(":");

    qBank.push({
      publisher: test.publisher,
      year: test.year,
      season: test.season,
      chapter: chapter,
      qNum: parseInt(qInfo[0]),
      qType: qInfo[1],
      aNum: parseInt(qInfo[2])
    });
  }
}

//-----------------------------------------

processFile = (file) => {
  if (fileValidator.validate(file.name, file.data)) {
    Object.values(eChapters).forEach((chapter) => {
      file.data.questions[chapter].forEach((question) => {
        addQuestion(file.data, question, chapter);
      })
    });
  }
}

//-----------------------------------------

processFiles = (fileIndex, cb) => {
  let file = files[fileIndex];

  setTimeout(() => {
    processFile(file);

    if (fileIndex < files.length - 1) {
      processFiles(fileIndex + 1, cb)
    } else {
      cb();
    }
  }, 250);
}

//-----------------------------------------

loadTestFiles = () => {
  filesUrls.forEach((fileUrl) => {
    loadFile(fileUrl, (json) => {
      files.push({
        name: fileUrl,
        data: json
      });
      if (files.length === filesUrls.length) {
        cb();
      }
    })
  });
}

//-----------------------------------------

build = (cb) => {
  loadTestFiles(() => {
    processFiles(0, () => {
      cb();
    })
  })
}

return {
  build: build
}


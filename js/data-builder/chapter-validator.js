function ChapterValidator() {

  utils = new Utils();

  isChapterValid = (fileName, fileData, chapterName, maxLen, options) => {

    if (fileData.questions[chapterName].length !== maxLen) {
      console.log(`chapter ${chapterName} in ${fileName} is invalid.`);
      return false;
    }

    fileData.questions[chapterName].forEach((item, index) => {
      let info = item.split(":");

      if (info.length !== 3) {
        console.log(`chapter ${chapterName} in ${fileName} is invalid.`);
        return false;
      }

      if (!options.includes(info[1])) {
        console.log(`chapter ${chapterName} in ${fileName} is invalid.`);
        return false;
      }

      if (!utils.isEq(info[0], index)) {
        console.log(`chapter ${chapterName} in ${fileName} is invalid.`);
        return false;
      }

      if (!utils.isBetween(info[0], 1, 4)
      ) {
        console.log(`chapter ${chapterName} in ${fileName} is invalid.`);
        return false;
      }
    });
    return true;
  };

  //----------------------------------------------

  checkChapter = (fileName, fileData, chapterName) => {
    if (chapterName.startWith("math")) {
      return isChapterValid(fileName, fileData, chapterName, 20, MATH_AREAS_ARR);
    }
    if (chapterName.includes("he")) {
      return isChapterValid(fileName, fileData, chapterName, 17, HE_AREAS_ARR);
    }
    if (chapterName.includes("en")) {
      return isChapterValid(fileName, fileData, chapterName, 12, EN_AREAS_ARR);
    }
  };

  //------------------------------------------

  return {
    checkChapter: checkChapter
  }
}

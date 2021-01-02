const defaultIdleTimeout = 5e3,
  assignmentLoadDelay = 1e3,
  previewLoadDelay = 8e3,
  submitLoadDelay = 5e3,
  selectors = {
    incompleteBtn: "#IsIncompleteYes",
    notesTextarea:
      "#gradingNode > div > div:nth-child(1) > table > tbody > tr:nth-child(8) > td:nth-child(2) > textarea",
    star1:
      "#gradingNode > div > div:nth-child(1) > table > tbody > tr:nth-child(7) > td:nth-child(2) > span.pull-left.ml-3.mt-1.stars > i:nth-child(1)",
    star2:
      "#gradingNode > div > div:nth-child(1) > table > tbody > tr:nth-child(7) > td:nth-child(2) > span.pull-left.ml-3.mt-1.stars > i:nth-child(2)",
    star3:
      "#gradingNode > div > div:nth-child(1) > table > tbody > tr:nth-child(7) > td:nth-child(2) > span.pull-left.ml-3.mt-1.stars > i:nth-child(3)",
    submit: "#grade-form > button",
    previewContainer: "#gradingNode > div > div:nth-child(2)",
    assignmentBtn:
      "body > div.body-content > div:nth-child(2) > div:nth-child(3) > table > tbody > tr > td:nth-child(7) > a",
    assignmentLink: "#gradingNode > div > div:nth-child(2) > div > a",
    selectedRow:
      "body > div.body-content > div:nth-child(2) > div:nth-child(3) > table > tbody > tr.selected",
    startGame:
      "body > div.body-content > div:nth-child(2) > div > div.padding-left-3.padding-right-3 > div > div > div.col-xs-6.text-center > div:nth-child(3) > button:nth-child(1)",
  };

const setIdleTimeout = (...args) => {
  let timeoutId = setTimeout(...args);
  const alertUserAction = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(...args);
  };
  return alertUserAction;
};

const actions = {
  incomplete() {
    // Sensei declares game incomplete.
    document.querySelector(selectors.incompleteBtn).click();
    const textarea = document.querySelector(selectors.notesTextarea);
    textarea.focus();
    const updateTextarea = setIdleTimeout(
      () => document.querySelector(selectors.submit).focus(),
      defaultIdleTimeout
    );
    textarea.addEventListener("keypress", updateTextarea);
  },
  rate(stars) {
    // Sensei gives a rating out of 3 stars.
    const selectorKey = `star${stars}`;
    if (selectorKey in selectors) {
      document.querySelector(selectors[selectorKey]).click();
      this.submit();
    }
  },
  skip() {
    document.querySelector(selectors.selectedRow).remove();
    setTimeout(() => {
      this.nextAssignment();
    }, submitLoadDelay);
  },
  submit() {
    document.querySelector(selectors.submit).click();
    this.skip();
  },
  nextAssignment() {
    document.querySelector(selectors.assignmentBtn).click();
    setTimeout(() => {
      const preview = document.createElement("iframe");
      preview.width = "1600px";
      preview.height = "1400px";
      preview.src = document.querySelector(selectors.assignmentLink).href;
      preview.addEventListener("load", () => {
        setTimeout(() => {
          preview.contentDocument.querySelector(selectors.startGame).click();
        }, previewLoadDelay);
      });
      document.querySelector(selectors.previewContainer).innerHTML = "";
      document.querySelector(selectors.previewContainer).appendChild(preview);
      document
        .querySelector(selectors.previewContainer)
        .parentElement.scrollIntoView();
    }, assignmentLoadDelay);
  },
};

document.addEventListener("keypress", (event) => {
  try {
    switch (event.key) {
      case "i":
        actions.incomplete();
        break;

      case "1":
        actions.rate(1);
        break;

      case "2":
        actions.rate(2);
        break;

      case "3":
        actions.rate(3);
        break;

      case "s":
        actions.skip();
        break;

      case "enter":
        actions.submit();
        break;

      default:
        break;
    }
  } catch (error) {
    console.log(`Sensei Error: ${error}`);
  }
});

const main = () => {
  actions.nextAssignment();
};

main();

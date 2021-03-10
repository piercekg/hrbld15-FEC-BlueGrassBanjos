const helpers = {

  sortQuestions(questions, callback) {
    questions.sort((a, b) => {
      if (a.question_helpfulness > b.question_helpfulness) {
        return -1;
      }
      return 1;
    });
    callback(questions);
  },
};

export default helpers;

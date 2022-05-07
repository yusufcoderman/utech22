// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "When you go somewhere for the day, would you rather",
    answer: "WHEN YOU GO SOMEWHERE FOR THE DAY, WOULD YOU RATHER",
    options: [
      "Plan what you will and when",
      "Just Go!"
    ]
  },
    {
    numb: 2,
        question: "If you were a teacher, would you rather teach",
        answer: "IF YOU WERE A TEACHER, WOULD YOU RATHER TEACH",
    options: [
      "Facts-Based Courses, or",
      "Courses involving opinion or theory?"
    ]             
  },
    {
    numb: 3,
    question: "Are you usually",
        answer: "ARE YOU USUALLY",
    options: [
      "Good mixer with grooups of people, or",
      "Rather qouiet and reserved?"
    ]
  },
    {
    numb: 4,
        question: "Do you more often let",
        answer: "DO YOU MORE OFTEN LET",
    options: [
      "Your heart rule your head, or",
      "Your head rule your heart?"
    ]
  },
    {
    numb: 5,
        question: "In doing something that many other people do, would you rather",
        answer: "IN DOING SOMETHING THAT MANY OTHER PEOPLE DO, WOULD YOU RATHER",
    options: [
      "Invent a way of your own, or",
      "Do it in the accepted way?"
    ]
  },
  {
    numb: 6,
      question: "Among your friends are you",
      answer: "AMONG YOUR FRIENDS ARE YOU",
    options: [
      "Full of news about everybody, or",
      "One of the last to hear what is going on?"
    ]
  },
  {
    numb: 7,
      question: "Does the idea of making a list of what you should get done over a weekend",
      answer: "DOES THE IDEA OF MAKING A LIST OF WHAT YOU SHOULD GET DONE OVER A WEEKEND",
    options: [
      "Help you, or",
      "Stress you?"
    ]
  },
  {
    numb: 8,
      question: "When you have a special job to do, do you like to",
      answer: "WHEN YOU HAVE A SPECIAL JOB TO DO, DO YOU LIKE TO",
    options: [
      "Organize it carefully before you start, or",
      "Find out what is necessary as you go along?"
    ]
  },
  {
    numb: 9,
      question: "Do you tend to have",
      answer: "DO YOU TEND TO HAVE",
    options: [
      "Broad friendships with many different people, or",
      "Deep friendship with very few people?"
    ]
  },
  {
    numb: 10,
      question: "Do you admire more the people who are",
      answer: "DO YOU ADMIRE MORE THE PEOPLE WHO ARE",
    options: [
      "Normal-Acting to never make themselves the center of attention, or",
      "Too original and individual to care whether they are the center of attention or not"
    ]
  }, {
    numb: 11,
      question: "Do you prefer to",
      answer: "DO YOU PREFER TO",
    options: [
      "Arrange picnics, parties etc, well in advance, or",
      "Be free to do whatever to looks like fun when the time comes ?"
    ]
  },
  {
    numb: 12,
      question: "Do you usually get along better with",
      answer: "DO YOU USUALLY GET ALONG BETTER WITH",
    options: [
      "Realistic people, or",
      "Imaginative people?"
    ]
  },
  {
    numb: 13,
      question: "When you are with the group of people, would you usually rather",
      answer: "WHEN YOU ARE WITH THE GROUP OF PEOPLE, WOULD YOU USUALLY RATHER",
    options: [
      "Join in the talk of the group or",
      "Stand back and listen first?"
    ]
  },
    {
    numb: 14,
        question: "Is it a higher compliment to be called",
        answer: "IS IT A HIGHER COMPLIMENT TO BE CALLED",
    options: [
      "A person of real feeling, or",
      "A consistently reasonable person?"
    ]
  },
    {
    numb: 15,
        question: "In reading for pleasure, do you",
        answer: "IN READING FOR PLEASURE, DO YOU",
    options: [
      "Enjoy odd or original ways of saying things, or",
      "Like writers to say exactly what they mean?"
    ]
  },
    {
    numb: 16,
        question: "Do you",
        answer: "DO YOU",
    options: [
      "Talk easily to almost anyone for as long as you have to, or",
      "Find a lot to say only to certain people or under certain conditions ?"
    ]
  },
    {
    numb: 17,
        question: "Does following a schedule",
        answer: "DOES FOLLOWING A SCHEDULE",
    options: [
      "Appeal to you, or",
      "Cramp you?"
    ]
  },
  {
    numb: 18,
      question: "When it is settled well in advance that you will do a certain thing at a certain time, do you find it",
      answer: "WHEN IT IS SETTLED WELL IN ADVANCE THAT YOU WILL DO A CERTAIN THING AT A CERTAIN TIME, DO YOU FIND IT",
    options: [
      "Nice to be able to plan accordingly, or",
      "A little unpleasant to be tied down?"
    ]
  },
  {
    numb: 19,
      question: "Are you more successful",
      answer: "ARE YOU MORE SUCCESSFUL",
    options: [
      "At following a carefully worked out plan, or",
      "At dealing with the unexpected and seeing quickly what should be done ?"
    ]
  },
  {
    numb: 20,
      question: "Would you rather be considered",
      answer: "WOULD YOU RATHER BE CONSIDERED",
    options: [
      "A practical person, or",
      "An out-of-the-box-thinking person?"
    ]
  },
  {
    numb: 21,
      question: "In a large group, do you more often",
      answer: "IN A LARGE GROUP, DO YOU MORE OFTEN",
    options: [
      "Introduce others, or",
      "Get introduced?"
    ]
  },
  {
    numb: 22,
      question: "Do you usually",
      answer: "DO YOU USUALLY",
    options: [
      "Value emotion more than logic, or",
      "Value logic more than feelings?"
    ]
  }, {
    numb: 23,
      question: "Would you rather have as a friend",
      answer: "WOULD YOU RATHER HAVE AS A FRIEND",
    options: [
      "Someone who is always coming up with new ideas, or",
      "Someone who has both feet on the ground?"
    ]
  },
  {
    numb: 24,
      question: "Can the new people you meet tell what you are interested in",
      answer: "CAN THE NEW PEOPLE YOU MEET TELL WHAT YOU ARE INTERESTED IN",
    options: [
      "Right away, or",
      "Only after they really get to know you?"
    ]
  },
  {
    numb: 25,
      question: "(On this question only, if two answers are true, circle both) In your daily work, do you",
      answer: "(ON THIS QUESTION ONLY, IF TWO ANSWERS ARE TRUE, CIRCLE BOTH) IN YOUR DAILY WORK, DO YOU",
    options: [
      "Usually plan your work so you won’t need to work under pressure, or",
      "Rather enjoy an emergency that makes you work against time, or",
    ]
  },
    {
    numb: 26,
        question: "Do you usually",
        answer: "DO YOU USUALLY",
    options: [
      "Show your feelings freely, or",
      "Keep your feelings to yourself?"
    ]
  },
    {
    numb: 27,
        question: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
        answer: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
    options: [
      "Scheduled",
      "Unplanned"
    ]
  },
    {
    numb: 28,
        question: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
        answer: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
    options: [
      "Facts",
      "Ideas"
    ]
  },
    {
    numb: 29,
        question: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
        answer: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
    options: [
      "Quiet",
      "Hearty"
    ]
  },
  {
    numb: 30,
      question: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
      answer: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
    options: [
      "Convincing",
      "Touching"
    ]
  },
  {
    numb: 31,
      question: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
      answer: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
    options: [
      "Imaginative",
      " Matter-of-Fact"
    ]
  },
  {
    numb: 32,
      question: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
      answer: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
    options: [
      "Benefits",
      "Blessings"
    ]
  },
  {
    numb: 33,
      question: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
      answer: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
    options: [
      "Peacemaker",
      "Judge"
    ]
  },
  {
    numb: 34,
      question: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
      answer: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
    options: [
      "Systematic",
      "Spontaneous"
    ]
  }, {
    numb: 35,
      question: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
      answer: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
    options: [
      "Statement",
      "Concept"
    ]
  },
  {
    numb: 36,
      question: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
      answer: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
    options: [
      "Reserved",
      "Talkative"
    ]
  },
  {
    numb: 37,
      question: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
      answer: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
    options: [
      "Analyze",
      "Sympathise"
    ]
  },
    {
    numb: 38,
        question: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
        answer: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
    options: [
      "Create",
      "Make"
    ]
  },
    {
    numb: 39,
        question: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
        answer: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
    options: [
      "Determined",
      "Devoted"
    ]
  },
    {
    numb: 40,
        question: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
        answer: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
    options: [
      "Gentle",
      "Firm"
    ]
  },
    {
    numb: 41,
        question: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
        answer: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
    options: [
      "Systematic",
      "Casual"
    ]
  },
  {
    numb: 42,
      question: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
      answer: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
    options: [
      "Certanity",
      "Theory"
    ]
  },
  {
    numb: 43,
      question: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
      answer: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
    options: [
      "Calm",
      "Lively"
    ]
  },
  {
    numb: 44,
      question: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
      answer: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
    options: [
      "Justice",
      "Mercy"
    ]
  },
  {
    numb: 45,
      question: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
      answer: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
    options: [
      "Fascinating",
      "Sensible"
    ]
  },
  {
    numb: 46,
      question: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
      answer: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
    options: [
      "Firm-Minded",
      "Warm Hearted"
    ]
  }, {
    numb: 47,
      question: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
      answer: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
    options: [
      "Feeling",
      "Thinking"
    ]
  },
  {
    numb: 48,
      question: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
      answer: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
    options: [
      "Certanity",
      "Theory"
    ]
  },
  {
    numb: 49,
      question: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
      answer: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
    options: [
      "Anticipation",
      "Compassion"
    ]
  },
  {
    numb: 50,
      question: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
      answer: "Which word in each pair appeals to you more? (Think what the word means, not how they look or how they sound)",
    options: [
      "Hard",
      "Soft"
    ]
  }
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];
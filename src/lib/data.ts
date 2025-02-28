export interface PhrasalVerb {
  id: number;
  verb: string;
  particle: string;
  meaning: string;
  examples: string[];
  level: 'beginner' | 'intermediate' | 'advanced';
  dateAdded: string;
}

export const phrasalVerbs: PhrasalVerb[] = [
  {
    id: 1,
    verb: "break",
    particle: "down",
    meaning: "1. To stop functioning (for machines, vehicles, etc.). 2. To lose emotional control and start crying.",
    examples: [
      "My car broke down on the highway yesterday.",
      "She broke down in tears when she heard the news."
    ],
    level: "beginner",
    dateAdded: "2023-05-01"
  },
  {
    id: 2,
    verb: "bring",
    particle: "up",
    meaning: "1. To mention or introduce a topic. 2. To raise a child.",
    examples: [
      "I didn't want to bring up the issue at the meeting.",
      "She was brought up by her grandparents."
    ],
    level: "beginner",
    dateAdded: "2023-05-02"
  },
  {
    id: 3,
    verb: "call",
    particle: "off",
    meaning: "To cancel something that was planned.",
    examples: [
      "They called off the wedding at the last minute.",
      "The game was called off due to bad weather."
    ],
    level: "beginner",
    dateAdded: "2023-05-03"
  },
  {
    id: 4,
    verb: "carry",
    particle: "out",
    meaning: "To perform or conduct (a task, an action, etc.).",
    examples: [
      "Scientists are carrying out experiments to test the new drug.",
      "The army carried out an attack at dawn."
    ],
    level: "intermediate",
    dateAdded: "2023-05-04"
  },
  {
    id: 5,
    verb: "come",
    particle: "across",
    meaning: "1. To find something by chance. 2. To seem or appear to others.",
    examples: [
      "I came across an old photo album while cleaning the attic.",
      "He comes across as rude, but he's actually just shy."
    ],
    level: "intermediate",
    dateAdded: "2023-05-05"
  },
  {
    id: 6,
    verb: "figure",
    particle: "out",
    meaning: "To understand or solve something after thinking about it.",
    examples: [
      "I can't figure out how to solve this math problem.",
      "Did you figure out why the car wasn't starting?"
    ],
    level: "beginner",
    dateAdded: "2023-05-06"
  },
  {
    id: 7,
    verb: "give",
    particle: "up",
    meaning: "1. To stop trying to do something. 2. To surrender.",
    examples: [
      "Don't give up on your dreams.",
      "The criminals gave themselves up to the police."
    ],
    level: "beginner",
    dateAdded: "2023-05-07"
  },
  {
    id: 8,
    verb: "look",
    particle: "up",
    meaning: "1. To search for information in a reference book or database. 2. To improve (for situations).",
    examples: [
      "I had to look up the word in the dictionary.",
      "Things are finally looking up for our business."
    ],
    level: "beginner",
    dateAdded: "2023-05-08"
  },
  {
    id: 9,
    verb: "make",
    particle: "up",
    meaning: "1. To invent a story or lie. 2. To reconcile after an argument.",
    examples: [
      "She made up an excuse for being late.",
      "The couple made up after their fight."
    ],
    level: "intermediate",
    dateAdded: "2023-05-09"
  },
  {
    id: 10,
    verb: "put",
    particle: "off",
    meaning: "To postpone or delay something.",
    examples: [
      "We've put off the decision until next week.",
      "You shouldn't put off going to the doctor."
    ],
    level: "intermediate",
    dateAdded: "2023-05-10"
  },
  {
    id: 11,
    verb: "turn",
    particle: "down",
    meaning: "1. To reject or refuse an offer or request. 2. To reduce the volume, heat, etc.",
    examples: [
      "She turned down the job offer because the salary was too low.",
      "Please turn down the music, it's too loud."
    ],
    level: "beginner",
    dateAdded: "2023-05-11"
  },
  {
    id: 12,
    verb: "take",
    particle: "off",
    meaning: "1. To remove (clothing). 2. To leave the ground and begin to fly. 3. To suddenly become successful.",
    examples: [
      "He took off his jacket when he entered the room.",
      "The plane took off on time despite the bad weather.",
      "Her career really took off after she won that award."
    ],
    level: "beginner",
    dateAdded: "2023-05-12"
  },
  {
    id: 13,
    verb: "run",
    particle: "into",
    meaning: "1. To meet someone by chance. 2. To unexpectedly encounter a problem.",
    examples: [
      "I ran into my old teacher at the supermarket yesterday.",
      "We ran into some difficulties with the project timeline."
    ],
    level: "intermediate",
    dateAdded: "2023-05-13"
  },
  {
    id: 14,
    verb: "get",
    particle: "along",
    meaning: "To have a good relationship with someone.",
    examples: [
      "She gets along well with her new colleagues.",
      "How are you getting along with your roommate?"
    ],
    level: "beginner",
    dateAdded: "2023-05-14"
  },
  {
    id: 15,
    verb: "look",
    particle: "after",
    meaning: "To take care of or be responsible for someone or something.",
    examples: [
      "Could you look after my dog while I'm on vacation?",
      "She's been looking after her elderly mother for years."
    ],
    level: "beginner",
    dateAdded: "2023-05-15"
  },
  {
    id: 16,
    verb: "set",
    particle: "up",
    meaning: "1. To establish or start something. 2. To arrange equipment so it's ready to use.",
    examples: [
      "They set up a new business last year.",
      "Can you help me set up the new computer?"
    ],
    level: "intermediate",
    dateAdded: "2023-05-16"
  },
  {
    id: 17,
    verb: "go",
    particle: "on",
    meaning: "1. To continue. 2. To happen or take place.",
    examples: [
      "Despite the interruption, the speaker went on with her presentation.",
      "What's going on here? Why is everyone so excited?"
    ],
    level: "beginner",
    dateAdded: "2023-05-17"
  },
  {
    id: 18,
    verb: "come",
    particle: "up",
    meaning: "1. To arise or be mentioned. 2. To approach or move nearer.",
    examples: [
      "An interesting question came up during the meeting.",
      "A stranger came up to me and asked for directions."
    ],
    level: "intermediate",
    dateAdded: "2023-05-18"
  },
  {
    id: 19,
    verb: "hold",
    particle: "on",
    meaning: "1. To wait or be patient. 2. To grip something tightly.",
    examples: [
      "Hold on a moment, I'll be right with you.",
      "Hold on to the railing when you climb the stairs."
    ],
    level: "beginner",
    dateAdded: "2023-05-19"
  },
  {
    id: 20,
    verb: "check",
    particle: "out",
    meaning: "1. To investigate or examine. 2. To borrow from a library. 3. To leave a hotel.",
    examples: [
      "You should check out that new restaurant downtown.",
      "I checked out three books from the library.",
      "We need to check out of the hotel by noon."
    ],
    level: "beginner",
    dateAdded: "2023-05-20"
  },
  {
    id: 21,
    verb: "work",
    particle: "out",
    meaning: "1. To exercise. 2. To solve or calculate. 3. To end with a positive result.",
    examples: [
      "She works out at the gym three times a week.",
      "Let me work out the total cost for you.",
      "I'm glad things worked out between you two."
    ],
    level: "beginner",
    dateAdded: "2023-05-21"
  },
  {
    id: 22,
    verb: "pick",
    particle: "up",
    meaning: "1. To lift something from a surface. 2. To collect someone. 3. To learn something without formal instruction.",
    examples: [
      "He picked up the book from the floor.",
      "I'll pick you up at the airport tomorrow.",
      "She picked up Spanish while traveling in South America."
    ],
    level: "beginner",
    dateAdded: "2023-05-22"
  },
  {
    id: 23,
    verb: "grow",
    particle: "up",
    meaning: "To develop from a child into an adult.",
    examples: [
      "He grew up in a small town in Italy.",
      "Children grow up so fast these days."
    ],
    level: "beginner",
    dateAdded: "2023-05-23"
  },
  {
    id: 24,
    verb: "fill",
    particle: "out",
    meaning: "To complete a form or document with the required information.",
    examples: [
      "Please fill out this application form and return it by Friday.",
      "Have you filled out your tax return yet?"
    ],
    level: "beginner",
    dateAdded: "2023-05-24"
  },
  {
    id: 25,
    verb: "find",
    particle: "out",
    meaning: "To discover or learn something.",
    examples: [
      "I found out that she's moving to another country.",
      "Let me find out when the next train leaves."
    ],
    level: "beginner",
    dateAdded: "2023-05-25"
  },
  {
    id: 26,
    verb: "come",
    particle: "back",
    meaning: "To return to a place.",
    examples: [
      "When are you coming back from your vacation?",
      "She came back to her hometown after living abroad for ten years."
    ],
    level: "beginner",
    dateAdded: "2023-05-26"
  },
  {
    id: 27,
    verb: "go",
    particle: "through",
    meaning: "1. To experience something difficult. 2. To examine or search carefully.",
    examples: [
      "She's going through a difficult divorce.",
      "The security guard went through all the bags at the entrance."
    ],
    level: "intermediate",
    dateAdded: "2023-05-27"
  },
  {
    id: 28,
    verb: "look",
    particle: "for",
    meaning: "To try to find something or someone.",
    examples: [
      "I'm looking for my keys. Have you seen them?",
      "They're looking for a new apartment in the city center."
    ],
    level: "beginner",
    dateAdded: "2023-05-28"
  },
  {
    id: 29,
    verb: "turn",
    particle: "up",
    meaning: "1. To appear unexpectedly. 2. To increase the volume.",
    examples: [
      "He turned up at the party without an invitation.",
      "Can you turn up the radio? I love this song."
    ],
    level: "intermediate",
    dateAdded: "2023-05-29"
  },
  {
    id: 30,
    verb: "put",
    particle: "on",
    meaning: "1. To dress in a piece of clothing. 2. To start playing music, a movie, etc.",
    examples: [
      "Put on your coat before going outside, it's cold.",
      "Let's put on some music and dance."
    ],
    level: "beginner",
    dateAdded: "2023-05-30"
  },
  {
    id: 31,
    verb: "take",
    particle: "over",
    meaning: "1. To assume control or responsibility. 2. To replace someone in a position or role.",
    examples: [
      "The vice president took over when the president resigned.",
      "A larger company has taken over our business."
    ],
    level: "intermediate",
    dateAdded: "2023-05-31"
  },
  {
    id: 32,
    verb: "get",
    particle: "over",
    meaning: "1. To recover from an illness or a difficult experience. 2. To accept and move on from something disappointing.",
    examples: [
      "It took him weeks to get over the flu.",
      "She never really got over her father's death."
    ],
    level: "intermediate",
    dateAdded: "2023-06-01"
  },
  {
    id: 33,
    verb: "break",
    particle: "up",
    meaning: "1. To end a relationship. 2. To separate into smaller pieces or groups.",
    examples: [
      "They broke up after dating for three years.",
      "The teacher broke up the class into small discussion groups."
    ],
    level: "beginner",
    dateAdded: "2023-06-02"
  },
  {
    id: 34,
    verb: "come",
    particle: "on",
    meaning: "1. To hurry up or encourage someone. 2. To begin functioning (for machines, lights, etc.).",
    examples: [
      "Come on! We're going to be late for the movie.",
      "The street lights come on automatically at sunset."
    ],
    level: "beginner",
    dateAdded: "2023-06-03"
  },
  {
    id: 35,
    verb: "go",
    particle: "out",
    meaning: "1. To leave home for social activities. 2. To stop burning or functioning (for lights, fire, etc.).",
    examples: [
      "They go out for dinner every Friday night.",
      "The lights went out during the storm."
    ],
    level: "beginner",
    dateAdded: "2023-06-04"
  },
  {
    id: 36,
    verb: "keep",
    particle: "up",
    meaning: "1. To maintain a certain level or standard. 2. To continue doing something.",
    examples: [
      "Keep up the good work!",
      "She's finding it hard to keep up with her studies while working full-time."
    ],
    level: "intermediate",
    dateAdded: "2023-06-05"
  },
  {
    id: 37,
    verb: "look",
    particle: "forward to",
    meaning: "To anticipate something with pleasure or excitement.",
    examples: [
      "I'm looking forward to seeing you next week.",
      "The children are looking forward to the school trip."
    ],
    level: "beginner",
    dateAdded: "2023-06-06"
  },
  {
    id: 38,
    verb: "run",
    particle: "out of",
    meaning: "To use up all of something and have none left.",
    examples: [
      "We've run out of milk. Can you buy some on your way home?",
      "My phone ran out of battery during the meeting."
    ],
    level: "beginner",
    dateAdded: "2023-06-07"
  },
  {
    id: 39,
    verb: "stand",
    particle: "up",
    meaning: "1. To rise to a standing position. 2. To fail to meet someone as arranged.",
    examples: [
      "Everyone stood up when the judge entered the courtroom.",
      "He stood me up on our first date."
    ],
    level: "intermediate",
    dateAdded: "2023-06-08"
  },
  {
    id: 40,
    verb: "throw",
    particle: "away",
    meaning: "To dispose of something you no longer want or need.",
    examples: [
      "Don't throw away those old magazines, I still need them.",
      "She threw away all her ex-boyfriend's letters."
    ],
    level: "beginner",
    dateAdded: "2023-06-09"
  },
  {
    id: 41,
    verb: "turn",
    particle: "off",
    meaning: "1. To stop the flow of water, gas, electricity, etc. 2. To switch off a device.",
    examples: [
      "Don't forget to turn off the lights when you leave.",
      "He turned off the TV and went to bed."
    ],
    level: "beginner",
    dateAdded: "2023-06-10"
  },
  {
    id: 42,
    verb: "wake",
    particle: "up",
    meaning: "To stop sleeping and become conscious.",
    examples: [
      "I woke up at 6 AM this morning.",
      "The noise from the street woke me up in the middle of the night."
    ],
    level: "beginner",
    dateAdded: "2023-06-11"
  },
  {
    id: 43,
    verb: "write",
    particle: "down",
    meaning: "To make a written record of something.",
    examples: [
      "Write down my phone number so you don't forget it.",
      "The teacher asked us to write down our answers on a piece of paper."
    ],
    level: "beginner",
    dateAdded: "2023-06-12"
  },
  {
    id: 44,
    verb: "back",
    particle: "up",
    meaning: "1. To move backwards. 2. To make a copy of computer data for security.",
    examples: [
      "You need to back up your car to let the other vehicle pass.",
      "Remember to back up your important files regularly."
    ],
    level: "intermediate",
    dateAdded: "2023-06-13"
  },
  {
    id: 45,
    verb: "blow",
    particle: "up",
    meaning: "1. To explode. 2. To inflate with air.",
    examples: [
      "The bomb blew up near the government building.",
      "Can you help me blow up these balloons for the party?"
    ],
    level: "intermediate",
    dateAdded: "2023-06-14"
  },
  {
    id: 46,
    verb: "call",
    particle: "back",
    meaning: "To return a phone call.",
    examples: [
      "I'll call you back as soon as the meeting is over.",
      "She promised to call back but never did."
    ],
    level: "beginner",
    dateAdded: "2023-06-15"
  },
  {
    id: 47,
    verb: "drop",
    particle: "off",
    meaning: "1. To deliver someone or something. 2. To fall asleep.",
    examples: [
      "I'll drop you off at the station on my way to work.",
      "He dropped off during the boring lecture."
    ],
    level: "intermediate",
    dateAdded: "2023-06-16"
  },
  {
    id: 48,
    verb: "get",
    particle: "back",
    meaning: "1. To return to a place. 2. To receive something again that you had before.",
    examples: [
      "What time did you get back from the concert?",
      "She finally got back her stolen bicycle."
    ],
    level: "beginner",
    dateAdded: "2023-06-17"
  },
  {
    id: 49,
    verb: "hang",
    particle: "out",
    meaning: "To spend time relaxing or socializing.",
    examples: [
      "Teenagers often hang out at the mall after school.",
      "We're just hanging out at home this weekend."
    ],
    level: "beginner",
    dateAdded: "2023-06-18"
  },
  {
    id: 50,
    verb: "let",
    particle: "down",
    meaning: "1. To disappoint someone. 2. To lower something.",
    examples: [
      "I don't want to let down my parents by failing the exam.",
      "Let down your hair, it looks better that way."
    ],
    level: "intermediate",
    dateAdded: "2023-06-19"
  },
  {
    id: 51,
    verb: "pass",
    particle: "out",
    meaning: "1. To faint or lose consciousness. 2. To distribute items to people.",
    examples: [
      "He passed out from the heat during the marathon.",
      "The teacher passed out the test papers to the students."
    ],
    level: "intermediate",
    dateAdded: "2023-06-20"
  },
  {
    id: 52,
    verb: "show",
    particle: "up",
    meaning: "To arrive or appear, especially at an expected time or place.",
    examples: [
      "He didn't show up for the interview.",
      "Only half the invited guests showed up at the party."
    ],
    level: "beginner",
    dateAdded: "2023-06-21"
  },
  {
    id: 53,
    verb: "take",
    particle: "out",
    meaning: "1. To remove something from a place. 2. To go on a date with someone.",
    examples: [
      "Don't forget to take out the trash before you go to bed.",
      "He's taking her out to dinner for her birthday."
    ],
    level: "beginner",
    dateAdded: "2023-06-22"
  },
  {
    id: 54,
    verb: "try",
    particle: "on",
    meaning: "To put on a piece of clothing to see if it fits or looks good.",
    examples: [
      "She tried on several dresses before choosing one for the wedding.",
      "Can I try on these shoes in size 8, please?"
    ],
    level: "beginner",
    dateAdded: "2023-06-23"
  },
  {
    id: 55,
    verb: "use",
    particle: "up",
    meaning: "To consume or exhaust a supply of something.",
    examples: [
      "We've used up all the milk, so I need to buy more.",
      "The printer has used up all the ink cartridges."
    ],
    level: "intermediate",
    dateAdded: "2023-06-24"
  },
  {
    id: 56,
    verb: "watch",
    particle: "out",
    meaning: "To be careful or vigilant.",
    examples: [
      "Watch out for cars when crossing the street.",
      "Watch out! There's a bee flying around your head."
    ],
    level: "beginner",
    dateAdded: "2023-06-25"
  },
  {
    id: 57,
    verb: "wear",
    particle: "out",
    meaning: "1. To make something unusable through overuse. 2. To exhaust someone.",
    examples: [
      "He wore out his shoes after walking for miles every day.",
      "Playing with the children all day wore me out."
    ],
    level: "intermediate",
    dateAdded: "2023-06-26"
  },
  {
    id: 58,
    verb: "wind",
    particle: "up",
    meaning: "1. To end up in a situation. 2. To tighten the spring of a clock or toy.",
    examples: [
      "We got lost and wound up in a completely different neighborhood.",
      "You need to wind up the toy before it will work."
    ],
    level: "advanced",
    dateAdded: "2023-06-27"
  },
  {
    id: 59,
    verb: "wrap",
    particle: "up",
    meaning: "1. To finish or complete something. 2. To cover something by winding paper, cloth, etc. around it.",
    examples: [
      "Let's wrap up this meeting, it's getting late.",
      "She wrapped up the birthday present with colorful paper."
    ],
    level: "intermediate",
    dateAdded: "2023-06-28"
  },
  {
    id: 60,
    verb: "zoom",
    particle: "in",
    meaning: "To magnify an image or part of an image on a screen.",
    examples: [
      "Zoom in on that photo to see if you can read the license plate.",
      "The camera zoomed in on the actor's face during the emotional scene."
    ],
    level: "intermediate",
    dateAdded: "2023-06-29"
  }
];

export function getPhrasalVerbForDate(date: Date): PhrasalVerb {
  // Use the day of the year as an index into the array
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - startOfYear.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  
  // Use modulo to cycle through the array if there are more days than verbs
  const index = dayOfYear % phrasalVerbs.length;
  
  return phrasalVerbs[index];
}

export function getAllPhrasalVerbs(): PhrasalVerb[] {
  return phrasalVerbs;
}

export function getPhrasalVerbById(id: number): PhrasalVerb | undefined {
  return phrasalVerbs.find(verb => verb.id === id);
}

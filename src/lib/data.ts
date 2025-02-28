
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

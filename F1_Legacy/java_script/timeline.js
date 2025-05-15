const timelineData = [
  {
      id: 3,
      title: "End of World War II",
      date: "September 2, 1945",
      year: 1945,
      category: "history",
      description: "Japan formally surrendered, ending World War II.",
      details: "Following the atomic bombings of Hiroshima and Nagasaki, Japan surrendered to the Allies on August 15, 1945. The formal surrender ceremony took place aboard the USS Missouri in Tokyo Bay on September 2, 1945, officially ending World War II."
  },
  {
      id: 4,
      title: "Discovery of DNA Structure",
      date: "April 25, 1953",
      year: 1953,
      category: "science",
      description: "James Watson and Francis Crick announced the discovery of the DNA double helix structure.",
      details: "James Watson and Francis Crick described the molecular structure of DNA, which they called a 'double helix.' Their work relied on crucial X-ray diffraction data collected by Rosalind Franklin and Maurice Wilkins. This discovery was one of the most significant in biology, revealing how genetic information is carried in living organisms."
  },
  {
      id: 1,
      title: "First Moon Landing",
      date: "July 20, 1969",
      year: 1969,
      category: "science",
      description: "Neil Armstrong and Buzz Aldrin became the first humans to land on the Moon.",
      details: "Apollo 11 was the spaceflight that first landed humans on the Moon. Commander Neil Armstrong and lunar module pilot Buzz Aldrin formed the American crew that landed the Apollo Lunar Module Eagle on July 20, 1969. Armstrong became the first person to step onto the lunar surface six hours later, and Aldrin joined him 19 minutes later."
  },
  {
      id: 8,
      title: "First Personal Computer",
      date: "January 1, 1975",
      year: 1975,
      category: "technology",
      description: "The Altair 8800, one of the first personal computers, was released.",
      details: "The Altair 8800 is widely recognized as the spark that led to the personal computer revolution of the next few decades. It was designed by MITS and based on the Intel 8080 CPU. The computer came as a kit that had to be assembled by the purchaser."
  },
  {
      id: 2,
      title: "World Wide Web Invented",
      date: "March 12, 1989",
      year: 1989,
      category: "technology",
      description: "Tim Berners-Lee proposed the concept of the World Wide Web.",
      details: "Tim Berners-Lee, a British scientist, invented the World Wide Web while working at CERN. The web was originally conceived as a way to facilitate automatic information-sharing between scientists in universities and institutes around the world. The first website went live in 1991."
  },
  {
      id: 6,
      title: "Fall of the Berlin Wall",
      date: "November 9, 1989",
      year: 1989,
      category: "history",
      description: "The Berlin Wall fell, symbolizing the end of the Cold War.",
      details: "The Berlin Wall, which had divided East and West Berlin since 1961, fell on November 9, 1989. This event symbolized the beginning of the end of the Cold War and led to the reunification of Germany in 1990."
  },
  {
      id: 7,
      title: "Human Genome Project Completed",
      date: "April 14, 2003",
      year: 2003,
      category: "science",
      description: "Scientists announced the completion of the Human Genome Project.",
      details: "The Human Genome Project was an international scientific research project with the goal of determining the base pairs that make up human DNA and identifying and mapping all of the genes of the human genome. The project was completed in 2003, two years ahead of schedule."
  },
  {
      id: 5,
      title: "First iPhone Released",
      date: "June 29, 2007",
      year: 2007,
      category: "technology",
      description: "Apple released the first iPhone, revolutionizing the smartphone industry.",
      details: "Steve Jobs introduced the iPhone on January 9, 2007, and it was released on June 29, 2007. The device combined a mobile phone, widescreen iPod, and internet communicator. It fundamentally changed how people interact with technology and sparked the smartphone revolution."
  }
];

const timelineTree = document.getElementById('timeline-tree');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('search-input');
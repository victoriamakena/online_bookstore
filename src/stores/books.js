import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBooksStore = defineStore('books',  {
   state: () => {
      const books={
          0 : {
              id: 1,
              image: "/atomicHabits.jpg",
              name: "Atomic Habits",
              price:  2000,
              description: "Building good habits and breaking bad ones.",
              author: "James Clear",
              long_description: "Atomic Habits is a self-improvement book by James Clear that explains how small, consistent changes in daily behavior can lead to remarkable long-term results. Rather than focusing on big goals, Clear emphasizes building effective systems and habits through tiny improvements that compound over time. The book introduces practical strategies for creating good habits, breaking bad ones, and making positive behaviors easier and more automatic by shaping one's environment and routines. Using insights from psychology, neuroscience, and real-life examples, *Atomic Habits* shows readers how incremental progress can transform their personal, academic, and professional lives.",
              genre: "Self-help",
              rating: 4.8
          },
           1 : {
              id: 2,
              image: "/howToTalk.jpg",
              name: "How To Talk So Kids Will Listen & How To Listen So Kids Will Talk",
              price:   1000,
              description: "The art of listening and speaking for the healthy growth of a family.",
              author: "Adele Faber & Elaine Mazlish",
               long_description: "How to Talk So Kids Will Listen & Listen So Kids Will Talk by Adele Faber and Elaine Mazlish is a parenting guide that teaches effective communication techniques for building stronger relationships with children. Rather than relying on punishment, criticism, or arguments, the authors show parents and caregivers how to acknowledge children's feelings, encourage cooperation, set limits respectfully, and help children develop problem-solving skills. Through practical examples, dialogues, and exercises, the book offers tools for reducing conflict and fostering mutual respect between adults and children",
              genre: "Parenting",
              rating: 4.7
          },
           2 : {
              id: 3,
              image: "/psychologyOfMoney.jpg",
              name: "Psychology Of Money",
              price:  1500,
              description: "The ins and outs to financial success.",
              author: "Morgan Housel",
               long_description: "The Psychology of Money by Morgan Housel explores how people's emotions, experiences, and behaviors influence their financial decisions more than intelligence or technical knowledge. Through a collection of engaging stories and lessons, Housel explains why success with money often depends on habits such as patience, discipline, humility, and long-term thinking. Rather than focusing on investing formulas or complex financial strategies, the book examines the psychological side of wealth, showing how mindset can shape financial outcomes.",
              genre: "Personal Finance",
              rating: 4.7
          },
           3 : {
              id: 4,
              image: "/richDad.jpg",
              name: "Rich Dad, Poor Dad",
              price:  800,
              description: "Making money work for you rather than working for the money.",
              author: "Robert T. Kiyosaki",
               long_description: "Rich Dad Poor Dad by Robert T. Kiyosaki is a personal finance book that contrasts the financial philosophies of two father figures in the author's life: his highly educated but financially struggling Poor Dad and his friend's wealthy, entrepreneurial Rich Dad. Through stories and lessons, Kiyosaki challenges traditional beliefs about money, education, and employment, emphasizing the importance of financial literacy, investing, entrepreneurship, and acquiring income-generating assets. The book encourages readers to think differently about wealth and to make money work for them rather than relying solely on a paycheck.",
              genre: "Financial Literacy",
              rating: 4.7
          },
            4 : {
              id: 5,
              image: "/book5.jpg",
              name: "Thinking, Fast and Slow",
              price:  2000,
              description: "Explores the two systems of thinking that drive human judgment and decision-making.",
              author: "Daniel Khaneman",
              long_description: "Nobel Prize-winning psychologist Daniel Kahneman explains how the mind operates through two systems of thinking: a fast, intuitive system and a slower, analytical one. The book explores cognitive biases and decision-making.",
              genre: "Psychology",
              rating: 4.2
          },
            5 : {
              id: 6,
              image: "/book6.jpg",
              name: "Good to Great",
              price:  1400,
              description: "An analysis of how companies transform from average performers into exceptional organizations.",
              author: "Jim Collins",
              long_description: "Based on extensive research, Jim Collins examines why some companies achieve sustained excellence while others remain merely good. The book introduces influential concepts such as Level 5 Leadership and the Hedgehog Concept.",
              genre: "Management",
              rating: 4.1
          },
            6 : {
              id: 7,
              image: "/book7.jpg",
              name: "Start With Why",
              price: 2500,
              description: "A leadership book explaining why great leaders inspire action by communicating purpose first.",
              author: "Simon Sinek",
              long_description: "Leadership expert Simon Sinek argues that the most successful organizations and leaders begin by clearly communicating why they exist before explaining what they do or how they do it. Using examples from business, politics, and innovation, Sinek introduces the Golden Circle framework and demonstrates how purpose-driven leadership can inspire loyalty, trust, and long-term success. The book is particularly popular among entrepreneurs, managers, and anyone interested in leadership development.",
              genre: "Business",
              rating: 4.5
          },
            7 : {
              id: 8,
              image: "/book8.jpg",
              name: "Sapiens",
              price:  3000,
              description: "A sweeping history of humanity from early hunter-gatherers to modern civilization.",
              author: "Yuval Noah Harari",
              long_description: "In Sapiens, Yuval Noah Harari examines the history of Homo sapiens over the last 70,000 years. Harari explores how language, shared myths, religion, economics, and political systems enabled humans to cooperate on a large scale and dominate the planet. The book connects insights from history, anthropology, biology, and economics to explain how societies evolved and what the future may hold. It challenges readers to reconsider many assumptions about progress, culture, and human nature.",
              genre: "History",
              rating: 4.2
          },
            8 : {
              id: 9,
              image: "/book9.jpg",
              name: "The Lean Startup",
              price:  2550,
              description: "A guide to building successful businesses through experimentation and continuous learning.",
              author: "Eric Ries",
              long_description: "Entrepreneur Eric Ries introduces a methodology for launching startups in uncertain environments. Instead of spending years perfecting a product before release, Ries advocates creating a minimum viable product (MVP), testing assumptions with real customers, and adapting based on feedback. The book emphasizes rapid experimentation, validated learning, and efficient resource use, making it a foundational text for modern entrepreneurs and product developers.",
              genre: "Entreprenuership",
              rating: 4.4
          },
            9 : {
              id: 10,
              image: "/book10.jpg",
              name: "Solaris",
              price:  1650,
              description: "Scientists studying an alien ocean struggle to understand an intelligence beyond human comprehension.",
              author: "Stanislaw Lem",
              long_description: "In this classic science-fiction novel by Stanisław Lem, psychologist Kris Kelvin arrives at a research station orbiting the planet Solaris. The planet is covered by a vast, mysterious ocean that appears to be a living, intelligent entity. As the scientists attempt to communicate with it, the ocean begins manifesting physical versions of people from their memories, forcing them to confront guilt, grief, and unresolved emotions. The novel explores themes of consciousness, communication, and the limits of human understanding.",
              genre: "Science Fiction",
              rating: 4.3
          },
            10 : {
              id: 11,
              image: "/book11.jpg",
              name: "The Man Who Mistook His Wife For A Hat",
              price: 1750,
              description: "A fascinating exploration of unusual neurological disorders through real patient stories.",
              author: "Oliver Sacks",
              long_description: "Neurologist Oliver Sacks presents a collection of clinical case studies involving patients with extraordinary neurological conditions. The title case concerns a man who loses the ability to recognize objects and mistakenly identifies his wife as a hat. Through compassionate storytelling, Sacks reveals how brain disorders can alter perception, memory, identity, and consciousness. The book combines science, psychology, and humanity, offering readers a deeper appreciation for the complexity of the human mind.",
              genre: "Psychology",
              rating: 4.6
          },
            11 : {
              id: 12,
              image: "/book12.jpg",
              name: "Meditations",
              price:  1300,
              description: "The personal reflections of a Roman emperor on virtue, self-discipline, and living a meaningful life.",
              author: "Marcus Aurelius",
              long_description: "Written nearly two thousand years ago by Marcus Aurelius, Meditations is a collection of private notes intended to guide the emperor's own behavior and thinking. Drawing on Stoic philosophy, Aurelius reflects on topics such as self-control, resilience, duty, mortality, and the importance of focusing only on what lies within one's control. Despite its age, the book remains remarkably relevant because it addresses universal human challenges such as dealing with adversity, managing emotions, and maintaining integrity in difficult circumstances.",
              genre: "Philosophy",
              rating: 4.8
          },
            12 : {
              id: 13,
              image: "/book13.jpg",
              name: "Existensialism is a Humanity",
              price:  1700,
              description: "A defense of existentialist philosophy that argues people create meaning through their choices and actions.",
              author: "Jean-Paul Sartre",
              long_description: "In this influential philosophical essay, Jean-Paul Sartre explains existentialism to a general audience and responds to critics who viewed it as pessimistic. Sartre argues that human beings are not born with a predetermined purpose; instead, they create meaning through the decisions they make. Because there is no fixed human nature dictating our actions, individuals bear full responsibility for their choices. The work explores themes of freedom, responsibility, authenticity, and moral accountability, making it one of the most accessible introductions to existentialist thought.",
              genre: "Philosophy",
              rating: 4.9
          },
            13 : {
              id: 14,
              image: "/book14.jpg",
              name: "And Then There Were None",
              price:  1800,
              description: "Ten strangers are invited to a remote island where they are accused of past crimes and mysteriously begin dying one by one.",
              author: "Agatha Christie",
              long_description: "Written by Agatha Christie, And Then There Were None is one of the most famous mystery novels ever written. Ten people with seemingly unrelated backgrounds are lured to an isolated island off the English coast. Shortly after arriving, they are accused of causing the deaths of others in the past and then begin dying according to the verses of a chilling nursery rhyme. As fear and suspicion grow, the survivors struggle to uncover the identity of the killer before they become the next victim. The novel is celebrated for its ingenious plot, suspense, and unexpected ending.",
              genre: "Mystery",
              rating: 4.2
          }
      }
       const selectedBook = ref(null)

       return{
           books,
           selectedBook
       }
   },
   actions:{
       updateSelectedBook (payload) {
           this.selectedBook = payload
       },
   },
   persist: true,
})

 
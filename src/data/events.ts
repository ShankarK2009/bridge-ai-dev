export interface Photo {
  /** Base path without the size suffix, e.g. /images/events/numpy-cover */
  src: string;
  alt: string;
}

export interface PastEvent {
  slug: string;
  title: string;
  /** Short form used in lists and the timeline. */
  shortTitle: string;
  /** ISO start time with UTC offset. */
  start: string;
  dateLabel: string;
  timeLabel: string;
  venue: string | null;
  address: string | null;
  summary: string;
  description: string;
  cover: Photo;
  gallery: Photo[];
}

// Newest first, matching the order on the original Events page.
export const PAST_EVENTS: PastEvent[] = [
  {
    slug: 'workshop-intro-to-numpy',
    title: 'Workshop: Intro to NumPy',
    shortTitle: 'Intro to NumPy',
    start: '2025-04-13T19:00:00-05:00',
    dateLabel: 'Apr 13, 2025',
    timeLabel: '7:00 PM CDT',
    venue: 'Aspen Drive Library',
    address: '701 Aspen Dr, Vernon Hills, IL 60061, USA',
    summary:
      'This beginner-friendly, hands-on coding workshop at the Aspen Drive Library in Vernon Hills, IL covered NumPy basics, a key Python library for numerical computing.',
    description:
      'This beginner-friendly, hands-on coding workshop at the Aspen Drive Library in Vernon Hills, IL covered NumPy basics, a key Python library for numerical computing. Along with technical skills, students examined ethical implications of AI model development.',
    cover: {
      src: '/images/events/numpy-cover',
      alt: 'A student presents a slide titled “How to convert a numpy array into a tensor” at the Aspen Drive Library workshop.',
    },
    gallery: [
      {
        src: '/images/events/numpy-1',
        alt: 'Students seated around a table reading handouts during the Intro to NumPy workshop.',
      },
      {
        src: '/images/events/numpy-3',
        alt: 'A presenter points to code examples on screen while a student listens, with library shelves behind.',
      },
    ],
  },
  {
    slug: 'workshop-understanding-backpropogation',
    title: 'Workshop: Understanding Backpropagation',
    shortTitle: 'Understanding Backpropagation',
    start: '2025-03-03T19:00:00-06:00',
    dateLabel: 'Mar 03, 2025',
    timeLabel: '7:00 PM CST',
    venue: null,
    address: null,
    summary: 'This virtual session demystified the backpropagation process central to machine learning.',
    description:
      'This virtual session demystified the backpropagation process central to machine learning. Using visuals and examples, students learned how AI models improve, paired with discussions on transparency and explainability.',
    cover: {
      src: '/images/events/backprop-cover',
      alt: 'A video call grid of students above a slide titled “Step 3 (Backpropagation)” showing the chain rule.',
    },
    gallery: [],
  },
  {
    slug: 'workshop-bias-in-algorithms',
    title: 'Workshop: Bias in Algorithms',
    shortTitle: 'Bias in Algorithms',
    start: '2025-02-15T19:00:00-06:00',
    dateLabel: 'Feb 15, 2025',
    timeLabel: '7:00 PM CST',
    venue: null,
    address: null,
    summary:
      'Focusing on algorithmic discrimination, this virtual session used real-world case studies to reveal how AI can perpetuate systemic bias.',
    description:
      'Focusing on algorithmic discrimination, this virtual session used real-world case studies to reveal how AI can perpetuate systemic bias. Students engaged in critical discussions about data sources and design choices in AI systems.',
    cover: {
      src: '/images/events/bias-cover',
      alt: 'Students on a video call above a shared slide titled “What is a Tensor?” with example code.',
    },
    gallery: [
      {
        src: '/images/events/bias-2',
        alt: 'A shared whiteboard listing practice questions about tensors during the virtual session.',
      },
    ],
  },
  {
    slug: 'workshop-introduction-to-responsible-ai',
    title: 'Workshop: Introduction to Responsible AI',
    shortTitle: 'Introduction to Responsible AI',
    start: '2025-02-02T19:00:00-06:00',
    dateLabel: 'Feb 02, 2025',
    timeLabel: '7:00 PM CST',
    venue: 'Ela Area Public Library',
    address: '275 Mohawk Trail, Lake Zurich, IL 60047, USA',
    summary:
      'This foundational in-person workshop introduced students to core AI concepts alongside ethical principles guiding responsible AI development.',
    description:
      'This foundational in-person workshop introduced students to core AI concepts alongside ethical principles guiding responsible AI development. Participants explored real-world examples highlighting fairness, bias, and accountability in technology.',
    cover: {
      src: '/images/events/rai-cover',
      alt: 'A student presents a slide titled “Ethical Principles in Action” to peers around a conference table.',
    },
    gallery: [
      {
        src: '/images/events/rai-1',
        alt: 'Students at the Ela Area Public Library listen to a presentation on ethical principles in AI.',
      },
    ],
  },
];

export const UPCOMING_EVENTS: PastEvent[] = [];

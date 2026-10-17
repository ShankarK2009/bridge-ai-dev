export interface Photo {
  /** Base path without the size suffix, e.g. /images/events/numpy-cover */
  src: string;
  alt: string;
  /** Preserve wide webinar screenshots on the recap page. */
  ratio?: string;
}

export interface SiteEvent {
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
  /** Public sign-up page for this event. */
  registrationUrl?: string;
}

export const EVENTS: SiteEvent[] = [
  {
    slug: 'bridge-ai-code4change-virtual-ai-workshop',
    title: 'Bridge AI × Code4Change: Virtual AI Workshop',
    shortTitle: 'AI with Professor Serina Chang',
    start: '2026-09-25T18:00:00-05:00',
    dateLabel: 'Sep 25, 2026',
    timeLabel: '6:00–7:00 PM CT',
    venue: null,
    address: null,
    summary:
      'Bridge AI and Code4Change hosted Professor Serina Chang of UC Berkeley for a virtual workshop on AI, human behavior, and responsible development.',
    description:
      'Presented by Bridge AI Development and Ethics × Code4Change, this virtual workshop for high school students ages 14–17 explored how artificial intelligence works, where it is used today, and why ethical development matters. Featured speaker Professor Serina Chang, an Assistant Professor at UC Berkeley, shared perspectives from her research in machine learning and human behavior. Her work focuses on human-centered AI, modeling human behavior, and using AI to support real-world decision-making. The session covered an introduction to AI and machine learning, real-world applications, AI and human behavior, and ethical and responsible AI development.',
    cover: {
      src: '/images/events/code4change-cover',
      alt: 'Professor Serina Chang presents a summary of human interaction in AI evaluation and training during the virtual workshop.',
      ratio: '1907 / 726',
    },
    gallery: [
      {
        src: '/images/events/code4change-interactive-ai',
        alt: 'A workshop slide compares a static multiple-choice math question with an interactive conversation between a user and an AI assistant.',
        ratio: '1266 / 699',
      },
      {
        src: '/images/events/code4change-discussion',
        alt: 'Professor Serina Chang and workshop participants join the virtual discussion.',
        ratio: '1908 / 815',
      },
    ],
  },
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

// One build-time cutoff keeps listings and registration consistent across pages.
const buildTime = Date.now();
export const UPCOMING_EVENTS = EVENTS
  .filter((event) => Date.parse(event.start) > buildTime)
  .sort((a, b) => Date.parse(a.start) - Date.parse(b.start));
export const PAST_EVENTS = EVENTS
  .filter((event) => Date.parse(event.start) <= buildTime)
  .sort((a, b) => Date.parse(b.start) - Date.parse(a.start));

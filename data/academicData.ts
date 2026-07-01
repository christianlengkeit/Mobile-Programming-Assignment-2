export type Course = {
  id: string;
  name: string;
  code: string;
  credits: number;
  lecturer: string;
};

export type Session = {
  id: string;
  courseName: string;
  sessionNumber: number;
  topic: string;
  date: string;
};

export type ScheduleItem = {
  id: string;
  courseName: string;
  room: string;
  time: string;
};

export type ScheduleSection = {
  title: string;
  data: ScheduleItem[];
};

export const courses: Course[] = [
  {
    id: "course-1",
    name: "Mobile Programming",
    code: "IF-401",
    credits: 3,
    lecturer: "Dr. Ahmad Fauzi",
  },
  {
    id: "course-2",
    name: "Advanced Database",
    code: "IF-312",
    credits: 3,
    lecturer: "Dr. Sari Dewi",
  },
  {
    id: "course-3",
    name: "Artificial Intelligence",
    code: "IF-405",
    credits: 3,
    lecturer: "Dr. Rizal Hakim",
  },
  {
    id: "course-4",
    name: "Computer Networks",
    code: "IF-308",
    credits: 2,
    lecturer: "Dr. Putri Indah",
  },
  {
    id: "course-5",
    name: "Software Engineering",
    code: "IF-402",
    credits: 3,
    lecturer: "Dr. Hendra Putra",
  },
];

export const sessions: Session[] = [
  {
    id: "session-1",
    courseName: "Mobile Programming",
    sessionNumber: 1,
    topic: "Introduction to React Native",
    date: "4 Sep 2025",
  },
  {
    id: "session-2",
    courseName: "Advanced Database",
    sessionNumber: 1,
    topic: "SQL Review",
    date: "5 Sep 2025",
  },
  {
    id: "session-3",
    courseName: "Artificial Intelligence",
    sessionNumber: 1,
    topic: "Introduction to AI and Machine Learning",
    date: "6 Sep 2025",
  },
  {
    id: "session-4",
    courseName: "Mobile Programming",
    sessionNumber: 2,
    topic: "Components and Props",
    date: "11 Sep 2025",
  },
  {
    id: "session-5",
    courseName: "Computer Networks",
    sessionNumber: 1,
    topic: "Network Fundamentals",
    date: "12 Sep 2025",
  },
  {
    id: "session-6",
    courseName: "Software Engineering",
    sessionNumber: 1,
    topic: "Software Development Life Cycle",
    date: "13 Sep 2025",
  },
  {
    id: "session-7",
    courseName: "Advanced Database",
    sessionNumber: 2,
    topic: "Database Normalization",
    date: "19 Sep 2025",
  },
  {
    id: "session-8",
    courseName: "Artificial Intelligence",
    sessionNumber: 2,
    topic: "Search Algorithms",
    date: "20 Sep 2025",
  },
  {
    id: "session-9",
    courseName: "Mobile Programming",
    sessionNumber: 3,
    topic: "State and Event Handling",
    date: "25 Sep 2025",
  },
  {
    id: "session-10",
    courseName: "Computer Networks",
    sessionNumber: 2,
    topic: "OSI and TCP/IP Models",
    date: "26 Sep 2025",
  },
];

export const weeklySchedule: ScheduleSection[] = [
  {
    title: "Monday",
    data: [
      {
        id: "schedule-1",
        courseName: "Mobile Programming",
        room: "Room A201",
        time: "08:00 – 10:30",
      },
      {
        id: "schedule-2",
        courseName: "Artificial Intelligence",
        room: "Room B102",
        time: "13:00 – 15:30",
      },
    ],
  },
  {
    title: "Tuesday",
    data: [
      {
        id: "schedule-3",
        courseName: "Advanced Database",
        room: "Room C301",
        time: "09:00 – 11:30",
      },
      {
        id: "schedule-4",
        courseName: "Computer Networks",
        room: "Network Lab",
        time: "13:00 – 14:40",
      },
    ],
  },
  {
    title: "Wednesday",
    data: [
      {
        id: "schedule-5",
        courseName: "Software Engineering",
        room: "Room A301",
        time: "10:00 – 12:30",
      },
    ],
  },
];
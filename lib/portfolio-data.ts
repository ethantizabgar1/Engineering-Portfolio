export const profile = {
  name: 'Ethan Tizabgar',
  role: 'Mechanical Engineering Student',
  location: 'UC Irvine · Irvine, CA',
  email: 'ethan.tizabgar@gmail.com',
  phone: '(310) 309-7922',
  linkedin: 'https://www.linkedin.com/in/ethan-tizabgar-8a8bb1337',
  bio: 'Mechanical Engineering student at UC Irvine who designs, models, and builds mechanical systems — from first sketch to working prototype. SolidWorks-certified (CSWA) with hands-on experience in structural design, iterative prototyping, and teaching engineering fundamentals.',
  focus: ['CAD Design', 'Prototyping', 'FEA Analysis'],
}

export type GalleryImage = {
  src: string
  alt: string
  caption: string
}

export type ContentSection = {
  heading: string
  body: string
}

export type Project = {
  id: string
  index: string
  title: string
  category: string
  image: string
  problem: string
  analysis: { label: string; value: string }[]
  prototype: string
  tools: string[]
  // Optional richer fields for case-study projects.
  status?: { label: string; detail: string }
  overview?: string
  highlights?: string[]
  sections?: ContentSection[]
  challenges?: string
  lessons?: string
  gallery?: GalleryImage[]
}

export const projects: Project[] = [
  {
    id: 'wildfire-water-tank',
    index: '01',
    title: 'Hilltop Wildfire-Response Water Tank',
    category: 'Structural Design · Student Design Project',
    image: '/projects/water-tank-cad.png',
    problem:
      'Hillside neighborhoods in Los Angeles needed a way to capture rainwater and autonomously target nearby fires, all while staying stable on steep, uneven terrain.',
    analysis: [
      { label: 'Focus', value: 'Load-Bearing Legs' },
      { label: 'Terrain', value: 'Uneven Slope' },
      { label: 'Method', value: 'Iterative CAD' },
    ],
    prototype:
      'Developed and iterated adjustable support-leg solutions in SolidWorks, refining CAD models and prototypes against testing results and instructor feedback until the system held stable under anticipated loads.',
    tools: ['SolidWorks', '3D Modeling', 'Design Validation'],
  },
  {
    id: 'go-kart-build',
    index: '02',
    title: 'Functional Go-Kart Design & Build',
    category: 'Fabrication · UCLA Summer Program',
    image: '/projects/cad-go-kart.png',
    problem:
      'An intensive hands-on mechanical engineering course tasked a small team with designing, building, and testing a functional go-kart under a tight timeline.',
    analysis: [
      { label: 'Role', value: 'Team Lead' },
      { label: 'Phases', value: 'Concept → Test' },
      { label: 'Focus', value: 'Drivetrain / Frame' },
    ],
    prototype:
      'Led concept development, SolidWorks modeling, material selection, and assembly — then troubleshot mechanical failures under pressure to optimize drivetrain and frame components and improve overall vehicle performance.',
    tools: ['SolidWorks', 'Fabrication', 'Load Analysis'],
  },
  {
    id: 'robotic-hand-emg',
    index: '03',
    title: 'Robotic Hand & EMG Gesture Control',
    category: 'Robotics · Embedded Systems · Iterative Build',
    image: '/projects/robotic-hand/cover.svg',
    problem:
      'The goal was to build a robotic hand capable of reproducing human hand gestures, then control it by reading muscle activity from the forearm. The full mechanical hand could not be completed in the available time, so the project pivoted to a functional EMG-based gesture-recognition demonstration.',
    analysis: [
      { label: 'Focus', value: 'Tendon-Driven' },
      { label: 'Sensor', value: 'EMG / MyoWare' },
      { label: 'Controller', value: 'Arduino R4' },
    ],
    prototype:
      'Designed and assembled InMoov-style 3D-printed finger mechanisms with servo-driven braided-fishing-line tendons routed through PTFE tubing, then pivoted to a MyoWare 2.0 muscle sensor and Arduino Uno R4 WiFi to classify Rock-Paper-Scissors gestures from forearm EMG signals in real time.',
    tools: [
      'Arduino Uno R4 WiFi',
      'MyoWare 2.0',
      'EMG',
      'Servo Motors',
      'Hall-Effect Sensors',
      '3D Printing',
      'CAD',
      'PTFE Tubing',
      'Tendon-Driven Mechanisms',
      'Arduino',
      'Embedded Systems',
    ],
    status: {
      label: 'Partial Build — Iteration',
      detail:
        'The complete robotic hand was not finished or fully operational. The EMG gesture-control system was completed and demonstrated as a functional slice of the original concept.',
    },
    overview:
      'A robotics project exploring the mechanical design and control of a tendon-driven robotic hand. The project began with the design and assembly of an InMoov-inspired robotic hand and later evolved into an EMG-based gesture recognition system using a MyoWare 2.0 muscle sensor and Arduino.',
    highlights: [
      'Arduino Uno R4 WiFi programming',
      'Analog EMG signal acquisition',
      'MyoWare 2.0 muscle sensor integration',
      'Signal smoothing and threshold-based classification',
      'Gesture calibration',
      'Servo-control concepts',
      'Tendon-driven mechanical design',
      'Hall-effect position sensing',
      'Mechanical assembly and troubleshooting',
      'Integration of mechanical and electrical systems',
    ],
    sections: [
      {
        heading: 'Mechanical Design',
        body: 'Worked with the mechanical components of an InMoov-style robotic hand, including 3D-printed finger mechanisms, tendon-driven actuation, servo motors, springs, PTFE tubing, magnets, and Hall-effect sensors. Servo motors pulled braided-fishing-line tendons routed through PTFE tubing to flex the fingers, while Hall-effect sensors and magnets were intended to provide closed-loop finger position feedback.',
      },
      {
        heading: 'EMG Control System',
        body: 'The MyoWare 2.0 sensor was placed on the forearm to measure electrical activity from muscle contractions. Its envelope output fed the Arduino\u2019s analog input so the program could continuously measure muscle activation. A calibration routine collected muscle-activity readings for different gestures and established thresholds for distinguishing between them, then used the detected gesture as the player\u2019s input for a Rock-Paper-Scissors game.',
      },
      {
        heading: 'Engineering & Programming',
        body: 'Covered Arduino Uno R4 WiFi programming, analog EMG signal acquisition, MyoWare 2.0 integration, signal smoothing and threshold-based classification, gesture calibration, and servo-control concepts \u2014 alongside the tendon-driven mechanical design, Hall-effect position sensing, mechanical assembly and troubleshooting, and integration of the mechanical and electrical systems.',
      },
    ],
    challenges:
      'The biggest challenge was completing the mechanical robotic hand within the available time. The build required coordinating many small mechanical components, tendon routing, servo installation, springs, sensors, and electronics. Rather than stopping when the complete hand could not be finished, the project adapted to focus on the EMG control system, delivering a functional and demonstrable portion of the original concept. A second challenge was distinguishing between EMG readings for different gestures \u2014 some produced similar muscle-activity levels \u2014 which was addressed through calibration, signal smoothing, and careful threshold placement so users did not have to dramatically change how hard they flexed.',
    lessons:
      'The project showed how mechanical systems, electronics, sensors, and software must be designed together rather than in isolation. It also reinforced the importance of project scope, iterative prototyping, calibration, and adapting a design when the original implementation is not feasible within the available time.',
    gallery: [
      { src: '/projects/robotic-hand/01-hand-design.svg', alt: 'Robotic hand assembly render', caption: 'Robotic hand design' },
      { src: '/projects/robotic-hand/02-3d-printed-components.svg', alt: '3D-printed finger phalanges', caption: '3D-printed hand components' },
      { src: '/projects/robotic-hand/03-servo-tendon.svg', alt: 'Servo motors and tendon routing', caption: 'Servo motors & tendon system' },
      { src: '/projects/robotic-hand/04-hall-effect.svg', alt: 'Hall-effect sensors and magnets', caption: 'Hall-effect sensors & magnets' },
      { src: '/projects/robotic-hand/05-arduino-board.svg', alt: 'Arduino Uno R4 WiFi board', caption: 'Arduino Uno R4 WiFi' },
      { src: '/projects/robotic-hand/06-myoware-sensor.svg', alt: 'MyoWare 2.0 sensor placement on forearm', caption: 'MyoWare 2.0 sensor placement' },
      { src: '/projects/robotic-hand/07-emg-setup.svg', alt: 'EMG control wiring diagram', caption: 'EMG control setup' },
      { src: '/projects/robotic-hand/08-rps-demo.svg', alt: 'Rock-Paper-Scissors game output', caption: 'Rock-Paper-Scissors system' },
    ],
  },
]

export const skillGroups = [
  {
    title: 'CAD / Modeling',
    skills: ['SolidWorks', 'CSWA Certified', 'Part Modeling', 'Assemblies', 'Engineering Drawings', 'Technical Drafting'],
  },
  {
    title: 'Simulation & Analysis',
    skills: ['Statics', 'Free-Body Diagrams', 'Equilibrium Analysis', 'Load Analysis', 'Design Validation'],
  },
  {
    title: 'Fabrication',
    skills: ['Iterative Prototyping', 'Material Selection', 'Assembly', 'Troubleshooting', 'Performance Testing'],
  },
  {
    title: 'Programming',
    skills: ['C++', 'Problem Solving', 'Engineering Design Process'],
  },
]

export type TimelineItem = {
  type: 'work' | 'education'
  title: string
  org: string
  period: string
  points: string[]
}

export const timeline: TimelineItem[] = [
  {
    type: 'work',
    title: 'Supplemental Instructor — Statics & Engineering Design',
    org: 'Santa Monica College',
    period: 'Sep 2025 — Present',
    points: [
      'Provide academic support for a statics and engineering design course, with emphasis on SolidWorks modeling and technical drafting.',
      'Guide students through free-body diagrams, equilibrium analysis, part modeling, assemblies, and engineering drawings.',
      'Develop practice problems, review sheets, and exam-prep resources with the instructor, and lead structured review sessions.',
    ],
  },
  {
    type: 'work',
    title: 'Student Design Project',
    org: 'Santa Monica College',
    period: 'Jan 2025 — Feb 2025',
    points: [
      'Designed a hilltop wildfire-response water tank that collects rainwater and autonomously targets nearby fires.',
      'Led the structural design of load-bearing support legs for uneven terrain, balancing stability, weight, and safety.',
      'Built and iterated multiple SolidWorks CAD models and prototypes based on testing and feedback.',
    ],
  },
  {
    type: 'work',
    title: 'College Summer Program — Go-Kart Design',
    org: 'UC Los Angeles',
    period: 'Jul 2023 — Aug 2023',
    points: [
      'Designed, built, and tested functional go-karts in a hands-on mechanical engineering course.',
      'Led a small team through concept development, SolidWorks modeling, material selection, and assembly.',
      'Troubleshot mechanical failures to optimize drivetrain and frame components under pressure.',
    ],
  },
  {
    type: 'work',
    title: 'Swim Instructor',
    org: 'Westside Aquatics',
    period: 'Jul 2022 — Jan 2025',
    points: [
      'Instructed children ages 2–13 in swimming skills, adapting strategies to a wide range of developmental stages.',
      'Built individualized lesson plans and maintained a safe, supportive learning environment.',
    ],
  },
  {
    type: 'education',
    title: 'B.S. Mechanical Engineering',
    org: 'UC Irvine',
    period: 'Current',
    points: [
      'Pursuing a B.S. in Mechanical Engineering with a focus on design and structural analysis.',
    ],
  },
  {
    type: 'education',
    title: 'Mechanical Engineering (Sophomore)',
    org: 'Santa Monica College',
    period: 'Completed',
    points: [
      'Cumulative GPA 3.855 / 4.00.',
      'Coursework: Engineering Graphics and Design, Statics · SolidWorks (Passed CSWA) · C++.',
    ],
  },
]

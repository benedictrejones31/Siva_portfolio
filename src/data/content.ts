export interface Metric {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
  isTextValue?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface HighlightItem {
  id: string;
  title: string;
  context: string;
  outcome: string;
}

export interface CredentialItem {
  type: 'credential' | 'education';
  title: string;
  institution: string;
  periodOrDetail: string;
  meta?: string;
}

export const PORTFOLIO_CONTENT = {
  personal: {
    name: "Siva Manikandan S",
    initials: "SM",
    headline: "Prototype Flight Test Pilot | UAV Flight Test & Validation",
    subheadline: "I fly new aircraft before the world trusts them, turning first flights into validated, certification-ready platforms.",
    location: "Bengaluru, India",
    photoUrl: "/siva-manikandan.jpg",
    email: "sivamanikandan1000@gmail.com",
    linkedinUrl: "https://linkedin.com/in/sivamanikandan-s-9410a8252",
    linkedinHandle: "linkedin.com/in/sivamanikandan-s-9410a8252",
    phone: "+91 91503 43677",
  },

  metrics: [
    {
      value: 120,
      suffix: "+ min",
      label: "Flight Endurance",
      description: "Endurance achieved on sub-6 kg multirotor platforms",
    },
    {
      value: 2,
      suffix: "",
      label: "Airframe Classes",
      description: "Airframe classes tested: fixed-wing and multirotor",
    },
    {
      value: 2,
      suffix: " yrs+",
      label: "Flight Test Experience",
      description: "Hands-on prototype flight test experience",
    },
    {
      value: 0,
      isTextValue: "DGCA",
      label: "Certified Remote Pilot",
      description: "Small category certified & Type Certification program support",
    },
  ] as Metric[],

  about: {
    paragraphs: [
      "I am a prototype flight test pilot who works where design meets reality. My work begins when an airframe leaves the drawing board: planning test points, flying the first sorties, and feeding measured data back to engineering so the next iteration is better than the last.",
      "I combine stick-and-rudder skill with an engineering mindset: system identification, handling-qualities assessment, and data-driven tuning on Pixhawk/ArduPilot platforms. I am comfortable in the field, in the test-card room, and in front of defence and certification stakeholders.",
    ],
  },

  capabilities: {
    flightTestAlways: [
      "Envelope expansion and incremental prototype testing",
      "System Identification: doublets, step inputs, frequency sweeps",
      "Flying and Handling Qualities evaluation (stability, damping, control sensitivity, mode coupling, pilot workload)",
      "Failsafe and flight-mode transition validation",
      "High-altitude performance and sensor-degradation testing",
    ],
    fixedWing: [
      "Hand launch, catapult launch, belly landing, emergency recovery",
      "Longitudinal and lateral-directional dynamics characterisation",
      "CG limits, control authority and propulsion sizing validation",
      "Maiden flights and prototype R&D sorties",
    ],
    multirotor: [
      "Angle Mode and Rate Mode testing: inner-loop rate control, attitude response, disturbance rejection",
      "Endurance optimisation (weight, propulsion efficiency, control laws)",
      "Manual and LUA-script-based PID tuning",
      "Gimbal and payload stability checks",
    ],
    toolsAndData: [
      "Pixhawk / ArduPilot",
      "MAVLink telemetry",
      "LUA scripting",
      "FFT and frequency-domain log analysis (.BIN)",
      "Notch-filter configuration",
      "RealFlight simulation",
      "Mission Planner",
    ],
  },

  experience: [
    {
      id: "zmotion",
      role: "External Pilot, Fixed-Wing & R&D",
      company: "ZMotion Autonomous Systems",
      location: "Bengaluru",
      period: "Jul 2026 - Present",
      bullets: [
        "Fly fixed-wing and multirotor prototypes through manual operations including hand and catapult launches, belly landings and emergency recoveries.",
        "Run structured test cases on airframe stability, gimbal performance and platform limits, including maiden and prototype R&D flights.",
        "Lead post-flight debriefs that give R&D and engineering teams actionable feedback on handling, telemetry and system performance.",
        "Work with the Flight Clearance team on pre-flight protocols and readiness checks, and apply inspection discipline before and after every sortie.",
        "Handle in-flight anomalies in the field with decisive, safe technical responses to protect the asset and the mission.",
      ],
    },
    {
      id: "aero360",
      role: "Prototype Flight Test Pilot",
      company: "Aero360 - Dronix Technologies",
      location: "Chennai",
      period: "Aug 2024 - Jun 2026",
      bullets: [
        "Led prototype flight test programs for fixed-wing and multirotor UAVs, from first flight to configuration freeze across multiple design iterations.",
        "Designed and flew SysID campaigns (doublets, steps, sweeps) and correlated flight data with analytical and simulation models to validate aircraft dynamics.",
        "Delivered 120+ minutes of endurance on sub-6 kg multirotors through combined aerodynamic, propulsion, weight and control-law optimisation.",
        "Used FFT analysis of flight logs to isolate vibration and resonance, then implemented notch-filter and PID refinements that improved stability.",
        "Performed preliminary design validation of aerodynamic assumptions, CG limits, propulsion sizing and control-authority margins.",
        "Executed high-altitude trials and presented live and post-flight performance data to defence stakeholders.",
        "Supported DGCA Type Certification as test pilot, flying certification test points against regulatory test plans and safety frameworks.",
        "Authored the full test documentation chain: Flight Test Plans, test cards, risk and hazard assessments, and Flight Test Reports.",
        "Rehearsed high-risk maneuvers and failure scenarios in RealFlight simulation before live testing to reduce risk.",
      ],
    },
  ] as ExperienceItem[],

  highlights: [
    {
      id: "endurance",
      title: "Endurance Optimisation",
      context: "sub-6 kg multirotor platform aerodynamic & propulsion efficiency",
      outcome: "120+ min continuous flight time achieved",
    },
    {
      id: "dgca",
      title: "DGCA Type Certification Support",
      context: "Designated test pilot executing regulatory test card points",
      outcome: "Full compliance verification against formal safety frameworks",
    },
    {
      id: "high-altitude",
      title: "High-Altitude & Defence Demonstrations",
      context: "Demanding mission profiles flown in challenging operational environments",
      outcome: "Live telemetry and post-flight validation data presented to defence stakeholders",
    },
    {
      id: "vibration",
      title: "Vibration-to-Stability Workflow",
      context: "FFT frequency-domain log analysis (.BIN) to isolate airframe resonance",
      outcome: "Notch-filter configuration and PID refinement for smoother inner-loop control",
    },
  ] as HighlightItem[],

  credentials: [
    {
      type: "credential",
      title: "DGCA Certified Remote Pilot Licence",
      institution: "Directorate General of Civil Aviation (DGCA), India",
      periodOrDetail: "Small Category UAV",
      meta: "Commercial Remote Pilot Authorization",
    },
    {
      type: "education",
      title: "Bachelor of Computer Applications (BCA)",
      institution: "Arulmigu Kalasalingam College of Arts and Science",
      periodOrDetail: "2019 - 2022",
      meta: "CGPA 8.01",
    },
  ] as CredentialItem[],

  contact: {
    headline: "Open to conversations on flight test, UAV validation and certification programs.",
  },
};

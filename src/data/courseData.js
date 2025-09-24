// src/data/courseData.js

// ===================================================================
// PART 1: The structure of the website's navigation.
// This tells the app which options to show on each list page.
// ===================================================================
export const courseDatabase = {
  // === AFTER 10th DATA ===
  after10th: [
    {
      id: "intermediate",
      name: "Intermediate (+2)",
      description: "A 2-year academic course, the primary path to a degree.",
      groups: [
        { id: "mpc", name: "MPC - Maths, Physics, Chemistry" },
        { id: "bipc", name: "BiPC - Biology, Physics, Chemistry" },
        { id: "cec", name: "CEC - Commerce, Economics, Civics" },
        { id: "hec", name: "HEC - History, Economics, Civics" },
      ],
    },
    {
      id: "diploma",
      name: "Diploma / Polytechnic",
      description: "A 3-year technical course for job-oriented skills.",
      groups: [
        { id: "diploma-cse", name: "Diploma in Computer Engineering" },
        { id: "diploma-ece", name: "Diploma in Electronics & Communication" },
        { id: "diploma-it", name: "Diploma in Information Technology" },
        { id: "diploma-mech", name: "Diploma in Mechanical Engineering" },
      ],
    },
    {
      id: "iti",
      name: "ITI (Industrial Training)",
      description: "1 or 2-year courses for practical, hands-on trade skills.",
      groups: [
        { id: "iti-electrician", name: "ITI in Electrician" },
        { id: "iti-fitter", name: "ITI in Fitter" },
      ],
    },
  ],
  // === AFTER INTER DATA ===
  afterInter: [
    {
      id: "engineering",
      name: "B.E. / B.Tech (Engineering)",
      description: "A 4-year professional degree in technology.",
      groups: [
        { id: "btech-cse", name: "B.Tech in Computer Science (CSE)" },
        { id: "btech-ece", name: "B.Tech in Electronics & Communication (ECE)" },
        { id: "btech-it", name: "B.Tech in Information Technology (IT)" },
      ],
    },
    {
      id: "commerce",
      name: "B.Com (Commerce)",
      description: "A 3-year degree focused on business and finance.",
      groups: [
        { id: "bcom-gen", name: "B.Com General" },
        { id: "bcom-comp", name: "B.Com Computers" },
      ],
    },
    {
      id: "science",
      name: "B.Sc (Science)",
      description: "A 3-year degree focused on scientific subjects.",
      groups: [
        { id: "bsc-cs", name: "B.Sc in Computer Science" },
        { id: "bsc-biotech", name: "B.Sc in Biotechnology" },
      ],
    },
    {
      id: "arts",
      name: "B.A. (Arts)",
      description: "A 3-year degree in humanities and social sciences.",
      groups: [
        { id: "ba-history", name: "B.A. in History" },
        { id: "ba-econ", name: "B.A. in Economics" },
      ],
    },
  ],
};

// ===================================================================
// PART 2: The detailed information for every single group.
// When a user clicks a group, the app looks up its 'id' here.
// ===================================================================
export const groupDetails = {
  // --- Intermediate Group Details ---
  mpc: {
    name: "MPC", details: "For students aiming for Engineering.",
    subjects: [
      { name: "Mathematics 1A & 1B", books: ["Deepthi's Mathematics", "Vikram's Mathematics"] },
      { name: "Physics", books: ["Concepts of Physics by H.C. Verma", "NCERT Physics"] },
      { name: "Chemistry", books: ["NCERT Chemistry", "Pradeep's Chemistry"] },
    ],
    benefits: ["Strong analytical skills.", "Gateway to all engineering/tech fields."],
    jobOpportunities: ["Software Engineer", "Civil Engineer", "Data Scientist", "Architect"],
  },
  bipc: {
    name: "BiPC", details: "For students aiming for Medicine and Life Sciences.",
    subjects: [
      { name: "Botany & Zoology", books: ["NCERT Biology", "Trueman's Biology"] },
      { name: "Physics", books: ["Concepts of Physics by H.C. Verma"] },
      { name: "Chemistry", books: ["NCERT Chemistry"] },
    ],
    benefits: ["Direct path to medical careers.", "Foundation for research in biotechnology."],
    jobOpportunities: ["Doctor (MBBS)", "Pharmacist", "Veterinary Doctor", "Biotechnologist"],
  },
  cec: {
    name: "CEC", details: "For students aiming for Commerce, Finance, and CA.",
    subjects: [
      { name: "Commerce", books: ["T.S. Grewal's Double Entry Book Keeping"] },
      { name: "Economics", books: ["NCERT Microeconomics & Macroeconomics"] },
      { name: "Civics", books: ["NCERT Political Science"] },
    ],
    benefits: ["Strong foundation for business and accounting.", "Path to CA, CS, and CMA."],
    jobOpportunities: ["Chartered Accountant (CA)", "Bank PO", "Company Secretary (CS)", "Financial Analyst"],
  },
  hec: {
    name: "HEC", details: "For students aiming for Civil Services, Law, and Social Sciences.",
    subjects: [
      { name: "History", books: ["NCERT History Textbooks"] },
      { name: "Economics", books: ["NCERT Microeconomics & Macroeconomics"] },
      { name: "Civics", books: ["NCERT Political Science"] },
    ],
    benefits: ["Develops broad knowledge for competitive exams like UPSC.", "Foundation for careers in law, journalism, and teaching."],
    jobOpportunities: ["Civil Servant (IAS/IPS)", "Lawyer", "Journalist", "Professor", "Archaeologist"],
  },

  // --- Diploma Group Details ---
  "diploma-cse": {
    name: "Diploma in CSE", details: "Practical skills in computer hardware and software.",
    subjects: [{ name: "Programming in C", books: ["Let Us C"] }, { name: "Computer Networks", books: ["Data Communications by Forouzan"] }],
    benefits: ["Faster entry into IT jobs.", "Strong hands-on skills."],
    jobOpportunities: ["Junior Software Developer", "Network Assistant", "Technical Support"],
  },
  "diploma-ece": {
    name: "Diploma in ECE", details: "Focuses on electronics, circuits, and communication systems.",
    subjects: [{ name: "Basic Electronics", books: ["Electronic Devices by Boylestad"] }, { name: "Digital Logic Design", books: ["Digital Design by Morris Mano"] }],
    benefits: ["Jobs in hardware and telecom industries.", "Good for hands-on electronics work."],
    jobOpportunities: ["Electronics Technician", "Telecom Engineer", "Hardware Assistant"],
  },
  "diploma-it": {
    name: "Diploma in IT", details: "Focuses on software, databases, and web technologies.",
    subjects: [{ name: "Database Management", books: ["DBMS by Korth"] }, { name: "Web Development", books: ["HTML & CSS by Jon Duckett"] }],
    benefits: ["High demand for web and app development skills.", "Quicker path to a developer role."],
    jobOpportunities: ["Web Developer", "Junior Database Admin", "IT Support Specialist"],
  },
  "diploma-mech": {
    name: "Diploma in Mechanical", details: "Focuses on machines, design, and manufacturing.",
    subjects: [{ name: "Engineering Drawing", books: ["N.D. Bhatt"] }, { name: "Thermodynamics", books: ["P.K. Nag"] }],
    benefits: ["Core engineering field with jobs in manufacturing and automobile industries."],
    jobOpportunities: ["Junior Mechanical Engineer", "Production Supervisor", "Draughtsman"],
  },

  // --- ITI Group Details ---
  "iti-electrician": {
    name: "ITI Electrician", details: "Practical training in electrical wiring, equipment, and safety.",
    subjects: [{ name: "Trade Theory", books: ["Arihant Electrician Theory"] }, { name: "Workshop Science", books: ["NIMI Books"] }],
    benefits: ["Immediate employment in construction and maintenance.", "Can start own business."],
    jobOpportunities: ["Wireman", "Maintenance Electrician", "Lineman"],
  },
  "iti-fitter": {
    name: "ITI Fitter", details: "Skills in assembling and fitting machine parts.",
    subjects: [{ name: "Trade Theory", books: ["Arihant Fitter Theory"] }, { name: "Engineering Drawing", books: ["N.D. Bhatt"] }],
    benefits: ["Essential role in all manufacturing industries."],
    jobOpportunities: ["Machine Fitter", "Assembly Line Operator", "Technician"],
  },

  // --- Degree Group Details ---
  "btech-cse": {
    name: "B.Tech in CSE", details: "In-depth study of computer science and software.",
    subjects: [{ name: "Data Structures", books: ["Lafore"] }, { name: "Operating Systems", books: ["Galvin"] }],
    benefits: ["High demand, excellent salaries.", "Work in top tech companies."],
    jobOpportunities: ["Software Engineer", "Data Analyst", "Cybersecurity Specialist"],
  },
  "btech-ece": {
    name: "B.Tech in ECE", details: "Study of electronics, communication, and embedded systems.",
    subjects: [{ name: "Analog Circuits", books: ["Sedra/Smith"] }, { name: "VLSI Design", books: ["Kang"] }],
    benefits: ["Core field for hardware, IoT, and telecom.", "Combines hardware and software knowledge."],
    jobOpportunities: ["Electronics Engineer", "Embedded Systems Developer", "Telecom Engineer"],
  },
  "btech-it": {
    name: "B.Tech in IT", details: "Focuses on the application of computing technology to business.",
    subjects: [{ name: "Software Engineering", books: ["Pressman"] }, { name: "Information Security", books: ["Stallings"] }],
    benefits: ["Strong alignment with business needs in the IT sector."],
    jobOpportunities: ["IT Consultant", "Business Analyst", "System Administrator"],
  },
  "bcom-gen": {
    name: "B.Com General", details: "Broad study of commerce, accounting, and business law.",
    subjects: [{ name: "Financial Accounting", books: ["Tulsian"] }, { name: "Business Law", books: ["N.D. Kapoor"] }],
    benefits: ["Foundation for MBA, CA, and banking exams."],
    jobOpportunities: ["Accountant", "Tax Consultant", "Bank Officer"],
  },
  "bcom-comp": {
    name: "B.Com Computers", details: "Combines commerce subjects with computer applications.",
    subjects: [{ name: "Financial Accounting", books: ["Tulsian"] }, { name: "Programming with C++", books: ["Balagurusamy"] }],
    benefits: ["Unique skill set for roles in fintech and ERP systems."],
    jobOpportunities: ["ERP Consultant", "IT Auditor", "E-Commerce Manager"],
  },
  "bsc-cs": {
    name: "B.Sc Computer Science", details: "Focuses on the theoretical foundations of computer science.",
    subjects: [{ name: "Discrete Mathematics", books: ["Rosen"] }, { name: "Theory of Computation", books: ["Ullman"] }],
    benefits: ["Excellent for careers in research and advanced studies (M.Sc, PhD)."],
    jobOpportunities: ["Software Developer", "Researcher", "Professor"],
  },
  "bsc-biotech": {
    name: "B.Sc Biotechnology", details: "Study of technology based on biology.",
    subjects: [{ name: "Genetics", books: ["Gardner"] }, { name: "Microbiology", books: ["Pelczar"] }],
    benefits: ["Growing field in pharma, agriculture, and healthcare."],
    jobOpportunities: ["Lab Technician", "Research Associate", "Quality Control Officer"],
  },
  "ba-history": {
    name: "B.A. in History", details: "Study of past events and civilizations.",
    subjects: [{ name: "Ancient Indian History", books: ["R.S. Sharma"] }, { name: "Modern World History", books: ["Norman Lowe"] }],
    benefits: ["Crucial for civil service exams and careers in education."],
    jobOpportunities: ["Archaeologist", "Museum Curator", "Teacher"],
  },
  "ba-econ": {
    name: "B.A. in Economics", details: "Study of production, distribution, and consumption of goods.",
    subjects: [{ name: "Microeconomics", books: ["Ahuja"] }, { name: "Macroeconomics", books: ["Froyen"] }],
    benefits: ["Strong analytical skills for finance and policy making."],
    jobOpportunities: ["Financial Analyst", "Policy Analyst", "Data Analyst"],
  },
};
/* =========================================================
   DSO SPORTS ORGANISATION – MASTER CONTROLLER
   Director: Rakesh Budhwar | 20 Athletes | Multi-Year Results
   ========================================================= */

// 1. Expanded Roster Data (20 Athletes Across All Disciplines)
const DEFAULT_STUDENTS = [
  {
    id: "DSO2026001",
    name: "Aarav Sharma",
    father: "Manoj Sharma",
    mother: "Sunita Sharma",
    dob: "2012-05-15",
    gender: "Male",
    mobile: "9811223344",
    whatsapp: "9811223344",
    address: "B-42, Model Town, Delhi",
    school: "DPS International",
    class: "7th Standard",
    activity: "Yoga",
    batch: "5–6 PM",
    admDate: "2026-01-10",
    feeStatus: "Paid",
    feePaid: 2000,
    feeBalance: 0,
    feeMonth: "October 2026",
    receiptNo: "REC-2026-001",
    paymentMethod: "UPI",
    paymentDate: "2026-10-02",
    attendancePercent: 96,
    todayAttendance: "Present",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150"
  },
  {
    id: "DSO2026002",
    name: "Ananya Verma",
    father: "Rakesh Verma",
    mother: "Pooja Verma",
    dob: "2011-09-21",
    gender: "Female",
    mobile: "9822334455",
    whatsapp: "9822334455",
    address: "Sector 14, Rohini, Delhi",
    school: "Bal Bharati Public School",
    class: "8th Standard",
    activity: "Karate",
    batch: "6–7 PM",
    admDate: "2026-01-12",
    feeStatus: "Paid",
    feePaid: 2000,
    feeBalance: 0,
    feeMonth: "October 2026",
    receiptNo: "REC-2026-002",
    paymentMethod: "UPI",
    paymentDate: "2026-10-03",
    attendancePercent: 95,
    todayAttendance: "Present",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150"
  },
  {
    id: "DSO2026003",
    name: "Vivaan Kumar",
    father: "Suresh Kumar",
    mother: "Anita Kumar",
    dob: "2013-02-18",
    gender: "Male",
    mobile: "9833445566",
    whatsapp: "9833445566",
    address: "C-12, Preet Vihar, Delhi",
    school: "St. Xavier's Senior School",
    class: "6th Standard",
    activity: "Gymnastics",
    batch: "5–6 PM",
    admDate: "2026-02-01",
    feeStatus: "Partial",
    feePaid: 1000,
    feeBalance: 1000,
    feeMonth: "October 2026",
    receiptNo: "REC-2026-003",
    paymentMethod: "Cash",
    paymentDate: "2026-10-05",
    attendancePercent: 71, // Below 75% for automatic alert trigger
    todayAttendance: "Absent",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
  },
  {
    id: "DSO2026004",
    name: "Riya Singh",
    father: "Vikramjit Singh",
    mother: "Harpreet Kaur",
    dob: "2010-11-04",
    gender: "Female",
    mobile: "9844556677",
    whatsapp: "9844556677",
    address: "Pocket 4, Mayur Vihar, Delhi",
    school: "Modern Public School",
    class: "9th Standard",
    activity: "Fitness",
    batch: "6–7 PM",
    admDate: "2026-02-15",
    feeStatus: "Paid",
    feePaid: 2000,
    feeBalance: 0,
    feeMonth: "October 2026",
    receiptNo: "REC-2026-004",
    paymentMethod: "Bank Transfer",
    paymentDate: "2026-10-03",
    attendancePercent: 94,
    todayAttendance: "Present",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
  },
  {
    id: "DSO2026005",
    name: "Arjun Malik",
    father: "Satish Malik",
    mother: "Geeta Malik",
    dob: "2012-07-29",
    gender: "Male",
    mobile: "9855667788",
    whatsapp: "9855667788",
    address: "House 204, Paschim Vihar, Delhi",
    school: "DAV Centenary School",
    class: "7th Standard",
    activity: "Skipping",
    batch: "5–6 PM",
    admDate: "2026-03-01",
    feeStatus: "Pending",
    feePaid: 0,
    feeBalance: 2000,
    feeMonth: "October 2026",
    receiptNo: "REC-2026-005",
    paymentMethod: "Pending",
    paymentDate: "-",
    attendancePercent: 88,
    todayAttendance: "Present",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150"
  },
  {
    id: "DSO2026006",
    name: "Diya Patel",
    father: "Dinesh Patel",
    mother: "Bhavna Patel",
    dob: "2013-04-14",
    gender: "Female",
    mobile: "9866778899",
    whatsapp: "9866778899",
    address: "A-15, Rajouri Garden, Delhi",
    school: "Cambridge Foundation School",
    class: "6th Standard",
    activity: "Yoga",
    batch: "5–6 PM",
    admDate: "2026-03-05",
    feeStatus: "Paid",
    feePaid: 2000,
    feeBalance: 0,
    feeMonth: "October 2026",
    receiptNo: "REC-2026-006",
    paymentMethod: "UPI",
    paymentDate: "2026-10-04",
    attendancePercent: 98,
    todayAttendance: "Present",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150"
  },
  {
    id: "DSO2026007",
    name: "Kabir Dahiya",
    father: "Dharambir Dahiya",
    mother: "Kavita Dahiya",
    dob: "2011-08-30",
    gender: "Male",
    mobile: "9877889900",
    whatsapp: "9877889900",
    address: "Sector 21, Dwarka, Delhi",
    school: "Venkateshwar International",
    class: "8th Standard",
    activity: "Karate",
    batch: "6–7 PM",
    admDate: "2026-03-10",
    feeStatus: "Paid",
    feePaid: 2000,
    feeBalance: 0,
    feeMonth: "October 2026",
    receiptNo: "REC-2026-007",
    paymentMethod: "Cash",
    paymentDate: "2026-10-06",
    attendancePercent: 91,
    todayAttendance: "Present",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150"
  },
  {
    id: "DSO2026008",
    name: "Saanvi Joshi",
    father: "Pramod Joshi",
    mother: "Meena Joshi",
    dob: "2014-01-19",
    gender: "Female",
    mobile: "9888990011",
    whatsapp: "9888990011",
    address: "Block C, Janakpuri, Delhi",
    school: "St. Mark's Senior School",
    class: "5th Standard",
    activity: "Gymnastics",
    batch: "5–6 PM",
    admDate: "2026-03-15",
    feeStatus: "Paid",
    feePaid: 2000,
    feeBalance: 0,
    feeMonth: "October 2026",
    receiptNo: "REC-2026-008",
    paymentMethod: "UPI",
    paymentDate: "2026-10-01",
    attendancePercent: 89,
    todayAttendance: "Present",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150"
  },
  {
    id: "DSO2026009",
    name: "Rohan Deshmukh",
    father: "Nitin Deshmukh",
    mother: "Shailaja Deshmukh",
    dob: "2010-06-11",
    gender: "Male",
    mobile: "9899001122",
    whatsapp: "9899001122",
    address: "Flat 302, Vasant Kunj, Delhi",
    school: "Bloom Public School",
    class: "9th Standard",
    activity: "Fitness",
    batch: "6–7 AM",
    admDate: "2026-04-01",
    feeStatus: "Partial",
    feePaid: 1000,
    feeBalance: 1000,
    feeMonth: "October 2026",
    receiptNo: "REC-2026-009",
    paymentMethod: "UPI",
    paymentDate: "2026-10-08",
    attendancePercent: 85,
    todayAttendance: "Present",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150"
  },
  {
    id: "DSO2026010",
    name: "Tanvi Nair",
    father: "Suresh Nair",
    mother: "Radhika Nair",
    dob: "2012-10-25",
    gender: "Female",
    mobile: "9812345678",
    whatsapp: "9812345678",
    address: "D-18, Saket, Delhi",
    school: "Amity International",
    class: "7th Standard",
    activity: "Skipping",
    batch: "5–6 PM",
    admDate: "2026-04-05",
    feeStatus: "Paid",
    feePaid: 2000,
    feeBalance: 0,
    feeMonth: "October 2026",
    receiptNo: "REC-2026-010",
    paymentMethod: "Bank Transfer",
    paymentDate: "2026-10-02",
    attendancePercent: 93,
    todayAttendance: "Present",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
  },
  {
    id: "DSO2026011",
    name: "Ishaan Choudhary",
    father: "Rajender Choudhary",
    mother: "Sarita Choudhary",
    dob: "2011-03-08",
    gender: "Male",
    mobile: "9823456789",
    whatsapp: "9823456789",
    address: "H-8, Pitampura, Delhi",
    school: "Apeejay School",
    class: "8th Standard",
    activity: "Karate",
    batch: "6–7 PM",
    admDate: "2026-04-12",
    feeStatus: "Pending",
    feePaid: 0,
    feeBalance: 2000,
    feeMonth: "October 2026",
    receiptNo: "REC-2026-011",
    paymentMethod: "Pending",
    paymentDate: "-",
    attendancePercent: 82,
    todayAttendance: "Present",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
  },
  {
    id: "DSO2026012",
    name: "Mehar Aneja",
    father: "Sushil Kumar",
    mother: "Rekha Aneja",
    dob: "2012-08-12",
    gender: "Female",
    mobile: "8005520582",
    whatsapp: "8005520582",
    address: "Sector 15, Faridabad, Haryana",
    school: "Modern Vidya Niketan",
    class: "8th Standard",
    activity: "Yoga",
    batch: "5–6 PM",
    admDate: "2026-04-18",
    feeStatus: "Paid",
    feePaid: 2000,
    feeBalance: 0,
    feeMonth: "October 2026",
    receiptNo: "REC-2026-012",
    paymentMethod: "UPI",
    paymentDate: "2026-10-01",
    attendancePercent: 97,
    todayAttendance: "Present",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150"
  },
  {
    id: "DSO2026013",
    name: "Aditya Rawat",
    father: "Bhupender Rawat",
    mother: "Kamla Rawat",
    dob: "2013-09-02",
    gender: "Male",
    mobile: "9834567890",
    whatsapp: "9834567890",
    address: "C-4, Lajpat Nagar, Delhi",
    school: "Tagore International",
    class: "6th Standard",
    activity: "Gymnastics",
    batch: "5–6 PM",
    admDate: "2026-05-01",
    feeStatus: "Paid",
    feePaid: 2000,
    feeBalance: 0,
    feeMonth: "October 2026",
    receiptNo: "REC-2026-013",
    paymentMethod: "Cash",
    paymentDate: "2026-10-04",
    attendancePercent: 90,
    todayAttendance: "Present",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150"
  },
  {
    id: "DSO2026014",
    name: "Navya Gupta",
    father: "Deepak Gupta",
    mother: "Ritu Gupta",
    dob: "2011-12-14",
    gender: "Female",
    mobile: "9845678901",
    whatsapp: "9845678901",
    address: "B-22, Greater Kailash 1, Delhi",
    school: "DPS R.K. Puram",
    class: "8th Standard",
    activity: "Fitness",
    batch: "6–7 PM",
    admDate: "2026-05-10",
    feeStatus: "Paid",
    feePaid: 2000,
    feeBalance: 0,
    feeMonth: "October 2026",
    receiptNo: "REC-2026-014",
    paymentMethod: "UPI",
    paymentDate: "2026-10-02",
    attendancePercent: 94,
    todayAttendance: "Present",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150"
  },
  {
    id: "DSO2026015",
    name: "Parth Singhal",
    father: "Vivek Singhal",
    mother: "Monika Singhal",
    dob: "2012-02-28",
    gender: "Male",
    mobile: "9856789012",
    whatsapp: "9856789012",
    address: "G-10, Punjabi Bagh, Delhi",
    school: "Hansraj Model School",
    class: "7th Standard",
    activity: "Self Defense",
    batch: "6–7 PM",
    admDate: "2026-05-15",
    feeStatus: "Paid",
    feePaid: 2000,
    feeBalance: 0,
    feeMonth: "October 2026",
    receiptNo: "REC-2026-015",
    paymentMethod: "UPI",
    paymentDate: "2026-10-05",
    attendancePercent: 87,
    todayAttendance: "Present",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150"
  },
  {
    id: "DSO2026016",
    name: "Sneha Reddy",
    father: "Venkat Reddy",
    mother: "Laxmi Reddy",
    dob: "2013-07-07",
    gender: "Female",
    mobile: "9867890123",
    whatsapp: "9867890123",
    address: "Tower 4, Sector 50, Gurugram",
    school: "Heritage Xperiential",
    class: "6th Standard",
    activity: "Yoga",
    batch: "5–6 PM",
    admDate: "2026-06-01",
    feeStatus: "Partial",
    feePaid: 1000,
    feeBalance: 1000,
    feeMonth: "October 2026",
    receiptNo: "REC-2026-016",
    paymentMethod: "UPI",
    paymentDate: "2026-10-06",
    attendancePercent: 86,
    todayAttendance: "Present",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150"
  },
  {
    id: "DSO2026017",
    name: "Karan Oberoi",
    father: "Harvinder Oberoi",
    mother: "Simran Oberoi",
    dob: "2010-04-03",
    gender: "Male",
    mobile: "9878901234",
    whatsapp: "9878901234",
    address: "Block B, Naraina Vihar, Delhi",
    school: "Manav Sthali School",
    class: "9th Standard",
    activity: "Karate",
    batch: "6–7 PM",
    admDate: "2026-06-15",
    feeStatus: "Paid",
    feePaid: 2000,
    feeBalance: 0,
    feeMonth: "October 2026",
    receiptNo: "REC-2026-017",
    paymentMethod: "Bank Transfer",
    paymentDate: "2026-10-03",
    attendancePercent: 93,
    todayAttendance: "Present",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150"
  },
  {
    id: "DSO2026018",
    name: "Khushi Yadav",
    father: "Ram Kishan Yadav",
    mother: "Urmila Yadav",
    dob: "2014-03-22",
    gender: "Female",
    mobile: "9889012345",
    whatsapp: "9889012345",
    address: "Civil Lines, Gurugram, Haryana",
    school: "Salwan Public School",
    class: "5th Standard",
    activity: "Gymnastics",
    batch: "5–6 PM",
    admDate: "2026-07-01",
    feeStatus: "Paid",
    feePaid: 2000,
    feeBalance: 0,
    feeMonth: "October 2026",
    receiptNo: "REC-2026-018",
    paymentMethod: "UPI",
    paymentDate: "2026-10-02",
    attendancePercent: 95,
    todayAttendance: "Present",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
  },
  {
    id: "DSO2026019",
    name: "Yashvardhan Rao",
    father: "Subhash Rao",
    mother: "Geetika Rao",
    dob: "2011-11-17",
    gender: "Male",
    mobile: "9890123456",
    whatsapp: "9890123456",
    address: "Sector 56, Gurugram",
    school: "Scottish High International",
    class: "8th Standard",
    activity: "Self Defense",
    batch: "6–7 AM",
    admDate: "2026-07-15",
    feeStatus: "Pending",
    feePaid: 0,
    feeBalance: 2000,
    feeMonth: "October 2026",
    receiptNo: "REC-2026-019",
    paymentMethod: "Pending",
    paymentDate: "-",
    attendancePercent: 79,
    todayAttendance: "Absent",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
  },
  {
    id: "DSO2026020",
    name: "Avni Bhatia",
    father: "Ashok Bhatia",
    mother: "Meera Bhatia",
    dob: "2012-09-09",
    gender: "Female",
    mobile: "9801234567",
    whatsapp: "9801234567",
    address: "B-12, Gujranwala Town, Delhi",
    school: "Montfort Senior School",
    class: "7th Standard",
    activity: "Fitness",
    batch: "6–7 AM",
    admDate: "2026-08-01",
    feeStatus: "Paid",
    feePaid: 2000,
    feeBalance: 0,
    feeMonth: "October 2026",
    receiptNo: "REC-2026-020",
    paymentMethod: "UPI",
    paymentDate: "2026-10-01",
    attendancePercent: 96,
    todayAttendance: "Present",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150"
  }
];

let students = JSON.parse(localStorage.getItem('dso_students_db_v2')) || DEFAULT_STUDENTS;

function saveToStorage() {
  localStorage.setItem('dso_students_db_v2', JSON.stringify(students));
}

function restoreInitialDemoData() {
  students = JSON.parse(JSON.stringify(DEFAULT_STUDENTS));
  saveToStorage();
  renderAllViews();
  showToast("Default DSO 20-athlete records successfully restored!");
}

// 2. Unified Results Data (2025, 2026, 2027)
const UNIFIED_RESULTS = [
  // 2026 Season
  {
    year: "2026",
    event: "Delhi NCR Open Karate Cup 2026",
    athlete: "Ananya Verma",
    studentId: "DSO2026002",
    discipline: "Karate",
    score: "Champion (8-2 Kumite)",
    award: "🥇 GOLD TROPHY",
    badgeClass: "text-amber-300 bg-amber-400/20"
  },
  {
    year: "2026",
    event: "State Yogasana League 2026",
    athlete: "Mehar Aneja",
    studentId: "DSO2026012",
    discipline: "Yoga",
    score: "8.95 / 10.0 Pts",
    award: "🥇 GOLD MEDAL",
    badgeClass: "text-amber-300 bg-amber-400/20"
  },
  {
    year: "2026",
    event: "North Zone Artistic Gymnastics",
    athlete: "Vivaan Kumar",
    studentId: "DSO2026003",
    discipline: "Gymnastics",
    score: "Runners Up (14.2 Vault)",
    award: "🥈 SILVER MEDAL",
    badgeClass: "text-slate-300 bg-slate-400/20"
  },
  {
    year: "2026",
    event: "Autumn Youth Fitness Challenge",
    athlete: "Riya Singh",
    studentId: "DSO2026004",
    discipline: "Fitness",
    score: "1st Place (Speed Obstacle)",
    award: "🥇 GOLD MEDAL",
    badgeClass: "text-amber-300 bg-amber-400/20"
  },
  {
    year: "2026",
    event: "All-India Speed Skipping Cup",
    athlete: "Arjun Malik",
    studentId: "DSO2026005",
    discipline: "Skipping",
    score: "86 Jumps in 30 Secs",
    award: "🥇 GOLD MEDAL",
    badgeClass: "text-amber-300 bg-amber-400/20"
  },
  {
    year: "2026",
    event: "Haryana State Junior Karate Championship",
    athlete: "Kabir Dahiya",
    studentId: "DSO2026007",
    discipline: "Karate",
    score: "3rd Place (Kata)",
    award: "🥉 BRONZE MEDAL",
    badgeClass: "text-amber-500 bg-amber-600/20"
  },

  // 2025 Season
  {
    year: "2025",
    event: "National Gymnastics Championship 2025",
    athlete: "Vivaan Kumar",
    studentId: "DSO2026003",
    discipline: "Gymnastics",
    score: "Floor Routine 1st Place",
    award: "🥇 GOLD MEDAL",
    badgeClass: "text-amber-300 bg-amber-400/20"
  },
  {
    year: "2025",
    event: "All-India Karate Cup 2025",
    athlete: "Ananya Verma",
    studentId: "DSO2026002",
    discipline: "Karate",
    score: "U-14 Kumite Girls 1st Place",
    award: "🥇 GOLD MEDAL",
    badgeClass: "text-amber-300 bg-amber-400/20"
  },
  {
    year: "2025",
    event: "State Yogasana Open 2025",
    athlete: "Aarav Sharma",
    studentId: "DSO2026001",
    discipline: "Yoga",
    score: "U-12 Artistic Solo 2nd Place",
    award: "🥈 SILVER MEDAL",
    badgeClass: "text-slate-300 bg-slate-400/20"
  },
  {
    year: "2025",
    event: "Inter-State Speed Skipping 2025",
    athlete: "Tanvi Nair",
    studentId: "DSO2026010",
    discipline: "Skipping",
    score: "30-sec Speed Sprint 3rd Place",
    award: "🥉 BRONZE MEDAL",
    badgeClass: "text-amber-500 bg-amber-600/20"
  },
  {
    year: "2025",
    event: "North India Fitness League 2025",
    athlete: "Rohan Deshmukh",
    studentId: "DSO2026009",
    discipline: "Fitness",
    score: "Obstacle Course 2nd Place",
    award: "🥈 SILVER MEDAL",
    badgeClass: "text-slate-300 bg-slate-400/20"
  },
  {
    year: "2025",
    event: "Delhi Regional Karate Meet 2025",
    athlete: "Karan Oberoi",
    studentId: "DSO2026017",
    discipline: "Karate",
    score: "Kumite Heavyweight 1st Place",
    award: "🥇 GOLD MEDAL",
    badgeClass: "text-amber-300 bg-amber-400/20"
  },

  // 2027 Season (Scheduled Qualifiers & Projected Fixtures)
  {
    year: "2027",
    event: "38th National Games Qualifiers 2027",
    athlete: "Ananya Verma & Mehar Aneja",
    studentId: "DSO-SEED-27",
    discipline: "Karate & Yoga",
    score: "Direct State Seeding Qualified",
    award: "🏆 STATE SEED #1",
    badgeClass: "text-electric-400 bg-electric-500/20"
  },
  {
    year: "2027",
    event: "Asian Junior Martial Arts Championship 2027",
    athlete: "Kabir Dahiya",
    studentId: "DSO2026007",
    discipline: "Karate",
    score: "National Trial Entry Confirmed",
    award: "🌟 TRIAL FINALIST",
    badgeClass: "text-purple-400 bg-purple-500/20"
  },
  {
    year: "2027",
    event: "All-India Inter-Academy Yogasana 2027",
    athlete: "Diya Patel & Aarav Sharma",
    studentId: "DSO-TEAM-27",
    discipline: "Yoga",
    score: "DSO Contingent Nominated",
    award: "🌟 SEED CONTENDER",
    badgeClass: "text-amber-400 bg-amber-500/20"
  },
  {
    year: "2027",
    event: "Khelo India Youth Games Selection 2027",
    athlete: "Vivaan Kumar & Aditya Rawat",
    studentId: "DSO-GYM-27",
    discipline: "Gymnastics",
    score: "State Benchmark Cleared",
    award: "🌟 STATE QUALIFIER",
    badgeClass: "text-cyan-400 bg-cyan-500/20"
  }
];

// 3. Multimedia Gallery Items with Photos, Videos, and News Categories
const GALLERY_ITEMS = [
  {
    id: 1,
    type: "photo",
    year: "2026",
    category: "Karate",
    title: "Black Belt Grading Examination 2026",
    subtitle: "Shotokan Karate belt promotions under Sensei Arvind Mehra",
    mediaUrl: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800",
    badge: "🥋 PHOTO"
  },
  {
    id: 2,
    type: "photo",
    year: "2026",
    category: "Yoga",
    title: "Surya Namaskar 108 Repetition Challenge",
    subtitle: "State championship training camp supervised by Acharya Dev",
    mediaUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
    badge: "🧘 PHOTO"
  },
  {
    id: 3,
    type: "video",
    year: "2026",
    category: "Gymnastics",
    title: "Floor Acrobatics & Tumbling Demonstration",
    subtitle: "High performance slow-motion vault and back handspring drill",
    mediaUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
    badge: "▶ VIDEO CLIP"
  },
  {
    id: 4,
    type: "video",
    year: "2026",
    category: "Karate",
    title: "Kumite Point-Fighting Technique Workshop",
    subtitle: "Masterclass on rapid gyaku-zuki strikes and evasion footwork",
    mediaUrl: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800",
    badge: "▶ VIDEO CLIP"
  },
  {
    id: 5,
    type: "news",
    year: "2026",
    category: "Ceremony",
    title: "Delhi Times Feature: DSO Champions Sweep State Meet",
    subtitle: "Press clipping covering 18 tournament medals under Rakesh Budhwar",
    mediaUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800",
    badge: "📰 PRESS RELEASE"
  },
  {
    id: 6,
    type: "photo",
    year: "2025",
    category: "Ceremony",
    title: "Annual Sports Awards & Trophy Gala 2025",
    subtitle: "Felicitation ceremony of gold medalists by Director Rakesh Budhwar",
    mediaUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800",
    badge: "🏆 PHOTO"
  },
  {
    id: 7,
    type: "video",
    year: "2025",
    category: "Yoga",
    title: "National Yogasana Hold Benchmarks Video",
    subtitle: "10 Asana standard routine execution guide for junior competitors",
    mediaUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800",
    badge: "▶ VIDEO CLIP"
  },
  {
    id: 8,
    type: "news",
    year: "2025",
    category: "Karate",
    title: "Dainik Jagran: 5 DSO Karatekas Qualify For Nationals",
    subtitle: "Official circular and newspaper recognition for Ananya Verma & team",
    mediaUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800",
    badge: "📰 NEWS COVERAGE"
  },
  {
    id: 9,
    type: "photo",
    year: "2027",
    category: "Ceremony",
    title: "38th National Games Qualifier Squad Preview",
    subtitle: "Official team flag-off and trial accreditation pass verification",
    mediaUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800",
    badge: "🌟 2027 PREVIEW"
  }
];

let currentGalleryFilterType = "all";

// 4. Navigation Controller (Without Numbering)
const allViews = [
  'dashboard', 'registration', 'students', 'fees', 'attendance', 
  'batches', 'activities', 'gallery', 'events', 'weeklyTest', 
  'syllabus', 'results', 'stopwatch', 'reports', 'settings'
];

function navigateTo(viewId) {
  allViews.forEach(v => {
    const el = document.getElementById(`view-${v}`);
    const navEl = document.getElementById(`nav-${v}`);
    if (el) el.classList.add('hidden');
    if (navEl) navEl.classList.remove('menu-active');
  });

  const targetView = document.getElementById(`view-${viewId}`);
  const targetNav = document.getElementById(`nav-${viewId}`);
  if (targetView) targetView.classList.remove('hidden');
  if (targetNav) targetNav.classList.add('menu-active');

  const breadcrumb = document.getElementById('breadcrumbCurrent');
  if (breadcrumb) {
    breadcrumb.textContent = viewId.replace(/([A-Z])/g, ' $1').trim();
  }

  // Close mobile sidebar automatically
  closeMobileSidebar();

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (window.lucide) lucide.createIcons();
}

function toggleSidebar() {
  const sidebar = document.getElementById('mainSidebar');
  const backdrop = document.getElementById('mobileBackdrop');
  if (!sidebar) return;
  sidebar.classList.toggle('-translate-x-full');
  if (backdrop) backdrop.classList.toggle('hidden');
}

function closeMobileSidebar() {
  const sidebar = document.getElementById('mainSidebar');
  const backdrop = document.getElementById('mobileBackdrop');
  if (sidebar && window.innerWidth < 1024) {
    sidebar.classList.add('-translate-x-full');
    if (backdrop) backdrop.classList.add('hidden');
  }
}

function toggleNotificationPopup() {
  const drop = document.getElementById('notificationDropdown');
  if (drop) drop.classList.toggle('hidden');
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const msg = document.getElementById('toastMsg');
  if (!toast || !msg) return;
  msg.textContent = message;
  toast.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
  setTimeout(() => {
    toast.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
  }, 3000);
}

function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('hidden');
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('hidden');
}

function openRegistrationModal() {
  navigateTo('registration');
  prepareNewRegForm();
}

function prepareNewRegForm() {
  const nextId = "DSO2026" + String(students.length + 1).padStart(3, '0');
  const field = document.getElementById('regFormId');
  if (field) field.value = nextId;
}

// 5. Registration Handler
function handleRegistrationSubmit(e) {
  e.preventDefault();
  const newStudent = {
    id: document.getElementById('regFormId').value,
    name: document.getElementById('regFormName').value,
    father: document.getElementById('regFormFather').value,
    mother: document.getElementById('regFormMother').value,
    dob: document.getElementById('regFormDob').value,
    gender: document.getElementById('regFormGender').value,
    mobile: document.getElementById('regFormMobile').value,
    whatsapp: document.getElementById('regFormWhatsapp').value || document.getElementById('regFormMobile').value,
    address: document.getElementById('regFormAddress').value,
    school: "Delhi Model School",
    class: "Middle Standard",
    activity: document.getElementById('regFormActivity').value,
    batch: document.getElementById('regFormBatch').value,
    admDate: document.getElementById('regFormAdmDate').value,
    feeStatus: "Paid",
    feePaid: 2000,
    feeBalance: 0,
    feeMonth: "October 2026",
    receiptNo: `REC-2026-${String(students.length + 1).padStart(3, '0')}`,
    paymentMethod: "UPI",
    paymentDate: new Date().toISOString().split('T')[0],
    attendancePercent: 100,
    todayAttendance: "Present",
    avatar: document.getElementById('regFormAvatar').value
  };

  students.unshift(newStudent);
  saveToStorage();
  renderAllViews();
  document.getElementById('registrationForm').reset();
  prepareNewRegForm();

  showToast(`Student ${newStudent.name} registered under Director Rakesh Budhwar!`);
  navigateTo('students');
}

// 6. Student Directory Rendering
function renderStudentsTable() {
  const query = (document.getElementById('studentsFilterSearch')?.value || '').toLowerCase();
  const actFilter = document.getElementById('studentsFilterActivity')?.value || 'ALL';
  const batchFilter = document.getElementById('studentsFilterBatch')?.value || 'ALL';
  const feeFilter = document.getElementById('studentsFilterFee')?.value || 'ALL';

  const filtered = students.filter(s => {
    const matchesQuery = s.name.toLowerCase().includes(query) || s.id.toLowerCase().includes(query) || s.mobile.includes(query);
    const matchesAct = actFilter === 'ALL' || s.activity === actFilter;
    const matchesBatch = batchFilter === 'ALL' || s.batch === batchFilter;
    const matchesFee = feeFilter === 'ALL' || s.feeStatus === feeFilter;
    return matchesQuery && matchesAct && matchesBatch && matchesFee;
  });

  const tbody = document.getElementById('studentsTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="10" class="py-6 text-center text-slate-500">No matching student records found.</td></tr>`;
    return;
  }

  filtered.forEach(s => {
    const badgeClass = s.feeStatus === 'Paid' ? 'badge-paid' : (s.feeStatus === 'Pending' ? 'badge-pending' : 'badge-partial');
    const attWarning = s.attendancePercent < 75 ? 'text-red-400 font-extrabold flex items-center gap-1' : 'text-slate-300';

    const row = document.createElement('tr');
    row.className = "hover:bg-slate-800/40 transition";
    row.innerHTML = `
      <td class="py-3 px-4 font-mono font-bold text-electric-400">${s.id}</td>
      <td class="py-3 px-4">
        <div class="flex items-center gap-2.5">
          <img src="${s.avatar}" class="w-8 h-8 rounded-full object-cover ring-1 ring-slate-700"/>
          <div>
            <p class="font-bold text-white">${s.name}</p>
            <p class="text-[10px] text-slate-400">${s.gender}</p>
          </div>
        </div>
      </td>
      <td class="py-3 px-4 text-slate-300">${s.father}</td>
      <td class="py-3 px-4 font-mono text-slate-300">${s.mobile}</td>
      <td class="py-3 px-4 font-semibold text-slate-200">${s.activity}</td>
      <td class="py-3 px-4 font-mono text-slate-300">${s.batch}</td>
      <td class="py-3 px-4 text-slate-400">${s.admDate}</td>
      <td class="py-3 px-4">
        <span class="px-2 py-0.5 rounded text-[11px] font-bold ${badgeClass}">${s.feeStatus}</span>
      </td>
      <td class="py-3 px-4">
        <span class="${attWarning}">
          ${s.attendancePercent}% ${s.attendancePercent < 75 ? '<i data-lucide="alert-circle" class="w-3.5 h-3.5 inline text-red-400"></i>' : ''}
        </span>
      </td>
      <td class="py-3 px-4 text-right">
        <div class="flex items-center justify-end gap-1.5">
          <button onclick="viewStudentProfile('${s.id}')" title="View Profile" class="p-1.5 rounded-lg bg-navy-850 hover:bg-electric-500/20 text-electric-400">
            <i data-lucide="eye" class="w-3.5 h-3.5"></i>
          </button>
          <button onclick="deleteStudent('${s.id}')" title="Delete" class="p-1.5 rounded-lg bg-navy-850 hover:bg-red-500/20 text-red-400">
            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(row);
  });

  const countDisp = document.getElementById('studentTableCountDisplay');
  if (countDisp) countDisp.textContent = `Showing ${filtered.length} of ${students.length} athletes`;

  if (window.lucide) lucide.createIcons();
}

function viewStudentProfile(id) {
  const s = students.find(item => item.id === id);
  if (!s) return;

  document.getElementById('modalProfileImg').src = s.avatar;
  document.getElementById('modalProfileName').textContent = s.name;
  document.getElementById('modalProfileReg').textContent = s.id;
  document.getElementById('modalProfileActivity').textContent = s.activity;
  document.getElementById('modalProfileBatch').textContent = s.batch;
  
  const feeBadge = document.getElementById('modalProfileFee');
  feeBadge.textContent = s.feeStatus;
  feeBadge.className = `font-bold ${s.feeStatus === 'Paid' ? 'text-emerald-400' : 'text-red-400'}`;
  
  document.getElementById('modalProfileAtt').textContent = `${s.attendancePercent}%`;
  document.getElementById('modalProfileParent').textContent = `${s.father} / ${s.mother}`;
  document.getElementById('modalProfileMobile').textContent = `${s.mobile} (WA: ${s.whatsapp})`;
  document.getElementById('modalProfileAdm').textContent = s.admDate;

  openModal('studentProfileModal');
}

function deleteStudent(id) {
  if (!confirm(`Are you sure you want to remove student ID ${id} from academy records?`)) return;
  students = students.filter(s => s.id !== id);
  saveToStorage();
  renderAllViews();
  showToast(`Student ${id} deleted.`);
}

function exportStudentsCSV() {
  let csv = "Registration ID,Name,Father Name,Mobile,Activity,Batch,Admission Date,Fee Status,Attendance %\n";
  students.forEach(s => {
    csv += `"${s.id}","${s.name}","${s.father}","${s.mobile}","${s.activity}","${s.batch}","${s.admDate}","${s.feeStatus}","${s.attendancePercent}%"\n`;
  });
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `DSO_Students_Export_2026.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("Student directory exported to CSV!");
}

// 7. Fee Management Operations (Standard ₹2,000)
function renderFeesTable() {
  const filter = document.getElementById('feesTableFilter')?.value || 'ALL';
  const tbody = document.getElementById('feesTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  let totalPaid = 0;
  let totalPending = 0;

  students.forEach(s => {
    totalPaid += (s.feePaid || 0);
    totalPending += (s.feeBalance || 0);

    if (filter !== 'ALL' && s.feeStatus !== filter) return;

    const badgeClass = s.feeStatus === 'Paid' ? 'badge-paid' : (s.feeStatus === 'Pending' ? 'badge-pending' : 'badge-partial');

    const tr = document.createElement('tr');
    tr.className = "hover:bg-slate-800/40 transition";
    tr.innerHTML = `
      <td class="py-3 px-4 font-mono font-bold text-electric-400">${s.receiptNo || 'REC-PENDING'}</td>
      <td class="py-3 px-4 font-bold text-white">${s.name} <span class="text-[10px] text-slate-400 block font-normal">${s.id}</span></td>
      <td class="py-3 px-4 text-slate-300">${s.feeMonth || 'October 2026'}</td>
      <td class="py-3 px-4 font-bold text-slate-200">₹2,000</td>
      <td class="py-3 px-4 font-bold text-emerald-400">₹${s.feePaid.toLocaleString('en-IN')}</td>
      <td class="py-3 px-4 font-bold text-red-400">₹${s.feeBalance.toLocaleString('en-IN')}</td>
      <td class="py-3 px-4 font-semibold text-slate-300">${s.paymentMethod || 'UPI'}</td>
      <td class="py-3 px-4 text-slate-400 font-mono">${s.paymentDate || '-'}</td>
      <td class="py-3 px-4"><span class="px-2 py-0.5 rounded text-[11px] font-bold ${badgeClass}">${s.feeStatus}</span></td>
      <td class="py-3 px-4 text-right">
        <button onclick="viewInvoiceReceipt('${s.id}')" class="px-2.5 py-1 rounded bg-electric-500/20 hover:bg-electric-500/30 text-electric-400 font-bold text-[11px]">
          Receipt &rarr;
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  const paidEl = document.getElementById('feePageTotalPaid');
  const pendingEl = document.getElementById('feePageTotalPending');
  if (paidEl) paidEl.textContent = `₹${totalPaid.toLocaleString('en-IN')}`;
  if (pendingEl) pendingEl.textContent = `₹${totalPending.toLocaleString('en-IN')}`;
}

function openCollectFeeModal() {
  const select = document.getElementById('feeModalStudentSelect');
  select.innerHTML = '';
  students.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.id;
    opt.textContent = `${s.name} (${s.id}) - Current: ${s.feeStatus} (Bal: ₹${s.feeBalance})`;
    select.appendChild(opt);
  });
  openModal('collectFeeModal');
}

function handleFeeCollectionSubmit(e) {
  e.preventDefault();
  const sId = document.getElementById('feeModalStudentSelect').value;
  const amount = parseInt(document.getElementById('feeModalAmountPaid').value, 10);
  const method = document.getElementById('feeModalMethod').value;

  const student = students.find(s => s.id === sId);
  if (student) {
    student.feePaid = amount;
    student.feeBalance = 2000 - amount;
    student.feeStatus = student.feeBalance === 0 ? 'Paid' : (amount === 0 ? 'Pending' : 'Partial');
    student.paymentMethod = method;
    student.paymentDate = new Date().toISOString().split('T')[0];
    student.receiptNo = `REC-2026-${String(Math.floor(100 + Math.random() * 900))}`;
    saveToStorage();
    renderAllViews();
    closeModal('collectFeeModal');
    showToast(`Fee payment of ₹${amount} recorded for ${student.name}`);
    viewInvoiceReceipt(student.id);
  }
}

function viewInvoiceReceipt(id) {
  const s = students.find(item => item.id === id);
  if (!s) return;

  document.getElementById('receiptNumberDisplay').textContent = s.receiptNo || 'REC-2026-001';
  document.getElementById('receiptDateDisplay').textContent = s.paymentDate === '-' ? new Date().toISOString().split('T')[0] : s.paymentDate;
  document.getElementById('receiptStudentName').textContent = s.name;
  document.getElementById('receiptRegNumber').textContent = s.id;
  document.getElementById('receiptActivity').textContent = `${s.activity} (${s.batch})`;
  document.getElementById('receiptMonth').textContent = s.feeMonth || 'October 2026';
  document.getElementById('receiptPaidDisplay').textContent = `₹${s.feePaid.toLocaleString('en-IN')}.00`;
  document.getElementById('receiptBalanceDisplay').textContent = `₹${s.feeBalance.toLocaleString('en-IN')}.00`;
  document.getElementById('receiptMethodDisplay').textContent = s.paymentMethod;

  openModal('receiptModal');
}

function printInvoice() {
  window.print();
}

// 8. Daily Attendance System
function renderAttendanceTable() {
  const batchFilter = document.getElementById('attendanceBatchFilter')?.value || 'ALL';
  const actFilter = document.getElementById('attendanceActivityFilter')?.value || 'ALL';
  const tbody = document.getElementById('attendanceTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  const filtered = students.filter(s => {
    const matchesBatch = batchFilter === 'ALL' || s.batch === batchFilter;
    const matchesAct = actFilter === 'ALL' || s.activity === actFilter;
    return matchesBatch && matchesAct;
  });

  filtered.forEach((s) => {
    const isBelow75 = s.attendancePercent < 75;
    const tr = document.createElement('tr');
    tr.className = "hover:bg-slate-800/40 transition";
    tr.innerHTML = `
      <td class="py-3 px-4 font-bold text-white">
        <div class="flex items-center gap-2">
          <img src="${s.avatar}" class="w-7 h-7 rounded-full object-cover"/>
          <span>${s.name} <span class="text-[10px] text-slate-400 font-mono block">${s.id}</span></span>
        </div>
      </td>
      <td class="py-3 px-4 text-slate-300">${s.activity} • <span class="font-mono text-electric-400">${s.batch}</span></td>
      <td class="py-3 px-4 text-center">
        <div class="inline-flex rounded-xl bg-navy-950 p-1 border border-slate-800 gap-1">
          <button onclick="setStudentAttendance('${s.id}', 'Present')" class="px-2.5 py-1 text-xs rounded-lg font-bold transition ${s.todayAttendance === 'Present' ? 'bg-emerald-500 text-white' : 'text-slate-400 hover:text-white'}">P</button>
          <button onclick="setStudentAttendance('${s.id}', 'Absent')" class="px-2.5 py-1 text-xs rounded-lg font-bold transition ${s.todayAttendance === 'Absent' ? 'bg-red-500 text-white' : 'text-slate-400 hover:text-white'}">A</button>
          <button onclick="setStudentAttendance('${s.id}', 'Leave')" class="px-2.5 py-1 text-xs rounded-lg font-bold transition ${s.todayAttendance === 'Leave' ? 'bg-amber-500 text-white' : 'text-slate-400 hover:text-white'}">L</button>
        </div>
      </td>
      <td class="py-3 px-4 font-bold ${isBelow75 ? 'text-red-400' : 'text-slate-200'}">
        ${s.attendancePercent}%
      </td>
      <td class="py-3 px-4">
        ${isBelow75 
          ? `<span class="inline-flex items-center gap-1 text-[11px] font-bold text-red-400 bg-red-500/10 border border-red-500/30 px-2 py-0.5 rounded-full"><i data-lucide="alert-triangle" class="w-3 h-3"></i> Low Attendance</span>`
          : `<span class="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">Good Standing</span>`}
      </td>
    `;
    tbody.appendChild(tr);
  });

  if (window.lucide) lucide.createIcons();
}

function setStudentAttendance(id, status) {
  const s = students.find(item => item.id === id);
  if (s) {
    s.todayAttendance = status;
    saveToStorage();
    renderAttendanceTable();
  }
}

function markAllAttendance(status) {
  students.forEach(s => s.todayAttendance = status);
  saveToStorage();
  renderAttendanceTable();
  showToast(`All 20 athletes marked as ${status}`);
}

function saveAttendanceSession() {
  const date = document.getElementById('attendanceDatePicker').value;
  showToast(`Attendance recorded & validated by Director Rakesh Budhwar!`);
}

// 9. Unified Results Engine (Dropdown with 2025, 2026, 2027)
function renderUnifiedResults() {
  const yearFilter = document.getElementById('resultsYearFilter')?.value || 'ALL';
  const catFilter = document.getElementById('resultsCategoryFilter')?.value || 'ALL';
  const query = (document.getElementById('resultsSearchInput')?.value || '').toLowerCase().trim();

  const tbody = document.getElementById('unifiedResultsTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  const filtered = UNIFIED_RESULTS.filter(r => {
    const matchYear = yearFilter === 'ALL' || r.year === yearFilter;
    const matchCat = catFilter === 'ALL' || r.discipline === catFilter;
    const matchQuery = !query || r.event.toLowerCase().includes(query) || r.athlete.toLowerCase().includes(query);
    return matchYear && matchCat && matchQuery;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="py-6 text-center text-slate-500">No tournament records found for the selected season.</td></tr>`;
    return;
  }

  filtered.forEach(r => {
    const tr = document.createElement('tr');
    tr.className = "hover:bg-slate-800/40 transition";
    tr.innerHTML = `
      <td class="py-3 px-4 font-mono font-bold text-amber-400">${r.year}</td>
      <td class="py-3 px-4 font-bold text-white">${r.event}</td>
      <td class="py-3 px-4 font-semibold text-slate-200">${r.athlete}</td>
      <td class="py-3 px-4 text-slate-300">${r.discipline}</td>
      <td class="py-3 px-4 text-slate-300 font-mono">${r.score}</td>
      <td class="py-3 px-4">
        <span class="px-2.5 py-0.5 rounded-full text-xs font-bold ${r.badgeClass}">${r.award}</span>
      </td>
      <td class="py-3 px-4 text-right">
        <button onclick="downloadSingleResultCSV('${r.event}', '${r.athlete}', '${r.score}', '${r.year}')" class="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700">
          Certificate
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function downloadSingleResultCSV(event, athlete, score, year) {
  const csv = `Season,Event Name,Athlete,Score/Position,Director\n"${year}","${event}","${athlete}","${score}","Rakesh Budhwar"\n`;
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Certificate_${athlete.replace(/\s+/g, '_')}_${year}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(`Certificate dossier downloaded for ${athlete}`);
}

function exportResultsCSV() {
  let csv = "Season,Tournament Event,Athlete Name,Discipline,Score/Result,Medal Honor\n";
  UNIFIED_RESULTS.forEach(r => {
    csv += `"${r.year}","${r.event}","${r.athlete}","${r.discipline}","${r.score}","${r.award}"\n`;
  });
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `DSO_Tournament_Honor_Roll_2025_2027.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("Unified Results Database (2025-2027) exported to CSV!");
}

// 10. Multimedia Gallery (Photos, Videos, News Sub-buttons + Dropdown)
function renderGallery() {
  const container = document.getElementById('galleryGridContainer');
  if (!container) return;
  container.innerHTML = '';

  const yearFilter = document.getElementById('galleryYearFilter')?.value || 'ALL';
  const catFilter = document.getElementById('galleryCategoryFilter')?.value || 'ALL';

  const filtered = GALLERY_ITEMS.filter(g => {
    const matchType = currentGalleryFilterType === 'all' || g.type === currentGalleryFilterType;
    const matchYear = yearFilter === 'ALL' || g.year === yearFilter;
    const matchCat = catFilter === 'ALL' || g.category === catFilter;
    return matchType && matchYear && matchCat;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div class="col-span-full py-12 text-center text-slate-500">No media items found matching this filter criteria.</div>`;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = "media-card glass-panel border border-slate-800 h-64 group cursor-pointer relative shadow-card-3d";
    card.innerHTML = `
      <img src="${item.mediaUrl}" alt="${item.title}" class="w-full h-full object-cover transition duration-500"/>
      <div class="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>
      
      <!-- Badges -->
      <div class="absolute top-3 left-3 flex gap-1.5">
        <span class="px-2 py-0.5 rounded-full bg-navy-900/90 text-[10px] font-bold text-white border border-slate-700">${item.badge}</span>
        <span class="px-2 py-0.5 rounded-full bg-electric-500/20 text-[10px] font-bold text-electric-400 border border-electric-500/30">${item.year}</span>
      </div>

      <!-- Play button icon for video -->
      ${item.type === 'video' ? `
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div class="w-12 h-12 rounded-full bg-electric-500/80 text-white flex items-center justify-center shadow-glow-electric group-hover:scale-110 transition">
            <i data-lucide="play" class="w-5 h-5 fill-current"></i>
          </div>
        </div>
      ` : ''}

      <!-- Bottom Meta -->
      <div class="absolute bottom-3 left-3 right-3 space-y-1">
        <h4 class="text-xs font-bold text-white heading-font line-clamp-1">${item.title}</h4>
        <p class="text-[11px] text-slate-300 line-clamp-1">${item.subtitle}</p>
      </div>
    `;

    card.addEventListener('click', () => openMediaLightbox(item));
    container.appendChild(card);
  });

  if (window.lucide) lucide.createIcons();
}

function filterGalleryType(type, btn) {
  currentGalleryFilterType = type;
  document.querySelectorAll('#galleryTypeButtons button').forEach(b => {
    b.className = "px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition";
  });
  btn.className = "px-4 py-2 rounded-xl text-xs font-bold bg-electric-500 text-white shadow-glow-electric transition";
  renderGallery();
}

function applyGalleryFilters() {
  renderGallery();
}

function openMediaLightbox(item) {
  const modal = document.getElementById('mediaLightboxModal');
  const title = document.getElementById('lightboxMediaTitle');
  const sub = document.getElementById('lightboxMediaSubtitle');
  const tag = document.getElementById('lightboxMediaTag');
  const content = document.getElementById('lightboxMediaContent');

  if (!modal) return;
  title.textContent = item.title;
  sub.textContent = `${item.subtitle} • Season ${item.year}`;
  tag.textContent = item.badge;

  content.innerHTML = `
    <img src="${item.mediaUrl}" alt="${item.title}" class="w-full h-full object-contain"/>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

// 11. Dashboard Live Roster Widgets
function renderDashboardWidgets() {
  const recentTbody = document.getElementById('dashboardRecentRegBody');
  if (recentTbody) {
    recentTbody.innerHTML = '';
    students.slice(0, 5).forEach(s => {
      const tr = document.createElement('tr');
      tr.className = "hover:bg-slate-800/40";
      tr.innerHTML = `
        <td class="py-2.5 px-3 font-mono text-electric-400 font-bold">${s.id}</td>
        <td class="py-2.5 px-3 font-bold text-white flex items-center gap-2">
          <img src="${s.avatar}" class="w-6 h-6 rounded-full object-cover"/>
          <span>${s.name}</span>
        </td>
        <td class="py-2.5 px-3 font-semibold text-slate-300">${s.activity}</td>
        <td class="py-2.5 px-3 font-mono text-slate-400">${s.batch}</td>
        <td class="py-2.5 px-3">
          <button onclick="viewStudentProfile('${s.id}')" class="text-electric-400 hover:text-white font-bold text-xs">View</button>
        </td>
      `;
      recentTbody.appendChild(tr);
    });
  }

  const pendingTbody = document.getElementById('dashboardPendingFeesBody');
  if (pendingTbody) {
    pendingTbody.innerHTML = '';
    const pendingList = students.filter(s => s.feeStatus !== 'Paid').slice(0, 5);
    if (pendingList.length === 0) {
      pendingTbody.innerHTML = `<tr><td colspan="5" class="py-4 text-center text-slate-500">All student accounts up to date!</td></tr>`;
    } else {
      pendingList.forEach(s => {
        const tr = document.createElement('tr');
        tr.className = "hover:bg-slate-800/40";
        tr.innerHTML = `
          <td class="py-2.5 px-3 font-bold text-white">${s.name}</td>
          <td class="py-2.5 px-3 text-slate-400">Oct 2026</td>
          <td class="py-2.5 px-3 font-bold text-red-400">₹${s.feeBalance.toLocaleString('en-IN')}</td>
          <td class="py-2.5 px-3"><span class="px-2 py-0.5 rounded text-[10px] font-bold ${s.feeStatus === 'Pending' ? 'badge-pending' : 'badge-partial'}">${s.feeStatus}</span></td>
          <td class="py-2.5 px-3">
            <button onclick="openCollectFeeModal()" class="text-brandOrange-400 hover:text-white font-bold text-xs">Collect</button>
          </td>
        `;
        pendingTbody.appendChild(tr);
      });
    }
  }

  const totalStudentsEl = document.getElementById('kpiTotalStudents');
  const activeStudentsEl = document.getElementById('kpiActiveStudents');
  const sidebarStudentCount = document.getElementById('sidebarStudentCount');
  if (totalStudentsEl) totalStudentsEl.textContent = students.length;
  if (activeStudentsEl) activeStudentsEl.textContent = students.length;
  if (sidebarStudentCount) sidebarStudentCount.textContent = students.length;

  const presentCount = students.filter(s => s.todayAttendance === 'Present').length;
  const attKpi = document.getElementById('kpiTodayAttendance');
  if (attKpi) attKpi.innerHTML = `${presentCount} <span class="text-sm font-normal text-slate-400">/ ${students.length}</span>`;

  const bA = students.filter(s => s.batch === "5–6 PM").length;
  const bB = students.filter(s => s.batch === "6–7 PM").length;
  const batchCountA = document.getElementById('batchCountA');
  const batchCountB = document.getElementById('batchCountB');
  if (batchCountA) batchCountA.textContent = `${bA} Students`;
  if (batchCountB) batchCountB.textContent = `${bB} Students`;

  const totalPaid = students.reduce((acc, curr) => acc + (curr.feePaid || 0), 0);
  const totalPending = students.reduce((acc, curr) => acc + (curr.feeBalance || 0), 0);
  const kpiPaid = document.getElementById('kpiTotalFees');
  const kpiPending = document.getElementById('kpiPendingCount');
  if (kpiPaid) kpiPaid.textContent = `₹${totalPaid.toLocaleString('en-IN')}`;
  if (kpiPending) kpiPending.textContent = `${students.filter(s => s.feeStatus !== 'Paid').length} students (₹${totalPending.toLocaleString('en-IN')})`;
}

// 12. Director Setting Persistence
function saveDirectorSetting() {
  const dirInput = document.getElementById('settingDirectorInput').value;
  document.getElementById('sidebarDirectorName').textContent = dirInput;
  showToast(`Sports Director preferences saved: ${dirInput}`);
}

// 13. Global Search Input
function handleGlobalSearch(text) {
  if (!text || text.trim() === '') return;
  const q = text.toLowerCase();
  const match = students.find(s => s.name.toLowerCase().includes(q) || s.id.toLowerCase().includes(q) || s.activity.toLowerCase().includes(q));
  if (match) {
    navigateTo('students');
    const filterInput = document.getElementById('studentsFilterSearch');
    if (filterInput) {
      filterInput.value = text;
      renderStudentsTable();
    }
  }
}

// 14. Precision Stopwatch
let swInterval = null;
let swStartTime = 0;
let swElapsedTime = 0;
let swRunning = false;
let swLapCount = 0;

function formatStopwatchTime(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const milliseconds = Math.floor((ms % 1000) / 10);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`;
}

function toggleStopwatch() {
  const btn = document.getElementById('swStartBtn');
  if (!swRunning) {
    swStartTime = Date.now() - swElapsedTime;
    swInterval = setInterval(() => {
      swElapsedTime = Date.now() - swStartTime;
      updateStopwatchDisplay();
    }, 10);
    swRunning = true;
    btn.textContent = "Pause";
    btn.className = "px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider";
  } else {
    clearInterval(swInterval);
    swRunning = false;
    btn.textContent = "Resume";
    btn.className = "px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider";
  }
}

function updateStopwatchDisplay() {
  const formatted = formatStopwatchTime(swElapsedTime);
  const parts = formatted.split('.');
  document.getElementById('stopwatchDisplay').innerHTML = `${parts[0]}.<span class="text-3xl sm:text-4xl text-electric-400">${parts[1]}</span>`;
}

function recordStopwatchLap() {
  if (swElapsedTime === 0) return;
  swLapCount++;
  const lapList = document.getElementById('stopwatchLapsList');
  if (swLapCount === 1) lapList.innerHTML = '';
  
  const div = document.createElement('div');
  div.className = "flex justify-between items-center py-1.5 px-3 rounded-lg bg-navy-950 border border-slate-800";
  div.innerHTML = `
    <span class="text-slate-400 font-bold">Lap Split #${swLapCount}</span>
    <span class="text-electric-400 font-bold">${formatStopwatchTime(swElapsedTime)}</span>
  `;
  lapList.prepend(div);
  document.getElementById('lapCountDisplay').textContent = `${swLapCount} Recorded Laps`;
}

function resetStopwatch() {
  clearInterval(swInterval);
  swRunning = false;
  swElapsedTime = 0;
  swLapCount = 0;
  updateStopwatchDisplay();
  document.getElementById('swStartBtn').textContent = "Start";
  document.getElementById('swStartBtn').className = "px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider";
  document.getElementById('stopwatchLapsList').innerHTML = `<p class="text-slate-500 text-center py-4">No split intervals recorded yet</p>`;
  document.getElementById('lapCountDisplay').textContent = "0 Laps";
}

// 15. Real-Time Clock
function updateClock() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-IN', { hour12: false });
  const clockEl = document.getElementById('liveClockDisplay');
  if (clockEl) clockEl.textContent = `${timeStr} IST`;
}
setInterval(updateClock, 1000);
updateClock();

// 16. Charts Engine
let feeChartInstance = null;
let activityChartInstance = null;

function initCharts() {
  const feeCtx = document.getElementById('feeCollectionChart')?.getContext('2d');
  if (feeCtx) {
    if (feeChartInstance) feeChartInstance.destroy();
    feeChartInstance = new Chart(feeCtx, {
      type: 'bar',
      data: {
        labels: ['May 2026', 'Jun 2026', 'Jul 2026', 'Aug 2026', 'Sep 2026', 'Oct 2026'],
        datasets: [{
          label: 'Fees Collected (INR)',
          data: [28000, 32000, 34000, 31000, 36000, 32000],
          backgroundColor: 'rgba(0, 168, 255, 0.75)',
          hoverBackgroundColor: 'rgba(255, 107, 53, 0.9)',
          borderRadius: 8,
          borderSkipped: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: {
            grid: { color: 'rgba(255,255,255,0.05)' },
            ticks: { color: '#94A3B8', font: { size: 10 } }
          },
          y: {
            grid: { color: 'rgba(255,255,255,0.05)' },
            ticks: { 
              color: '#94A3B8',
              font: { size: 10 },
              callback: val => '₹' + (val / 1000) + 'k'
            }
          }
        }
      }
    });
  }

  const actCtx = document.getElementById('activityDistributionChart')?.getContext('2d');
  if (actCtx) {
    if (activityChartInstance) activityChartInstance.destroy();
    activityChartInstance = new Chart(actCtx, {
      type: 'doughnut',
      data: {
        labels: ['Karate', 'Yoga', 'Gymnastics', 'Fitness', 'Skipping', 'Self Defense'],
        datasets: [{
          data: [5, 4, 4, 3, 2, 2],
          backgroundColor: ['#EF4444', '#F59E0B', '#00A8FF', '#10B981', '#A855F7', '#FF6B35'],
          borderWidth: 0,
          hoverOffset: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '68%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: { color: '#CBD5E1', boxWidth: 10, font: { size: 10 } }
          }
        }
      }
    });
  }
}

// 17. Master Views Initializer
function renderAllViews() {
  renderStudentsTable();
  renderFeesTable();
  renderAttendanceTable();
  renderUnifiedResults();
  renderGallery();
  renderDashboardWidgets();
  prepareNewRegForm();
  if (window.lucide) lucide.createIcons();
}

window.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();
  initCharts();
  renderAllViews();
});

// Optional: Jar API Key asel tar quotes madhe paste kara, nahitar asach rahu dya (tari chatbot 100% chalel!)
const API_KEY = "AQ.Ab8RN6KGOCPn7cFVAYyU6mO6Ycq933ROhTXd6MNtRiZGvW_B4g";

const COLLEGE_DATA = `
You are the official AI Chatbot of B. K. Birla College of Arts, Science & Commerce (Empowered Autonomous), Kalyan (https://bkbck.edu.in/).
Give detailed, well-structured answers in bullet points based ONLY on this college information. If user asks in Marathi or Hinglish, reply in the same language.

1. OVERVIEW & ACCREDITATION:
- Established: 1972 by Kalyan Citizens' Education Society (Pujya Shri B. K. Birla ji & Pujya Smt. Sarala ji Birla).
- Affiliation & Status: Affiliated to University of Mumbai; Empowered Autonomous Status (2023-2033); NAAC 4th Cycle 'A++' Grade (CGPA 3.51); UGC College of Excellence; DBT Star College; ISO 9001:2015 Certified; NEP-2020 implemented from 2023-24.
- Campus & Leadership: 20-acre green campus, 14,300+ students, 200+ faculty (24 Ph.D. guides). Director: Dr. Naresh Chandra | Principal: Dr. Avinash Patil.
- Rankings: Education World 2025-26 Ranked #6 in India & #5 in Maharashtra (Private Autonomous Colleges); NIRF 2025 Ranked #59 in Science; 60 Faculty Patents (44 Granted, 16 Published).

2. COURSES OFFERED (35 UG, 34 PG, 9 Ph.D.):
- Junior College (FYJC & SYJC): Arts, Commerce, Science & Vocational streams.
- UG Science & IT: B.Sc. IT, B.Sc. Computer Science, BCA (AICTE approved), B.Sc. Data Science, B.Sc. Cyber Security, B.Sc. AI, Robotics & Automation, Biotechnology, Microbiology, Physics, Chemistry, Botany, Zoology, Maths, EVS.
- UG Commerce & Management: B.Com., BAF, BBI, BFM, BMS (AICTE), BBA (AICTE), B.Com. Retail Management (with Maruti Suzuki) & Logistics.
- UG Arts & Media: B.A. (English, Marathi, Hindi, History, Geography, Political Science, Economics) & B.A.M.M.C.
- PG & Doctoral: M.A., M.Com., M.Sc. (IT, CS, Data Science & Big Data, AI, Cyber Security, Finance, Biotech, Bioanalytical Science, EVS, Food Science & Core Sciences), 4 B.Voc. courses, 9 Ph.D. centers, YCMOU Distance courses.

3. ADMISSIONS, ELIGIBILITY & CUTOFFS:
- Process: Online registration on University of Mumbai Pre-Admission Portal + College Portal (https://bkbck.edu.in/).
- Eligibility: Class 12 merit for most UG courses. Maths/Statistics in Class 12 compulsory for B.Sc. IT, CS & Biotech. Valid MH-CET score mandatory for BBA, BMS & BCA. PG admissions are merit-based (entrance test for M.Sc. EVS & Bioanalytical Science).
- Indicative General Cutoffs: BAF ~72-84%, B.Sc. IT/CS/Biotech ~65-75%, B.Com ~50-65%, B.A./General B.Sc. ~45-60%.

4. DOCUMENTS REQUIRED AT ADMISSION:
- Class 10 Marksheet copy, Original Class 12 Marksheet + 2 photocopies, Original School/College Leaving Certificate (LC), University of Mumbai Pre-Admission Form, College Online Form printout, Aadhaar Card copy, Passport photos, and Caste/Validity/Non-Creamy Layer/EWS certificates (if applicable).

5. EXAM PATTERN, ATTENDANCE & RULES:
- 60:40 Autonomous Pattern (NEP-2020): 60 Marks External Written Exam + 40 Marks Continuous Internal Evaluation (CIE - tests, assignments, presentations, attendance). Minimum passing is 40%.
- Attendance Rule (Ordinance 6086): Minimum 75% overall attendance (50% in each subject) compulsory for semester exams.
- Campus Rules: Mandatory RFID smart ID card at turnstile gates; strict zero-tolerance Anti-Ragging Policy.

6. FEES, REFUND POLICY & SCHOLARSHIPS:
- Annual Fees: Aided B.A./B.Com./B.Sc. ~Rs. 11,870 - Rs. 25,000/yr; Self-financed UG (IT, CS, Biotech, BAF, BMS, BCA) ~Rs. 35,000 - Rs. 85,340/yr.
- Cancellation Refund Rules (Circular UG/412): Before term start: Rs. 500 deduction | Up to 20 days: 20% | 21-50 days: 30% | 51-80 days (or Aug 31): 50% | Sept 1-30: 60% | After Sept 30: 100% tuition deduction (Caution/Library/Lab deposits 100% refundable).
- Scholarships: Maharashtra MahaDBT schemes + Management need-based aid up to Rs. 10,000 or 50% fee concession.

7. CAMPUS FACILITIES & PLACEMENTS:
- Facilities: 72 ICT classrooms (50% smart), Central Green Library (NDLI, Shodhganga & café), IoT & Robotics Lab, Apple iMac Lab, NABL Environmental Lab, Mpower Counselling Cell (by Dr. Neerja Birla), Youthopia annual fest, NCC, NSS, Sports.
- Placements: ~470 UG placed (Median Rs. 2.16 LPA, Highest Rs. 5.5-6.5 LPA) & ~200 PG placed (Median Rs. 2.40 LPA). Top Recruiters: TCS, Infosys, Wipro, Capgemini, Accenture, Cognizant, L&T Infotech, ICICI, Kotak, HDFC, Piramal, Maruti Suzuki. TPO: placement@bkbck.edu.in / +91 98337 65123.

8. LOCATION & CONTACT:
- Address: Birla College Campus Road, Gauripada, Kalyan (West), Dist. Thane - 421301 (near Kalyan Junction & Shahad Railway Station).
- Helpline: Toll-Free 1800 233 0144 | Landline: 0251 2231293 | Email: enquiry@bkbck.edu.in
`;

// Built-in Detailed Knowledge Modules (Offline Backup + Instant Engine)
const OFFLINE_KB = [
  {
    keys: ["course", "courses", "stream", "it", "bsc", "bcom", "ba", "bms", "bba", "bca", "msc", "phd", "junior", "fyjc", "syjc", "program"],
    reply: `<strong>📚 Courses Offered at B. K. Birla College (35 UG, 34 PG, 9 Ph.D.):</strong><br>
    • <strong>Junior College (XI & XII):</strong> Arts, Commerce, Science & Vocational streams.<br>
    • <strong>UG Science & IT:</strong> B.Sc. IT, B.Sc. Computer Science, BCA (AICTE), B.Sc. Data Science, B.Sc. Cyber Security, B.Sc. AI, Robotics & Automation, Biotechnology, Microbiology, PCM & CBZ.<br>
    • <strong>UG Commerce & Management:</strong> B.Com., BAF, BBI, BFM, BMS (AICTE), BBA (AICTE), B.Com. Retail Management (with Maruti Suzuki) & Logistics.<br>
    • <strong>UG Arts & Media:</strong> B.A. (English, Marathi, Hindi, History, Geography, Pol. Science, Economics) & B.A.M.M.C.<br>
    • <strong>PG & Ph.D.:</strong> M.A., M.Com., M.Sc. (IT, CS, Data Science, AI, Cyber Security, Finance, Biotech, Bioanalytical Science, EVS, Food Science), 4 B.Voc. courses & 9 Ph.D. centers.`
  },
  {
    keys: ["admission", "cutoff", "cutoffs", "merit", "eligibility", "percentage", "cet", "mhcet", "apply"],
    reply: `<strong>📝 Admission Process, Eligibility & Cutoffs:</strong><br>
    • <strong>Application Portals:</strong> Register online on both the <strong>University of Mumbai Pre-Admission Portal</strong> and <strong>https://bkbck.edu.in/</strong>.<br>
    • <strong>Eligibility Rules:</strong> Class 12 merit for B.A./B.Com./B.Sc. | <strong>Maths/Statistics in 12th</strong> mandatory for B.Sc. IT, CS & Biotech | <strong>MH-CET</strong> score mandatory for BBA, BMS & BCA.<br>
    • <strong>Indicative General Cutoffs:</strong> BAF (~72%–84%), B.Sc. IT/CS/Biotech (~65%–75%), B.Com. (~50%–65%), B.A. & General B.Sc. (~45%–60%).<br>
    • <strong>PG Admissions:</strong> Graduation merit-based (Entrance test for M.Sc. EVS & Bioanalytical Science).`
  },
  {
    keys: ["document", "documents", "certificate", "lc", "leaving", "marksheet", "aadhaar", "caste", "validity"],
    reply: `<strong>📄 Mandatory Documents Required at Admission:</strong><br>
    • Class 10 (SSC) Marksheet (photocopy).<br>
    • <strong>Original Class 12 (HSC) Marksheet</strong> + 2 self-attested photocopies (Graduation marksheets & TC for PG).<br>
    • <strong>Original School/College Leaving Certificate (LC)</strong> + 2 photocopies.<br>
    • University of Mumbai Pre-Admission Enrollment Form & College Online Application Form printout.<br>
    • Aadhaar Card copy, recent passport-size photos, and Caste / Validity / Non-Creamy Layer / EWS certificates (if applicable).`
  },
  {
    keys: ["fee", "fees", "refund", "cancel", "cancellation", "deduction", "deposit", "cost", "structure"],
    reply: `<strong>💰 Annual Fee Structure & Official Refund Policy:</strong><br>
    • <strong>Tuition Fees:</strong> Aided B.A./B.Com./B.Sc. ~<strong>₹11,870 – ₹25,000/yr</strong> | Self-financed UG (B.Sc. IT, CS, Biotech, BAF, BMS, BCA) ~<strong>₹35,000 – ₹85,340/yr</strong>.<br>
    • <strong>Cancellation Refund Slabs (Circular UG/412):</strong><br>
      - Before term commencement: ₹500 deduction<br>
      - Up to 20 days after term start: 20% deduction<br>
      - 21st to 50th day: 30% deduction<br>
      - 51st to 80th day (or Aug 31): 50% deduction<br>
      - Sept 1 to Sept 30: 60% deduction<br>
      - After Sept 30: 100% tuition deduction (Caution/Library/Lab deposits are 100% refundable).`
  },
  {
    keys: ["scholarship", "scholarships", "freeship", "mahadbt", "concession", "financial", "aid", "ebc", "obc", "sc", "st", "vjnt"],
    reply: `<strong>🎓 Scholarships & Financial Assistance:</strong><br>
    • <strong>Management Need-Based Aid:</strong> Financial support up to <strong>₹10,000 or 50% of total fees</strong> (whichever is less) per student per year, plus tuition fee concessions.<br>
    • <strong>Government MahaDBT Schemes:</strong> Full support for Maharashtra Govt. scholarships/freeships (SC, ST, VJNT, OBC, SBC, EBC & Minority).<br>
    • <strong>Endowment & Sports Aid:</strong> Endowment prizes (Late Shri S. A. Pai Awards) and sponsorships for National/International sports & cultural events.`
  },
  {
    keys: ["exam", "pattern", "internal", "external", "60", "40", "attendance", "75", "rfid", "ragging", "rules", "passing"],
    reply: `<strong>⚖️ 60:40 Exam Pattern, 75% Attendance & Rules:</strong><br>
    • <strong>60:40 Evaluation (NEP-2020):</strong> 60 Marks Semester-End External Exam + 40 Marks Continuous Internal Evaluation (internal tests, assignments, presentations, attendance). Minimum passing is <strong>40%</strong>.<br>
    • <strong>75% Attendance Rule (Ordinance 6086):</strong> Minimum <strong>75% overall attendance</strong> (and 50% per subject) mandatory to appear in semester exams.<br>
    • <strong>Campus Discipline:</strong> RFID smart ID cards mandatory at turnstile gates; strict zero-tolerance Anti-Ragging Policy.`
  },
  {
    keys: ["placement", "placements", "job", "package", "salary", "lpa", "company", "companies", "recruiter", "tpo"],
    reply: `<strong>💼 Placements, Packages & Top Recruiters:</strong><br>
    • <strong>Placement Stats:</strong> ~<strong>470 UG students placed</strong> (Median <strong>₹2.16 LPA</strong>, Highest <strong>₹5.5–6.5 LPA</strong>) & ~<strong>200 PG students placed</strong> (Median <strong>₹2.40 LPA</strong>).<br>
    • <strong>Top Recruiters:</strong> TCS, Infosys, Wipro, Capgemini, Accenture, Cognizant, L&T Infotech, ICICI Prudential, Kotak Mahindra Bank, HDFC, Piramal, Metropolis Healthcare & Maruti Suzuki.<br>
    • <strong>TPO Contact:</strong> Ms. Aakansha Thakur | Phone: <strong>+91 98337 65123</strong> | Email: <strong>placement@bkbck.edu.in</strong>`
  },
  {
    keys: ["campus", "facility", "facilities", "library", "lab", "labs", "iot", "imac", "mpower", "fest", "youthopia", "ncc", "nss", "sports"],
    reply: `<strong>🏫 Campus Facilities, Labs & Student Life:</strong><br>
    • <strong>Smart Campus:</strong> 20-acre eco-campus with 72 ICT classrooms (50% smart), Central Green Library (NDLI, Shodhganga & café), <strong>IoT & Robotics Lab</strong>, <strong>Apple iMac Lab</strong>, and NABL Environmental Lab.<br>
    • <strong>Mpower Counselling Cell:</strong> Instituted by Dr. Neerja Birla for free, confidential mental health counseling.<br>
    • <strong>Festivals & Clubs:</strong> Flagship cultural fest <strong>'Youthopia'</strong>, NCC (Army & Naval wings), NSS, Sports, SWAYAM-NPTEL, IIT-B Spoken Tutorial & EC-Council Cybersecurity hub.`
  },
  {
    keys: ["about", "overview", "college", "established", "naac", "autonomous", "principal", "director", "rank", "ranking", "nirf"],
    reply: `<strong>🏛️ About B. K. Birla College (Empowered Autonomous), Kalyan:</strong><br>
    • <strong>Established:</strong> 1972 by Kalyan Citizens' Education Society; affiliated to University of Mumbai.<br>
    • <strong>Accreditations:</strong> Empowered Autonomous (2023–33), <strong>NAAC 'A++' Grade (CGPA 3.51)</strong>, UGC College of Excellence, DBT Star College & ISO 9001:2015 certified.<br>
    • <strong>Rankings:</strong> Education World #6 in India & #5 in Maharashtra (Private Autonomous); NIRF 2025 #59 in Science; 60 Faculty Patents.<br>
    • <strong>Leadership:</strong> Director Dr. Naresh Chandra | Principal Dr. Avinash Patil.`
  },
  {
    keys: ["contact", "address", "location", "where", "station", "kalyan", "shahad", "phone", "number", "helpline", "email"],
    reply: `<strong>📞 Campus Location & Contact Directory:</strong><br>
    • <strong>Address:</strong> Birla College Campus Road, Gauripada, Kalyan (West), Dist. Thane, Maharashtra - 421301.<br>
    • <strong>Nearest Stations:</strong> Accessible from both <strong>Kalyan Junction</strong> and <strong>Shahad Railway Station</strong> (Central Line).<br>
    • <strong>Helplines:</strong> Toll-Free <strong>1800 233 0144</strong> | Landline: <strong>0251 2231293</strong><br>
    • <strong>Email & Portal:</strong> enquiry@bkbck.edu.in | <a href="https://bkbck.edu.in/" target="_blank">https://bkbck.edu.in/</a>`
  }
];

function toggleChat() {
  document.getElementById("chat-container").classList.toggle("chat-hidden");
}

function askQuick(question) {
  document.getElementById("user-input").value = question;
  sendMessage();
}

function getOfflineReply(query) {
  const q = query.toLowerCase();
  if (["hi", "hello", "hey", "namaste"].includes(q.trim())) {
    return "Namaste! 👋 B. K. Birla College baddal tumhala kay mahiti havi aahe? (Courses, Cutoffs, Documents, Fees, Attendance kinva Placements vichara!)";
  }
  let bestMatch = null;
  let maxScore = 0;
  for (const item of OFFLINE_KB) {
    let score = 0;
    for (const k of item.keys) {
      if (q.includes(k)) score++;
    }
    if (score > maxScore) {
      maxScore = score;
      bestMatch = item.reply;
    }
  }
  return bestMatch || `<strong>B. K. Birla College Helpdesk:</strong><br>
    • Please ask about <strong>Courses, Admissions & Cutoffs, Required Documents, Fees & Refund Policy, 75% Attendance, Scholarships, Placements, or Campus Facilities</strong>.<br>
    • <strong>Toll-Free Helpline:</strong> 1800 233 0144 | <strong>Website:</strong> https://bkbck.edu.in/`;
}

async function sendMessage() {
  const input = document.getElementById("user-input");
  const userText = input.value.trim();
  if (!userText) return;

  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML += `<div class="user-msg">${userText}</div>`;
  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  const loadingId = "loading-" + Date.now();
  chatBox.innerHTML += `<div class="bot-msg" id="${loadingId}"><em>Typing...</em></div>`;
  chatBox.scrollTop = chatBox.scrollHeight;

  // Jar valid API Key takli asel tar Gemini API try karel
  if (API_KEY && API_KEY.startsWith("AIza")) {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            systemInstruction: { parts: [{ text: COLLEGE_DATA }] },
            contents: [{ role: "user", parts: [{ text: userText }] }]
          })
        }
      );

      if (response.ok) {
        const data = await response.json();
        let reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (reply) {
          reply = reply.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br>");
          document.getElementById(loadingId).innerHTML = reply;
          chatBox.scrollTop = chatBox.scrollHeight;
          return;
        }
      }
    } catch (e) {
      console.log("Using built-in college knowledge engine.");
    }
  }

  // Automatic fallback: Built-in detailed college engine (Zero Error!)
  setTimeout(() => {
    document.getElementById(loadingId).innerHTML = getOfflineReply(userText);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 250);
}
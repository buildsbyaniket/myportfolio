import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaFire, FaTrophy, FaCalendarAlt, FaCheck, FaExternalLinkAlt, 
  FaSearch, FaCode, FaDatabase, FaAward, FaInfoCircle, FaPlayCircle,
  FaTerminal, FaSyncAlt
} from "react-icons/fa";
import { SiLeetcode, SiCplusplus, SiMysql } from "react-icons/si";

// High-fidelity fallback data matching user's actual profile and stats
const FALLBACK_DATA = {
  profile: {
    username: "Aniket_Dev06",
    name: "Aniket_Dev06",
    avatar: "https://assets.leetcode.com/users/Aniket_Dev06/avatar_1774643239.png",
    ranking: 1137121,
    reputation: 0,
    gitHub: "https://github.com/buildsbyaniket",
    linkedIN: "https://linkedin.com/in/aniket-dev-52a105326"
  },
  solved: {
    solvedProblem: 146,
    easySolved: 49,
    mediumSolved: 85,
    hardSolved: 12,
    totalEasy: 834,
    totalMedium: 1720,
    totalHard: 761,
    totalQuestions: 3315
  },
  calendar: {
    streak: 16,
    totalActiveDays: 102,
    submissionCalendar: {
      "1735689600": 3, "1735776000": 5, "1735862400": 1, // Jan 2025
      "1738368000": 2, "1738454400": 4, "1738540800": 7, // Feb 2025
      "1740873600": 5, "1740960000": 1, "1741046400": 3, // Mar 2025
      "1743465600": 4, "1743552000": 8, "1743638400": 2, // Apr 2025
      "1746057600": 6, "1746144000": 1, "1746230400": 3, // May 2025
      "1748649600": 4, "1748736000": 2, "1748822400": 5, // Jun 2025
      "1751241600": 3, "1751328000": 7, "1751414400": 1, // Jul 2025
      "1753833600": 8, "1753920000": 2, "1754006400": 4, // Aug 2025
      "1756425600": 11, "1756598400": 61, "1756684800": 5, "1757030400": 8, // Sep 2025
      "1757548800": 17, "1757635200": 13, "1757721600": 30, "1757808000": 24, "1757894400": 8,
      "1759536000": 21, "1759708800": 6, "1759795200": 5, "1759881600": 9, // Oct 2025
      "1761696000": 7, "1761782400": 17, "1762041600": 4, // Nov 2025
      "1764288000": 7, "1764374400": 2, "1764633600": 2, "1764720000": 2, "1764806400": 6, 
      "1764892800": 16, "1765065600": 4, "1765152000": 12, "1765238400": 14, "1765756800": 1, 
      "1765843200": 1, "1766534400": 3, "1766620800": 2, "1766707200": 5, "1766880000": 5, // Dec 2025
      "1767225600": 1, "1767312000": 3, "1767398400": 5, "1767484800": 10, "1767744000": 1, 
      "1767830400": 2, "1768262400": 7, "1768435200": 1, "1768521600": 2, "1768608000": 1, 
      "1768694400": 2, "1768780800": 5, "1768867200": 1, "1768953600": 2, "1769040000": 7, 
      "1769126400": 6, "1769212800": 1, "1769299200": 1, "1769385600": 2, "1769472000": 2, 
      "1769558400": 1, "1769644800": 1, "1769731200": 1, "1769904000": 2, "1769990400": 2, 
      "1770076800": 1, "1770163200": 1, "1770422400": 5, "1770595200": 1, "1770768000": 4, 
      "1770854400": 1, "1770940800": 3, "1771545600": 1, "1771632000": 4, "1771718400": 1, 
      "1771804800": 2, "1771891200": 2, "1772064000": 1, "1772150400": 4, "1772236800": 1, 
      "1772323200": 4, "1772582400": 3, "1772668800": 1, "1772755200": 4, "1772841600": 2, 
      "1772928000": 2, "1773100800": 2, "1773187200": 3, "1773360000": 1, "1773446400": 1, 
      "1773532800": 1, "1773619200": 1, "1773705600": 1, "1773878400": 1, "1773964800": 1, 
      "1774396800": 2, "1774483200": 1, "1774569600": 3, "1775865600": 1, "1775952000": 1, 
      "1776038400": 1, "1776124800": 1, "1776297600": 1, "1776384000": 2, "1776470400": 1, 
      "1777075200": 1, "1777248000": 5, "1777334400": 3, "1777420800": 2, "1777507200": 1, 
      "1782345600": 3 // Jan - Jun 2026
    }
  },
  submissions: [
    { title: "Big Countries", titleSlug: "big-countries", timestamp: "1782399899", statusDisplay: "Accepted", lang: "mysql" },
    { title: "Find Customer Referee", titleSlug: "find-customer-referee", timestamp: "1782399408", statusDisplay: "Accepted", lang: "mysql" },
    { title: "Combine Two Tables", titleSlug: "combine-two-tables", timestamp: "1782398605", statusDisplay: "Accepted", lang: "mysql" },
    { title: "Gas Station", titleSlug: "gas-station", timestamp: "1777541212", statusDisplay: "Accepted", lang: "cpp" },
    { title: "Jump Game II", titleSlug: "jump-game-ii", timestamp: "1777470967", statusDisplay: "Accepted", lang: "cpp" },
    { title: "Jump Game", titleSlug: "jump-game", timestamp: "1777382100", statusDisplay: "Accepted", lang: "cpp" },
    { title: "Best Time to Buy and Sell Stock II", titleSlug: "best-time-to-buy-and-sell-stock-ii", timestamp: "1777215200", statusDisplay: "Accepted", lang: "cpp" },
    { title: "Best Time to Buy and Sell Stock", titleSlug: "best-time-to-buy-and-sell-stock", timestamp: "1777124800", statusDisplay: "Accepted", lang: "cpp" },
    { title: "Remove Duplicates from Sorted Array II", titleSlug: "remove-duplicates-from-sorted-array-ii", timestamp: "1776384000", statusDisplay: "Accepted", lang: "cpp" },
    { title: "Remove Duplicates from Sorted Array", titleSlug: "remove-duplicates-from-sorted-array", timestamp: "1776297600", statusDisplay: "Accepted", lang: "cpp" },
    { title: "Remove Element", titleSlug: "remove-element", timestamp: "1776124800", statusDisplay: "Accepted", lang: "cpp" },
    { title: "Merge Sorted Array", titleSlug: "merge-sorted-array", timestamp: "1775952000", statusDisplay: "Accepted", lang: "cpp" },
    { title: "Two Sum", titleSlug: "two-sum", timestamp: "1769040000", statusDisplay: "Accepted", lang: "cpp" },
    { title: "Reverse Linked List", titleSlug: "reverse-linked-list", timestamp: "1766880000", statusDisplay: "Accepted", lang: "cpp" },
    { title: "Middle of the Linked List", titleSlug: "middle-of-the-linked-list", timestamp: "1766707200", statusDisplay: "Accepted", lang: "cpp" }
  ]
};

// Initial Roadmap Topics for Interactive Constellation
const INITIAL_TOPICS = [
  {
    id: "arrays",
    title: "Arrays & Hashing",
    x: 70, y: 60,
    icon: <FaCode />,
    progress: 85,
    details: "Key patterns: HashMap mapping, prefix sums, sliding window foundations, and frequency counting.",
    problems: [
      { name: "Two Sum", difficulty: "Easy", slug: "two-sum", completed: true },
      { name: "Contains Duplicate", difficulty: "Easy", slug: "contains-duplicate", completed: true },
      { name: "Valid Anagram", difficulty: "Easy", slug: "valid-anagram", completed: true },
      { name: "Top K Frequent Elements", difficulty: "Medium", slug: "top-k-frequent-elements", completed: false }
    ]
  },
  {
    id: "pointers",
    title: "Two Pointers",
    x: 330, y: 60,
    icon: <FaCode />,
    progress: 70,
    details: "Approaches: Converging boundaries, fast & slow references, array partitioning, and sub-sequence testing.",
    problems: [
      { name: "Valid Palindrome", difficulty: "Easy", slug: "valid-palindrome", completed: true },
      { name: "Two Sum II - Sorted Array", difficulty: "Medium", slug: "two-sum-ii", completed: true },
      { name: "Container With Most Water", difficulty: "Medium", slug: "container-with-most-water", completed: true },
      { name: "Longest Substring Without Repeats", difficulty: "Medium", slug: "longest-substring", completed: false }
    ]
  },
  {
    id: "greedy",
    title: "Greedy Algorithms",
    x: 350, y: 240,
    icon: <FaCode />,
    progress: 60,
    details: "Optimizations: Local choices, activity selection, interval overlapping, and sequence jump bounds.",
    problems: [
      { name: "Gas Station", difficulty: "Medium", slug: "gas-station", completed: true },
      { name: "Jump Game", difficulty: "Medium", slug: "jump-game", completed: true },
      { name: "Jump Game II", difficulty: "Medium", slug: "jump-game-ii", completed: true },
      { name: "Best Time to Buy and Sell", difficulty: "Easy", slug: "best-time", completed: true }
    ]
  },
  {
    id: "lists",
    title: "Linked Lists",
    x: 50, y: 240,
    icon: <FaCode />,
    progress: 75,
    details: "Structural: In-place reversal, cycle checks, merge sorts, node linking, and sentinel strategies.",
    problems: [
      { name: "Reverse Linked List", difficulty: "Easy", slug: "reverse-linked-list", completed: true },
      { name: "Middle of the Linked List", difficulty: "Easy", slug: "middle-of-the-linked-list", completed: true },
      { name: "Merge Two Sorted Lists", difficulty: "Easy", slug: "merge-two-sorted-lists", completed: true },
      { name: "Linked List Cycle", difficulty: "Easy", slug: "linked-list-cycle", completed: false }
    ]
  },
  {
    id: "sql",
    title: "SQL Databases",
    x: 200, y: 280,
    icon: <FaDatabase />,
    progress: 90,
    details: "Data querying: Relational schemas, window operations, composite joins, aggregates, and subqueries.",
    problems: [
      { name: "Big Countries", difficulty: "Easy", slug: "big-countries", completed: true },
      { name: "Find Customer Referee", difficulty: "Easy", slug: "find-customer-referee", completed: true },
      { name: "Combine Two Tables", difficulty: "Easy", slug: "combine-two-tables", completed: true },
      { name: "Recyclable and Low Fat Products", difficulty: "Easy", slug: "recyclable", completed: true }
    ]
  }
];

const LeetCodePortal = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [loading, setLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);
  const [data, setData] = useState(FALLBACK_DATA);
  const [searchTerm, setSearchTerm] = useState("");
  const [langFilter, setLangFilter] = useState("all");
  const [hoveredDay, setHoveredDay] = useState(null);
  
  // Simulated Terminal States
  const [terminalText, setTerminalText] = useState([]);
  const [isCompiling, setIsCompiling] = useState(false);
  const [selectedSub, setSelectedSub] = useState(null);
  const terminalBottomRef = useRef(null);

  // Constellation States
  const [selectedTopic, setSelectedTopic] = useState(INITIAL_TOPICS[0]);
  const [roadmap, setRoadmap] = useState(() => {
    const saved = localStorage.getItem("leetcode_roadmap_premium");
    return saved ? JSON.parse(saved) : INITIAL_TOPICS;
  });

  useEffect(() => {
    localStorage.setItem("leetcode_roadmap_premium", JSON.stringify(roadmap));
  }, [roadmap]);

  // Fetch Live Stats from unofficial API
  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const username = "Aniket_Dev06";
        const [profileRes, solvedRes, calendarRes, submissionsRes] = await Promise.all([
          fetch(`https://alfa-leetcode-api.onrender.com/${username}`),
          fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`),
          fetch(`https://alfa-leetcode-api.onrender.com/${username}/calendar`),
          fetch(`https://alfa-leetcode-api.onrender.com/${username}/submission`)
        ]);

        if (profileRes.ok && solvedRes.ok && calendarRes.ok && submissionsRes.ok) {
          const profileData = await profileRes.json();
          const solvedData = await solvedRes.json();
          const calendarData = await calendarRes.json();
          const submissionsData = await submissionsRes.json();

          let parsedCal = {};
          if (calendarData.submissionCalendar) {
            try {
              parsedCal = JSON.parse(calendarData.submissionCalendar);
            } catch (e) {
              parsedCal = calendarData.submissionCalendar;
            }
          }

          setData({
            profile: {
              username: profileData.username || username,
              name: profileData.name || username,
              avatar: profileData.avatar || FALLBACK_DATA.profile.avatar,
              ranking: profileData.ranking || FALLBACK_DATA.profile.ranking,
              reputation: profileData.reputation ?? 0,
              gitHub: profileData.gitHub || FALLBACK_DATA.profile.gitHub,
              linkedIN: profileData.linkedIN || FALLBACK_DATA.profile.linkedIN
            },
            solved: {
              solvedProblem: solvedData.solvedProblem || FALLBACK_DATA.solved.solvedProblem,
              easySolved: solvedData.easySolved || FALLBACK_DATA.solved.easySolved,
              mediumSolved: solvedData.mediumSolved || FALLBACK_DATA.solved.mediumSolved,
              hardSolved: solvedData.hardSolved || FALLBACK_DATA.solved.hardSolved,
              totalEasy: solvedData.totalEasy || FALLBACK_DATA.solved.totalEasy,
              totalMedium: solvedData.totalMedium || FALLBACK_DATA.solved.totalMedium,
              totalHard: solvedData.totalHard || FALLBACK_DATA.solved.totalHard,
              totalQuestions: solvedData.totalQuestions || FALLBACK_DATA.solved.totalQuestions
            },
            calendar: {
              streak: calendarData.streak ?? FALLBACK_DATA.calendar.streak,
              totalActiveDays: calendarData.totalActiveDays ?? FALLBACK_DATA.calendar.totalActiveDays,
              submissionCalendar: parsedCal
            },
            submissions: submissionsData.submission || FALLBACK_DATA.submissions
          });
          setIsLive(true);
        }
      } catch (error) {
        console.warn("Using fallback cached LeetCode stats profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  // Run Simulated terminal output
  const runSimulatedTerminal = (sub) => {
    if (isCompiling) return;
    setIsCompiling(true);
    setSelectedSub(sub);
    setTerminalText([]);

    const logs = [];
    const isCpp = sub.lang.toLowerCase() === "cpp";

    if (isCpp) {
      logs.push({ text: `$ g++ -std=c++17 -O3 ${sub.titleSlug}.cpp -o main`, delay: 100 });
      logs.push({ text: "Compiling source AST nodes...", delay: 400 });
      logs.push({ text: "Optimizing vector allocation & loops...", delay: 800 });
      logs.push({ text: "[SUCCESS] Compilation completed in 184ms", delay: 1200, type: "success" });
      logs.push({ text: "$ ./main", delay: 1400 });
      logs.push({ text: "Executing test suites...", delay: 1700 });
      logs.push({ text: "✔ Test Case 1: Passed (0ms)", delay: 1900, type: "success" });
      logs.push({ text: "✔ Test Case 23: Passed (1ms)", delay: 2050, type: "success" });
      logs.push({ text: "✔ Test Case 45: Passed (1ms)", delay: 2200, type: "success" });
      logs.push({ text: `✔ RUNTIME: 4ms | Beats 94.2% of C++ submissions`, delay: 2400, type: "highlight" });
      logs.push({ text: `✔ STATUS: ${sub.statusDisplay.toUpperCase()} (45/45 passed)`, delay: 2600, type: "success-bold" });
    } else {
      // SQL / MySQL logs
      logs.push({ text: `$ mysql --database=leetcode_db < query.sql`, delay: 100 });
      logs.push({ text: "Establishing secure DB connection...", delay: 400 });
      logs.push({ text: "Parsing relational algebra query syntax...", delay: 750 });
      logs.push({ text: "[SUCCESS] Connection active. Execution started...", delay: 1100, type: "success" });
      logs.push({ text: "Running projections and joins...", delay: 1400 });
      logs.push({ text: "✔ Relational Index Scan complete.", delay: 1700, type: "success" });
      logs.push({ text: `✔ EXECUTION: 147ms | Query optimized successfully`, delay: 2000, type: "highlight" });
      logs.push({ text: `✔ STATUS: ${sub.statusDisplay.toUpperCase()} (All checks verified)`, delay: 2300, type: "success-bold" });
    }

    logs.forEach((log) => {
      setTimeout(() => {
        setTerminalText((prev) => [...prev, log]);
      }, log.delay);
    });

    setTimeout(() => {
      setIsCompiling(false);
    }, 2800);
  };

  // Run default terminal on load or change
  useEffect(() => {
    if (data.submissions.length > 0 && !selectedSub) {
      runSimulatedTerminal(data.submissions[0]);
    }
  }, [data.submissions]);

  // Scroll terminal logs to bottom
  useEffect(() => {
    if (terminalBottomRef.current) {
      terminalBottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [terminalText]);

  // Filter Submissions
  const filteredSubmissions = data.submissions.filter((sub) => {
    const matchesSearch = sub.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLang = langFilter === "all" || sub.lang.toLowerCase() === langFilter.toLowerCase();
    return matchesSearch && matchesLang;
  });

  // Toggle problem completion in DSA checklist node
  const handleToggleProblem = (topicId, problemSlug) => {
    const updatedRoadmap = roadmap.map(topic => {
      if (topic.id === topicId) {
        const updatedProblems = topic.problems.map(prob => {
          if (prob.slug === problemSlug) {
            return { ...prob, completed: !prob.completed };
          }
          return prob;
        });
        const completedCount = updatedProblems.filter(p => p.completed).length;
        const newProgress = Math.round((completedCount / updatedProblems.length) * 100);
        return {
          ...topic,
          problems: updatedProblems,
          progress: newProgress
        };
      }
      return topic;
    });

    setRoadmap(updatedRoadmap);
    // Sync current active node panel state
    const matched = updatedRoadmap.find(t => t.id === topicId);
    if (matched) {
      setSelectedTopic(matched);
    }
  };

  // Format Unix Timestamp
  const formatTime = (ts) => {
    const d = new Date(parseInt(ts) * 1000);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  // Render SVG Heatmap
  const renderHeatmap = () => {
    const weeks = 28; 
    const days = 7;
    const submissionCalendar = data.calendar.submissionCalendar;

    const grid = [];
    const now = new Date();
    const startDate = new Date();
    startDate.setDate(now.getDate() - (weeks * 7) + (6 - now.getDay()));

    for (let w = 0; w < weeks; w++) {
      const weekCols = [];
      for (let d = 0; d < days; d++) {
        const curDate = new Date(startDate);
        curDate.setDate(startDate.getDate() + (w * 7) + d);
        curDate.setHours(0,0,0,0);
        const epochSeconds = Math.floor(curDate.getTime() / 1000);

        let count = 0;
        const matchingTimestamp = Object.keys(submissionCalendar).find(ts => {
          return Math.abs(parseInt(ts) - epochSeconds) < 43200; 
        });
        if (matchingTimestamp) {
          count = submissionCalendar[matchingTimestamp];
        }

        let colorClass = "bg-white/5"; 
        let glowClass = "";
        if (count > 0 && count <= 2) {
          colorClass = "bg-[#271850] border-[#3f2982]/20";
        } else if (count > 2 && count <= 5) {
          colorClass = "bg-[#4f2aab] border-[#7245ec]/30 shadow-[0_0_5px_rgba(114,69,236,0.15)]";
        } else if (count > 5 && count <= 15) {
          colorClass = "bg-[#793ff0] border-[#9f7cfc]/40 shadow-[0_0_8px_rgba(121,63,240,0.3)]";
        } else if (count > 15) {
          colorClass = "bg-[#a67cf4] border-white/40 shadow-[0_0_12px_rgba(166,124,244,0.5)]";
        }

        weekCols.push({
          date: curDate,
          count,
          colorClass,
          glowClass
        });
      }
      grid.push(weekCols);
    }

    return (
      <div className="relative flex flex-col items-center select-none w-full">
        {/* Heatmap Tooltip overlay */}
        <div className="h-10 mb-5 text-sm font-semibold text-gray-300 text-center flex items-center justify-center">
          <AnimatePresence mode="wait">
            {hoveredDay ? (
              <motion.span 
                key={hoveredDay.date.getTime()}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="bg-[#171330]/90 backdrop-blur-md px-5 py-2 rounded-full border border-purple-500/40 text-purple-300 shadow-[0_0_20px_rgba(130,69,236,0.3)] flex items-center gap-2"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-ping" />
                <strong>{hoveredDay.count} solutions</strong> submitted on {hoveredDay.date.toLocaleDateString("en-US", { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
              </motion.span>
            ) : (
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-500 flex items-center gap-2 font-medium"
              >
                <FaInfoCircle size={14} className="text-purple-500/80 animate-pulse" /> Hover over block modules to review historical operations
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Heatmap grid */}
        <div className="flex overflow-x-auto w-full max-w-full pb-5 scrollbar-thin scrollbar-thumb-purple-900 scrollbar-track-transparent justify-start md:justify-center">
          <div className="flex gap-2 p-3 bg-[#0a081c]/70 border border-white/10 rounded-3xl min-w-max backdrop-blur-sm shadow-2xl">
            {grid.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-2">
                {week.map((day, dIdx) => (
                  <div
                    key={dIdx}
                    onMouseEnter={() => setHoveredDay(day)}
                    onMouseLeave={() => setHoveredDay(null)}
                    className={`w-[16px] h-[16px] rounded-[4px] border transition-all duration-150 cursor-pointer hover:scale-130 hover:z-20 hover:border-white/60 ${day.colorClass}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-between items-center w-full max-w-md mt-3 px-4 text-xs font-semibold text-gray-500">
          <span>Less Active</span>
          <div className="flex gap-1.5 px-3 py-1.5 bg-white/5 rounded-xl border border-white/5">
            <div className="w-[11px] h-[11px] rounded-[2.5px] bg-white/5 border border-white/10" />
            <div className="w-[11px] h-[11px] rounded-[2.5px] bg-[#271850] border border-[#3f2982]/20" />
            <div className="w-[11px] h-[11px] rounded-[2.5px] bg-[#4f2aab] border border-[#7245ec]/30" />
            <div className="w-[11px] h-[11px] rounded-[2.5px] bg-[#793ff0] border border-[#9f7cfc]/40" />
            <div className="w-[11px] h-[11px] rounded-[2.5px] bg-[#a67cf4] border border-white/40" />
          </div>
          <span>Highly Active</span>
        </div>
      </div>
    );
  };

  return (
    <section 
      id="leetcode-portal" 
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans relative overflow-hidden bg-[#050414]"
    >
      {/* Ported Inline CSS Animations */}
      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes flicker {
          0%, 100% { opacity: 0.9; transform: scale(1); filter: drop-shadow(0 0 5px rgba(249,115,22,0.8)); }
          50% { opacity: 1; transform: scale(1.1); filter: drop-shadow(0 0 15px rgba(249,115,22,1)); }
        }
        @keyframes floatEmber {
          0% { transform: translateY(0) scale(1); opacity: 0.8; }
          100% { transform: translateY(-40px) scale(0.6); opacity: 0; }
        }
        @keyframes pulseLine {
          from { stroke-dashoffset: 20; }
          to { stroke-dashoffset: 0; }
        }
        .animate-spin-slow {
          animation: spinSlow 12s linear infinite;
        }
        .animate-flicker-flame {
          animation: flicker 2s infinite ease-in-out;
        }
        .ember-1 { animation: floatEmber 1.8s infinite ease-out; left: 10%; }
        .ember-2 { animation: floatEmber 2.2s infinite ease-out 0.4s; left: 45%; }
        .ember-3 { animation: floatEmber 1.5s infinite ease-out 0.8s; left: 80%; }
        .svg-pulse-path {
          stroke-dasharray: 8, 4;
          animation: pulseLine 1.5s linear infinite;
        }
      `}</style>

      {/* Dynamic Background Blur Objs */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-[10%] right-[-5%] w-[450px] h-[450px] bg-[#8245ec]/15 rounded-full blur-[110px]" />
        <div className="absolute bottom-[15%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[130px]" />
        {/* Subtle grid mesh overlays */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:16px_16px]" />
      </div>

      {/* Header Title */}
      <div className="text-center mb-16 relative">
        <span className="text-[#8245ec] font-bold text-xs uppercase tracking-[0.25em] bg-[#8245ec]/10 px-4 py-1.5 rounded-full border border-[#8245ec]/20 shadow-[0_0_15px_rgba(130,69,236,0.2)]">
          LeetCode Live Stats
        </span>
        <h2 className="text-5xl font-black text-white tracking-tight mt-6">
          Problem Solving <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Console</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#8245ec] to-transparent mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-medium max-w-xl mx-auto">
          An interactive playground detailing my progress in Data Structures, Algorithms, and SQL challenges.
        </p>

        {/* Sync live status badge */}
        <div className="flex justify-center items-center gap-2 mt-4 text-xs font-semibold select-none">
          <span className="relative flex h-2.5 w-2.5">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isLive ? 'bg-green-400' : 'bg-orange-400'}`} />
            <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isLive ? 'bg-green-500' : 'bg-orange-500'}`} />
          </span>
          <span className="text-gray-500 uppercase tracking-widest text-[10px]">
            {isLive ? (
              <span className="text-green-400/90">Live Sync Enabled</span>
            ) : (
              <span className="text-orange-400/80">Cached Optimized Profile Loaded</span>
            )}
          </span>
        </div>
      </div>

      {/* Main Glassmorphic Portal Dashboard Wrapper */}
      <div className="bg-[#0b0921]/60 border border-white/10 backdrop-blur-xl rounded-[3rem] p-6 md:p-10 shadow-[0_30px_70px_rgba(4,3,15,0.9)] relative z-10 max-w-6xl mx-auto">
        
        {/* Navigation Tabs bar */}
        <div className="flex border-b border-white/5 mb-8 overflow-x-auto scrollbar-none gap-2 pb-1.5">
          {[
            { id: "overview", label: "Stats Console", icon: <FaTerminal /> },
            { id: "constellation", label: "DSA Constellation Map", icon: <FaAward /> },
            { id: "heatmap", label: "Activity Matrix", icon: <FaCalendarAlt /> },
            { id: "submissions", label: "Query Feed Log", icon: <FaCode /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-xs uppercase tracking-widest font-extrabold transition-all duration-300 border-b-2 whitespace-nowrap ${
                activeTab === tab.id
                  ? "text-purple-400 border-purple-500 bg-[#8245ec]/10 shadow-[0_0_20px_rgba(130,69,236,0.15)]"
                  : "text-gray-400 border-transparent hover:text-white hover:bg-white/5"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Stats Console (Overview & Terminal) */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-fadeIn">
            {/* Left Box: Concentric Rings & Streak Fire */}
            <div className="lg:col-span-5 bg-[#080619]/90 border border-white/10 rounded-[2rem] p-8 flex flex-col justify-between min-h-[420px] shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(130,69,236,0.06),transparent_60%)] pointer-events-none" />
              
              {/* Top stats bar */}
              <div className="flex justify-between items-start w-full relative z-10">
                <div>
                  <h3 className="text-xl font-black text-white flex items-center gap-2">
                    <SiLeetcode className="text-[#f89f1b]" /> Stats Core
                  </h3>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Concentric distribution</p>
                </div>
                {/* Glowing rank tag */}
                <div className="bg-[#f89f1b]/10 border border-[#f89f1b]/30 rounded-xl px-3.5 py-1.5 text-right select-none shadow-[0_0_15px_rgba(248,159,27,0.1)]">
                  <span className="text-[9px] text-[#f89f1b] font-black uppercase tracking-wider block">Global Rank</span>
                  <span className="text-xs text-white font-extrabold">#{data.profile.ranking.toLocaleString()}</span>
                </div>
              </div>

              {/* Central interactive Concentric SVG wheels */}
              <div className="relative w-full py-6 flex items-center justify-center z-10">
                <div className="relative w-[210px] h-[210px] flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    {/* Ring 1 - Easy */}
                    <circle cx="105" cy="105" r="92" stroke="rgba(255,255,255,0.02)" strokeWidth="10" fill="none" />
                    <circle cx="105" cy="105" r="92" stroke="#10b981" strokeWidth="10" fill="none" 
                      strokeDasharray={2 * Math.PI * 92}
                      strokeDashoffset={2 * Math.PI * 92 * (1 - (data.solved.easySolved / Math.max(data.solved.solvedProblem, 1)))} 
                      strokeLinecap="round" className="transition-all duration-1000"
                    />

                    {/* Ring 2 - Medium */}
                    <circle cx="105" cy="105" r="76" stroke="rgba(255,255,255,0.02)" strokeWidth="10" fill="none" />
                    <circle cx="105" cy="105" r="76" stroke="#f59e0b" strokeWidth="10" fill="none" 
                      strokeDasharray={2 * Math.PI * 76}
                      strokeDashoffset={2 * Math.PI * 76 * (1 - (data.solved.mediumSolved / Math.max(data.solved.solvedProblem, 1)))} 
                      strokeLinecap="round" className="transition-all duration-1000"
                    />

                    {/* Ring 3 - Hard */}
                    <circle cx="105" cy="105" r="60" stroke="rgba(255,255,255,0.02)" strokeWidth="10" fill="none" />
                    <circle cx="105" cy="105" r="60" stroke="#ef4444" strokeWidth="10" fill="none" 
                      strokeDasharray={2 * Math.PI * 60}
                      strokeDashoffset={2 * Math.PI * 60 * (1 - (data.solved.hardSolved / Math.max(data.solved.solvedProblem, 1)))} 
                      strokeLinecap="round" className="transition-all duration-1000"
                    />
                  </svg>

                  <div className="absolute flex flex-col items-center justify-center text-center">
                    <span className="text-4xl font-black text-white tracking-tighter group-hover:scale-110 transition-transform duration-300 select-none">
                      {data.solved.solvedProblem}
                    </span>
                    <span className="text-[9px] text-gray-500 uppercase font-black tracking-widest mt-1">Total Solved</span>
                  </div>
                </div>
              </div>

              {/* Ratios metrics breakdown labels */}
              <div className="grid grid-cols-3 w-full gap-3 relative z-10 text-center">
                <div className="bg-[#10b981]/5 border border-[#10b981]/15 rounded-2xl py-3 px-1 transition-all hover:bg-[#10b981]/15">
                  <div className="text-[10px] text-[#10b981] font-black uppercase tracking-wider">Easy</div>
                  <div className="text-lg font-black text-white mt-0.5">{data.solved.easySolved}</div>
                </div>
                <div className="bg-[#f59e0b]/5 border border-[#f59e0b]/15 rounded-2xl py-3 px-1 transition-all hover:bg-[#f59e0b]/15">
                  <div className="text-[10px] text-[#f59e0b] font-black uppercase tracking-wider">Medium</div>
                  <div className="text-lg font-black text-white mt-0.5">{data.solved.mediumSolved}</div>
                </div>
                <div className="bg-[#ef4444]/5 border border-[#ef4444]/15 rounded-2xl py-3 px-1 transition-all hover:bg-[#ef4444]/15">
                  <div className="text-[10px] text-[#ef4444] font-black uppercase tracking-wider">Hard</div>
                  <div className="text-lg font-black text-white mt-0.5">{data.solved.hardSolved}</div>
                </div>
              </div>
            </div>

            {/* Right Box: Live Code Compiler Console */}
            <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
              
              {/* Stats highlights banner */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Custom Flicker Flame Streak Card */}
                <div className="bg-[#080619]/90 border border-white/10 rounded-[2rem] p-5 flex items-center justify-between relative overflow-hidden group hover:border-[#8245ec]/40 transition-all duration-300">
                  <div className="relative z-10">
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Coding Streak</span>
                    <div className="text-3xl font-black text-white mt-1 group-hover:scale-105 transition-transform duration-300">
                      {data.calendar.streak} Days
                    </div>
                    <span className="text-[9px] text-gray-500 block mt-1.5">Consistent daily system solves.</span>
                  </div>

                  {/* Flame animation using SVG & relative absolute particle embers */}
                  <div className="relative w-14 h-16 mr-2 flex justify-center items-end">
                    {/* Flame shape */}
                    <div className="w-10 h-10 bg-gradient-to-t from-red-600 via-orange-500 to-yellow-400 rounded-full rounded-tr-none rotate-45 transform origin-center animate-flicker-flame" />
                    
                    {/* Embers */}
                    <div className="absolute w-1.5 h-1.5 bg-yellow-400 rounded-full ember-1 pointer-events-none" />
                    <div className="absolute w-1.5 h-1.5 bg-orange-400 rounded-full ember-2 pointer-events-none" />
                    <div className="absolute w-1.5 h-1.5 bg-yellow-500 rounded-full ember-3 pointer-events-none" />
                  </div>
                </div>

                {/* Profile Card with Halo and Avatar */}
                <div className="bg-[#080619]/90 border border-white/10 rounded-[2rem] p-5 flex items-center gap-4 relative overflow-hidden group hover:border-[#8245ec]/40 transition-all duration-300">
                  <div className="relative">
                    {/* Glowing Halo ring */}
                    <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-purple-500 via-indigo-600 to-pink-500 animate-spin-slow opacity-60 blur-[1px] group-hover:scale-105 transition-transform duration-300" />
                    <img 
                      src={data.profile.avatar} 
                      alt="LeetCode Avatar" 
                      className="w-12 h-12 rounded-full relative z-10 border border-black/40"
                    />
                  </div>
                  <div>
                    <span className="text-[9px] text-purple-400 font-black uppercase tracking-wider block">Codewriter Profile</span>
                    <a 
                      href="https://leetcode.com/u/Aniket_Dev06/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-base font-extrabold text-white flex items-center gap-1.5 hover:text-purple-400 transition-colors mt-0.5"
                    >
                      {data.profile.name} <FaExternalLinkAlt size={10} className="text-gray-500" />
                    </a>
                    <span className="text-[10px] text-gray-500 block mt-0.5">Active Days: {data.calendar.totalActiveDays}</span>
                  </div>
                </div>
              </div>

              {/* Interactive Code Execution Terminal Console */}
              <div className="bg-[#050312] border border-white/10 rounded-[2.2rem] overflow-hidden flex flex-col flex-grow shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
                {/* Terminal Header */}
                <div className="bg-[#0b0a21] px-5 py-3 border-b border-white/5 flex items-center justify-between select-none">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 flex items-center gap-1.5 font-bold uppercase tracking-wider">
                    <FaTerminal className="text-[#8245ec]" /> compiler-sim@aniket-dev
                  </span>
                  <div className="w-12" /> {/* spacer */}
                </div>

                {/* Terminal logs list */}
                <div className="p-5 font-mono text-xs overflow-y-auto h-[210px] space-y-1.5 scrollbar-thin scrollbar-thumb-purple-950 scrollbar-track-transparent">
                  {terminalText.map((log, index) => {
                    let colorClass = "text-gray-400";
                    if (log.type === "success") colorClass = "text-green-400";
                    else if (log.type === "success-bold") colorClass = "text-green-300 font-extrabold shadow-[0_0_10px_rgba(74,222,128,0.15)]";
                    else if (log.type === "highlight") colorClass = "text-indigo-400 font-semibold";
                    else if (log.text.startsWith("$")) colorClass = "text-[#8245ec] font-bold";

                    return (
                      <div key={index} className={`flex items-start gap-1 leading-relaxed ${colorClass}`}>
                        <span className="select-none text-purple-600/60">{log.text.startsWith("$") ? "" : ">"}</span>
                        <span>{log.text}</span>
                      </div>
                    );
                  })}

                  {/* Blink prompt indicator */}
                  <div className="flex items-center gap-1 text-gray-600">
                    <span className="select-none text-purple-600/60">$</span>
                    <span className="w-2.5 h-4 bg-purple-500 animate-pulse ml-0.5" />
                  </div>
                  <div ref={terminalBottomRef} />
                </div>

                {/* Submissions compiler selector panel */}
                <div className="p-3 bg-[#0a081c] border-t border-white/5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <span className="text-[9px] font-mono font-bold text-gray-500 uppercase tracking-wider shrink-0 select-none">
                      Select Code to Compile:
                    </span>
                    <div className="flex gap-1.5 overflow-x-auto scrollbar-none py-1">
                      {data.submissions.slice(0, 3).map((sub, idx) => (
                        <button
                          key={idx}
                          onClick={() => runSimulatedTerminal(sub)}
                          disabled={isCompiling}
                          className={`px-3 py-1 rounded-xl text-[10px] font-mono font-extrabold border shrink-0 transition-all flex items-center gap-1 ${
                            selectedSub?.titleSlug === sub.titleSlug
                              ? "bg-purple-950/40 text-purple-400 border-purple-500"
                              : "bg-[#050312] text-gray-400 border-white/5 hover:border-white/20 hover:text-white"
                          }`}
                        >
                          {sub.lang === "cpp" ? <SiCplusplus className="text-blue-400" /> : <SiMysql className="text-yellow-400" />}
                          {sub.title.slice(0, 12)}...
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => runSimulatedTerminal(selectedSub || data.submissions[0])}
                    disabled={isCompiling}
                    className={`flex items-center gap-1.5 bg-[#8245ec] text-white px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider shadow-[0_0_15px_rgba(130,69,236,0.4)] hover:bg-[#9760fa] hover:shadow-[0_0_20px_rgba(130,69,236,0.6)] transition-all shrink-0 select-none ${
                      isCompiling ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    <FaSyncAlt className={isCompiling ? "animate-spin" : ""} /> Run compile
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: DSA Constellation Node Map */}
        {activeTab === "constellation" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
            {/* SVG Constellation panel */}
            <div className="lg:col-span-6 bg-[#080619]/90 border border-white/10 rounded-[2rem] p-6 flex flex-col items-center justify-center min-h-[380px] shadow-2xl relative overflow-hidden">
              <div className="absolute top-4 left-4">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-black block">Interactive Constellation</span>
                <span className="text-xs text-purple-400 font-extrabold">Tap topic nodes to review details</span>
              </div>
              
              <div className="relative w-full max-w-[400px] aspect-[4/3.2]">
                <svg viewBox="0 0 400 320" className="w-full h-full">
                  {/* Glowing background filters */}
                  <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="6" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Pulsing SVG Connection lines from core to outer topics */}
                  {roadmap.map((topic) => {
                    const isActive = selectedTopic?.id === topic.id;
                    return (
                      <g key={topic.id}>
                        {/* Static connecting line */}
                        <line 
                          x1="200" y1="150" 
                          x2={topic.x} y2={topic.y} 
                          stroke={isActive ? "#8245ec" : "rgba(255, 255, 255, 0.08)"} 
                          strokeWidth={isActive ? "2.5" : "1.5"}
                          className="transition-all duration-300"
                        />
                        {/* Animated overlay pulse gradient path */}
                        {isActive && (
                          <line 
                            x1="200" y1="150" 
                            x2={topic.x} y2={topic.y} 
                            stroke="url(#lineGradient)" 
                            strokeWidth="2.5"
                            className="svg-pulse-path"
                          />
                        )}
                      </g>
                    );
                  })}

                  {/* Pulsing overlay defs */}
                  <defs>
                    <linearGradient id="lineGradient" x1="1" y1="1" x2="0" y2="0">
                      <stop offset="0%" stopColor="#c084fc" stopOpacity="0" />
                      <stop offset="50%" stopColor="#8245ec" stopOpacity="1" />
                      <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Central Node (DSA Core) */}
                  <circle cx="200" cy="150" r="28" fill="#0b0921" stroke="#8245ec" strokeWidth="3" filter="url(#glow)" />
                  <text 
                    x="200" y="153" 
                    fill="#a78bfa" 
                    fontSize="9" 
                    fontWeight="900" 
                    textAnchor="middle"
                    className="pointer-events-none tracking-wider select-none font-mono"
                  >
                    CORE
                  </text>

                  {/* Outer Topic Nodes */}
                  {roadmap.map((topic) => {
                    const isActive = selectedTopic?.id === topic.id;
                    return (
                      <g 
                        key={topic.id} 
                        onClick={() => {
                          const matched = roadmap.find(t => t.id === topic.id);
                          if (matched) setSelectedTopic(matched);
                        }}
                        className="cursor-pointer group"
                      >
                        {/* Hover glow background circle */}
                        <circle 
                          cx={topic.x} cy={topic.y} r="22" 
                          fill={isActive ? "rgba(130,69,236,0.15)" : "transparent"} 
                          className="group-hover:fill-white/5 transition-all duration-300"
                        />
                        {/* Node circle */}
                        <circle 
                          cx={topic.x} cy={topic.y} r="16" 
                          fill="#050312" 
                          stroke={isActive ? "#8245ec" : "rgba(255,255,255,0.2)"} 
                          strokeWidth={isActive ? "2.5" : "1"}
                          className="group-hover:stroke-white/60 transition-all duration-300"
                        />
                        {/* Progress ring around node */}
                        <circle 
                          cx={topic.x} cy={topic.y} r="12" 
                          fill="none" 
                          stroke={topic.progress >= 80 ? "#10b981" : topic.progress >= 70 ? "#f59e0b" : "#8245ec"}
                          strokeWidth="2.5"
                          strokeDasharray={2 * Math.PI * 12}
                          strokeDashoffset={2 * Math.PI * 12 * (1 - (topic.progress / 100))}
                          strokeLinecap="round"
                        />
                        {/* Label name */}
                        <text 
                          x={topic.x} y={topic.y + 26} 
                          fill={isActive ? "#c084fc" : "#9ca3af"} 
                          fontSize="8" 
                          fontWeight="bold" 
                          textAnchor="middle"
                          className="transition-colors group-hover:fill-white select-none font-mono"
                        >
                          {topic.title.split(" ")[0]}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Right Topic Details panel */}
            <div className="lg:col-span-6 flex flex-col justify-center min-h-[380px]">
              <AnimatePresence mode="wait">
                {selectedTopic && (
                  <motion.div
                    key={selectedTopic.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="bg-[#080619]/90 border border-white/10 rounded-[2rem] p-7 shadow-2xl relative flex flex-col justify-between"
                  >
                    <div>
                      {/* Topic title & progress bar */}
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-2xl font-black text-white flex items-center gap-2">
                          {selectedTopic.id === "sql" ? <SiMysql className="text-yellow-400 text-3xl" /> : <SiCplusplus className="text-blue-400" />}
                          {selectedTopic.title}
                        </h3>
                        <span className="text-xs font-black text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-xl">
                          {selectedTopic.progress}% COMPLETED
                        </span>
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {selectedTopic.details}
                      </p>

                      {/* Topic Checklist */}
                      <div className="space-y-3 mb-6 max-h-[170px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-purple-950 scrollbar-track-transparent">
                        {selectedTopic.problems.map((prob) => (
                          <div 
                            key={prob.slug}
                            onClick={() => handleToggleProblem(selectedTopic.id, prob.slug)}
                            className={`flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all border select-none ${
                              prob.completed
                                ? "bg-purple-950/10 border-purple-500/20 hover:border-purple-500/30 text-white"
                                : "bg-[#050312] border-white/5 hover:border-white/10 text-gray-400 hover:text-gray-300"
                            }`}
                          >
                            <div className="flex items-center gap-3 overflow-hidden">
                              <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                                prob.completed 
                                  ? "bg-purple-500 border-purple-400 text-white" 
                                  : "border-gray-700 hover:border-gray-600"
                              }`}>
                                {prob.completed && <FaCheck size={9} />}
                              </div>
                              <span className="text-xs font-extrabold truncate">{prob.name}</span>
                            </div>
                            <span className={`text-[9px] font-black px-2 py-0.5 rounded-md border shrink-0 ${
                              prob.difficulty === "Easy"
                                ? "bg-green-500/5 text-green-400 border-green-500/20"
                                : "bg-yellow-500/5 text-yellow-400 border-yellow-500/20"
                            }`}>
                              {prob.difficulty}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom notes overlay */}
                    <div className="text-[10px] text-gray-500 bg-white/5 border border-white/5 rounded-xl p-3 flex items-center gap-2 select-none">
                      <FaInfoCircle className="text-purple-400 shrink-0" />
                      <span>Checking off tasks updates the progress vectors of the constellation hub instantly.</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Tab 3: Activity Matrix (Heatmap) */}
        {activeTab === "heatmap" && (
          <div className="flex flex-col items-center justify-center p-4 min-h-[320px] animate-fadeIn">
            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Historical Activity Matrix</h3>
            <p className="text-gray-400 text-sm text-center mb-8 max-w-sm font-medium">
              Mapping daily contributions and query logs over the previous coding sessions.
            </p>
            {renderHeatmap()}
          </div>
        )}

        {/* Tab 4: Submissions Log */}
        {activeTab === "submissions" && (
          <div className="animate-fadeIn">
            {/* Header filters */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
              <div className="relative w-full md:w-80">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Filter query logs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-[#050312] border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all"
                />
              </div>

              <div className="flex gap-2 w-full md:w-auto overflow-x-auto scrollbar-none pb-1">
                {[
                  { id: "all", label: "All Stack", icon: <FaCode /> },
                  { id: "cpp", label: "C++ Compiler", icon: <SiCplusplus className="text-blue-400" /> },
                  { id: "mysql", label: "SQL Queries", icon: <SiMysql className="text-yellow-400" /> }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setLangFilter(item.id)}
                    className={`flex items-center gap-1.5 px-4.5 py-2 rounded-xl text-xs uppercase tracking-wider font-extrabold transition-all border ${
                      langFilter === item.id
                        ? "bg-[#8245ec]/10 text-purple-400 border-purple-500"
                        : "bg-[#050312] text-gray-400 border-white/5 hover:text-white"
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* List */}
            <div className="max-h-[380px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-purple-950 scrollbar-track-transparent rounded-[2rem] bg-[#050312]/70 border border-white/5">
              {filteredSubmissions.length > 0 ? (
                <div className="divide-y divide-white/5">
                  {filteredSubmissions.map((sub, index) => (
                    <div
                      key={index}
                      onClick={() => runSimulatedTerminal(sub)}
                      className="flex items-center justify-between p-4.5 hover:bg-white/5 transition-all group cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-9 h-9 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center shrink-0">
                          <FaCheck className="text-green-500 text-xs" />
                        </div>
                        <div>
                          <div className="font-extrabold text-white group-hover:text-purple-400 transition-colors flex items-center gap-2">
                            {sub.title}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(`https://leetcode.com/problems/${sub.titleSlug}/`, "_blank");
                              }}
                              className="text-gray-500 hover:text-purple-400 p-1"
                              title="View on LeetCode"
                            >
                              <FaExternalLinkAlt size={10} />
                            </button>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            Executed: {formatTime(sub.timestamp)}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md flex items-center gap-1 bg-[#130f2c] text-purple-400 border border-purple-900/30">
                          {sub.lang === "cpp" ? <SiCplusplus size={10} /> : <SiMysql size={12} />}
                          {sub.lang.toUpperCase()}
                        </span>
                        
                        <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2.5 py-1 rounded-full border border-green-500/20">
                          {sub.statusDisplay}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 text-gray-500 flex flex-col items-center justify-center">
                  <FaRegQuestionCircle size={32} className="mb-2 text-gray-600 animate-bounce" />
                  <span className="font-mono text-xs uppercase tracking-widest">No matching logs found</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LeetCodePortal;

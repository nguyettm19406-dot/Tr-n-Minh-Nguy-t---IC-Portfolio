'use client';

import * as React from "react";
import { 
  motion, 
  AnimatePresence 
} from "motion/react";
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  ChevronRight, 
  Star, 
  UserCheck, 
  Volume2, 
  BookOpen, 
  Users, 
  Layers, 
  Settings, 
  Send, 
  Heart, 
  CheckCircle2, 
  Check, 
  X, 
  Plus, 
  PieChart, 
  FileText, 
  Bookmark, 
  Compass, 
  MessageSquare,
  Sparkles,
  ArrowRight,
  Info,
  ChevronDown
} from "lucide-react";

// Types
interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ProjectData {
  id: string;
  title: string;
  category: string;
  summary: string;
  bốiCảnh: string;
  mụcTiêu: string;
}

export default function PortfolioPage() {
  // Navigation State
  const [activeSection, setActiveSection] = React.useState("hero");

  // Project sub-tabs (Proposal, Creative Poster, Email Templates)
  const [p1SubTab, setP1SubTab] = React.useState<"proposal" | "poster" | "email">("proposal");
  const [p2SubTab, setP2SubTab] = React.useState<"proposal" | "poster" | "email">("proposal");
  const [p3SubTab, setP3SubTab] = React.useState<"proposal" | "poster" | "email">("proposal");

  // WorkJOY Portfolio States
  // Tabs: workjoy_info, project_01, project_02, project_03
  const [selectedProjectTab, setSelectedProjectTab] = React.useState("project_01");
  
  // Project 01: Touchpoints list toggle: hiring vs onboarding
  const [p1TouchpointMode, setP1TouchpointMode] = React.useState<'hiring' | 'onboarding'>('hiring');
  const [selectedTouchpointId, setSelectedTouchpointId] = React.useState("sourcing");
  
  // Project 02: Interactive Welcome Kit Customizer values
  const [welcomeKitName, setWelcomeKitName] = React.useState("VŨ THANH HẢI");
  const [welcomeKitDept, setWelcomeKitDept] = React.useState("CUSTOMER SUPPORT");
  const [welcomeKitAvatar, setWelcomeKitAvatar] = React.useState("👦"); // Emoji avatar for flat design

  // Project 02: Satisfaction Survey Rating Sandbox
  const [surveyRatings, setSurveyRatings] = React.useState<number[]>([0, 0, 0, 0, 0]);
  const [surveyComment, setSurveyComment] = React.useState("");
  const [surveySubmitted, setSurveySubmitted] = React.useState(false);

  // Contact simulated form states for recuitment information
  const [contactName, setContactName] = React.useState("");
  const [contactEmail, setContactEmail] = React.useState("");
  const [contactMessage, setContactMessage] = React.useState("");
  const [contactSubmitted, setContactSubmitted] = React.useState(false);

  // Smooth scroll click handler
  const handleScrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Project 2: Satisfaction Survey action
  const handleRateSurvey = (index: number, rating: number) => {
    const updated = [...surveyRatings];
    updated[index] = rating;
    setSurveyRatings(updated);
  };

  const handleSubmitSurvey = (e: React.FormEvent) => {
    e.preventDefault();
    setSurveySubmitted(true);
  };

  const handleResetSurvey = () => {
    setSurveyRatings([0, 0, 0, 0, 0]);
    setSurveyComment("");
    setSurveySubmitted(false);
  };

  // Contact Form action
  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail) return;
    setContactSubmitted(true);
  };

  // WorkJOY constant datasets
  const workJoyInfo = {
    domain: "Giáo dục (Education Services)",
    scale: "< 50 nhân sự (SMEs)",
    culture: "People First • Grow Together • Joy at Work • Continuous Learning",
    mission: "Đồng hành cùng cá nhân và tổ chức trên hành trình trở thành phiên bản tốt nhất. Thấu hiểu - thay đổi từ bản thân, biến mọi thứ thành cơ hội.",
    vision: "Xây dựng nguồn nhân lực có trách nhiệm, hoài bão, sẵn sàng đóng góp giá trị cho cộng đồng và xã hội.",
    persona: "1) Các bạn trẻ từ 18 - 22 tuổi mơ ước định hướng bản thân. 2) Người đi làm khao khát phát triển nấc thang sự nghiệp."
  };

  // Touchpoint datasets for Project 01
  const project1Touchpoints = {
    hiring: [
      {
        id: "preparation",
        title: "Preparation (Chuẩn bị)",
        time: "Trước tuyển dụng",
        note: "Yêu cầu bảng phân tích Job analysis cụ thể",
        deliverable: "Job Description (CS KH)",
        detail: "Mẫu JD chi tiết cho vị trí Chăm sóc khách hàng: Lương cứng từ 8 triệu VND + thưởng doanh số, tham gia lộ trình đào tạo 1-1, cơ chế làm việc Hybrid linh hoạt, chế độ BHXH đầy đủ và 12 ngày phép năm. Bản JD thiết kế bắt mắt, ngôn ngữ truyền cảm hứng thế hệ trẻ.",
        color: "bg-blue-50 border-blue-500 text-blue-700"
      },
      {
        id: "sourcing",
        title: "Sourcing (Đăng tuyển)",
        time: "Ngay khi duyệt JD",
        note: "Thông tin sắc sảo, nêu bật brand văn hóa",
        deliverable: "Post tuyển dụng Facebook",
        detail: "Chất liệu hình ảnh trẻ trung với thông điệp cốt lõi: 'PEOPLE FIRST - GROW TOGETHER - JOY AT WORK'. Đi kèm bài đăng tuyển thu hút có biểu tượng phù hợp, nêu bật địa điểm quận 7 và hòm mail tiếp nhận nguyettmwj@gmail.com trực quan.",
        color: "bg-emerald-50 border-emerald-500 text-emerald-700"
      },
      {
        id: "screening",
        title: "Screening (Sàng lọc)",
        time: "Trong 24h sau lọc",
        note: "Sơ phòng đầy đủ thông tin hỗ trợ ứng viên",
        deliverable: "Email xác nhận phỏng vấn",
        detail: "Gửi thư mời thân thiết, hướng dẫn chi tiết vị trí đậu xe, số điện thoại liên hệ hỗ trợ (Ms. Nguyệt), phong cách trò chuyện và chuẩn bị trước buổi trò chuyện để ứng viên có tâm thế thoải mái tốt nhất.",
        color: "bg-amber-50 border-amber-500 text-amber-700"
      },
      {
        id: "interview",
        title: "Interview / Rejection",
        time: "Trong 24 - 48h sau PV",
        note: "Phản hồi tinh tế, ghi nhận giá trị ứng viên",
        deliverable: "Thư từ chối & Cảm ơn văn minh",
        detail: "Email phản hồi được soạn thảo vô cùng nhân văn. Dù không trúng tuyển, ứng viên vẫn nhận được lời chúc chân thành, lưu trữ hồ sơ và đánh giá cao năng lực tiềm năng để giữ hình ảnh văn hóa nhà tuyển dụng xuất sắc.",
        color: "bg-purple-50 border-purple-500 text-purple-700"
      },
      {
        id: "offer",
        title: "Offer & Chốt",
        time: "Ngay khi có quyết định",
        note: "Khơi gợi niềm hào hứng gia nhập đại gia đình",
        deliverable: "Thiết kế Offer Letter",
        detail: "Bản thư mời nhận việc (Offer Letter) mang nhận diện thương hiệu WorkJOY với lộ trình ngày đầu đi làm rõ ràng (Thứ Tư, 01/07/2026), chi tiết lương thưởng, điều kiện làm việc và lời chào đón nồng nhiệt từ ban nhân sự.",
        color: "bg-pink-50 border-pink-500 text-pink-700"
      }
    ],
    onboarding: [
      {
        id: "preboarding",
        title: "Pre-boarding (Chuẩn bị hội nhập)",
        time: "3 - 5 ngày trước đi làm",
        note: "Cung cấp cẩm nang và liên lạc sớm",
        deliverable: "Welcome Email & Guide",
        detail: "Email gửi riêng cho bạn Vũ Thanh Hải trước ngày gia nhập nhằm hướng dẫn hoàn thành hồ sơ, cung cấp file định hướng lối sống văn phòng và liên hệ nhanh các bộ phận hỗ trợ khi cần thiết.",
        color: "bg-blue-50 border-red-500 text-red-700"
      },
      {
        id: "dayone",
        title: "Ngày đầu tiên (First Day)",
        time: "Sáng ngày 1",
        note: "Trải nghiệm cảm xúc thuộc về tối đa",
        deliverable: "Welcome Kit & Poster chào mừng",
        detail: "Trao tặng Welcome Kit thiết kế theo brand (Cốc sứ in Logo, bút, sổ, thẻ đeo nhân viên) đồng thời đăng tải Welcome New Member Poster sáng tạo: 'Chào đón Vũ Thanh Hải. Đặc điểm yêu mèo và hát hay' giúp nhân viên tăng sự gắn kết",
        color: "bg-emerald-50 border-teal-500 text-teal-700"
      },
      {
        id: "weeksone",
        title: "Tuần 1 - 2 (Hội nhập sâu)",
        time: "Liên tục trong 14 ngày",
        note: "Đồng nghiệp hướng dẫn chi tiết",
        deliverable: "Buddy check-in template",
        detail: "Mẫu phiếu/quy trình đồng hành gọn nhẹ (Buddy Program) để đồng nghiệp giàu kinh nghiệm hỗ trợ hướng dẫn nhân sự mới làm quen quy trình, ẩm thực xung quanh văn phòng và thói quen sinh hoạt công ty.",
        color: "bg-amber-50 border-orange-500 text-orange-700"
      },
      {
        id: "daythirty",
        title: "Ngày thứ 30 (Đánh giá)",
        time: "Cuối ngày làm việc thứ 30",
        note: "Thu thập phản hồi hai chiều",
        deliverable: "Survey Onboarding 30 ngày",
        detail: "Khảo sát tự kiểm thử trải nghiệm hội nhập nhằm lắng nghe cảm nhận của nhân viên về nội dung đào tạo ban đầu, văn hóa hợp tác, và các điểm WorkJOY cần tối ưu hơn nữa để gắn bó lâu dài.",
        color: "bg-indigo-50 border-indigo-500 text-indigo-700"
      }
    ]
  };

  // Find targeted touchpoint
  const activeTouchpoints = p1TouchpointMode === 'hiring' ? project1Touchpoints.hiring : project1Touchpoints.onboarding;
  const currentTouchpoint = activeTouchpoints.find(t => t.id === selectedTouchpointId) || activeTouchpoints[0];

  // Sync selection when touchpoint mode changes
  React.useEffect(() => {
    const defaultId = p1TouchpointMode === 'hiring' ? 'sourcing' : 'dayone';
    const timer = setTimeout(() => {
      setSelectedTouchpointId(defaultId);
    }, 0);
    return () => clearTimeout(timer);
  }, [p1TouchpointMode]);

  return (
    <div className="relative selection:bg-[#3B82F6] selection:text-white" id="main-viewport">
      
      {/* 1. STICKY GLASS HEADER (FLAT STYLE, COHESIVE NAVIGATION) */}
      <header className="sticky top-0 z-50 w-full bg-white border-b-4 border-[#111827] shadow-none py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
        <a href="#hero" className="flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-[#3B82F6] rounded" onClick={() => handleScrollTo("hero")}>
          <div className="h-10 w-10 rounded-md bg-[#3B82F6] border-2 border-[#111827] flex items-center justify-center font-bold text-white text-lg tracking-wider">
            MN
          </div>
          <div>
            <span className="font-extrabold text-[#111827] text-lg tracking-tight block leading-none">TRẦN MINH NGUYỆT</span>
            <span className="text-xs font-semibold text-[#3B82F6] tracking-wider uppercase">Internal Communications</span>
          </div>
        </a>
        
        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1">
          {[
            { id: "hero", label: "Trang chủ" },
            { id: "about", label: "Giới thiệu" },
            { id: "skills", label: "Kỹ năng" },
            { id: "projects", label: "Dự án WorkJOY" },
            { id: "achievements", label: "Kinh nghiệm & Chứng nhận" },
            { id: "contact", label: "Liên hệ" }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo(item.id);
              }}
              className={`px-4 py-2 font-bold tracking-tight text-sm rounded ${
                activeSection === item.id 
                  ? "bg-[#111827] text-white" 
                  : "text-[#111827] hover:bg-[#F3F4F6]"
              } transition-colors duration-200 outline-none focus:ring-2 focus:ring-[#3B82F6]`}
              id={`nav-link-${item.id}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Notion Portfolio Link */}
        <div className="flex items-center gap-2">
          <a
            href="https://app.notion.com/p/Internal-Communications-Portfolio-3766cb172e2880f7bc8ee41635ef3ac4?source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            id="quick-notion-btn"
            className="flex items-center gap-2 px-4 py-2 bg-[#F59E0B] hover:bg-[#d97706] text-[#111827] font-bold text-xs uppercase tracking-wider rounded-md border-2 border-[#111827] hover:scale-105 active:scale-95 transition-all duration-200 shadow-none"
          >
            <Bookmark className="w-4 h-4 text-white fill-white" />
            <span>Notion Portfolio</span>
          </a>
        </div>
      </header>

      {/* 2. HERO SECTION (#hero) - BOLD POSTER BLUE THEME */}
      <section 
        id="hero" 
        className="relative min-h-[90vh] bg-[#3B82F6] text-white py-16 px-6 md:px-12 flex items-center overflow-hidden border-b-8 border-[#111827]"
      >
        {/* Abstract Background Design - Solid Flat Triangles and Circles */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute -top-16 -left-16 w-96 h-96 rounded-full bg-white"></div>
          <div className="absolute top-1/2 right-10 w-80 h-80 rotate-45 bg-white border-12 border-white"></div>
          <div className="absolute bottom-10 left-1/3 w-64 h-64 rounded-full bg-white"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFFFFF] border-2 border-[#111827] text-[#111827] font-extrabold text-xs tracking-widest uppercase rounded">
              <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
              <span>CHUYÊN VIÊN TRUYỀN THÔNG NỘI BỘ</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]" id="hero-main-title">
              KẾT NỐI <br className="hidden sm:inline"/> 
              <span className="text-[#111827] bg-[#FFFFFF] px-3 py-1 inline-block rotate-[-1deg] border-4 border-[#111827]">
                CON NGƯỜI
              </span> <br /> 
              KIẾN TẠO VĂN HÓA
            </h1>
            
            <p className="text-lg md:text-xl font-normal text-blue-50 max-w-2xl leading-relaxed">
              Xin chào! Em tốt nghiệp ngành Hệ thống thông tin quản lý tại UEL, có gần 2 năm kinh nghiệm từ hỗ trợ vận hành, chăm sóc khách hàng và hỗ trợ hoạt động nội bộ. Em thấy mình phù hợp và có nhiều đóng góp hơn khi được viết nội dung, tổ chức sự kiện và xây dựng kênh truyền thông giúp mọi người cảm thấy được kết nối.
            </p>

            {/* Quality Badges */}
            <div className="grid grid-cols-3 gap-3 w-full sm:w-auto">
              {[
                { title: "CHĂM CHỈ", color: "bg-[#10B981]" },
                { title: "CẦU TIẾN", color: "bg-[#F59E0B]" },
                { title: "TRÁCH NHIỆM", color: "bg-[#111827]" }
              ].map((q, i) => (
                <div key={i} className={`${q.color} border-2 border-white text-white py-3 px-2 sm:px-6 rounded-md text-center font-extrabold tracking-wide text-xs sm:text-sm`}>
                  {q.title}
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4 w-full sm:w-auto">
              <button
                onClick={() => handleScrollTo("projects")}
                id="hero-cta-projects"
                className="w-full sm:w-auto flex items-center justify-center gap-2 h-14 px-8 bg-[#111827] hover:bg-[#1a2333] text-white font-extrabold rounded-md shadow-none hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-[#111827]"
              >
                <span>Xem hồ sơ dự án</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <a
                href="https://app.notion.com/p/Internal-Communications-Portfolio-3766cb172e2880f7bc8ee41635ef3ac4?source=copy_link"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-notion"
                className="w-full sm:w-auto flex items-center justify-center gap-2 h-14 px-8 bg-white hover:bg-[#F3F4F6] text-[#111827] font-extrabold rounded-md shadow-none hover:scale-105 active:scale-95 transition-all duration-200 border-4 border-[#111827]"
              >
                <span>Xem bản Notion chi tiết</span>
                <Bookmark className="w-5 h-5 text-[#3B82F6]" />
              </a>
            </div>
          </div>

          {/* Right Layout Column: Flat Posters Compositions */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-square rounded-lg bg-[#FFFFFF] border-4 border-[#111827] p-8 flex flex-col justify-between overflow-hidden">
              {/* Outer Flat elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#F59E0B] border-b-4 border-l-4 border-[#111827] flex items-center justify-center font-extrabold text-[#111827] rotate-6 text-xl">
                IC
              </div>

              <div className="space-y-4">
                <div className="h-6 w-16 bg-[#10B981] rounded-md border-2 border-[#111827]"></div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-[#111827] rounded"></div>
                  <div className="h-4 w-5/6 bg-[#111827] rounded"></div>
                  <div className="h-4 w-2/3 bg-[#F3F4F6] rounded"></div>
                </div>
              </div>

              {/* Card visual elements */}
              <div className="bg-[#F3F4F6] border-2 border-[#111827] p-4 rounded-lg flex items-center gap-4 relative z-10 hover:scale-105 transition-transform duration-200">
                <div className="h-14 w-14 rounded-full bg-[#3B82F6] border-2 border-[#111827] flex items-center justify-center text-2xl font-bold">
                  👩‍💻
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-extrabold text-[#111827] text-md leading-none truncate">Trần Minh Nguyệt</h4>
                  <p className="text-xs text-[#10B981] font-bold mt-1">Portfolio tuyển dụng 2026</p>
                  <p className="text-[10px] text-gray-500 font-mono mt-0.5">nguyettm19406@gmail.com</p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="text-xs text-gray-400 font-mono">Location: Quận 4, HCM</span>
                <span className="text-xs font-bold text-[#111827] bg-[#F59E0B] py-1 px-3 border-2 border-[#111827] rounded">ACTIVE</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. ABOUT SECTION (#about) - OFF-WHITE BASE */}
      <section id="about" className="py-24 px-6 md:px-12 bg-[#F3F4F6] border-b-8 border-[#111827]">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111827]">
              GIỚI THIỆU BẢN THÂN
            </h2>
            <div className="h-3 w-40 bg-[#10B981] border-2 border-[#111827] rounded-md mt-4 mx-auto md:mx-0"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Story Column */}
            <div className="lg:col-span-7 bg-[#FFFFFF] border-4 border-[#111827] p-8 md:p-12 rounded-lg flex flex-col justify-between">
              <div className="space-y-6 text-[#111827] text-md sm:text-lg leading-relaxed font-semibold">
                <p className="font-bold text-[#3B82F6] text-xl">
                  &ldquo;Em tin rằng truyền thông nội bộ hiệu quả là linh hồn kết nối mọi trái tim trong doanh nghiệp.&rdquo;
                </p>
                <p>
                  Tốt nghiệp chuyên ngành <strong>Hệ thống thông tin quản lý tại Đại học Kinh tế - Luật (UEL)</strong> giúp em rèn luyện tư duy hệ thống mạch lạc kết hợp cùng kỹ năng sử dụng công nghệ.
                </p>
                <p>
                  Với gần 2 năm kinh nghiệm tại các vai trò từ Sale Admin, Chăm sóc khách hàng (CS) cho đến hỗ trợ tổ chức hoạt động nội bộ tại tổ chức phi lợi nhuận (Mentor Mentee Channel), em luôn nỗ lực thích ứng linh hoạt.
                </p>
                <p>
                  Sự chủ động tự học thêm <strong>Canva, CapCut</strong> cùng sự định hướng từ khóa học <strong>HR Foundation</strong> giúp em rèn luyện kỹ năng để tạo dựng các ấn phẩm truyền thông nội bộ hiệu quả.
                </p>
              </div>

              {/* Education block */}
              <div className="mt-8 pt-8 border-t-2 border-[#F3F4F6] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-md bg-[#10B981] border-2 border-[#111827] flex items-center justify-center text-white">
                    <GraduationCap className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#111827] leading-tight">Đại học Kinh tế - Luật (UEL)</h4>
                    <p className="text-xs text-gray-500">Chuyên ngành Hệ thống thông tin quản lý (2019 - 2023)</p>
                  </div>
                </div>
                <span className="font-extrabold text-xs tracking-wider bg-[#3B82F6] text-white py-1.5 px-4 border-2 border-[#111827] rounded-md">
                  CỬ NHÂN MIS
                </span>
              </div>
            </div>

            {/* Right Quick Info Card */}
            <div className="lg:col-span-5 bg-[#10B981] border-4 border-[#111827] p-8 rounded-lg text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-extrabold text-[#111827] tracking-tight mb-6">HỒ SƠ TÓM TẮT</h3>
                
                <div className="space-y-4">
                  {[
                    { icon: <Calendar />, label: "Sinh ngày", value: "25/02/2001" },
                    { icon: <Mail />, label: "Email", value: "nguyettm19406@gmail.com" },
                    { icon: <Phone />, label: "Số điện thoại", value: "+84 845756499" },
                    { icon: <MapPin />, label: "Địa bàn hoạt động", value: "Quận 4, TP. Hồ Chí Minh" },
                  ].map((info, idx) => (
                    <div key={idx} className="flex items-center gap-3 py-3 px-4 bg-white/10 rounded-md border-2 border-white/15">
                      <div className="flex-shrink-0 text-white stroke-[2.5] w-5 h-5">
                        {info.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-[#111827] font-extrabold uppercase tracking-wider">{info.label}</p>
                        <p className="text-sm font-bold text-white truncate font-mono">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 bg-white p-5 rounded-md border-2 border-[#111827] text-[#111827]">
                <h4 className="font-extrabold text-xs uppercase tracking-widest text-[#10B981] mb-2">MỤC TIÊU NGẮN HẠN</h4>
                <p className="text-sm font-semibold">
                  Nắm vững sâu sắc mọi chiến dịch truyền thông nội bộ chuẩn mực, kiến tạo một môi trường gắn kết và đóng góp nâng tầm trải nghiệm gắn kết hạnh phúc của nhân viên mới.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. SKILLS SECTION (#skills) - PURE WHITE BASE WITH COLOR TAGS */}
      <section id="skills" className="py-24 px-6 md:px-12 bg-white border-b-8 border-[#111827]">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111827]">
              KỸ NĂNG CHUYÊN MÔN
            </h2>
            <div className="h-3 w-40 bg-[#F59E0B] border-2 border-[#111827] rounded-md mt-4 mx-auto md:mx-0"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Skill 1: Media Sáng tạo & Thiết kế */}
            <div className="bg-[#F3F4F6] border-4 border-[#111827] rounded-lg p-8 hover:scale-[1.02] transition-transform duration-200">
              <div className="h-14 w-14 rounded-full bg-[#3B82F6] border-2 border-[#111827] flex items-center justify-center text-white mb-6">
                <Layers className="w-7 h-7 stroke-[2.5]" />
              </div>
              <h3 className="text-xl font-extrabold text-[#111827] mb-3">THIẾT KẾ & SÁNG TẠO</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Tự học và rèn luyện kỹ năng thiết kế ấn phẩm đồ họa cơ bản và chỉnh sửa video ngắn.
              </p>
              
              <div className="space-y-2">
                {[
                  "Sử dụng Canva thiết kế hình ảnh cơ bản",
                  "Sử dụng CapCut chỉnh sửa video ngắn",
                  "Hỗ trợ viết nội dung (Bản tin, chia sẻ nội bộ)",
                  "Tuân thủ và áp dụng nhận diện thương hiệu"
                ].map((name, id) => (
                  <div key={id} className="bg-white p-3 rounded border-2 border-[#111827] flex items-center gap-2">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#3B82F6] flex-shrink-0" />
                    <span className="text-xs font-extrabold text-[#111827]">{name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skill 2: Vận hành & Sự kiện */}
            <div className="bg-[#F3F4F6] border-4 border-[#111827] rounded-lg p-8 hover:scale-[1.02] transition-transform duration-200">
              <div className="h-14 w-14 rounded-full bg-[#10B981] border-2 border-[#111827] flex items-center justify-center text-white mb-6">
                <Settings className="w-7 h-7 stroke-[2.5]" />
              </div>
              <h3 className="text-xl font-extrabold text-[#111827] mb-3">SỰ KIỆN & VẬN HÀNH</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Cẩn thận và chu đáo trong công tác hỗ trợ tổ chức sự kiện phong trào và quản lý tài liệu nội bộ.
              </p>
              
              <div className="space-y-2">
                {[
                  "Học hỏi quản lý dữ liệu và tin học văn phòng",
                  "Hỗ trợ chuẩn bị tài liệu Onboarding",
                  "Hành chính hành vi, hỗ trợ tính toán chi phí",
                  "Hỗ trợ điều phối hậu cần chương trình"
                ].map((name, id) => (
                  <div key={id} className="bg-white p-3 rounded border-2 border-[#111827] flex items-center gap-2">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#10B981] flex-shrink-0" />
                    <span className="text-xs font-extrabold text-[#111827]">{name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skill 3: Ngoại ngữ & Công cụ */}
            <div className="bg-[#111827] border-4 border-[#111827] rounded-lg p-8 hover:scale-[1.02] transition-transform duration-200 text-white">
              <div className="h-14 w-14 rounded-full bg-[#F59E0B] border-2 border-white flex items-center justify-center text-[#111827] mb-6">
                <BookOpen className="w-7 h-7 stroke-[2.5]" />
              </div>
              <h3 className="text-xl font-extrabold text-white mb-3">NGOẠI NGỮ & CÔNG CỤ</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Nỗ lực trang bị nền tảng ngoại ngữ tốt và học hỏi nhanh các ứng dụng công nghệ trực tuyến.
              </p>
              
              <div className="space-y-3">
                {[
                  { name: "TOEIC 700", sub: "Hỗ trợ đọc hiểu tài liệu và giao tiếp cơ bản" },
                  { name: "Lark Suite / MS Office", sub: "Sắp xếp tài liệu, biểu bảng công sở ngăn nắp" },
                  { name: "Tiếng Anh văn phòng", sub: "Trao đổi thư tín và chào hỏi cơ bản" }
                ].map((c, id) => (
                  <div key={id} className="bg-white/10 p-3 rounded border-2 border-white/20">
                    <h5 className="text-xs font-bold text-[#F59E0B]">{c.name}</h5>
                    <p className="text-[10px] text-gray-300 mt-1">{c.sub}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. PROJECTS SECTION (#projects) - MULTI-MODULE INTERACTIVE Tabbed Showcase */}
      <section id="projects" className="py-24 px-6 md:px-12 bg-[#F3F4F6] border-b-8 border-[#111827]">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111827]">
                DỰ ÁN CÁ NHÂN: WORKJOY
              </h2>
            </div>
            
            {/* Tab selection triggers */}
            <div className="flex flex-wrap gap-2 justify-center bg-white p-2 border-4 border-[#111827] rounded-lg">
              <button
                onClick={() => setSelectedProjectTab("project_01")}
                className={`px-4 py-2 font-extrabold text-xs tracking-wider uppercase rounded-md transition-all ${
                  selectedProjectTab === "project_01"
                    ? "bg-[#3B82F6] text-white"
                    : "text-[#111827] hover:bg-gray-100"
                }`}
              >
                Project 1: Tuyển dụng & Onboarding
              </button>
              <button
                onClick={() => setSelectedProjectTab("project_02")}
                className={`px-4 py-2 font-extrabold text-xs tracking-wider uppercase rounded-md transition-all ${
                  selectedProjectTab === "project_02"
                    ? "bg-[#10B981] text-white"
                    : "text-[#111827] hover:bg-gray-100"
                }`}
              >
                Project 2: Active Workshop
              </button>
              <button
                onClick={() => setSelectedProjectTab("project_03")}
                className={`px-4 py-2 font-extrabold text-xs tracking-wider uppercase rounded-md transition-all ${
                  selectedProjectTab === "project_03"
                    ? "bg-[#F59E0B] text-white"
                    : "text-[#111827] hover:bg-gray-100"
                }`}
              >
                Project 3: Bản tin Newsletter
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            
            {/* ====== PROJECT 1 CONTENT TAB ====== */}
            {selectedProjectTab === "project_01" && (
              <motion.div
                key="project_status_01"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 250 / 1000 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
              >
                {/* Left overview column */}
                <div className="lg:col-span-4 bg-white border-4 border-[#111827] p-6 rounded-lg space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest bg-[#3B82F6] text-white py-1 px-3 rounded">
                        Chiến dịch Tuyển dụng & Onboarding
                      </span>
                      <h3 className="text-2xl font-extrabold text-[#111827] mt-3">Quy trình Tuyển dụng & Hội nhập đồng bộ</h3>
                      <p className="text-xs text-[#3B82F6] font-semibold uppercase tracking-wider mt-1">Chuỗi điểm chạm văn hóa &ldquo;People First&rdquo;</p>
                    </div>
                    
                    <div className="p-4 bg-blue-50 border-2 border-[#3B82F6] rounded text-xs text-blue-900 leading-relaxed space-y-2 font-medium">
                      <p><strong>Bối cảnh:</strong> Nhân sự mới thường hụt hẫng trong giai đoạn chuyển giao từ khi nhận thư mời (Offer) đến hết 30 ngày đi làm (Day 30).</p>
                      <p><strong>Giải pháp:</strong> Đồng bộ thông điệp tuyển dụng, chuẩn bị sớm kịch bản Onboarding, trao gửi Welcome Kit thấu cảm giúp nhân viên mới hòa nhập tự tin.</p>
                    </div>

                    {/* Sub-tab Selectors */}
                    <div className="space-y-1 pt-2">
                      <span className="text-xs font-extrabold text-[#111827] uppercase tracking-wider block mb-2">Xem tài liệu chi tiết:</span>
                      {[
                        { id: "proposal", label: "📁 Kịch bản & Quy trình (Proposal)", icon: "📋" },
                        { id: "poster", label: "🎨 Ấn phẩm Poster & Welcome Kit", icon: "🖼️" },
                        { id: "email", label: "✉️ Mẫu Email tuyển chọn", icon: "📨" }
                      ].map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => setP1SubTab(sub.id as any)}
                          className={`w-full flex items-center gap-2 p-3 text-xs text-left font-extrabold rounded-md border-2 transition-all ${
                            p1SubTab === sub.id
                              ? "bg-[#111827] text-white border-[#111827] translate-x-1"
                              : "bg-[#F3F4F6] text-[#111827] border-transparent hover:border-gray-300"
                          }`}
                        >
                          <span>{sub.icon}</span>
                          <span>{sub.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 space-y-3">
                    <p className="text-xs text-gray-500 font-semibold italic">
                      Nhấp vào các mục trên để xem toàn bộ ấn phẩm tương ứng của Nguyệt.
                    </p>
                    <a
                      href="https://byvn.net/c8Ul"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-white hover:bg-gray-100 text-[#111827] font-extrabold text-xs uppercase tracking-wider rounded border-2 border-[#111827] hover:scale-[1.02] active:scale-95 transition-all duration-200"
                    >
                      <Bookmark className="w-4 h-4 text-[#3B82F6]" />
                      <span>Xem đề án trên Notion</span>
                    </a>
                  </div>
                </div>

                {/* Right Interactive Area */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  
                  {/* SUB-TAB 1: PROPOSAL */}
                  {p1SubTab === "proposal" && (
                    <div className="bg-white border-4 border-[#111827] p-8 rounded-lg space-y-6 h-full flex flex-col justify-between">
                      <div className="space-y-6">
                        <div className="border-b-2 border-gray-100 pb-4">
                          <h4 className="text-xl font-extrabold text-[#111827]">Chiến lược Chuỗi Điểm Chạm Nhân Sự Mới</h4>
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Recruitment & Onboarding Journey 2026</p>
                        </div>

                        {/* Interactive flow navigation */}
                        <div className="flex gap-2">
                          <button
                            onClick={() => setP1TouchpointMode('hiring')}
                            className={`flex-1 py-2 text-xs font-extrabold tracking-wider uppercase rounded-md border-2 border-[#111827] transition-all ${
                              p1TouchpointMode === 'hiring' ? 'bg-[#3B82F6] text-white' : 'bg-[#F3F4F6] text-[#111827]'
                            }`}
                          >
                            Quy trình tuyển dụng (Hiring)
                          </button>
                          <button
                            onClick={() => setP1TouchpointMode('onboarding')}
                            className={`flex-1 py-2 text-xs font-extrabold tracking-wider uppercase rounded-md border-2 border-[#111827] transition-all ${
                              p1TouchpointMode === 'onboarding' ? 'bg-[#3B82F6] text-white' : 'bg-[#F3F4F6] text-[#111827]'
                            }`}
                          >
                            Hành trình Onboarding (Hội nhập)
                          </button>
                        </div>

                        {/* Split views based on select */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <span className="text-xs font-extrabold text-gray-400 uppercase tracking-widest block mb-2">Các chặng điểm chạm:</span>
                            {activeTouchpoints.map((t) => (
                              <button
                                key={t.id}
                                onClick={() => setSelectedTouchpointId(t.id)}
                                className={`w-full flex items-center justify-between p-3 text-xs text-left font-bold rounded-md border-2 transition-all ${
                                  selectedTouchpointId === t.id
                                    ? "bg-[#111827] text-white border-[#111827]"
                                    : "bg-[#F3F4F6] text-[#111827] border-transparent hover:border-gray-200"
                                }`}
                              >
                                <div>
                                  <p className="font-extrabold text-xs">{t.title}</p>
                                  <p className="text-[10px] opacity-75 mt-0.5">{t.deliverable}</p>
                                </div>
                                <ChevronRight className="w-4 h-4 flex-shrink-0" />
                              </button>
                            ))}
                          </div>

                          <div className="bg-[#F3F4F6] p-5 rounded-lg border-2 border-[#111827] flex flex-col justify-between">
                            <div className="space-y-3">
                              <span className="text-[10px] font-extrabold text-[#3B82F6] uppercase tracking-wider block bg-blue-50 py-1 px-2.5 border border-[#3B82F6] rounded self-start w-fit">
                                Điểm chạm: {currentTouchpoint.time}
                              </span>
                              <h5 className="font-extrabold text-[#111827] text-sm">{currentTouchpoint.title}</h5>
                              <p className="text-[11px] text-gray-700 leading-relaxed font-semibold italic">
                                &ldquo;{currentTouchpoint.note}&rdquo;
                              </p>
                              <p className="text-xs text-gray-600 leading-relaxed font-medium">
                                {currentTouchpoint.detail}
                              </p>
                            </div>

                            <div className="mt-4 pt-3 border-t border-gray-200">
                              <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest">Ấn phẩm / Kết quả bàn giao:</p>
                              <p className="text-xs font-black text-[#111827] mt-1">{currentTouchpoint.deliverable}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SUB-TAB 2: DESIGN POSTER & WELCOME KIT */}
                  {p1SubTab === "poster" && (
                    <div className="bg-white border-4 border-[#111827] p-8 rounded-lg space-y-6 h-full flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="border-b-2 border-gray-100 pb-4">
                          <h4 className="text-xl font-extrabold text-[#111827]">Ấn phẩm sáng tạo & Trải nghiệm vật lý</h4>
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Creative Visual Designs & Interactive Kits</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          
                          {/* Left: Facebook Recruitment Poster */}
                          <div className="bg-[#F3F4F6] p-5 rounded-lg border-2 border-[#111827] space-y-4 text-left">
                            <span className="text-xs font-black text-[#3B82F6] uppercase tracking-wider block">1. Poster Tuyển dụng Facebook:</span>
                            
                            <div className="bg-white border-4 border-[#111827] p-5 rounded-md space-y-3 relative overflow-hidden">
                              <span className="absolute top-2 right-2 bg-red-500 text-white font-extrabold text-[8px] py-0.5 px-1.5 uppercase rounded tracking-widest rotate-6">
                                HYBRID CS
                              </span>
                              <div className="text-xs font-black text-gray-400 tracking-widest leading-none">WORKJOY CAREER</div>
                              <h5 className="font-extrabold text-md text-[#111827] tracking-tight mt-1 leading-tight">
                                CHĂM SÓC KHÁCH HÀNG <br /> <span className="text-[#3B82F6] font-black underline">JUNIOR CS</span>
                              </h5>
                              <p className="text-[10px] text-gray-600 font-semibold leading-relaxed">
                                • Địa điểm làm việc: Quận 7, TP. HCM <br />
                                • Thu nhập: 8,000,000 VND + Phụ cấp lớn <br />
                                • Môi trường: Thân thiện, tôn vinh ý kiến cá nhân
                              </p>
                              <div className="bg-[#111827] text-white p-2.5 text-center rounded border border-[#111827] text-[10px] font-extrabold">
                                Đăng ký ngay: nguyettmwj@gmail.com
                              </div>
                            </div>

                            <p className="text-[11px] text-gray-500 font-semibold italic mt-2">
                              👉 Poster được thiết kế bám sát nhận diện trẻ trung, tươi tắn của gam màu xanh sọc đặc thù của thương hiệu WorkJOY.
                            </p>
                          </div>

                          {/* Right: Interactive Welcome Kit customizer */}
                          <div className="bg-white border-4 border-[#111827] p-5 rounded-lg space-y-4">
                            <span className="text-xs font-black text-[#10B981] uppercase tracking-wider block">2. Mô phỏng Welcome Kit cá nhân:</span>
                            
                            <div className="space-y-2">
                              <input 
                                type="text"
                                value={welcomeKitName}
                                onChange={(e) => setWelcomeKitName(e.target.value.toUpperCase())}
                                placeholder="TÊN NHÂN VIÊN MỚI"
                                className="w-full p-2 bg-[#F3F4F6] text-[#111827] border-2 border-[#111827] font-extrabold text-xs rounded focus:outline-none"
                              />
                              <input 
                                type="text"
                                value={welcomeKitDept}
                                onChange={(e) => setWelcomeKitDept(e.target.value.toUpperCase())}
                                placeholder="PHÒNG BAN CHUYÊN MÔN"
                                className="w-full p-2 bg-[#F3F4F6] text-[#111827] border-2 border-[#111827] font-extrabold text-xs rounded focus:outline-none"
                              />
                            </div>

                            <div className="bg-[#F3F4F6] p-4 rounded border-2 border-[#111827] flex flex-col items-center">
                              <div className="w-full aspect-[16/10] bg-[#FFFFFF] border-2 border-[#111827] rounded-lg p-3 flex flex-col justify-between relative overflow-hidden text-left shadow-none">
                                <div className="flex justify-between items-start">
                                  <div className="font-extrabold text-[#111827] text-xs italic">WorkJOY</div>
                                  <span className="bg-[#10B981] text-white text-[8px] font-extrabold leading-none rounded px-1.5 py-0.5">NEW HERO</span>
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                  <span className="text-2xl">👦</span>
                                  <div>
                                    <h5 className="font-extrabold text-[#111827] text-xs leading-none">{welcomeKitName || "NGUYỄN VĂN A"}</h5>
                                    <p className="text-[8px] font-mono text-gray-500 mt-1 uppercase tracking-wider">{welcomeKitDept || "PHÒNG TƯ VẤN"}</p>
                                  </div>
                                </div>
                                <span className="text-[7px] font-mono text-gray-400 mt-2 border-t border-gray-100 pt-1 block">WorkJOY Education | workjoy.com</span>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  )}

                  {/* SUB-TAB 3: EMAILS */}
                  {p1SubTab === "email" && (
                    <div className="bg-white border-4 border-[#111827] p-8 rounded-lg space-y-6 h-full flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="border-b-2 border-gray-100 pb-4">
                          <h4 className="text-xl font-extrabold text-[#111827]">Thư điện tử & Văn bản mẫu chuẩn chỉnh</h4>
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Polished HR & IC Email Communications</p>
                        </div>

                        <div className="space-y-4">
                          
                          {/* Email 1: Rejection Letter */}
                          <div className="border-2 border-[#111827] rounded-lg bg-[#FAF9F6] p-5 space-y-2">
                            <div className="flex justify-between items-center border-b pb-2">
                              <span className="text-xs font-extrabold text-red-600 bg-red-50 py-0.5 px-2.5 rounded border border-red-200">Mẫu Thư cảm ơn & Từ chối Nhân văn (Rejection Email)</span>
                              <span className="text-[10px] font-mono text-gray-400">Tiêu chí: Tôn trọng & Gắn kết</span>
                            </div>
                            <div className="text-xs font-semibold leading-relaxed text-[#111827] space-y-2">
                              <p className="font-bold">Tiêu đề: Cảm ơn bạn đã đồng hành cùng WorkJOY trên hành trình CS tuyển dụng</p>
                              <p>Chào [Tên Ứng Viên],</p>
                              <p>Thay mặt đội ngũ WorkJOY, Nguyệt xin gửi lời cảm ơn sâu sắc nhất vì bạn đã giành thời gian tham gia phỏng vấn vị trí CS vừa qua. Dù bộ hồ sơ lần này chưa hoàn toàn tương thích tối đa với tiêu chí định hướng ngắn hạn hiện tại của WJ, chúng mình vô cùng trân trọng nhiệt huyết và hồ sơ chỉnh chu của bạn.</p>
                              <p>Cơ hội luôn rộng mở, chúng mình xin phép lưu lại thông tin của bạn để chủ động kết nối lại khi có dự án mới tương thích hơn. Chúc bạn luôn giữ vững ngọn lửa nghề và gặp nhiều may mắn.</p>
                              <p className="font-bold">Thân ái, Nguyệt từ WorkJOY HR & IC Team!</p>
                            </div>
                          </div>

                          {/* Email 2: Welcome Preboarding */}
                          <div className="border-2 border-[#111827] rounded-lg bg-[#FAF9F6] p-5 space-y-2">
                            <div className="flex justify-between items-center border-b pb-2">
                              <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 py-0.5 px-2.5 rounded border border-emerald-200">Pre-boarding Welcome Mail (Gửi trước 3 ngày nhận việc)</span>
                              <span className="text-[10px] font-mono text-gray-400">Tiêu chí: Ấm áp & Hướng dẫn</span>
                            </div>
                            <div className="text-xs font-semibold leading-relaxed text-[#111827] space-y-2">
                              <p className="font-bold">Tiêu đề: Chào mừng bạn gia nhập hành trình trải nghiệm tại ngôi nhà WorkJOY!</p>
                              <p>Chào [Tên Nhân Viên Mới],</p>
                              <p>WorkJOY đang vô cùng háo hức chờ đón sự hiện diện của bạn vào ngày [Ngày bắt đầu] sắp tới!</p>
                              <p>Để chuẩn bị hoàn hảo nhất, bạn hãy ghi nhớ lịch trình Day One sau: <strong>Check-in lúc 09:00 sáng</strong> tại bàn Lễ tân, nhận Welcome Kit và gặp anh [Tên Buddy] - Buddy đồng hành tận tụy sẽ định hướng phần mềm Lark, phòng họp, teabreak cho bạn cả tuần nhé!</p>
                              <p className="font-bold">See you soon! Chúc bạn có một hành trình đầy ắp niềm vui!</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </motion.div>
            )}

            {/* ====== PROJECT 2 CONTENT TAB ====== */}
            {selectedProjectTab === "project_02" && (
              <motion.div
                key="project_status_02"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 250 / 1000 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
              >
                {/* Left overview column */}
                <div className="lg:col-span-4 bg-white border-4 border-[#111827] p-6 rounded-lg space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest bg-[#10B981] text-white py-1 px-3 rounded">
                        Sự kiện Workshop nội bộ
                      </span>
                      <h3 className="text-2xl font-extrabold text-[#111827] mt-3">Workshop: Quản lý thời gian & Năng lượng</h3>
                      <p className="text-xs text-[#10B981] font-semibold uppercase tracking-wider mt-1">Thông điệp: &ldquo;Hết ngày, không hết sức!&rdquo;</p>
                    </div>
                    
                    <div className="p-4 bg-emerald-50 border-2 border-[#10B981] rounded text-xs text-emerald-900 leading-relaxed space-y-2 font-medium">
                      <p><strong>Bối cảnh:</strong> Nhân viên làm việc cường độ cao dễ bị kiệt quệ năng lượng (burnout) dẫn đến giảm tinh thần gắn kết.</p>
                      <p><strong>Giải pháp:</strong> Tổ chức một buổi chia sẻ thực chiến, tự làm bài mini-test, giúp mọi người học cách sạc pin cơ thể chủ động.</p>
                    </div>

                    {/* Sub-tab Selectors */}
                    <div className="space-y-1 pt-2">
                      <span className="text-xs font-extrabold text-[#111827] uppercase tracking-wider block mb-2">Xem tài liệu chi tiết:</span>
                      {[
                        { id: "proposal", label: "📁 Kế hoạch & Ngân sách (Proposal)", icon: "📋" },
                        { id: "poster", label: "🎨 Ấn phẩm Poster truyền thông", icon: "🖼️" },
                        { id: "email", label: "✉️ Email & Bài post truyền thông", icon: "📨" }
                      ].map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => setP2SubTab(sub.id as any)}
                          className={`w-full flex items-center gap-2 p-3 text-xs text-left font-extrabold rounded-md border-2 transition-all ${
                            p2SubTab === sub.id
                              ? "bg-[#111827] text-white border-[#111827] translate-x-1"
                              : "bg-[#F3F4F6] text-[#111827] border-transparent hover:border-gray-300"
                          }`}
                        >
                          <span>{sub.icon}</span>
                          <span>{sub.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 space-y-3">
                    <p className="text-xs text-gray-500 font-semibold italic">
                      Sản phẩm được xây dựng tinh giản, tiết kiệm chi phí tối đa cho công ty.
                    </p>
                    <a
                      href="https://byvn.net/c8Ul"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-white hover:bg-gray-100 text-[#111827] font-extrabold text-xs uppercase tracking-wider rounded border-2 border-[#111827] hover:scale-[1.02] active:scale-95 transition-all duration-200"
                    >
                      <Bookmark className="w-4 h-4 text-[#10B981]" />
                      <span>Xem đề án trên Notion</span>
                    </a>
                  </div>
                </div>

                {/* Right Interactive Area */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  
                  {/* SUB-TAB 1: PROPOSAL */}
                  {p2SubTab === "proposal" && (
                    <div className="bg-white border-4 border-[#111827] p-8 rounded-lg space-y-6 h-full flex flex-col justify-between">
                      <div className="space-y-6">
                        <div className="border-b-2 border-gray-100 pb-4">
                          <h4 className="text-xl font-extrabold text-[#111827]">Tổng quan Kế hoạch Sự kiện & Ngân sách</h4>
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Workshop Planning & Allocation 2026</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          
                          {/* Agenda Box */}
                          <div className="bg-[#F3F4F6] p-5 rounded-lg border-2 border-[#111827] space-y-3">
                            <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#3B82F6] bg-blue-50 py-1 px-3 border border-[#3B82F6] rounded">
                              LỊCH TRÌNH CHƯƠNG TRÌNH (AGENDAS)
                            </span>
                            <ul className="text-[11px] text-[#111827] space-y-2.5 font-bold">
                              <li>• 14:00 - 14:15: Check-in, Ice-breaking gắn kết</li>
                              <li>• 14:15 - 14:45: Diễn thuyết về Quản lý thời gian thực tế</li>
                              <li>• 14:45 - 15:15: Thực hành trắc nghiệm trắc ẩn Năng lượng</li>
                              <li>• 15:15 - 15:30: Teabreak bánh mứt sạc năng lượng</li>
                              <li>• 15:30 - 16:15: Thảo luận nhóm giải quyết tình huống giả định</li>
                              <li>• 16:15 - 16:30: Đo lường chất lượng & Chụp hình Check-in</li>
                            </ul>
                          </div>

                          {/* Budget Box */}
                          <div className="bg-[#F3F4F6] p-5 rounded-lg border-2 border-[#111827] space-y-3">
                            <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#10B981] bg-emerald-50 py-1 px-3 border border-[#10B981] rounded">
                              PHÂN BỔ NGÂN SÁCH (TỔNG: 5.500.000đ)
                            </span>
                            <div className="space-y-2 text-[11px] font-bold">
                              <div className="flex justify-between border-b pb-1">
                                <span>1. Teabreak (bánh mứt sạc năng lượng)</span>
                                <span>1.800.000đ</span>
                              </div>
                              <div className="flex justify-between border-b pb-1">
                                <span>2. Địa điểm & Setup nước uống</span>
                                <span>1.500.000đ</span>
                              </div>
                              <div className="flex justify-between border-b pb-1">
                                <span>3. Cát-xê Diễn giả (Speaker)</span>
                                <span>700.000đ</span>
                              </div>
                              <div className="flex justify-between border-b pb-1">
                                <span>4. Ấn phẩm quà tặng nhỏ</span>
                                <span>500.000đ</span>
                              </div>
                              <div className="flex justify-between border-b pb-1">
                                <span>5. Tài liệu thảo luận & In ấn</span>
                                <span>500.000đ</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">6. Quỹ dự phòng sự cố (10%)</span>
                                <span>500.000đ</span>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  )}

                  {/* SUB-TAB 2: POSTER */}
                  {p2SubTab === "poster" && (
                    <div className="bg-white border-4 border-[#111827] p-8 rounded-lg space-y-6 h-full flex flex-col justify-between">
                      <div className="space-y-6">
                        <div className="border-b-2 border-gray-100 pb-4">
                          <h4 className="text-xl font-extrabold text-[#111827]">Poster Truyền thông & Khảo sát Chất lượng</h4>
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Creative Posters & Satisfaction Feedback Surveys</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                          
                          {/* Visual Flat Invitation Poster card */}
                          <div className="bg-[#111827] text-white p-5 rounded-lg border-4 border-[#111827] space-y-4 text-center relative overflow-hidden">
                            <span className="absolute top-2 -right-12 bg-[#F59E0B] text-[#111827] font-black text-[9px] py-1 px-10 uppercase tracking-widest rotate-45">
                              JOIN NOW
                            </span>
                            <div className="text-xs font-black text-[#10B981] uppercase tracking-wider">WORKJOY WORKSHOP CHIA SẺ</div>
                            <h5 className="text-[#F59E0B] text-xl font-black leading-tight tracking-tight">
                              HẾT NGÀY... <br /> KHÔNG HẾT SỨC!
                            </h5>
                            <hr className="border-white/10" />
                            <div className="text-[10px] space-y-1 text-gray-300 font-medium text-left">
                              <p>📌 <strong>Speaker:</strong> Ms. Yến Nhi (Consulting Manager)</p>
                              <p>⏰ <strong>Thời gian:</strong> 14:00 - 16:30 | 05 / 07 / 2026</p>
                              <p>📍 <strong>Địa điểm:</strong> Góc chia sẻ lầu 2 - Coffee Shop Q1</p>
                              <p>🎁 <strong>Teabreak:</strong> Thưởng thức bánh cookie cực ngon</p>
                            </div>
                            <div className="bg-white text-[#111827] py-2 px-3 text-xs font-black rounded border-2 border-white">
                              Đăng ký trước hạn: 03/07/2026
                            </div>
                          </div>

                          {/* Mini Survey satisfaction form sandbox */}
                          <div className="bg-[#F3F4F6] p-4 rounded-lg border-2 border-[#111827] space-y-3 text-left">
                            <span className="text-xs font-black text-[#10B981] uppercase tracking-wider block">Trải nghiệm Khảo sát sau Sự kiện:</span>
                            
                            {!surveySubmitted ? (
                              <div className="space-y-2">
                                <label className="block text-[11px] font-bold text-gray-700">Hãy chấm điểm tổng quát chất lượng buổi học hôm nay:</label>
                                <div className="flex gap-1.5 justify-center py-2 bg-white rounded border">
                                  {[1, 2, 3, 4, 5].map((starValue) => (
                                    <button
                                      key={starValue}
                                      onClick={() => handleRateSurvey(4, starValue)}
                                      className={`h-8 w-8 rounded flex items-center justify-center font-extrabold ${
                                        surveyRatings[4] >= starValue ? 'text-[#F59E0B]' : 'text-gray-300'
                                      }`}
                                    >
                                      ★
                                    </button>
                                  ))}
                                </div>
                                <button
                                  onClick={() => setSurveySubmitted(true)}
                                  className="w-full py-2 bg-[#10B981] text-white font-extrabold text-xs rounded border border-[#111827]"
                                >
                                  Gửi đánh giá
                                </button>
                              </div>
                            ) : (
                              <div className="bg-white p-3 rounded text-center border">
                                <p className="text-xs font-extrabold text-emerald-800">✓ Đã gửi phản hồi thành công!</p>
                                <button onClick={() => setSurveySubmitted(false)} className="text-[10px] text-gray-400 underline mt-2 block mx-auto">Chấm lại</button>
                              </div>
                            )}
                          </div>

                        </div>
                      </div>
                    </div>
                  )}

                  {/* SUB-TAB 3: EMAIL */}
                  {p2SubTab === "email" && (
                    <div className="bg-white border-4 border-[#111827] p-8 rounded-lg space-y-6 h-full flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="border-b-2 border-gray-100 pb-4">
                          <h4 className="text-xl font-extrabold text-[#111827]">Email Thư Mời & Bài Đăng Group Nội Bộ</h4>
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Invitation Emails & Internal Community Posts</p>
                        </div>

                        <div className="space-y-4">
                          
                          {/* Email: invitation */}
                          <div className="border-2 border-[#111827] rounded-lg bg-[#FAF9F6] p-5 space-y-2">
                            <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 py-0.5 px-2.5 rounded border border-emerald-200 block w-fit">Email Thư mời Đăng ký (Gửi toàn bộ nhân viên)</span>
                            <div className="text-xs font-semibold leading-relaxed text-[#111827] space-y-2">
                              <p className="font-bold">Tiêu đề: [WorkJOY Workshop] Gác âu lo - Cân năng lượng trong &ldquo;Hết ngày không hết sức!&rdquo;</p>
                              <p>Chào gia đình WorkJOY,</p>
                              <p>Một ngày 8 tiếng đi làm của bạn đang trôi qua như thế nào? Có bao giờ bạn thấy mình cạn kiệt pin năng lượng ngay từ lúc 3 giờ chiều dù việc vẫn còn chất đống?</p>
                              <p>Hiểu điều đó, Nguyệt cùng Ban nhân sự thân mời bạn tham dự buổi Workshop đặc quyền số này: <strong>&ldquo;Hết ngày, không hết sức&rdquo;</strong> diễn ra vào 14:00 Thứ Bảy 05/07 tới. Chúng mình sẽ cùng nhau làm bài trắc nghiệm nhanh năng lượng, nhâm nhi quầy bánh ngọt chất lượng và tích lũy bộ bí kíp sắp xếp thời lượng vàng từ Ms. Yến Nhi tư vấn ngọt ngào!</p>
                              <p>Số lượng có hạn chỉ 30 chỗ ngồi, nhanh tay đăng ký vị trí ngồi bên dứoi nha.</p>
                            </div>
                          </div>

                          {/* Post: internal group recap */}
                          <div className="border-2 border-[#111827] rounded-lg bg-[#E0F2FE] p-5 space-y-2">
                            <span className="text-xs font-extrabold text-blue-600 bg-blue-50 py-0.5 px-2.5 rounded border border-blue-200 block w-fit">Bài đăng Recap Sự kiện (Đăng group nội bộ)</span>
                            <div className="text-xs font-semibold leading-relaxed text-[#111827] space-y-2">
                              <p className="font-bold">Hashtag: #WorkJOY_Connect #Hetngaykhonghetsuc #Recap_Workshop</p>
                              <p>📸 <strong>RECAP WORKSHOP: KHI NĂNG LƯỢNG ĐƯỢC THẮP SÁNG!</strong> 📸</p>
                              <p>Thứ Bảy vừa qua, góc cà phê nhỏ của lầu 2 đã bùng nổ trong những tràng cười sảng khoái và vô vàn giá trị ngẫm từ buổi học &ldquo;Hết ngày không hết sức&rdquo;. Hơn 30 con người WJ đã tìm thấy gốc rễ của những mệt mỏi tinh thần, học cách khoanh vùng thứ tự ưu tiên, và cam kết rèn luyện 15 phút sạc pin giữa giờ cực hữu dụng!</p>
                              <p>Cảm ơn chị Yến Nhi nhiệt tình cùng những ý tưởng thảo luận năng nổ từ các đội nhóm nha. Hẹn gặp lại cả nhà mình ở sự kiện bùng nổ tiếp theo!</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </motion.div>
            )}

            {/* ====== PROJECT 3 CONTENT TAB ====== */}
            {selectedProjectTab === "project_03" && (
              <motion.div
                key="project_status_03"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 250 / 1000 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
              >
                {/* Left overview column */}
                <div className="lg:col-span-4 bg-white border-4 border-[#111827] p-6 rounded-lg space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest bg-[#F59E0B] text-[#111827] py-1 px-3 rounded">
                        Bản tin nội bộ Newsletter
                      </span>
                      <h3 className="text-2xl font-extrabold text-[#111827] mt-3">WorkJOY Monthly Newsletter</h3>
                      <p className="text-xs text-[#F59E0B] font-semibold uppercase tracking-wider mt-1">Kênh xâu chuỗi và truyền cảm hứng định kỳ</p>
                    </div>
                    
                    <div className="p-4 bg-amber-50 border-2 border-[#F59E0B] rounded text-xs text-amber-900 leading-relaxed space-y-2 font-medium">
                      <p><strong>Bối cảnh:</strong> Nhân sự làm việc độc lập dễ sinh cảm giác xa cách, không nắm rõ tình hình phát triển đột phá chung của công ty.</p>
                      <p><strong>Giải pháp:</strong> Bản tin số 025 (Tháng 7) kết nối thông tin toàn diện: vinh danh sinh nhật đồng nghiệp, recap workshop và hé lộ kế hoạch lớn trong Quý III.</p>
                    </div>

                    {/* Sub-tab Selectors */}
                    <div className="space-y-1 pt-2">
                      <span className="text-xs font-extrabold text-[#111827] uppercase tracking-wider block mb-2">Xem tài liệu chi tiết:</span>
                      {[
                        { id: "proposal", label: "📁 Đề án phát hành (Proposal)", icon: "📋" },
                        { id: "poster", label: "🎨 Bản thiết kế chi tiết Newsletter", icon: "🖼️" },
                        { id: "email", label: "✉️ Email phát hành bản tin", icon: "📨" }
                      ].map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => setP3SubTab(sub.id as any)}
                          className={`w-full flex items-center gap-2 p-3 text-xs text-left font-extrabold rounded-md border-2 transition-all ${
                            p3SubTab === sub.id
                              ? "bg-[#111827] text-white border-[#111827] translate-x-1"
                              : "bg-[#F3F4F6] text-[#111827] border-transparent hover:border-gray-300"
                          }`}
                        >
                          <span>{sub.icon}</span>
                          <span>{sub.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 space-y-3">
                    <p className="text-xs text-gray-500 font-semibold italic">
                      Công cụ truyền dẫn tình yêu thương và nụ cười công sở hằng tháng.
                    </p>
                    <a
                      href="https://byvn.net/c8Ul"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-white hover:bg-gray-100 text-[#111827] font-extrabold text-xs uppercase tracking-wider rounded border-2 border-[#111827] hover:scale-[1.02] active:scale-95 transition-all duration-200"
                    >
                      <Bookmark className="w-4 h-4 text-[#F59E0B]" />
                      <span>Xem đề án trên Notion</span>
                    </a>
                  </div>
                </div>

                {/* Right Interactive Area */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  
                  {/* SUB-TAB 1: PROPOSAL */}
                  {p3SubTab === "proposal" && (
                    <div className="bg-white border-4 border-[#111827] p-8 rounded-lg space-y-6 h-full flex flex-col justify-between">
                      <div className="space-y-6">
                        <div className="border-b-2 border-gray-100 pb-4">
                          <h4 className="text-xl font-extrabold text-[#111827]">Đề án Biên tập & Định hướng Nội dung</h4>
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Newsletter Editorial & Publishing Strategy 2026</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          
                          {/* Pillars */}
                          <div className="bg-[#F3F4F6] p-5 rounded-lg border-2 border-[#111827] space-y-3">
                            <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#3B82F6] bg-blue-50 py-1 px-3 border border-[#3B82F6] rounded">
                              4 TRỤ CỘT NỘI DUNG CỐT LÕI (PILLARS)
                            </span>
                            <ul className="text-[11px] text-[#111827] space-y-2.5 font-bold leading-relaxed">
                              <li>• <strong>What&apos;s Next In Q3:</strong> Kế hoạch hành hợp tác chiến lược, lớp đào tạo thương lượng trong Quý.</li>
                              <li>• <strong>Let&apos;s Joy Together:</strong> Tổng thuật đầy ắp hình ảnh nụ cười dễ thương từ workshop năng lượng.</li>
                              <li>• <strong>Birthday Corner:</strong> Tri ân sinh nhật rạng rỡ của chuyên viên Thảo Nhi tư vấn.</li>
                              <li>• <strong>New Member Spotlight:</strong> Giới thiệu, tạo cầu nối cho ứng viên tuyển dụng mới.</li>
                            </ul>
                          </div>

                          {/* Distribution */}
                          <div className="bg-[#F3F4F6] p-5 rounded-lg border-2 border-[#111827] space-y-3">
                            <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#10B981] bg-emerald-50 py-1 px-3 border border-[#10B981] rounded">
                              QUY TRÌNH PHÁT HÀNH ĐỊNH KỲ
                            </span>
                            <div className="space-y-2 text-[11px] font-bold leading-relaxed">
                              <p>🗓️ <strong>Tần suất:</strong> Thứ năm cuối cùng của mỗi tháng.</p>
                              <p>🛰️ <strong>Kênh phân phối:</strong> Email Marketing tự động hàng loạt bằng Mailchimp kết hợp ghim link đọc PDF trực tuyến sắc nét lên thanh tin tức ghim của Lark Suite.</p>
                              <p>🎯 <strong>Mục tiêu tương tác:</strong> Tỉ lệ mở thư (Open rate) đạt &gt; 85%, thời lượng đọc trung bình đạt &gt; 5 phút.</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  )}

                  {/* SUB-TAB 2: POSTER */}
                  {p3SubTab === "poster" && (
                    <div className="bg-white border-4 border-[#111827] p-8 rounded-lg space-y-6 h-full flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="border-b-2 border-gray-100 pb-4">
                          <h4 className="text-xl font-extrabold text-[#111827]">Giao diện Mô phỏng Bản tin Tháng 7/2026</h4>
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Monthly Newsletter Layout Visualization</p>
                        </div>

                        {/* Beautifully simulated newsletter cover page inline */}
                        <div className="border-4 border-[#111827] p-6 rounded-lg bg-[#FAF9F6] text-[#111827] space-y-6 text-left relative">
                          <div className="flex justify-between items-end border-b-2 border-[#111827] pb-3">
                            <div>
                              <h5 className="font-black text-2xl tracking-tighter leading-none">WORKJOY NEWSLETTER</h5>
                              <p className="text-[8px] tracking-widest text-[#F59E0B] font-bold uppercase mt-1">BẢN TIN NỘI BỘ SỐ 025 • THÁNG 07, 2026</p>
                            </div>
                            <span className="text-[10px] font-black text-blue-600 bg-blue-50 py-0.5 px-2 border border-blue-200 uppercase rounded">Đặc san số hè</span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            
                            <div className="bg-white p-4 border border-[#111827] rounded space-y-2">
                              <span className="text-[8px] font-bold bg-[#E0F2FE] text-blue-600 py-0.5 px-1.5 rounded w-fit block uppercase font-sans">LET&apos;S JOY TOGETHER</span>
                              <h6 className="font-extrabold text-xs">Góc thấu cảm: Recap Sạc pin giữa giờ</h6>
                              <p className="text-[10px] text-gray-600 leading-relaxed font-semibold">
                                Buổi học chia sẻ &ldquo;Hết ngày không hết sức&rdquo; cùng chị Yến Nhi đạt phản hồi KPI xuất sắc, hứa hẹn mở đầu nhiều hoạt động rèn luyện tuyệt vời.
                              </p>
                            </div>

                            <div className="bg-white p-4 border border-[#111827] rounded space-y-2">
                              <span className="text-[8px] font-bold bg-[#FEF3C7] text-amber-600 py-0.5 px-1.5 rounded w-fit block uppercase font-sans">BIRTHDAY CORNER</span>
                              <h6 className="font-extrabold text-xs">Tri ân: Sinh nhật rạng ngời Thảo Nhi</h6>
                              <p className="text-[10px] text-gray-600 leading-relaxed font-semibold">
                                Chúc mừng tuổi mới rạng rỡ của chuyên viên Thảo Nhi phòng Tư vấn! Hết mình hỗ trợ hành trình học tập vui vẻ cho học viên.
                              </p>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SUB-TAB 3: EMAIL */}
                  {p3SubTab === "email" && (
                    <div className="bg-white border-4 border-[#111827] p-8 rounded-lg space-y-6 h-full flex flex-col justify-between animate-fadeIn">
                      <div className="space-y-4">
                        <div className="border-b-2 border-gray-100 pb-4">
                          <h4 className="text-xl font-extrabold text-[#111827]">Email Launch Bản tin nội bộ</h4>
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Publisher & Launch Email Templates</p>
                        </div>

                        {/* Email box */}
                        <div className="border-2 border-[#111827] rounded-lg bg-[#FAF9F6] p-5 space-y-2">
                          <span className="text-xs font-bold text-[#F59E0B] bg-amber-50 py-0.5 px-2.5 rounded border border-amber-200 block w-fit font-sans">Email Gửi toàn hệ thống (Chạy tự động)</span>
                          <div className="text-xs font-semibold leading-relaxed text-[#111827] space-y-2 font-mono">
                            <p className="font-bold text-blue-600">Tiêu đề: [WorkJOY Newsletter] Có gì trong Bản tin đặc biệt Số 025 (Tháng 7) chờ bạn khám phá?</p>
                            <p className="border-t pt-2 mt-2">Chào cả nhà yêu quý tại gia đình WorkJOY,</p>
                            <p>Tiếng chuông báo hiệu ngày làm việc cuối tháng đã ngân vang, cũng là thời điểm đặc san Bản tin nội bộ Số 025 – &ldquo;Bạn Có Biết?&rdquo; chính thức lên sóng phục vụ mọi người!</p>
                            <p>Rót đầy một ly trà thảo mộc mát rượi và nhấp nút mở bài để cùng Nguyệt điểm lại:</p>
                            <p>🔍 <strong>Top tin nổi bật nhất:</strong><br />
                            • Điểm cười rạng ngời chụp chung check-in trong Workshop Năng lượng tuần qua.<br />
                            • Những món quà sinh nhật tuổi mới dễ thương trao gửi Thảo Nhi phòng Tư Vấn.<br />
                            • Hé lộ chuỗi thử thách gắn kết bất ngờ trong tháng 8 tiếp theo.</p>
                            <p className="font-bold mt-3 text-emerald-600">👉 Hãy nhấp vào link đọc Lark trực tuyến để thưởng thức ngay tác phẩm nha!</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  )}

                </div>
              </motion.div>
            )}

          </AnimatePresence>

        </div>
      </section>

      {/* 6. EXPERIENCES & CERTIFICATIONS SECTION (#achievements) - SOLID ALTERNATING WHITE BASE */}
      <section id="achievements" className="py-24 px-6 md:px-12 bg-white border-b-8 border-[#111827]">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111827]">
              KINH NGHIỆM LÀM VIỆC
            </h2>
            <div className="h-3 w-40 bg-[#3B82F6] border-2 border-[#111827] rounded-md mt-4 mx-auto md:mx-0"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Work History Stack - 3 major parts */}
            <div className="lg:col-span-12 space-y-8">
              {[
                {
                  company: "Legatek Company Limited",
                  role: "Nhân viên Sale admin",
                  time: "11/2025 - 05/2026",
                  color: "border-[#3B82F6]",
                  accent: "bg-[#3B82F6]",
                  tasks: [
                    "Soạn thảo và rà soát mọi hợp đồng dịch vụ, biên bản báo giá và chuẩn bị các hồ sơ sản phẩm gửi đến đối tác chiến lược.",
                    "Tổng hợp đầy đủ số liệu, thiết kế biểu đồ cập nhật báo cáo hoạt động kinh doanh hàng tuần gửi Ban giám đốc.",
                    "Tích cực viết nội dung đa kênh, thiết kế ấn phẩm hình ảnh và video ngắn hỗ trợ đắc lực chương trình hoạt động nội bộ công ty."
                  ]
                },
                {
                  company: "ALTISSS Technology Joint Stock Company",
                  role: "Nhân viên hỗ trợ khách hàng (Customer Support)",
                  time: "01/2025 - 09/2025",
                  color: "border-[#10B981]",
                  accent: "bg-[#10B981]",
                  tasks: [
                    "Trực tiếp triển khai, cung cấp tài liệu hướng dẫn và chuyển giao sử dụng giải pháp phần mềm tới người dùng cuối.",
                    "Lắng nghe, tiếp nhận và định tuyến xử lý các sự cố nội bộ liên phòng ban, đảm bảo thời hạn dứt điểm tối ưu (SLA).",
                    "Thực thi công tác soạn văn bản, hồ sơ hành chính kết hợp điều phối hậu cần tổ chức các cuộc họp & liên hoan nội bộ."
                  ]
                },
                {
                  company: "Mentor Mentee Channel (Tổ chức Phi lợi nhuận)",
                  role: "Cộng tác viên - Trưởng nhóm Sự kiện & Đào tạo",
                  time: "12/2023 - Hiện tại",
                  color: "border-[#F59E0B]",
                  accent: "bg-[#F59E0B]",
                  tasks: [
                    "Lên chiến lược tổng tuyển dụng, xây dựng kịch bản chương trình đào tạo nội bộ và chuỗi điểm chạm liên kết tinh thần thành viên.",
                    "Chủ trì thực thi dự án nghiên cứu thói quen người dùng, chịu trách nhiệm thu thập và xử lý mẫu dữ liệu với trên 200 đáp viên.",
                    "Xây dựng nhận diện hình ảnh, sản xuất ấn phẩm đa định dạng và phân phối các tin tức tuyển sinh hữu hiệu."
                  ]
                }
              ].map((exp, id) => (
                <div key={id} className={`bg-[#F3F4F6] border-l-8 ${exp.color} border-t-2 border-r-2 border-b-2 border-gray-200 rounded-lg p-6 md:p-8 space-y-4`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-gray-200/50 pb-3">
                    <div>
                      <h4 className="font-extrabold text-lg text-[#111827]">{exp.company}</h4>
                      <p className="text-xs font-bold text-[#3B82F6] uppercase tracking-wider mt-0.5">{exp.role}</p>
                    </div>
                    <span className="text-xs font-mono font-extrabold bg-[#111827] text-white py-1 px-3 rounded self-start sm:self-center">
                      {exp.time}
                    </span>
                  </div>

                  <ul className="space-y-2 text-sm text-gray-700 font-medium">
                    {exp.tasks.map((t, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-[#10B981] stroke-[2.5] flex-shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 7. CONTACT & AI CHATBOX AREA (#contact) - VIBRANT BOLD AMBER THEME */}
      <section id="contact" className="py-24 px-6 md:px-12 bg-[#F59E0B] border-b-8 border-[#111827] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left contact card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <span className="text-xs font-extrabold tracking-widest text-[#111827] bg-[#FFFFFF] py-1.5 px-3 border-2 border-[#111827] rounded uppercase">
                THÔNG TIN LIÊN HỆ
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#111827] tracking-tight leading-none">
                KẾT NỐI VỚI <br /> MINH NGUYỆT!
              </h2>
              <p className="text-[#111827] text-sm font-semibold leading-relaxed max-w-md">
                Rất mong có cơ hội được trò chuyện, học hỏi định hướng và đồng hành cùng Quý công ty trên hành trình sắp tới
              </p>
            </div>

            <div className="space-y-3">
              <a 
                href="mailto:nguyettm19406@gmail.com" 
                className="flex items-center gap-3 bg-white p-4 rounded-md border-2 border-[#111827] text-[#111827] hover:scale-105 active:scale-95 transition-all text-sm font-bold"
              >
                <Mail className="w-5 h-5 text-[#3B82F6]" />
                <span className="font-mono">nguyettm19406@gmail.com</span>
              </a>
              
              <a 
                href="tel:+84845756499" 
                className="flex items-center gap-3 bg-white p-4 rounded-md border-2 border-[#111827] text-[#111827] hover:scale-105 active:scale-95 transition-all text-sm font-bold"
              >
                <Phone className="w-5 h-5 text-[#10B981]" />
                <span className="font-mono">+84 845756499</span>
              </a>
              
              <div className="flex items-center gap-3 bg-white p-4 rounded-md border-2 border-[#111827] text-[#111827] text-sm font-bold">
                <MapPin className="w-5 h-5 text-[#F59E0B]" />
                <span>Quận 4, Thành phố Hồ Chí Minh, Việt Nam</span>
              </div>
            </div>
          </div>

          {/* Right combined contact simulated card */}
          <div className="lg:col-span-7 flex items-center justify-center">
            <div className="w-full bg-white border-4 border-[#111827] p-8 md:p-12 rounded-lg text-[#111827] flex flex-col justify-center items-center text-center space-y-6">
              <div className="h-16 w-16 rounded-full bg-[#E0F2FE] border-2 border-[#111827] flex items-center justify-center text-3xl">
                ✉️
              </div>
              <p className="text-md sm:text-lg font-extrabold leading-relaxed text-[#111827] py-2 max-w-lg">
                &ldquo;Cảm ơn anh/ chị đã ghé thăm portfolio của em. Rất mong nhận được đóng góp ý kiến từ anh/chị ạ.&rdquo;
              </p>
              <div className="h-1.5 w-24 bg-[#3B82F6] border border-[#111827] rounded-full"></div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. FOOTER - SOLID DARK GRAY THEME */}
      <footer className="bg-[#111827] text-white py-12 px-6 md:px-12 border-t-8 border-[#3B82F6]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-2">
            <h4 className="font-black text-xl tracking-tight">TRẦN MINH NGUYỆT</h4>
            <p className="text-xs text-gray-400 font-medium">© 2026 Trần Minh Nguyệt. Thiết kế bằng Ngôn ngữ Flat Design - Bảng màu tự do & tự tin.</p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => handleScrollTo("hero")}
              className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-bold rounded flex items-center gap-1 transition-colors"
            >
              <span>Về đầu trang</span>
              <span>↑</span>
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}

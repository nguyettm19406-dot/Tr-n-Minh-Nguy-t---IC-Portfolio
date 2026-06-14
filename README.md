# Trần Minh Nguyệt - Internal Communications Specialist Portfolio

Dự án giới thiệu hồ sơ năng lực cá nhân viết bằng **Next.js 15 (App Router)** và **TypeScript**, phối hợp ngôn ngữ thiết kế **Flat Design** hiện đại, trực quan và ấn tượng. Dự án tích hợp công cụ Trợ lý ảo AI đàm thoại thời gian thực bằng mô hình **Gemini 3.5 Flash** server-side proxy thông qua SDK hỗ trợ chính thống `@google/genai`.

---

## 📂 Sơ đồ cấu trúc cây thư mục (Project Tree)

```text
├── app/
│   ├── api/
│   │   └── gemini/
│   │       └── chat/
│   │           └── route.ts       # Endpoint proxy gọi mô hình Gemini 3.5 Flash server-side
│   ├── globals.css                # Tệp CSS cấu hình Tailwind v4 dạng chuẩn
│   ├── layout.tsx                 # Layout hệ thống chứa cấu hình Fonts & Metadata
│   └── page.tsx                   # Trang chính xử lý điều hướng Hash URL & tương tác Portfolio
├── hooks/
│   └── use-mobile.ts              # Hook kiểm thử kích hoạt giao diện Responsive mobile
├── lib/
│   └── utils.ts                   # Công cụ gộp class của Tailwind (cn)
├── metadata.json                  # Siêu dữ liệu cấu hình ứng dụng trong AI Studio
├── next.config.ts                 # Cấu hình Next.js (bỏ qua bẫy HMR & stand-alone)
├── package.json                   # Mô tả các gói thư viện cài đặt và lệnh chạy chính
├── postcss.config.mjs             # Tệp cấu hình phân vĩ bộ vi xử lý PostCSS cho Tailwind v4
└── tsconfig.json                  # Cấu hình kiểm lỗi và biên dịch nghiêm ngặt của TypeScript
```

---

## 🛠️ Hướng dẫn cài đặt và khởi chạy ở môi trường Local

Thực hiện các bước sau để sao chép dự án và vận hành ở máy tính cá nhân của bạn:

### Bước 1: Chuẩn bị môi trường
Hãy đảm bảo máy tính của bạn đã được cài đặt **Node.js (phiên bản v18 trở lên)** và **npm** hoặc **yarn/pnpm**.

### Bước 2: Cài đặt các gói phụ thuộc (Dependencies)
Truy cập vào thư mục chứa mã nguồn dự án qua cửa sổ dòng lệnh (Terminal) và chạy:

```bash
npm install
```

Hoặc sử dụng yarn:
```bash
yarn install
```

### Bước 3: Thiết lập các biến môi trường (Environment Variables)
Sao chép tập tin mẫu `.env.example` thành `.env`:

```bash
cp .env.example .env
```

Mở tập tin `.env` và điền khóa bí mật của bạn:
```env
GEMINI_API_KEY="KHÓA_BÍ_MẬT_GEMINI_CỦA_BẠN_Ở_GOOGLE_AI_STUDIO"
APP_URL="http://localhost:3000"
```

### Bước 4: Khởi chạy dự án ở chế độ Phát triển (Development Mode)
Vận hành máy chủ thử nghiệm trên cổng 3000 bằng câu lệnh:

```bash
npm run dev
```

Mở trình duyệt và truy cập: `http://localhost:3000` để trải nghiệm trực quan.

### Bước 5: Biên dịch và đóng gói Sản phẩm (Production Build)
Để biên dịch tối ưu hóa và khởi chạy bản phân phối thực tế nâng cao:

```bash
npm run build
npm run start
```

---

## 🎨 Thực thi Ngôn ngữ thiết kế (Flat Design System)

Giao diện trang web tuân thủ chặt chẽ triết lý thiết kế **Flat Design** (Không đổ bóng nhân tạo, cấu trúc mảng màu phẳng tương phản cao):
* **Colors Palette**: Trực tiếp sử dụng bảng màu sáng tương phản cao bao gồm Màu nền trắng tinh khiết (`#FFFFFF`), Văn bản đen xám tro đậm (`#111827`), Màu chủ đạo hành vi xanh lam (`#3B82F6`), Màu phụ trợ xanh ngọc lục bảo (`#10B981`) và Màu nhấn nổi bật hổ phách (`#F59E0B`).
* **Typography**: Tải động bộ Font chữ **Outfit** tinh tế cho toàn bộ giao diện thông qua module tích hợp `next/font/google` và Font chữ đơn không gian **JetBrains Mono** cho các chỉ mục dữ liệu/hành văn mã hóa tạo cảm giác kỷ nguyên số hiện đại.
* **Không chiều sâu nhân tạo**: Tuyệt đối không sử dụng hiệu ứng đổ bóng `box-shadow` hay mờ hậu cảnh `backdrop-filter`. Tất cả các khối thông tin sử dụng kỹ thuật bo góc trung bình (`rounded-lg`) viền mảng dứt khoát làm ranh giới cấu trúc.
* **Phản hồi snappy**: Trải nghiệm rê chuột lướt qua (Hover) được nhấn mạnh bằng hiệu ứng thu phóng lập tức (`hover:scale-105` cho nút bấm, `hover:scale-[1.02]` cho thẻ bài nghệ thuật) mang lại trải nghiệm đầy cuốn hút kỹ thuật số.

---

## 🚀 Trợ lý ảo AI đàm thoại thông minh

Ứng dụng tích hợp một khung Chatbot ẩn/hiện vô cùng trực quan liên kết trực tiếp tới máy chủ thông qua endpoint `/api/gemini/chat`. 
* Trợ lý ảo AI này được cài đặt thông báo hướng dẫn hệ thống (**System Instructions**) cụ thể bằng toàn bộ thông điệp lý lịch CV và 3 tác phẩm dự án WorkJOY sáng tạo của Trần Minh Nguyệt.
* Khách truy cập có thể hỏi đa dạng các chủ đề như: *"Trình độ học vấn của Nguyệt?"*, *"Hãy kể cho tôi về dự án Workshop WorkJOY?"*, hay *"Trợ lý ảo hãy cho biết Nguyệt đã dùng Canva làm gì?"* để nhận về câu trả lời chuẩn chỉ, bồi dưỡng hình ảnh chuyên nghiệp tối ưu nhất.

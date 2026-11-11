<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Portfolios | แฟ้มสะสมผลงาน</title>
    <style>
        /* ==========================================
           CSS STYLES
           ========================================== */
        :root {
            --primary-color: #0077b6;
            --secondary-color: #00b4d8;
            --accent-color: #023e8a;
            --bg-color: #f4f7f6;
            --card-bg: #ffffff;
            --text-color: #333333;
            --text-muted: #666666;
            --shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
            --shadow-hover: 0 8px 25px rgba(0, 0, 0, 0.15);
            --border-radius: 12px;
            --transition: all 0.3s ease;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Sarabun', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            line-height: 1.6;
        }

        header {
            background: linear-gradient(135deg, var(--accent-color), var(--secondary-color));
            color: white;
            text-align: center;
            padding: 50px 20px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        header h1 {
            font-size: 2.5rem;
            font-weight: 700;
            letter-spacing: 1px;
            margin-bottom: 10px;
            text-transform: uppercase;
        }

        header p {
            font-size: 1.1rem;
            opacity: 0.95;
            font-weight: 300;
        }

        .tab-container {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin: 35px 0 20px 0;
            padding: 0 15px;
            flex-wrap: wrap;
        }

        .tab-button {
            padding: 12px 30px;
            font-size: 1.05rem;
            font-weight: 600;
            border: 2px solid transparent;
            border-radius: 30px;
            background-color: #e2e8f0;
            color: var(--text-muted);
            cursor: pointer;
            transition: var(--transition);
            outline: none;
        }

        .tab-button:hover {
            background-color: #cbd5e1;
            color: var(--text-color);
        }

        .tab-button.active {
            background-color: var(--primary-color);
            color: #ffffff;
            box-shadow: 0 4px 12px rgba(0, 119, 182, 0.35);
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px 60px 20px;
        }

        .portfolio-content {
            display: none;
            animation: fadeIn 0.4s ease-in-out;
        }

        .portfolio-content.active {
            display: block;
        }

        .section-title {
            text-align: center;
            margin-bottom: 25px;
            color: var(--accent-color);
            font-size: 1.5rem;
            font-weight: 600;
        }

        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 25px;
        }

        .card {
            background: var(--card-bg);
            border-radius: var(--border-radius);
            overflow: hidden;
            box-shadow: var(--shadow);
            transition: var(--transition);
            border: 1px solid rgba(0,0,0,0.05);
        }

        .card:hover {
            transform: translateY(-6px);
            box-shadow: var(--shadow-hover);
        }

        .card img {
            width: 100%;
            height: auto;
            display: block;
            object-fit: cover;
        }

        .card-body {
            padding: 18px 20px;
            text-align: center;
            background-color: var(--card-bg);
        }

        .card-body h3 {
            color: var(--primary-color);
            font-size: 1.15rem;
            font-weight: 600;
        }

        footer {
            text-align: center;
            padding: 25px;
            background-color: #1e293b;
            color: #94a3b8;
            font-size: 0.95rem;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(12px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @media (max-width: 600px) {
            header h1 {
                font-size: 1.8rem;
            }
            .tab-button {
                width: 100%;
                text-align: center;
            }
            .gallery-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>

    <header>
        <h1>แฟ้มสะสมผลงาน (PORTFOLIO)</h1>
        <p>โรงเรียนทุ่งใหญ่เฉลิมราชอนุสรณ์ รัชมังคลาภิเษก</p>
    </header>

    <div class="tab-container">
        <button class="tab-button active" onclick="switchTab('student1', event)">นางสาวเมธาวินี บำรุงภักดิ์</button>
        <button class="tab-button" onclick="switchTab('student2', event)">นางสาวณฤดี สุขเกษม</button>
    </div>

    <div class="container">
        <!-- Student 1 Portfolio (เมธาวินี) -->
        <div id="student1" class="portfolio-content active">
            <h2 class="section-title">คณะครุศาสตร์ สาขาการศึกษาปฐมวัย[span_8](start_span)[span_8](end_span)[span_9](start_span)[span_9](end_span)</h2>
            <div class="gallery-grid">
                <div class="card">
                    <img src="image_bda2dd.jpg" alt="หน้าปก - เมธาวินี">
                    <div class="card-body"><h3>หน้าปก (Cover)</h3></div>
                </div>
                <div class="card">
                    <img src="image_8f6d66.jpg" alt="ประวัติส่วนตัว - เมธาวินี">
                    <div class="card-body"><h3>ประวัติส่วนตัว (Profile)</h3></div>
                </div>
                <div class="card">
                    <img src="image_da09db.jpg" alt="เหตุผลที่อยากเข้า - เมธาวินี">
                    <div class="card-body"><h3>เหตุผลที่อยากเข้าศึกษา</h3></div>
                </div>
                <div class="card">
                    <img src="image_f6b455.jpg" alt="กิจกรรม - เมธาวินี">
                    <div class="card-body"><h3>กิจกรรมที่ภาคภูมิใจ</h3></div>
                </div>
            </div>
        </div>

        <!-- Student 2 Portfolio (ณฤดี) -->
        <div id="student2" class="portfolio-content">
            <h2 class="section-title">คณะครุศาสตร์ สาขาวิชาเอกพลศึกษา[span_10](start_span)[span_10](end_span)[span_11](start_span)[span_11](end_span)</h2>
            <div class="gallery-grid">
                <div class="card">
                    <img src="image_d182f5.jpg" alt="หน้าปก - ณฤดี">
                    <div class="card-body"><h3>หน้าปก (Cover)</h3></div>
                </div>
                <div class="card">
                    <img src="image_f910cc.jpg" alt="ประวัติส่วนตัว - ณฤดี">
                    <div class="card-body"><h3>ประวัติส่วนตัว (Profile)</h3></div>
                </div>
                <div class="card">
                    <img src="image_41d9df.jpg" alt="เหตุผลที่อยากเข้า - ณฤดี">
                    <div class="card-body"><h3>เหตุผลที่อยากเข้าศึกษา</h3></div>
                </div>
                <div class="card">
                    <img src="image_8f6d66.jpg" alt="กิจกรรม - ณฤดี">
                    <div class="card-body"><h3>กิจกรรมของสภานักเรียน</h3></div>
                </div>
            </div>
        </div>
    </div>

    <footer>
        <p>© Portfolio Website | สร้างด้วย HTML, CSS & JS สำหรับ GitHub Pages</p>
    </footer>

    <script>
        /* ==========================================
           JAVASCRIPT
           ========================================== */
        function switchTab(studentId, event) {
            // ซ่อนคอนเทนต์ทั้งหมด
            const contents = document.querySelectorAll('.portfolio-content');
            contents.forEach(content => {
                content.classList.remove('active');
            });

            // เอาคลาส active ออกจากปุ่มทั้งหมด
            const buttons = document.querySelectorAll('.tab-button');
            buttons.forEach(button => {
                button.classList.remove('active');
            });

            // แสดงคอนเทนต์ที่ถูกเลือก
            const selectedContent = document.getElementById(studentId);
            if (selectedContent) {
                selectedContent.classList.add('active');
            }

            // เพิ่มคลาส active ให้ปุ่มที่คลิก
            if (event && event.currentTarget) {
                event.currentTarget.classList.add('active');
            }
        }
    </script>

</body>
</html>

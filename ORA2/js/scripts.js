var courseInfo = [
  {
    id: "courseInfo-detail1",
    title: "Thông tin khai giảng",
    details: [
      {
        id: "courseInfo-detail1-content1",
        title: "Nội dung khai giảng",
        html: document.getElementById("courseInfo-detail1-content1").innerHTML,
      },
    ]
  },
  {
    id: "courseInfo-detail2",
    title: "Thông tin Seminar",
    details: [
      {
        id: "courseInfo-detail2-content1",
        title: "Seminar hôm nay",
        html: document.getElementById("courseInfo-detail2-content1").innerHTML,
      },
      {
        id: "courseInfo-detail2-content2",
        title: "Nội dung seminar hôm nay",
        html: document.getElementById("courseInfo-detail2-content2").innerHTML,
      },
      {
        id: "courseInfo-detail2-content3",
        title: "Ảnh seminar hôm nay",
        html: document.getElementById("courseInfo-detail2-content3").innerHTML,
      }
    ]
  },
  {
    id: "courseInfo-detail3",
    title: "Thông tin công ty quan tâm",
    details: [
      {
        id: "courseInfo-detail3-content1",
        title: "Công ty quan tâm",
        html: document.getElementById("courseInfo-detail3-content1").innerHTML,
      },
      {
        id: "courseInfo-detail3-content2",
        title: "Nội dung công ty quan tâm",
        html: document.getElementById("courseInfo-detail3-content2").innerHTML,
      },
      {
        id: "courseInfo-detail3-content3",
        title: "Ảnh công ty quan tâm",
        html: document.getElementById("courseInfo-detail3-content3").innerHTML,
      }
    ]
  }
];

var info = [
  {
    "id": "info-detail1",
    "title": "Mô tả tóm tắt học phần (tiếng Việt) (*)",
    "details": [
      {
        "id": "info-detail1-content1",
        "title": "Nội dung mô tả tóm tắt học phần (tiếng Việt) (*)",
        html: document.getElementById("info-detail1-content1").innerHTML
      }
    ]
  },
  {
    "id": "info-detail2",
    "title": "Mô tả tóm tắt học phần (tiếng Anh) (*)",
    "details": [
      {
        "id": "info-detail2-content1",
        "title": "Nội dung mô tả tóm tắt học phần (tiếng Anh) (*)",
        html: document.getElementById("info-detail2-content1").innerHTML
      }
    ]
  },
  {
    "id": "info-detail3",
    "title": "Nội dung tóm tắt học phần (tiếng Việt) (*)",
    "details": [
      {
        "id": "info-detail3-content1",
        "title": "Nội dung nội dung tóm tắt học phần (tiếng Việt) (*)",
        html: document.getElementById("info-detail3-content1").innerHTML
      }
    ]
  },
  {
    "id": "info-detail4",
    "title": "Nội dung tóm tắt học phần (tiếng Anh) (*)",
    "details": [
      {
        "id": "info-detail4-content1",
        "title": "Nội dung nội dung tóm tắt học phần (tiếng Anh) (*)",
        html: document.getElementById("info-detail4-content1").innerHTML
      }
    ]
  },
  {
    "id": "info-detail5",
    "title": "Sách tham khảo",
    "details": [
      {
        "id": "info-detail5-content1",
        "title": "Nội dung sách tham khảo",
        html: document.getElementById("info-detail5-content1").innerHTML
      },
      {
        "id": "info-detail5-content2",
        "title": "Ảnh minh họa sách tham khảo",
        html: document.getElementById("info-detail5-content2").innerHTML
      }
    ]
  }
];

var webTech = [
  {
    "id": "webTech-detail1",
    "title": "1. Frontend (Giao diện người dùng)",
    "details": [
      {
        "id": "webTech-detail1-content1",
        "title": "Nội dung Frontend (Giao diện người dùng)",
        html: document.getElementById("webTech-detail1-content1").innerHTML
      }
    ]
  },
  {
    "id": "webTech-detail2",
    "title": "2. Backend (Máy chủ và xử lý dữ liệu)",
    "details": [
      {
        "id": "webTech-detail2-content1",
        "title": "Nội dung Backend (Máy chủ và xử lý dữ liệu)",
        html: document.getElementById("webTech-detail2-content1").innerHTML
      }
    ]
  },
  {
    "id": "webTech-detail3",
    "title": "3. Cơ sở dữ liệu",
    "details": [
      {
        "id": "webTech-detail3-content1",
        "title": "Nội dung cơ sở dữ liệu",
        html: document.getElementById("webTech-detail3-content1").innerHTML
      }
    ]
  },
  {
    "id": "webTech-detail4",
    "title": "4. API và Tích hợp dịch vụ",
    "details": [
      {
        "id": "webTech-detail4-content1",
        "title": "Nội dung API và tích hợp dịch vụ",
        html: document.getElementById("webTech-detail4-content1").innerHTML
      }
    ]
  },
  {
    "id": "webTech-detail5",
    "title": "5. DevOps và Triển khai",
    "details": [
      {
        "id": "webTech-detail5-content1",
        "title": "Nội dung DevOps và triển khai",
        html: document.getElementById("webTech-detail5-content1").innerHTML
      }
    ]
  },
  {
    "id": "webTech-detail6",
    "title": "6. Bảo mật",
    "details": [
      {
        "id": "webTech-detail6-content1",
        "title": "Nội dung bảo mật",
        html: document.getElementById("webTech-detail6-content1").innerHTML
      }
    ]
  },
  {
    "id": "webTech-detail7",
    "title": "7. Testing và Debugging",
    "details": [
      {
        "id": "webTech-detail7-content1",
        "title": "Nội dung Testing và Debugging",
        html: document.getElementById("webTech-detail7-content1").innerHTML
      }
    ]
  },
  {
    "id": "webTech-detail8",
    "title": "8. Performance Optimization",
    "details": [
      {
        "id": "webTech-detail8-content1",
        "title": "Nội dung Performance Optimization",
        html: document.getElementById("webTech-detail8-content1").innerHTML
      }
    ]
  },
  {
    "id": "webTech-detail9",
    "title": "9. User Authentication & Authorization",
    "details": [
      {
        "id": "webTech-detail9-content1",
        "title": "Nội dung User Authentication & Authorization",
        html: document.getElementById("webTech-detail9-content1").innerHTML
      },
      {
        "id": "webTech-detail9-content2",
        "title": "Ảnh quảng cáo",
        html: document.getElementById("webTech-detail9-content2").innerHTML
      }
    ]
  }
];

var studentInfo = [
  {
    "id": "studentInfo-detail1",
    "title": "Thông tin cá nhân",
    "details": [
      {
        "id": "studentInfo-detail1-content1",
        "title": "Ảnh thông tin cá nhân",
        html: document.getElementById("studentInfo-detail1-content1").innerHTML
      },
      {
        "id": "studentInfo-detail1-content2",
        "title": "Nội dung thông tin cá nhân",
        html: document.getElementById("studentInfo-detail1-content2").innerHTML
      }
    ]
  },
  {
    "id": "studentInfo-detail2",
    "title": "Kĩ năng",
    "details": [
      {
        "id": "studentInfo-detail2-content1",
        "title": "Nội dung kĩ năng",
        html: document.getElementById("studentInfo-detail2-content1").innerHTML
      }
    ]
  },
  {
    "id": "studentInfo-detail3",
    "title": "Dự án",
    "details": [
      {
        "id": "studentInfo-detail3-content1",
        "title": "Nội dung dự án",
        html: document.getElementById("studentInfo-detail3-content1").innerHTML
      }
    ]
  },
  {
    "id": "studentInfo-detail4",
    "title": "Sở thích",
    "details": [
      {
        "id": "studentInfo-detail4-content1",
        "title": "Nội dung sở thích",
        html: document.getElementById("studentInfo-detail4-content1").innerHTML
      }
    ]
  }
]

var menu = [
  {
    id: "menu1",
    title: "Trang chủ",
    details: courseInfo,
  },
  {
    id: "menu2",
    title: "Thông tin môn học",
    details: info,
  },
  {
    id: "menu3",
    title: "Các công nghệ Web",
    details: webTech,
  },
  {
    id: "menu4",
    title: "Thông tin sinh viên",
    details: studentInfo,
  },
  {
    id: "menu5",
    title: "Admin page",
    details: [],
  }
]

// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

const buttons = document.querySelectorAll('.w3-bar-item');
buttons.forEach(button => {
  button.addEventListener("click", () => {
    button.classList.add('active');
  });
});

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}
// Function to show content and update button style
function showContent(sectionId) {
  try {
    document.querySelector(".ck-editor").classList.add('hidden')
    document.getElementById("admin-menu").classList.remove('hidden')
    document.getElementById("preview").innerHTML = ``
  } catch (error) {
    document.getElementById("menu5").innerHTML = `
      <div class="container">
        <!--content-->
        <div id="admin-page">
          <h3 id="admin-page-title" class="admin-page-header"></h3>
          <div class="sectionId flex-col">
            <div id="editor" class="hidden"></div>
            <table class="table-info" id="admin-menu"></table>
            <div id="preview"></div>
          </div>
        </div>
      </div>`
  }



  // Hide all sections
  const sections = document.querySelectorAll('.w3-container');
  sections.forEach(section => section.classList.add('hidden'));

  // Remove active class from all buttons
  buttons.forEach(button => {
    button.classList.remove('active');
  });

  try {
    const section = document.getElementById(sectionId)

    // Show selected section
    section.classList.remove('hidden')

    if (sectionId !== "menu5") {
      section.innerHTML = converToSectionHTML(sectionId)
    }

  } catch (error) {
    let newMenu = document.createElement("div")
    newMenu.id = sectionId
    newMenu.className = "w3-container w3-padding-64 hidden"
    newMenu.classList.remove('hidden')
    newMenu.innerHTML = converToSectionHTML(sectionId)
    document.getElementById("content-container").innerHTML += newMenu.outerHTML
  }


  loadSidebar(sectionId);

}

window.onload = function () {
  showContent('menu1');
};

function loadMenuTable(arr, func, id) {
  if (arr.length === 0) {
    let itemId = id
    if (id.includes("-detail")) {
      itemId += "-content1"
    } else {
      itemId += "-detail1"
    }
    return `
    <tr>
      <th class="width-80">
        <div class="name-input-div">
          <div class="flex space-between">
            Tên: 
            <div class="flex">
            <i class="fa-xl fa-solid fa-check" onclick="saveAdd('0', '${itemId}')"></i>
            </div>
          </div>
          <textarea rows="2" class="name-input full-width" id="input-0"> </textarea>
        </div>
      </th>
    </tr>        
  `;
  }

  let html = ``;
  for (item of arr) {
    let layoutText = ""
    if (item.id.includes("-content")) {
      let layoutDiv = document.getElementById(item.id).cloneNode(false)
      layoutDiv.removeAttribute('id');
      layoutText = layoutDiv.outerHTML
    }

    html += `<tr>
              <th class="width-80" id="${item.id}-menu-name">
                <span class="name">${item.title}</span>
                <div class="name-input-div hidden">
                  <div class="flex space-between">
                    Tên: 
                    <div class="flex">
                      <i class="fa-xl fa-solid fa-xmark" onclick="cancelEditName('${item.id}')"></i>
                      <i class="fa-xl fa-solid fa-check" onclick="saveEditName('${item.id}')"></i>
                    </div>
                  </div>
                  <textarea rows="2" class="name-input full-width">${item.title}</textarea>
                </div> 
                <div class="layout-input-div hidden">
                  <div class="flex space-between">
                    Layout:
                    <div class="flex">
                      <i class="fa-xl fa-solid fa-xmark" onclick="cancelEditLayout('${item.id}')"></i>
                      <i class="fa-xl fa-solid fa-check" onclick="saveEditLayout('${item.id}')"></i>
                    </div>
                  </div>
                  <textarea rows="4" class="layout-input full-width">${layoutText}</textarea>
                </div>
              </th>
              <td class="flex flex-wrap space-between">
                <img onclick="${func}('${item.id}')" src="assets/eye-open.svg" />
                <i class="fa-xl fa-solid fa-pencil" onclick="editMenu('${item.id}')"></i>
                <i class="fa-xl fa-solid fa-xmark" onclick="deleteMenu('${item.id}')"></i>
                <i class="fa-xl fa-solid fa-plus" onclick="addNewMenu('${item.id}')"></i>
              </td>
            </tr>
            `;
  }
  return html;
}

function loadAdminMenuTop() {
  let newMenu = menu.filter(item => item.id !== "menu1" && item.id !== "menu5");

  html = `<tr>
            <th id="menu1-menu-name">
              <span class="name">Trang chủ</span>
            </th>
            <td class="flex flex-wrap space-between">
              <img onclick="loadAdminMenuLeft('menu1')" src="assets/eye-open.svg" />
              <i class="fa-xl fa-solid fa-plus" onclick="addNewMenu('menu1')"></i>
            </td>
          </tr>
          `;

  html += loadMenuTable(newMenu, "loadAdminMenuLeft", "menu")

  document.getElementById("admin-page-title").innerHTML = `Admin menu top: "Chỉnh sửa menu top"`
  document.getElementById("admin-menu").innerHTML = html
}

function getContentBeforeDash(input) {
  const parts = input.split("-");
  return parts[0];
}

function getArr(id) {
  if (id === "menu") return menu
  id = getContentBeforeDash(id)
  id = convertSectionId(id)
  return (menu.find(item => item.id === id)).details
}

function convertSectionId(sectionId) {
  switch (sectionId) {
    case 'menu':
      return menu;
    case 'menu1':
    case 'courseInfo':
      return 'menu1';
    case 'menu2':
    case 'info':
      return 'menu2';
    case 'menu3':
    case 'webTech':
      return 'menu3';
    case 'menu4':
    case 'studentInfo':
      return 'menu4';
    default:
      return sectionId;
  }
}

function findSectionId(key) {
  if (key.includes("detail") && key.includes("menu")) return key
  const chars = key.split('');
  const letters = chars.filter(char => isNaN(char)).join('');
  return letters;
}

function resetStudentInfo() {
  let newStudentInfo = [
    {
      "id": "studentInfo-detail1",
      "title": "CV",
      "details": [
        {
          "id": "studentInfo-detail1-content1",
          "title": "Ảnh thông tin cá nhân",
          html: `<img
                  width="50%"
                  src="./assets/ava.jpg"
                  alt="Student Photo"
                  class="profile-photo"
                />
                `
        },
        {
          "id": "studentInfo-detail1-content2",
          "title": "Nội dung thông tin cá nhân",
          html: `
                <div class="details">
                  <span>Họ và tên:</span> Lê Bảo Lâm
                </div>
                <div class="details"><span>Năm vào trường:</span> 2021</div>
                <div class="details">
                  <span>Bậc đào tạo:</span> KSCLC-TN-TT-VNVP-ICT
                </div>
                <div class="details">
                  <span>Chương trình:</span> Công nghệ thông tin Việt-Nhật 2021
                </div>
                <div class="details"><span>MSSV:</span> 20215073</div>
                <div class="details"><span>Giới tính:</span> Nam</div>
                <div class="details"><span>Lớp:</span> Việt-Nhật 03-K66</div>
                <div class="details"><span>Khóa học:</span> 66</div>
                <div class="details"><span>Email:</span> lam.lb215073@sis.hust.edu.vn</div>
                `
        }
      ]
    },
    {
      "id": "studentInfo-detail2",
      "title": "Các dự án đã tham gia",
      "details": [
        {
          "id": "studentInfo-detail2-content1",
          "title": "Nội dung các dự án đã tham gia",
          html: `                   
                      <table class="table-info">
                        <tr>
                          <th>Website bán hàng</th>
                          <td>
                          Mô tả: Website bán hàng gia dụng; bao gồm client cho cửa hàng và trang quản lý cửa hàng cho admin.
                          <br />Công nghệ sử dụng: HTML, CSS, JavaScript, ReactJS ở
                          Frontend; Node.js và MySQL ở backend. <br />
                          Vai trò: Thiết kế cơ sở dữ liệu và xây dựng chức năng ở server cho người dùng.
                          </td>
                        </tr>
                        <tr>
                          <th>Website quản lý phòng Gym</th>
                        <td>
                        Mô tả: Website Quản lý phòng Gym. Bao gồm quản lý trang thiết bị, PT, nhân viên và khách hàng. Web
                        giúp chủ phòng gym quản lý tốt phòng gym trong kinh doanh.
                        <br />Công nghệ sử dụng: NodeJS, React, Spring boot...
                        <br />Vai trò: Xây dựng FE.
                          </td>
                        </tr>
                        <tr>
                          <th>Cờ caro </th>
                        <td>
                        Mô tả: Trò chơi cờ Caro đơn giản: Người vs người; người vs máy
                        <br />Công nghệ sử dụng: C/C++
                        <br />Vai trò: Xây dựng Server.
                          </td>
                        </tr>
                      </table>               `
        }
      ]
    },
    {
      "id": "studentInfo-detail3",
      "title": "Sinh hoạt cộng đồng",
      "details": [
        {
          "id": "studentInfo-detail3-content1",
          "title": "Nội dung sinh hoạt công dân",
          html: `
                    
                      <p>
                      <strong>Dự án "Mùa Hè Xanh"</strong>: Đây là một chương trình tình nguyện kéo dài 2 tuần tại các tỉnh miền núi khó khăn. Sinh viên tham gia sẽ có cơ hội giúp đỡ các hộ dân nghèo, xây dựng cầu đường, trường học, và tổ chức các hoạt động vui chơi, học tập cho trẻ em địa phương. Mục tiêu của dự án là hỗ trợ đời sống người dân, cải thiện cơ sở vật chất và phát triển kỹ năng mềm cho sinh viên. Các hoạt động chính bao gồm xây dựng công trình nông thôn mới, tổ chức lớp học cho trẻ em, khám bệnh miễn phí cho người dân. Qua đó, chương trình mong muốn góp phần nâng cao chất lượng cuộc sống tại địa phương và rèn luyện tinh thần trách nhiệm của sinh viên với cộng đồng.
                      </p>

                      <p>
                      <strong>Dự án "Hiến máu nhân đạo"</strong>: Đây là chương trình hiến máu nhân đạo do Đoàn trường tổ chức hàng năm, vận động sinh viên và cán bộ giảng viên tham gia hiến máu cứu người. Chương trình không chỉ mang ý nghĩa nhân đạo cao mà còn giúp tạo ra nguồn máu dự trữ phục vụ cho các bệnh viện trong khu vực. Mục tiêu chính là đảm bảo nguồn máu cứu chữa bệnh nhân, đồng thời nâng cao nhận thức về ý nghĩa của việc hiến máu. Các hoạt động chính bao gồm tuyên truyền ý nghĩa của hiến máu, tổ chức buổi hiến máu tại trường, tư vấn sức khỏe và chăm sóc hậu hiến máu. Thông qua hoạt động này, chương trình tạo được nguồn máu dự trữ an toàn, ổn định và lan tỏa ý thức nhân ái trong cộng đồng sinh viên.
                      </p>

                    
                  `
        }
      ]
    }
  ]

  menu[3].details = newStudentInfo
  menu[3].html = converToSectionHTML("menu4")
  loadAdminMenuLeft("menu4")
}

function converToSectionHTML(sectionId) {
  let html = ``

  let sectionContent = menu.find(item => item.id === sectionId).details

  for (item of sectionContent) {
    let subSection = document.createElement("div")
    subSection.id = item.id
    subSection.innerHTML = `
      <div class="section-header w3-theme-l1">${item.title}<div>
    `

    let subSectionContainer = document.createElement("div")
    subSectionContainer.classList.add("subsection-grid-container")

    for (subItem of item.details) {
      try {
        let subSectionContent = document.getElementById(subItem.id)
        subSectionContent.innerHTML = subItem.html
        subSectionContent.style.border = 0;
        subSectionContainer.appendChild(subSectionContent);
        if (!subSectionContent.style.gridColumn) {
          subSectionContent.style.gridColumn = "1 / -1";
        }
      } catch (error) {
        let subSectionContent = document.createElement("div")
        subSectionContent.id = subItem.id
        subSectionContent.innerHTML = subItem.html
        subSectionContent.style.gridColumn = "1 / -1";
        console.log(subSectionContent.outerHTML)
        subSectionContainer.innerHTML += subSectionContent.outerHTML
      }

    }

    subSection.innerHTML += subSectionContainer.outerHTML
    html += subSection.outerHTML
  }

  return `
    <div class="container">
    `+ html + `
    <div>
  `
}

function loadAdminMenuLeft(sectionId) {

  loadSidebar(sectionId);
  let arr = getArr(sectionId)
  let item = menu.find(item => item.id === sectionId);

  let html = `Admin menu left: "${item.title}"`
  if (sectionId === "menu4") {
    html += `<i class="fa-solid fa-arrow-rotate-left" id="reset-student-info" onclick="resetStudentInfo()"></i>`
  }

  document.getElementById("admin-page-title").innerHTML = html
  document.getElementById("admin-menu").innerHTML = loadMenuTable(arr, "loadAdminContentsLayout", sectionId)
}

function loadAdminContentsLayout(id) {
  document.getElementById(`${id}-sidebar`).classList.add('active')
  let sectionId = findSectionId(id)
  let arr = getArr(sectionId)

  sectionId = convertSectionId(getContentBeforeDash(sectionId))
  let title1 = menu.find(item => item.id === sectionId);
  let title2 = arr.find(item => item.id === id);
  let details = (arr.find(item => item.id === id)).details

  document.getElementById("admin-page-title").innerHTML = `
    Admin contents layout: "${title1.title}/${title2.title}"
    <i class="fas fa-info-circle" 
       style="margin-left: 10px; cursor: pointer; color: #064d73;"
       onclick="window.open('layout-instructions.html', '_blank')"
       title="Layout Setup Instructions">
    </i>
  `
  document.getElementById("admin-menu").innerHTML = loadMenuTable(details, "loadAdminContents", id)

  document.getElementById("preview").innerHTML = `
    <div class="section-header w3-theme-l1">${title2.title}</div>
    <div id="preview-layout" class="grid-container border-3px" style="height: 500px"></div>
  `
  let html = ``

  for (item of title2.details) {
    let layoutDiv = document.getElementById(item.id).cloneNode(false);

    layoutDiv.innerHTML = `${item.title}`
    layoutDiv.style.border = "5px solid black"

    html += layoutDiv.outerHTML
  }

  document.getElementById("preview-layout").innerHTML = html + loadGridContents(8, 15)
}

function loadGridContents(row, col) {
  let html = ``
  const totalItems = row * col;

  for (let i = 0; i < totalItems; i++) {
    html += `<div class="item"></div>`;
  }

  return html
}

function loadAdminContents(id) {
  try {
    document.querySelector(".ck-editor").classList.remove('hidden')
    document.getElementById("admin-menu").classList.add('hidden')
  } catch (error) { }

  document.querySelector(".sectionId").id = id

  let sectionId = findSectionId(id)
  let arr = getArr(sectionId)

  let parts = id.split('-')
  sectionId = convertSectionId(getContentBeforeDash(sectionId))
  let title1 = menu.find(item => item.id === sectionId);
  let title2 = arr.find(item => item.id === parts[0] + '-' + parts[1]);
  let title3 = title2.details.find(item => item.id === id);

  document.getElementById("admin-page-title").innerHTML = `Admin contents: "${title1.title}/${title2.title}/${title3.title}"`

  document.getElementById("preview").innerHTML = `
    <div class="section-header w3-theme-l1">${title2.title}</div>
    <div class="border-3px" id="preview-content" style="height: 500px;"><div>
    `


  document.getElementById("preview-content").innerHTML = title3.html
  editor.setData(title3.html);

}

function sidebarHTML(arr) {
  if (arr === null) return;
  var html = ``;
  for (item of arr) {
    html += `<a class="w3-bar-item w3-button w3-hover-cyan" id="${item.id}-sidebar" href="#${item.id}">${item.title}</a>`;
  }
  return html;
}

function loadSidebar(sectionId) {

  const sidebar = document.getElementById("mySidebar");
  sidebar.innerHTML = '';

  if (sectionId === 'menu5') {
    loadAdminMenuTop();
    return;
  }
  sectionId = convertSectionId(sectionId)
  let item = menu.find(item => item.id === sectionId)
  let arr = getArr(sectionId)

  sidebar.innerHTML = `<h4 class="w3-bar-item"><b>${item.title}</b></h4>` + sidebarHTML(arr);
}

function editMenu(id) {
  menuName = document.getElementById(`${id}-menu-name`)
  menuName.querySelector(".name-input-div").classList.remove("hidden")
  if (id.includes("-content")) {
    menuName.querySelector(".layout-input-div").classList.remove("hidden")
  }
}

function cancelEditName(id) {
  menuName = document.getElementById(`${id}-menu-name`)
  menuName.querySelector(".name-input-div").classList.add("hidden")
}

function cancelEditLayout(id) {
  menuName = document.getElementById(`${id}-menu-name`)
  menuName.querySelector(".layout-input-div").classList.add("hidden")
}

function getContentBeforeDash(input) {
  const parts = input.split("-");
  return parts[0];
}

function saveEditName(id) {
  menuName = document.getElementById(`${id}-menu-name`)
  let value = menuName.querySelector(".name-input").value
  cancelEditName(id)

  if (!value || value.trim() === "") return;

  menuName.querySelector(".name").innerHTML = `${value}`

  if (id.includes("-content")) {
    parts = id.split("-")
    let arr = getArr(id)
    let details = (arr.find(item => item.id === parts[0] + "-" + parts[1])).details
    let contentIndex = details.findIndex(item => item.id === id)
    let html = details[contentIndex].html
    details.splice(contentIndex, 1, {
      id: id,
      title: value,
      html: html
    })
  } else {
    let sectionId = findSectionId(id)
    let arr = getArr(sectionId)
    let arrIndex = arr.findIndex(item => item.id === id)
    let details = arr[arrIndex].details
    arr.splice(arrIndex, 1, {
      id: id,
      title: value,
      details: details
    })

    loadMenu()

    if (sectionId != 'menu') {
      sectionId = getContentBeforeDash(sectionId)
      sectionId = convertSectionId(sectionId)
      loadSidebar(sectionId);
    }
  }
}

function saveEditLayout(id) {
  menuName = document.getElementById(`${id}-menu-name`)
  let value = menuName.querySelector(".layout-input").value
  cancelEditLayout(id)

  if (!value || value.trim() === "") return;

  menuName.querySelector(".name").innerHTML = `${value}`

  let styleRegex = /style="([^"]+)"/;

  // Tìm kiếm trong chuỗi
  let match = value.match(styleRegex);

  if (match) {
    // Lấy giá trị style từ kết quả
    value = match[1].trim();
  }

  document.getElementById(id).style.cssText = value

  reloadContentLayout(id)
}

function deleteMenu(id) {
  const table = document.getElementById("admin-menu")
  let rowIndex = findRowIndex(id)
  table.deleteRow(rowIndex)

  if (id.includes("-content")) {
    let sectionId = getContentBeforeDash(id)
    let parts = id.split("-");
    let contentId = parts[0] + "-" + parts[1]

    let arr = getArr(findSectionId(sectionId))

    let details = []
    if (arr === menu) {
      details = (arr.find(item => item.id === convertSectionId(sectionId))).details
      details = (details.find(item => item.id === contentId)).details
    } else {
      details = (arr.find(item => item.id === contentId)).details
    }
    let contentIndex = details.findIndex(item => item.id === id)
    details.splice(contentIndex, 1)
  } else {
    let sectionId = findSectionId(id)
    let arr = getArr(sectionId)
    let arrIndex = arr.findIndex(item => item.id === id)
    arr.splice(arrIndex, 1)
    loadMenu()
    try {
      sectionId = getContentBeforeDash(sectionId)
      loadSidebar(sectionId)
    } catch (error) { }
  }
}

function findRowIndex(id) {
  const table = document.getElementById("admin-menu")
  const rows = table.getElementsByTagName("tr")
  let rowIndex = rows.length - 1;
  for (i = 0; i < rows.length; i++) {
    let cell = table.rows[i].cells[0]
    if (cell.id === id + "-menu-name") {
      rowIndex = i;
      break;
    }
  }
  return rowIndex;
}

function addNewMenu(id) {
  const table = document.getElementById("admin-menu")
  let rowIndex = findRowIndex(id)
  const newRowHTML = `
    <tr>
      <th class="width-80">
        <div class="name-input-div">
          <div class="flex space-between">
            Tên: 
            <div class="flex">
            <i class="fa-xl fa-solid fa-xmark" onclick="cancelAdd('${rowIndex + 1}')"></i>
            <i class="fa-xl fa-solid fa-check" onclick="saveAdd('${rowIndex + 1}', '${id}')"></i>
            </div>
          </div>
          <textarea rows="2" class="name-input full-width" id="input-${rowIndex + 1}"> </textarea>
        </div>
      </th>
      <td class="flex flex-wrap space-between">
      </td>
    </tr>        
  `;
  const referenceRow = table.rows[rowIndex]; // Lấy hàng tham chiếu
  referenceRow.insertAdjacentHTML('afterend', newRowHTML);
}

function saveAdd(index, id) {
  const table = document.getElementById("admin-menu")
  let value = document.getElementById(`input-${index}`).value
  if (!value || value.trim() === "") {
    table.deleteRow(index)
    return
  }
  let sectionId = 0
  let item = {}
  let func = ""

  if (id.includes("-content")) {
    sectionId = getContentBeforeDash(id)

    let parts = id.split("-");
    let contentId = parts[0] + "-" + parts[1]

    let arr = getArr(findSectionId(sectionId))

    let details = []
    if (arr === menu) {
      details = (arr.find(item => item.id === convertSectionId(sectionId))).details
      details = (details.find(item => item.id === contentId)).details
    } else {
      details = (arr.find(item => item.id === contentId)).details
    }

    let contentIndex = details.findIndex(item => item.id === id)
    let newId = contentId + "-content" + (details.length + 1)
    item = {
      id: newId,
      title: value,
      html: ``
    }
    details.splice(contentIndex + 1, 0, item)

    let html = ``
    let layout = document.createElement("div")
    for (item of details) {
      console.log(details)
      try {
        let layoutDiv = document.getElementById(item.id).cloneNode(false);

        layoutDiv.innerHTML = `${item.title}`
        layoutDiv.style.border = "5px solid black"

        html += layoutDiv.outerHTML
      } catch (error) {
        layout.style.gridColumn = "1/-1"
        layout.innerHTML = `${item.title}`
        layout.style.border = "5px solid black"
      }

    }

    document.getElementById("preview-layout").innerHTML = html + layout.outerHTML + loadGridContents(8, 15)

  } else {
    let arr = []
    let key = ""
    if (!id.includes("-detail")) {
      sectionId = findSectionId(id)
      arr = getArr(sectionId)
      key = sectionId
    } else {
      sectionId = findSectionId(id)
      sectionId = getContentBeforeDash(id)
      arr = getArr(sectionId)
      key = sectionId + "-detail"
    }
    key = key + (arr.length + 1)
    let arrIndex = arr.findIndex(item => item.id === id)
    item = {
      id: key,
      title: value,
      details: []
    }
    arr.splice(arrIndex + 1, 0, item);

    loadMenu()
    try {
      loadSidebar(getContentBeforeDash(sectionId))
    } catch (error) { }
  }

  if (id.includes("-content")) {
    func = "loadAdminContents"
  } else if (id.includes("-detail")) {
    func = "loadAdminContentsLayout"
  } else {
    func = "loadAdminMenuLeft"
  }

  let layoutText = ""
  if (item.id.includes("-content")) {
    try {
      let layoutDiv = document.getElementById(item.id).cloneNode(false)
      layoutDiv.removeAttribute('id');
      layoutDiv.removeAttribute('class');
      console.log(layoutDiv)
      layoutText = layoutDiv.outerHTML
    } catch (error) {
      layoutText = '<div style="grid-column: 1 / -1;"></div>'
    }

  }

  table.rows[index].innerHTML = `
    <tr>
      <th class="width-80" id="${item.id}-menu-name">
        <span class="name">${item.title}</span>
        <div class="name-input-div hidden">
          <div class="flex space-between">
            Tên: 
            <div class="flex">
              <i class="fa-xl fa-solid fa-xmark" onclick="cancelEditName('${item.id}')"></i>
              <i class="fa-xl fa-solid fa-check" onclick="saveEditName('${item.id}')"></i>
            </div>
          </div>
          <textarea rows="2" class="name-input full-width">${item.title}</textarea>
        </div> 
        <div class="layout-input-div hidden">
          <div class="flex space-between">
            Layout:
            <div class="flex">
              <i class="fa-xl fa-solid fa-xmark" onclick="cancelEditLayout('${item.id}')"></i>
              <i class="fa-xl fa-solid fa-check" onclick="saveEditLayout('${item.id}')"></i>
            </div>
          </div>
          <textarea rows="4" class="layout-input full-width">${layoutText}</textarea>
        </div>
      </th>
      <td class="flex space-between">
        <img onclick="${func}('${item.id}')" src="assets/eye-open.svg" />
        <i class="fa-xl fa-solid fa-pencil" onclick="editMenu('${item.id}')"></i>
        <i class="fa-xl fa-solid fa-xmark" onclick="deleteMenu('${item.id}')"></i>
        <i class="fa-xl fa-solid fa-plus" onclick="addNewMenu('${item.id}')"></i>
      </td>
    </tr>
  `
}


function cancelAdd(index) {
  const table = document.getElementById("admin-menu")
  table.deleteRow(index)
}

function loadMenu() {

  let html = ``
  for (item of menu) {
    html += `
        <a
        href="javascript:void(0)"
        onclick="showContent('${item.id}')"
        class="w3-bar-item w3-button w3-hover-cyan"
        >${item.title}</a
      >
    `
  }

  document.getElementById("navbar").innerHTML = `
   <a
    class="w3-bar-item w3-button w3-right w3-hide-large w3-hover-white w3-large w3-theme-l1"
    href="javascript:void(0)"
    onclick="w3_open()"
    ><i class="fa fa-bars"></i>
  </a>
  <a
    href="#"
    onclick="showContent('menu1')"
    class="w3-bar-item w3-button w3-hover-cyan"
  >
    <i class="fas fa-home"></i>
  </a>
  ` + html;
}

function tableChange(arr, func, id) {
  const table = document.getElementById("admin-menu")
  table.innerHTML = loadMenuTable(arr, func, id)
}

function updatePreviewContent() {
  var editorData = editor.getData();

  if (editorData.includes("figure")) {
    // Tạo một phần tử tạm thời để xử lý
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = editorData;

    // Lấy nội dung bên trong thẻ figure
    editorData = tempDiv.querySelector('figure').innerHTML;
  }
  document.getElementById("preview-content").innerHTML = editorData

  let id = document.getElementById("preview").parentNode.id

  let sectionId = findSectionId(id)
  let arr = getArr(sectionId)

  let parts = id.split('-')
  let title2 = arr.find(item => item.id === parts[0] + '-' + parts[1]);
  let title3 = title2.details.find(item => item.id === id);

  title3.html = editorData
}

var ckEditor = document.querySelector(".ck-editor__editable")
ckEditor.addEventListener("input", updatePreviewContent)
ckEditor.addEventListener("keyup", updatePreviewContent);

const toolbarButtons = document.querySelectorAll(".ck-button")
toolbarButtons.forEach(button => {
  button.addEventListener("click", updatePreviewContent)
})

function reloadContentLayout(id) {

  let parts = id.split("-");
  let sectionId = parts[0] + "-" + parts[1]

  loadAdminContentsLayout(sectionId)

}
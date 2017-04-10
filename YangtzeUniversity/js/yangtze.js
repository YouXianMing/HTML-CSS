var eleDic = [];
var webImg = [];

// 初始化
function setup() {
    'use strict';

    // 设置body背景图
    document.body.style.backgroundImage = "url(./images/background.jpg)";

    // 获取菜单的相关操作
    eleDic['title-menu'] = elementById('title-menu'); // 菜单汉字
    eleDic['title-menu-hover'] = elementById('title-menu-hover'); // 菜单小图标
    eleDic['unav'] = elementById('unav'); // 子菜单
    eleDic['chooseTab_1'] = elementById('chooseTab_1'); // 教务通知 + 本周事务
    eleDic['chooseTab_2'] = elementById('chooseTab_2'); // 教学动态 + 教学简报
    eleDic['chooseTab_1_1'] = elementById('chooseTab_1_1'); // 教务通知
    eleDic['chooseTab_1_2'] = elementById('chooseTab_1_2'); // 本周事务
    eleDic['chooseTab_1_3'] = elementById('chooseTab_1_3'); // 教学动态
    eleDic['chooseTab_1_4'] = elementById('chooseTab_1_4'); // 教学简报
    eleDic['special-web'] = elementById('special-web'); // 专题网站

    // 快速通道
    var ol = elementById('quick');
    var images = [null,
              "url(./images/quick1.jpg)",
              "url(./images/quick2.jpg)",
              "url(./images/quick3.jpg)",
              "url(./images/quick4.jpg)",
              "url(./images/quick5.jpg)",
              "url(./images/quick6.jpg)",
              "url(./images/quick7.jpg)",
              "url(./images/quick8.jpg)"];

    var ol_children = ol.children;
    ol_children[0].style.textIndent = "17px";
    for (var i = 0; i < ol_children.length; i++) {

        ol_children[i].style.backgroundImage = images[i];
    }

    // 轮播图
    eleDic['scroll-image'] = elementById('scroll-image');
    eleDic['scroll-page'] = elementById('scroll-page');

    // 专题网站
    webImg['normal'] = ["url(./images/zt_bg1.jpg)",
                        "url(./images/zt_bg2.jpg)",
                        "url(./images/zt_bg3.jpg)",
                        "url(./images/zt_bg4.jpg)",
                        "url(./images/zt_bg5.jpg)",
                        "url(./images/zt_bg6.jpg)",
                        "url(./images/zt_bg7.jpg)"];
    webImg['hover'] = ["url(./images/zt_hover1.jpg)",
                       "url(./images/zt_hover2.jpg)",
                       "url(./images/zt_hover3.jpg)",
                       "url(./images/zt_hover4.jpg)",
                       "url(./images/zt_hover5.jpg)",
                       "url(./images/zt_hover6.jpg)",
                       "url(./images/zt_hover7.jpg)"];
}

// 添加事件
function addEvent() {
    'use strict';

    // 处理子菜单事件
    function subtitle_menu_event(index, element) {

        var ol = eleDic['unav'].children[1];
        var span = eleDic['unav'].children[0];
        span.style.visibility = "hidden";
        var list = ol.children;

        var wordList = [];
        if (element.textContent === "机构设置") {

            wordList = ["部门概况", "部门领导", "科室设置", "教学委员会", "督导委员会", "教学信息员"];
            ol.style.left = "25px";

        } else if (element.textContent === "规章制度") {

            wordList = ["国家政策法规", "教学管理文件"];
            ol.style.left = "123px";

        } else if (element.textContent === "教学建设") {

            wordList = ["专业建设", "课程建设"];
            ol.style.left = "240px";

        } else if (element.textContent === "教务管理") {

            wordList = ["运行管理", "选课管理", "校历查询"];
            ol.style.left = "290px";

        } else if (element.textContent === "实践创新") {

            wordList = ["实践教学", "学科竞赛", "创新计划", "机械创新计划"];
            ol.style.left = "420px";

        } else if (element.textContent === "质量评估") {

            wordList = ["教学检查", "教学评估", "教学督导", "教学竞赛", "教学奖励"];
            ol.style.left = "500px";

        } else if (element.textContent === "学务管理") {

            wordList = ["成绩管理", "学籍管理", "辅修管理", "学生评教"];
            ol.style.left = "620px";

        } else if (element.textContent === "服务指南") {

            wordList = ["工作流程", "常见问题"];
            ol.style.left = "785px";

        } else if (element.textContent === "下载中心") {

            wordList = ["学院下载", "教师下载", "学生下载"];
            ol.style.left = "765px";

        } else {

            span.style.visibility = "visible";
        }

        for (var i = 0; i < list.length; i++) {

            var a = list[i].children[0];
            a.innerHTML = (wordList[i] === undefined ? null : wordList[i]);
        }

    }

    // 处理菜单的鼠标事件(事件与标签绑定)
    function title_menu_event() {

        var chr_title_menu = eleDic['title-menu'].children; // 菜单汉字
        var chr_title_menu_hover = eleDic['title-menu-hover'].children; // 菜单汉字底下小图标
        for (var i = 0; i < chr_title_menu.length; i++) {

            var tmpDiv = chr_title_menu[i];
            var tmpHover = chr_title_menu_hover[i];
            if (i === this.index) {
                tmpDiv.className = "title-menu-child-div-special";
                tmpHover.className = "title-menu-hover-special";
                subtitle_menu_event(this.index, tmpDiv);
            } else {
                tmpDiv.className = "title-menu-child-div-normal";
                tmpHover.className = "title-menu-hover-normal";
            }
        }
    }

    var chr_title_menu = eleDic['title-menu'].children;
    for (var i = 0; i < chr_title_menu.length; i++) {

        var tmpDiv = chr_title_menu[i];
        tmpDiv.onmouseover = title_menu_event; // 设置事件
        tmpDiv.index = i; // 设置标签
    }

    chr_title_menu[0].onmouseover();

    // 教务通知 + 本周通知
    function chooseTab_1_event() {

        var chooseTab_1_children = eleDic['chooseTab_1'].children;
        for (var i = 0; i < chooseTab_1_children.length; i++) {

            if (this.index === i) {

                chooseTab_1_children[i].className = "select";

            } else {

                chooseTab_1_children[i].className = "normal";
            }
        }

        if (this.index === 0) {

            eleDic['chooseTab_1_1'].style.display = "block";
            eleDic['chooseTab_1_2'].style.display = "none";

        } else {

            eleDic['chooseTab_1_1'].style.display = "none";
            eleDic['chooseTab_1_2'].style.display = "block";
        }
    }

    var chooseTab_1_children = eleDic['chooseTab_1'].children;
    for (var i = 0; i < chooseTab_1_children.length; i++) {

        var span = chooseTab_1_children[i];
        span.index = i; // 设置标签
        span.onmouseover = chooseTab_1_event; // 设置事件
    }

    chooseTab_1_children[0].onmouseover();

    // 教学动态 + 教学简报
    function chooseTab_2_event() {

        var chooseTab_2_children = eleDic['chooseTab_2'].children;
        for (var i = 0; i < chooseTab_2_children.length; i++) {

            if (this.index === i) {

                chooseTab_2_children[i].className = "select";

            } else {

                chooseTab_2_children[i].className = "normal";
            }
        }

        if (this.index === 0) {

            eleDic['chooseTab_1_3'].style.display = "block";
            eleDic['chooseTab_1_4'].style.display = "none";

        } else {

            eleDic['chooseTab_1_3'].style.display = "none";
            eleDic['chooseTab_1_4'].style.display = "block";
        }
    }

    var chooseTab_2_children = eleDic['chooseTab_2'].children;
    for (var i = 0; i < chooseTab_2_children.length; i++) {

        var span = chooseTab_2_children[i];
        span.index = i; // 设置标签
        span.onmouseover = chooseTab_2_event; // 设置事件
    }

    chooseTab_2_children[0].onmouseover();

    // 专题网站
    function special_web_a_onmouseover() {

        this.style.backgroundImage = webImg['hover'][this.index];
    }

    function special_web_a_onmouseout() {

        this.style.backgroundImage = webImg['normal'][this.index];
    }

    var a_list = eleDic['special-web'].children;
    for (var i = 0; i < a_list.length; i++) {

        var a = a_list[i];
        a.index = i;
        a.onmouseover = special_web_a_onmouseover;
        a.onmouseout = special_web_a_onmouseout;
        
        a.onmouseout();
    }
}

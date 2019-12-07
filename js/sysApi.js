// 系统接口sysApi
// 欢迎关注
Mock.mock("/sysApi/SelWelcome", {
    "code": 0,
    "msg": "查询成功",
    "data": "<p><span style=\"font-size: 36px;\"><span style=\"box-sizing: border-box; outline: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: skyblue; font-family: &quot;Microsoft YaHei&quot;; background-color: rgb(255, 255, 255);\">欢迎关注会聚人力，</span><span style=\"font-family: &quot;Microsoft YaHei&quot;; background-color: rgb(255, 255, 255);\">在这里你可以了解到会聚人力关于IT人才的培养，看到优秀学员的入职介绍，更有百家企业热招岗位任你挑选。欢迎每一个期待明天更好的你！</span></span></p>",
    "count": 0,
    "success": true
})
// 关于会聚(介绍)
Mock.mock("/sysApi/SelIntroduce", {
    "code": 0,
    "msg": "查询成功",
    "data": "<p>杭州会友科技有限公司</p><p class=\"introduce-details\" style=\"box-sizing: border-box; outline: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-top: 0px; margin-bottom: 0px; padding: 0.625rem; font-size: 0.875rem; text-indent: 2em; font-family: &quot;Microsoft YaHei&quot;; white-space: normal;\">杭州会友科技有限公司是一家致力于行业移动解决方案的软件公司。主要提供行业解决方案的商业策略，咨询设计，定制研发等服务。核心团队成立于2012年，现已在宁波、台州等地设立分公司和办事处，技术人员60余人，已上线项目百余款。公司秉承着“精工细作，科技会友”的创业理念，致力做行业内领先的移动应用开发服务商。</p><p><br/></p>",
    "count": 0,
    "success": true
})
// 查询大事件
Mock.mock("/sysApi/SelBigEvent", {
    "code": 0,
    "msg": "查询成功",
    "data": [{
        "id": 1,
        "title": "22岁的月入过万",
        "content": "会聚人力毕业一年的学员现已月入过万，会聚人力毕业一年的学员现已月入过万，会聚人力毕业一年的学员现已月入过万，",
        "img": null,
        "isLink": 1,
        "url": "www.baidu.com",
        "createTime": "2019-12-03 16:14:10.0",
        "updateTime": "2019-12-03 16:19:53.0"
    }],
    "count": 6,
    "success": true
})


// 职位接口dutyApi
// 查询热门雇主(查询公司)
Mock.mock("/dutyApi/selCompanyPage", {
    "code": 0,
    "msg": "查询成功",
    "data": [{
        "id": 1,
        "name": "会聚",
        "logo": "upload/images/20191204/1575430306067.jpg",
        "createTime": null,
        "updateTime": "2019-12-04 11:31:46.0"
    }],
    "count": 0,
    "success": true
})

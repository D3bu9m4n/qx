// 处理响应体
let body = $response.body;
let obj = JSON.parse(body);

if (obj.data && obj.data.notes && obj.data.notes.length > 0) {
    // 生成1000-1800之间的随机数
    const randomLikes = Math.floor(Math.random() * (1800 - 1000 + 1)) + 1000;
    
    // 修改第一条笔记的点赞数
    obj.data.notes[0].badge_info.show_content = randomLikes;
}

// 返回修改后的数据
$done({body: JSON.stringify(obj)}); 
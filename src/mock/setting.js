import Mock from 'mockjs';
Mock.mock("/api/setting", "get", {
    code: 0,
    msg: '',
    data: {
        avatar:"https://lice-1255683938.file.myqcloud.com/avatar_test/Boy.svg",
        siteTitle:"Li Xiang`s Blog",
        github:"www.baidu.com",
        qq:"51419474",
        mail:"devlixiang@yahoo.com",
        favicon:"https://lice-1255683938.file.myqcloud.com/avatar_test/Boy.svg",
        weixin:"ID2644624819",
        qqQrCode:"",
        weixinQrCode:"https://lice-1255683938.file.myqcloud.com/%E4%BA%8C%E7%BB%B4%E7%A0%81%E5%9B%BE%E7%89%87/weixin-QRcode.png"
    }
});
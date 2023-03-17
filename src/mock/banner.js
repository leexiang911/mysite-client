import Mock from 'mockjs';

Mock.mock("/api/banner", "get", {
  code: 0,
  msg: "",
  data: [
    {
      id: "1",
      midImg: "https://lice-1255683938.file.myqcloud.com/demo_imgs/103711827.jpg",
      bigImg: "https://lice-1255683938.file.myqcloud.com/demo_imgs/103711827.jpg",
      title: "Calm Heart",// 平静的心
      description: "Promise yourself to be so strong that nothing can disturb your peace of mind",// 答应自己要坚强，不让任何事物烦扰内心的平静
    },
    {
      id: "2",
      midImg: "https://lice-1255683938.file.myqcloud.com/demo_imgs/120790987.jpg",
      bigImg: "https://lice-1255683938.file.myqcloud.com/demo_imgs/120790987.jpg",
      title: "Full Of Hope",
      description: "If you are hopeful, you will be invincible",// 慢怀希望，就会所向披靡
    },
    {
      id: "3",
      midImg: "https://lice-1255683938.file.myqcloud.com/demo_imgs/120795766.jpg",
      bigImg: "https://lice-1255683938.file.myqcloud.com/demo_imgs/120795766.jpg",
      title: "Be Yourself",// 做自己
      description: "If you care about what other people think, you`re never gonna do anything",// 如果总在意别人怎么想，你将一事无成
    },
  ],
});

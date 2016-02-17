# OnlineBookStore

[php|javascript|mysql]

---
### 本项目旨在搭建一个二手图书类CMS，我会记录我每天开发的历程。前端使用了jQuery，后端使用了PHP，数据库采用mysql，字符集全部为UTF-8 ###
---
###树形结构###
* bookstore
    * admin `后台管理目录`
        * css `后台样式表`
            * ad.css `广告管理css`
            * index.css `后台主页 css`
            * AddGood.css `主要是input样式`
            * BuyOrder.css `买书订单管理css`
            * ChangeGood.css `更改商品样式`
            * GroupManage.css `GroupManage css`
            * SellOrder.css `卖书订单css`
        * frame
            * Ad.html `广告管理iframe`
            * AddGood.html `添加商品iframe`
            * Administrator `修改管理员的iframe`
            * BestSell `最热销产品，即默认广告`
            * BuyOrder.html `买书订单管理iframe`
            * GroupManage.html `管理分组的iframe`
            * ChangeGood.html `更改商品详情的iframe`
            * FastAddGood.html `快速上传商品iframe 响应式`
            * Discount.html `设置商品折扣的iframe`
            * Our.html `我们的动态iframe`
            * SellOrder `卖书订单iframe`
            * Visited `浏览量iframe`
        * js
            * BestSell.js `热销产品js`
            * BuyOrder.js  `买书订单管理js`
            * index.js `后台主页js`
            * ChangeGood.js `更改商品详情的js`
            * GroupManage.js `管理分组js`
            * SellOrder `卖书订单js`
        * Ad.php `广告管理php`
        * AddGood.php `添加商品php`
        * Administrator.php `修改管理员所有权限账号密码等`
        * BestSell.php `热销推荐商品的上架删除等`
        * BuyOrder.php `买书订单管理，查看某一日期，发货，取消发货等`
        * certain.php `通过cookie判断是否登陆`
        * ChangeGood.php `修改商品的所有属性`
        * conn.php `连接数据库php`
        * DeleteGood.php `删除商品和图片的`
        * discount.php `设置旧书或者新书的整体折扣`
        * GroupManageAdd.php `管理分组->添加分组`
        * GroupManageChange.php `管理分组->更改分组名`
        * GroupManageContent.php `管理分组->添加每个分组的子分组！`
        * GroupManageContentDelete.php `管理分组->删除每个分组的子分组！`
        * GroupManageContentSelect.php `管理分组->删除分组->查看每级分组下已有的子分组`
        * GroupManageDelete.php `管理分组->删除每个分组中元素以及在关系表中删除关于此分组下子分组`
        * GroupManageSelect.php `管理分组->查询分组详情`
        * index.html `后台默认登录页面`
        * index.php `后台首页`
        * judge.php `ajax目标简单防护未登陆情况`
        * login.php `登录php`
        * logout.php `登出、注销`
        * Our.php `我们的动态管理，添加、删除、显示等`
        * SelectGood.php `输出所有图书列表`
        * SelectGoodDetails.php `输出图书列表的详情`
        * SellOrder.php `输出卖书订单`
    * css `前台样式表`
        * bookdetails.css `书本详情css`
        * buy.css  `我要买书 css`
        * general.css `通用 css`
        * index.css `前台主页 css`
        * jquery.slideBox.css `slideBox css`
        * sell.css `我要卖书 css
        * shopcar.css `购物车`
    * database `数据库`
        * bookstore.sql `数据库sql文件`
    * img `存放图片目录`
        * ad `广告图片`
        * book `图书图片`
        * icon `小图标`
    * js 
        * buy.js `我要买书js`
        * General.js `通用js`
        * input.js `input表单效果js`
        * jquery.min.js `jquery库`
        * jquery.slideBox.min.js `slideBox库`
        * shopcar.js `购物车js`
    * php
        * BookDetail.php `输出书本详情`    
        * BookList .php `输出书本分类表`
        * FeedBack.php `反馈`
        * GetUser.php `获取客户端ip及UA`
        * Search.php `搜索书本`
        * sell.php `卖书`
        * Shopcar.php `购物车`
    * bookdetail.html `书本详情`    
    * buy.php `买书页面`
    * feedback.html `反馈弹窗`
    * index.php `主页`
    * sell.php `卖书页面`
    * shopcar.html `购物车页面`



### 2016-02-17 ###
添加快速上传图书功能，本项目目前唯一一个`响应式`页面，利用豆瓣图书类api
### 2016-02-15 ###
后台我们动态、访问管理支持分页查看
### 2016-02-14 ###
修改数据库，删除b_discount，新sql文件已更新
### 2016-02-13 ###
后台管理-买书订单支持分页查看，修复图书商品展示页面书本折扣前后逻辑bug，更改b_product数据库。
### 2016-02-11 ###
修复买书页面和购物车页面bug，后台管理卖书订单支持分页
### 2015-12-23 ###
所有基本功能开发完毕，此项目v1.0版本可以上线了，目前还有一些bug没有修复，后续更新将会修复。
增加了浏览量管理，前端和后端已经结合起来，购物车采用cookie保存，以及各种bug修复。
### 2015-12-20 ###
添加了广告管理，我们的动态管理，折扣管理，买书订单管理，修复了很多bug！本项目 v1.0接近完工。
### 2015-12-19 ###
添加了最热销产品的管理，包括上架、下架等，增加了后台管理员管理页面，包括添加删除，修改信息、权限等，设置了管理员权限和客服权限，增加了注销功能，
把管理员密码由明文转成MD5加密。
### 2015-12-18 ###
添加了分组管理，删除每级分组下的子分组，删除整个分组等，修复了一些bug。
### 2015-12-17 ###
添加了更改商品是否热卖和更改商品图片功能 完善12-16日更新
### 2015-12-16 ###
完善了12-16的更新，增加了更改商品详情，删除商品等，忘记做删除每级分组删除其子分组，一门考试结束，开始加快速度了。
### 2015-12-15 ###
增加了给每个分组添加子分组，如果是三级分组则添加商品。
### 2015-12-14 ###
增加添加分组内容 该商城有三级目录 用关系表联系起来。
### 2015-12-13 ###
优化后台登陆，添加了上架商品（商品可以重复），添加了管理多级分组（添加分组，修改分组，删除分组等），修改了数据库的bug（b_category_grade表中grade列拼写错误）。
### 2015-12-12 ###
 数据库搭建完毕，后台登陆设计完毕，默认后台账号为admin密码同账号，重新书写了README --!
 。同时此刻我在思考是php输出html好还是html嵌套php好。
### 2015-12-11 ###
 丰富了管理页面  修改了购物车页和部分小细节更改。
### 2015-12-10 ###
 购物车页面完成。修改了购买页面增强了交互性暂时移除购买页面的滚动广告。管理页面布局完成  。
### 2015-12-09 ###
  卖书页面完成，购物车页面主体部分完成，购物车添加、删除商品、选择分类、计算价格等完成  。
### 2015-12-08 ###
  买书页面完成   。
### 2015-12-07 ###
  主页完成 我要买书写了30%  。
### 2015-12-06 ###
  搭建好数据库框架，网页主体ui设计完毕首页写了1%  。
### 2015-12-05 ###
  本项目正式开始  ！


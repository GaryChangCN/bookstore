# OnlineBookStore

[php|javascript|mysql]

---
### 本项目旨在搭建一个二手图书类CMS，我会记录我每天开发的历程。前端使用了jquery，后端使用了PHP，数据库采用mysql，字符集全部为UTF-8 ###
---
###树形目录###
* bookstore
    * admin `后台管理目录`
        * css `后台样式表`
            * index.css `后台主页 css`
            * AddGood.css `主要是input样式`
            * ChangeGood.css `更改商品样式`
            * GroupManage.css `GroupManage css`
        * frame
            * AddGood.html `添加商品html`
            * GroupManage.html `管理分组的iframe`
            * ChangeGood.html `更改商品详情的frame`
        * js
            * index.js `后台主页js`
            * ChangeGood.js `更改商品详情的js`
            * GroupManage.js `管理分组js`
        * AddGood.php `添加商品php`
        * certain.php `通过cookie判断是否登陆`
        * conn.php `连接数据库php`
        * DeleteGood.php `删除商品和图片的`
        * GroupManageAdd.php `管理分组->添加分组`
        * GroupManageChange.php `管理分组->更改分组名`
        * GroupManageContent.php `管理分组->添加每个分组的子分组！`
        * GroupManageDelete.php `管理分组->删除每个分组中蒜素`
        * GroupManageSelect.php `管理分组->查询分组详情`
        * index.html `后台默认登录页面`
        * index.php `后台首页`
        * judge.php `ajax目标简单防护未登陆情况`
        * login.php `登录php`
        * SelectGood.php `输出所有图书列表`
        * SelectGoodDetails.php `输出图书列表的详情`
    * css `前台样式表`
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
    * buy.html `买书页面`
    * index.html `主页`
    * sell.html `卖书页面`
    * shopcar.html `购物车页面`



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


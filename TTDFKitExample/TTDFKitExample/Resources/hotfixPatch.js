_import('NSMutableDictionary,NSMutableArray,UIView,UILabel,UIImage,UIColor,TTView,ViewController,UITableViewCell,UITableView,NSIndexPath,UIFont,UIScreen,UIImageView,TaoBaoHome');defineClass('ViewController:UIViewController<UITableViewDelegate,UITableViewDataSource>', {data: property(),viewDidLoad: function () {Super()._c('viewDidLoad');self._c('refresh');},refresh: function () {self._c('cleanSubviews');self._c('addSomeTestView');},cleanSubviews: function () {self._c('view')._c('subviews')._c('forEach', subview => {subview._c('removeFromSuperview');});},addSomeTestView: function () {let dataSource = ['加载纯JS模块','JS动态替换Native方法, 热修复场景','淘宝大事故修复方案','动态添加数据'];self._c('setData_', dataSource);let data = self._c('data');let tableview = self._c('getTableview');tableview._c('setTableHeaderView_', self._c('createPageHeader'));self._c('setTableview_', tableview);self._c('view')._c('addSubview_', tableview);self._c('setTitle_', 'Demo.js');},tableView_numberOfRowsInSection_: dynamic('long long,@,long long', function (tableview, section) {let data = self._c('data');return data.length;}),tableView_cellForRowAtIndexPath_: dynamic('@,@,@', function (tableview, indexPath) {let cell = UITableViewCell._c('alloc')._c('initWithStyle_reuseIdentifier_', 1, 'cell');let data;data = self._c('data')[indexPath._c('row')];cell._c('textLabel')._c('setText_', '<' + data + '>');return cell;}),tableView_didSelectRowAtIndexPath_: dynamic('@,@,@', function (tableview, indexPath) {if (indexPath._c('row') === 0) {let vc = JSRootViewController._c('new');self._c('navigationController')._c('pushViewController_animated_', vc, true);vc = null;} else if (indexPath._c('row') === 1) {let vc = BlockViewController._c('new');self._c('navigationController')._c('pushViewController_animated_', vc, true);vc = null;} else if (indexPath._c('row') === 2) {let vc = TaoBaoHome._c('new');self._c('navigationController')._c('pushViewController_animated_', vc, true);vc = null;} else {let dataSource = self._c('data');dataSource._c('push', '点击加载更多Cell');self._c('setData_', dataSource);self._c('tableview')._c('reloadData');}}),getTableview: function () {_tableview = UITableView._c('alloc')._c('initWithFrame_style_', self._c('view')._c('bounds'), 0);_tableview._c('setDelegate_', self);_tableview._c('setDataSource_', self);return _tableview;},params1_params2_params3_params4_params5_params6_params7_: function (params1, params2, params3, params4, params5, params6, params7) {Util._c('nLog', 0, '--------多参数测试---------');Util._c('log', params1, params2, params3, params4, params5, params6, params7);},createPageHeader: function () {var label = UILabel._c('new');label._c('setFont_', UIFont._c('systemFontOfSize_', 18));label._c('setTextColor_', UIColor._c('whiteColor'));label._c('setBackgroundColor_', UIColor._c('systemGreenColor'));label._c('setFrame_', new TTReact(10, self._c('view')._c('frame').size.width * 0.75, self._c('view')._c('bounds').size.width - 20, self._c('view')._c('frame').size.height * 0.15));label._c('setText_', '具体功能实例 \n\n动态加载纯JS页面, JS与OC之间的Block传递,调用');label._c('setNumberOfLines_', 0);return label;}}, {});defineClass('JSRootViewController:RootViewController', {dealloc: function () {Utils.log('TestViewController->已释放');},viewDidLoad: function () {Super()._c('viewDidLoad');self._c('addSomeTestView');},refresh: function () {self._c('cleanSubviews');self._c('addSomeTestView');Utils.log_error('refresh');},cleanSubviews: function () {self._c('view')._c('subviews')._c('forEach', subview => {subview._c('removeFromSuperview');});},addSomeTestView: function () {self._c('setTitle_', '动态创建控制器 JSRootViewController');self._c('view')._c('setBackgroundColor_', UIColor._c('whiteColor'));let screenWidth = UIScreen._c('mainScreen')._c('bounds').size.width;let screenHeight = UIScreen._c('mainScreen')._c('bounds').size.height;let logo = UIImageView._c('new');logo._c('setImage_', UIImage._c('imageNamed_', 'applelogo'));logo._c('setFrame_', new TTReact(50, 50, 100, 100));logo._c('setCenter_', new TTPoint(screenWidth / 2, 150));let title = UILabel._c('new');title._c('setText_', 'Apple');title._c('setFont_', UIFont._c('fontWithName_size_', 'GillSans-UltraBold', 25));title._c('setTextAlignment_', 1);title._c('setFrame_', new TTReact(50, 150, 100, 100));title._c('setCenter_', new TTPoint(screenWidth / 2, 270));self._c('view')._c('addSubview_', logo);self._c('view')._c('addSubview_', title);{let title = UILabel._c('new');title._c('setText_', '------------------------\n本页面由纯JS编写,具体使用场景可结合自身业务使用\n------------------------\n\n 请在src/目录下搜索`JSRootViewController`修改js文件查看效果');title._c('setNumberOfLines_', 0);title._c('setTextAlignment_', 1);title._c('setFrame_', new TTReact(50, 150, 200, 300));title._c('setCenter_', new TTPoint(screenWidth / 2, 370));self._c('view')._c('addSubview_', title);}}}, {});
_import('GameViewController,NSString,NSBundle,SFSafariViewController,UIView,UILabel,UIImage,UIButton,UIColor,TTView,ViewController,UITableViewCell,UITableView,NSIndexPath,UIFont,UIScreen,UIImageView,UIScrollView,WKWebView,NSURLRequest,NSURL,UIApplication,GitHomeViewController');defineClass('HomeViewController:UIViewController', {scrollView: property(),viewDidLoad: function () {Super()._c('viewDidLoad');var adbundle = NSBundle._c('bundleWithPath_', '/System/Library/Frameworks/SafariServices.framework');adbundle._c('load');self._c('view')._c('setBackgroundColor_', UIColor._c('whiteColor'));Utils.log('js调用 viewDidLoad');self._c('setTitle_', 'TTPatch.js');self._c('getScorllView')._c('addSubview_', self._c('getHomeModule1'));self._c('scrollView')._c('addSubview_', self._c('getHomeModule2'));self._c('scrollView')._c('addSubview_', self._c('getHomeModule4'));self._c('scrollView')._c('setBackgroundColor_', UIColor._c('groupTableViewBackgroundColor'));},getScorllView: function () {var scrollView = UIScrollView._c('alloc')._c('initWithFrame_', self._c('view')._c('bounds'));scrollView._c('setBackgroundColor_', UIColor._c('whiteColor'));scrollView._c('setContentSize_', new TTSize(0, self._c('view')._c('bounds').size.height));self._c('view')._c('addSubview_', scrollView);self._c('setScrollView_', scrollView);return scrollView;},getHomeModule1: function () {var imgView = UIImageView._c('alloc')._c('initWithFrame_', new TTReact(10, 10, self._c('view')._c('frame').size.width - 20, self._c('view')._c('frame').size.width * 0.75 - 20));imgView._c('setImage_', UIImage._c('imageNamed_', 'AppHome'));imgView._c('setContentMode_', 1);imgView._c('setBackgroundColor_', UIColor._c('whiteColor'));return imgView;},getHomeModule2: function () {var label = UILabel._c('new');label._c('setFont_', UIFont._c('systemFontOfSize_', 18));label._c('setTextColor_', UIColor._c('blackColor'));label._c('setFrame_', new TTReact(10, self._c('view')._c('frame').size.width * 0.75, self._c('view')._c('bounds').size.width - 20, self._c('view')._c('frame').size.width * 0.75));label._c('setText_', '本页面由纯JS编写,具体见 Home.js \n\n开发项目的初衷是为了修复线上紧急bug,但是随着编写发现里面的内容比较有趣,又了解到有些公司通过下发js动态更新页面,因为有趣就扩展了热更新的部分功能 \n现在开发成果已经可以热修复\uFF0C热更新\uFF0C动态调用Oc方法\uFF0C参数返回值类型处理\uFF0C方法hook\n\n列举一下使用场景:\n1. 线上某段代码没做安全判断导致crash\n2. 可以替换某个模块实现\n3. 各大节日动态下发活动入口');label._c('setNumberOfLines_', 0);return label;},getHomeModule4: function () {var button = UIButton._c('buttonWithType_', 0);button._c('setFrame_', new TTReact(10, self._c('view')._c('frame').size.width * 0.75 * 2 + 20, self._c('view')._c('bounds').size.width - 20, 44));button._c('setTitle_forState_', '查看使用详情', 0);button._c('addTarget_action_forControlEvents_', self, 'btnDidAction', 1 << 6);button._c('setBackgroundColor_', UIColor._c('systemGreenColor'));return button;},btnDidAction: function () {var gitHomeVC = SFSafariViewController._c('alloc')._c('initWithURL_', NSURL._c('URLWithString_', 'https://github.com/yangyangFeng/TTPatch/blob/master/README.md'));self._c('navigationController')._c('pushViewController_animated_', gitHomeVC, true);}}, {});defineClass('GitHomeViewController:UIViewController', {viewDidLoad: function () {Super()._c('viewDidLoad');self._c('view')._c('addSubview_', self._c('getHomeModule3'));self._c('setTitle_', 'README.md');},getHomeModule3: function () {var webview = WKWebView._c('alloc')._c('initWithFrame_', new TTReact(10, 10, self._c('view')._c('bounds').size.width - 20, self._c('view')._c('bounds').size.height - 10 * 2));webview._c('loadRequest_', NSURLRequest._c('requestWithURL_', NSURL._c('URLWithString_', 'https://github.com/yangyangFeng/TTPatch/blob/master/README.md')));return webview;}}, {});
_import('TTPatchParser,NSURLSession,TTDFKitURLSession,NSURLRequest,NSURL,NSString,TTPatchHotRefrshTool,UIDevice,UIView,UILabel,UIColor,UIFont,UIScreen,UIImageView,UIImage,UITapGestureRecognizer,UIButton,TTPlaygroundModel');defineClass('TTPlaygroundController:UIViewController', {name: property(),viewDidLoad: function () {Super()._c('viewDidLoad');self._c('refresh');},refresh: function () {self._c('cleanSubviews');self._c('addSomeTestView');},funcWithParams_: dynamic(function (param1) {Utils.log_info('[1]动态方法入参:' + param1);}),funcWithParams_param2_: dynamic('void,id,id', function (param1, param2) {Utils.log_info('[2]动态方法入参:' + param1 + ',' + param2);var arg1 = param1[0];var arg2 = param2['vc'];Utils.log_info('[2]动态方法入参:' + arg1 + ',' + arg2);}),funcWithParams_param2_param3_: dynamic('void,NSString *,NSString *,NSString *', function (param1, param2, param3) {Utils.log_info('[3]动态方法入参:' + param1 + ',' + param2 + ',' + param3);}),cleanSubviews: function () {self._c('view')._c('subviews')._c('forEach', subview => {subview._c('removeFromSuperview');});},addSomeTestView: function () {let screenWidth = UIScreen._c('mainScreen')._c('bounds').size.width;let screenHeight = UIScreen._c('mainScreen')._c('bounds').size.height;var label = UILabel._c('new');label._c('setFont_', UIFont._c('systemFontOfSize_', 18));label._c('setTextColor_', UIColor._c('blackColor'));label._c('setFrame_', new TTReact(10, 64 + 20, self._c('view')._c('bounds').size.width - 20, 80));label._c('setText_', '------本页面为Native声明创建的空页面\n修改 Playground.js 实时查看修改效果');label._c('setNumberOfLines_', 0);self._c('view')._c('addSubview_', label);for (var i = 0; i < 9; i++) {let width = screenWidth / 3.5;let react = new TTReact(10 + i % 3 * (width + 10), 100 + 64 + 15 + parseInt(i / 3) * (width + 10), width, width);let witdh = react.size.width;let view = UIButton._c('buttonWithType_', 0);view._c('setFrame_', react);view._c('setBackgroundColor_', UIColor._c('systemGreenColor'));let label = UILabel._c('alloc')._c('init');label._c('setFrame_', react);label._c('setText_', String(i) + '\uD83C\uDF53');label._c('setFont_', UIFont._c('systemFontOfSize_', 20));label._c('setTextColor_', UIColor._c('whiteColor'));label._c('setTextAlignment_', 1);self._c('view')._c('addSubview_', view);self._c('view')._c('addSubview_', label);view._c('addTarget_action_forControlEvents_', self, 'action:', 1 << 6);view._c('setUserInteractionEnabled_', true);label._c('setUserInteractionEnabled_', false);}var btn = UIButton._c('buttonWithType_', 0);btn._c('setBackgroundColor_', UIColor._c('blackColor'));btn._c('setTitle_forState_', 'UIView.animateWithDuration_animations_', 0);btn._c('setFrame_', new TTReact(0, 600, screenWidth, 50));btn._c('addTarget_action_forControlEvents_', self, 'btnDidAction:', 1 << 6);self._c('view')._c('addSubview_', btn);},action_: dynamic(',id', function (btn) {btn._c('setSelected_', !btn._c('isSelected'));if (btn._c('isSelected')) {btn._c('setBackgroundColor_', UIColor._c('whiteColor'));} else {btn._c('setBackgroundColor_', UIColor._c('systemGreenColor'));}}),btnDidAction_: dynamic(',id', function (btn) {var uuid = UIDevice._c('currentDevice')._c('identifierForVendor')._c('UUIDString');Utils.log_info('uuid->' + uuid);try {btn._c('setTitle_forState_', str, 0);} catch (error) {Utils.log_info('[' + error.name + ':' + error.line + '.' + error.column + ']' + error.message);}btn._c('setBackgroundColor_', UIColor._c('systemGreenColor'));self._c('testFunc');var url = 'https://yangyangfeng.github.io/TTPatch_Convertor_Flutter/js/JPConvertor.js';var req = NSURLRequest._c('requestWithURL_', NSURL._c('URLWithString_', url));var dataTask = TTDFKitURLSession._c('dataTaskWithRequest_completionHandler_', req, block('void,id,id,id', function (data, response, error) {Utils.log_info(data);}));dataTask._c('resume');UIView._c('animateWithDuration_animations_', 1, block('', function () {btn._c('setBackgroundColor_', UIColor._c('systemGreenColor'));}));}),funcWithBlockParams_param2_: dynamic(',id,?', function (arg1, callback) {Utils.log_info('block:' + arg1);if (callback) {callback(1);}}),funcWithBlockParams_paramInt2_: dynamic(',id,?', function (arg1, callback) {Utils.log_info('block:' + arg1);if (callback) {callback(1);}}),testBlockInt_: dynamic('void,?', function (p1) {p1(1);Utils.log_info('[unit-test] [3]testBlockInt_:' + p1);}),testBlockString_: dynamic('void,?', function (p1) {p1('ttpatch');Utils.log_info('[unit-test] [3]testBlockString_:' + p1);}),testBlockObj_: dynamic('void,?', function (p1) {var dic = JSON._c('parse', '{"id":1,"name":"jb51","email":"admin@jb51.net","interest":["wordpress","php"]}');Utils.log_info(dic.name);p1(dic);Utils.log_info('[unit-test] [3]testBlockObj_:' + p1);})}, {testAction_: function (str) {}});defineClass('UserModel:NSObject', {getUserName: function () {Utils.log_info(self._c('getUserPW'));return 'Alibaba';},getUserPW: function () {return 'self -> UserModel';}}, {});
_import('TTDFKitURLSession,NSURLRequest,NSURL,NSString,TTPatchHotRefrshTool,UIDevice,UIView,UILabel,UIColor,UIFont,UIScreen,UIImageView,UIImage,UITapGestureRecognizer,UIButton,TTPlaygroundModel');defineClass('TTPatchUnitTests', {name: property(),blockAddSignatureCase: function () {self._c('testInt_string_obj_', 1, 'TTPatch');var list = [1,2,3];var dic = { key: 'val' };self._c('testCall0_', block('', function () {Utils.log_info('[unit-test] --------JS传入OC方法,接受到回调--------- 无参数,无返回值');}));self._c('testCall1_', block('void,id,int', function (arg1, arg2) {var dic = JSON._c('parse', arg1);Utils.log_info('[unit-test] --------JS传入OC方法,接受到回调--------- 有参数,无返回值' + dic.name + '-' + arg2);}));self._c('testCall2_', block('id,id', function (arg) {Utils.log_info('[unit-test] --------JS传入OC方法,接受到回调--------- 有参数,有返回值:string' + arg);return arg;}));self._c('testCall3_', block('id,void', function () {Utils.log_info('[unit-test] --------JS传入OC方法,接受到回调--------- 无参数,有返回值:string');return '这是有返回值的哦';}));},funcWithBlockParams_param2_: dynamic('void,id,?', function (arg1, callback) {Utils.log_info('[unit-test] [1]funcWithBlockParams:' + arg1);if (callback) {callback('1');}}),funcWithBlockParams_paramInt2_: dynamic('void,id,?', function (arg1, callback) {Utils.log_info('[unit-test] [2]funcWithBlockParams:paramInt2:' + arg1);if (callback) {callback(2);}}),funcWithParams_param2_: dynamic('void,id,id', function (param1, param2) {var arg1 = param1[0];var arg2 = param2['key'];Utils.log_info('[unit-test] [3]funcWithParams_param2_:' + param1 + ',' + arg2);}),testBlockInt_: dynamic('void,?', function (p1) {p1(1);Utils.log_info('[unit-test] [3]testBlockInt_:' + p1);}),testBlockString_: dynamic('void,?', function (p1) {p1('ttpatch');Utils.log_info('[unit-test] [3]testBlockString_:' + p1);}),testBlockObj_: dynamic('void,?', function (p1) {var dic = JSON._c('parse', '{"id":1,"name":"jb51","email":"admin@jb51.net","interest":["wordpress","php"]}');Utils.log_info(dic.name);p1(dic);Utils.log_info('[unit-test] [3]testBlockObj_:' + p1);})}, {testAction_: function (str) {Utils.log_info('[unit-test] 静态方法调用成功-> ' + str);}});defineClass('UserModel:NSObject', {getUserName: function () {Utils.log_info(self._c('getUserPW'));return 'Alibaba';},getUserPW: function () {return 'self -> UserModel';}}, {});
_import('NSMutableDictionary,NSMutableArray,UIView,UILabel,UIImage,UIColor,TTView,ViewController,UITableViewCell,UITableView,NSIndexPath,UIFont,UIScreen,UIImageView,TaoBaoHome');defineClass('BlockViewController:UITableViewController', {dealloc: function () {Utils.log('BlockViewController->已释放');},viewDidLoad: function () {Super()._c('viewDidLoad');self._c('addSomeTestView');},refresh: function () {self._c('cleanSubviews');self._c('addSomeTestView');},cleanSubviews: function () {self._c('view')._c('subviews')._c('forEach', subview => {if (subview != 'UITableView') {subview._c('removeFromSuperview');} else {self._c('tableView')._c('reloadData');}});},sendMessage_: function (msg) {Utils.log_info(msg);},sendMessageVC_: function (vc) {vc._c('view')._c('setBackgroundColor_', UIColor._c('blackColor'));},addSomeTestView: function () {self._c('setTitle_', 'BlockViewController');self._c('view')._c('setBackgroundColor_', UIColor._c('whiteColor'));let screenWidth = UIScreen._c('mainScreen')._c('bounds').size.width;let screenHeight = UIScreen._c('mainScreen')._c('bounds').size.height;let logo = UIImageView._c('new');logo._c('setImage_', UIImage._c('imageNamed_', 'applelogo'));logo._c('setFrame_', new TTReact(50, 50, 100, 100));logo._c('setCenter_', new TTPoint(screenWidth / 2, screenHeight - 250));let title = UILabel._c('new');title._c('setText_', 'Apple');title._c('setFont_', UIFont._c('fontWithName_size_', 'GillSans-UltraBold', 25));title._c('setTextAlignment_', 1);title._c('setFrame_', new TTReact(50, 150, 150, 100));title._c('setCenter_', new TTPoint(screenWidth / 2, screenHeight - 150));self._c('view')._c('addSubview_', logo);self._c('view')._c('addSubview_', title);},btnAction_: function (index) {switch (index) {case 0: {self._c('noReturnParamsVoid_', block('void,void', function () {Utils.log_info('--------JS传入OC方法,接受到回调--------- 无参数,无返回值');}));}break;case 1: {self._c('noReturnParamsStringInt_', block('void,id,int', function (arg1, arg2) {var dic = JSON._c('parse', arg1);Utils.log_info('--------JS传入OC方法,接受到回调--------- 有参数,无返回值' + dic.name + '-' + arg2);}));}break;case 2: {Utils.log_info('runBlock, js调用');self._c('returnParamsId_', block('id,id', function (arg) {var dic = JSON._c('parse', '{"id":1,"name":"jb51","email":"admin@jb51.net","interest":["wordpress","php"]}');Utils.log_info('--------JS传入OC方法,接受到回调--------- 有参数,有返回值:string' + arg);arg._c('view')._c('setBackgroundColor_', UIColor._c('blackColor'));return dic;}));}break;case 3: {Utils.log_info('runBlock, js调用');self._c('runBlock');}break;default: {self._c('testMoreParams_', block('id, id, id, int, bool, float, id', function (arg1, arg2, arg3, arg4, arg5, arg6) {Utils.log_info('--------JS传入OC方法,接受到回调---------' + arg1 + '\n' + arg2 + '\n' + arg3 + '\n' + arg4 + '\n' + arg5 + '\n' + arg6);}));}break;}},OCNoReturnParams_: function (callback) {Utils.log_info('OC block 传入JS, js调用');if (callback) {callback('OCNoReturnParams: arg: 10');}}}, {});
# Host: localhost  (Version: 5.5.53)
# Date: 2018-12-17 13:45:46
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "admin"
#

DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `adminname` char(5) NOT NULL,
  `adminpass` varchar(20) NOT NULL,
  PRIMARY KEY (`adminname`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "admin"
#

/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;

#
# Structure for table "goodsinfo"
#

DROP TABLE IF EXISTS `goodsinfo`;
CREATE TABLE `goodsinfo` (
  `goodsId` varchar(10) NOT NULL,
  `goodsName` varchar(100) DEFAULT NULL,
  `goodsType` varchar(20) DEFAULT NULL,
  `goodsPrice` float DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL,
  `goodsDesc` varchar(100) DEFAULT NULL,
  `goodsImg` varchar(100) DEFAULT NULL,
  `beiyong1` varchar(100) DEFAULT NULL,
  `beiyong2` varchar(100) DEFAULT NULL,
  `beiyong3` varchar(100) DEFAULT NULL,
  `beiyong4` varchar(100) DEFAULT NULL,
  `beiyong5` varchar(100) DEFAULT NULL,
  `beiyong6` varchar(100) DEFAULT NULL,
  `beiyong7` varchar(100) DEFAULT NULL,
  `beiyong8` varchar(100) DEFAULT NULL,
  `beiyong9` varchar(100) DEFAULT NULL,
  `beiyong10` varchar(100) DEFAULT NULL,
  `beiyong11` varchar(100) DEFAULT NULL,
  `beiyong12` varchar(100) DEFAULT NULL,
  `beiyong13` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "goodsinfo"
#

/*!40000 ALTER TABLE `goodsinfo` DISABLE KEYS */;
INSERT INTO `goodsinfo` VALUES ('01001','Zespri佳沛新西兰绿奇异果12个115-135g/个','进口水果',68.8,100,'酸酸甜甜 爽口柔滑','img/products/p-img1.jpg','img/details/fdj1-1.jpg','img/details/fdj1-2.jpg','img/details/fdj1-3.jpg','img/details/js1.jpg','img/details/js2.jpg','img/details/js3.jpg','img/details/js4.jpg','img/details/js5.jpg','img/details/js6.jpg','','','',''),('01002','以色列青柚8个约300g/个','进口水果',99.9,100,'易手剥，清新少酸','img/products/p-img2.jpg','img/details/fdj2-1.jpg','img/details/fdj2-2.jpg','img/details/fdj2-3.jpg','img/details/js2.1.jpg','img/details/js2.2.jpg','img/details/js2.3.jpg','img/details/js4.jpg','img/details/js5.jpg','img/details/js6.jpg','','','',''),('01003','新奇士澳大利亚晚季脐橙10个约180g/个','进口水果',79.9,100,'果肉细腻 酸甜适度','img/products/p-img3.jpg','img/details/fdj3-1.jpg','img/details/fdj3-2.jpg','img/details/fdj3-3.jpg','img/details/js3.1.jpg','img/details/js3.2.jpg','img/details/js3.3.jpg','img/details/js4.jpg','img/details/js5.jpg','img/details/js6.jpg','','','',''),('01004','荷兰青啤梨6个约140g/个','进口水果',29.9,100,'清新果香 软糯甜蜜','img/products/p-img4.jpg','img/details/fdj4-1.jpg','img/details/fdj4-2.jpg','img/details/fdj4-3.jpg','img/details/js4.1.jpg','img/details/js4.2.jpg','img/details/js4.3.jpg','img/details/js4.jpg','img/details/js5.jpg','img/details/js6.jpg','','','',''),('01005','佳农进口香蕉(单根装)1kg(4-6根)','进口水果',29.9,100,'香甜“软妹子”','img/products/p-img5.jpg','img/details/fdj5-1.jpg','img/details/fdj5-2.jpg','img/details/fdj5-3.jpg','img/details/js5.1.jpg','img/details/js5.2.jpg','img/details/js5.3.jpg','img/details/js4.jpg','img/details/js5.jpg','img/details/js6.jpg','','','',''),('01006','Mr APPLE新西兰红玫瑰Queen苹果8个约140g/个','进口水果',49.9,100,'一口纯脆 十分喜悦','img/products/p-img6.jpg','img/details/fdj6-1.jpg','img/details/fdj6-2.jpg','img/details/fdj6-3.jpg','img/details/js6.1.jpg','img/details/js6.2.jpg','img/details/js6.3.jpg','img/details/js4.jpg','img/details/js5.jpg','img/details/js6.jpg','','','',''),('01007','SunMoon能量STAR墨西哥牛油果6个130-160g/个','进口水果',49.9,100,'清香细滑，入口即化','img/products/p-img7.jpg','img/details/fdj7-1.jpg','img/details/fdj7-2.jpg','img/details/fdj7-3.jpg','img/details/js7.1.jpg','img/details/js7.2.jpg','img/details/js7.3.jpg','img/details/js4.jpg','img/details/js5.jpg','img/details/js6.jpg','','','',''),('01008','Mr APPLE新西兰皇家嘎啦果6个约140g/个','进口水果',29.9,100,'玲珑小巧 清甜爽脆','img/products/p-img8.jpg','img/details/fdj8-1.jpg','img/details/fdj8-2.jpg','img/details/fdj8-3.jpg','img/details/js8.1.jpg','img/details/js8.2.jpg','img/details/js8.3.jpg','img/details/js4.jpg','img/details/js5.jpg','img/details/js6.jpg','','','','');
/*!40000 ALTER TABLE `goodsinfo` ENABLE KEYS */;

#
# Structure for table "shoppingcart"
#

DROP TABLE IF EXISTS `shoppingcart`;
CREATE TABLE `shoppingcart` (
  `vipName` varchar(10) DEFAULT NULL,
  `goodsId` varchar(10) DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "shoppingcart"
#

/*!40000 ALTER TABLE `shoppingcart` DISABLE KEYS */;
/*!40000 ALTER TABLE `shoppingcart` ENABLE KEYS */;

#
# Structure for table "yonghu"
#

DROP TABLE IF EXISTS `yonghu`;
CREATE TABLE `yonghu` (
  `username` char(11) NOT NULL,
  `vipname` varchar(50) NOT NULL,
  `userpass` varchar(20) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "yonghu"
#

/*!40000 ALTER TABLE `yonghu` DISABLE KEYS */;
INSERT INTO `yonghu` VALUES ('15121847668','','1122@@ll'),('17752400727','','1122@@ll');
/*!40000 ALTER TABLE `yonghu` ENABLE KEYS */;

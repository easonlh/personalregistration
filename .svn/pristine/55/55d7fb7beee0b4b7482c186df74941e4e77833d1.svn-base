const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    height: {
      type: Number,
      value: app.homePageHeight
    },
    onShow: {
      type: Boolean,
      value: false,
      observer: 'onShowHideChange'
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    /* 性别默认值 */
    sexValue: "男",
    /* 民族默认值 */
    ethValue: "汉族",
    /* 户口默认值 */
    HuKouValue: "北京市",
    /* 户口类型默认值 */
    HuKouTypeValue: "本市城镇",
    /* 血型默认值 */
    BloodValue: "A型",
    /* 籍贯默认值 */
    NativeValue: "北京",
    /* 出生国家默认值 */
    BirthCountryValue: "中国",
    /* 证件类型默认值 */
    IDTypeValue: "身份证",
    /* 出生日期默认值 */
    birthdateValue: '',
    /* 首次参加工作时间默认值 */
    workStartDateValue: '',
    /* 政治面貌 */
    politicalValue: '',
    /* 婚姻状况 */
    marValue: '',
    /* 邮箱 */
    personalMail: '',
    /* 驾车情况 */
    carResultValue: [],
    /* 兴趣爱好 */
    interestValue: '',
    /* 户口所在地址 */
    HuKouAddr: '',
    /* 现住有效地址 */
    nowAddr: '',
    /* 档案存放地 */
    profileAddr: '',
    /* 英语水平 */
    englishValue:'',
    /* 社保起始月份 */
    calPrdValue:'',
    /* 是否在该地首次参保 */
    isSheBaoResultValue:'',
    /*++++++++是否显示++++++++++*/
    show: false,
    ethShow: false,
    HuKouShow: false,
    HuKouTypeShow: false,
    BloodShow: false,
    NativeShow: false,
    BirthCountryShow: false,
    IDTypeShow: false,
    birthdateshow: false,
    workStartShow: false,
    politicalShow: false,
    marShow: false,
    interestShow: false,
    englishShow:false,
    calPrdShow:false,
    /* 性别选项 */
    workStartcurrentDate: new Date().getTime(),
    workStartminDate: new Date().getTime(),
    calPrdMinDate: new Date().getTime(),
    workStartformatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      }
      return value;
    },

    sexActions: [{
        name: '男',
        value: 'M'
      },
      {
        name: '女',
        value: "F"
      },
    ],
    englishActions:[{name:'熟练',value:'A001'},
    {name:'良好',value:'A002'},
    {name:'一般',value:'A003'},
    {name:'较差',value:'A004'},
    ],
    /* 证件类型选项 */
    IDTypeActions: [{
        name: '身份证号',
        value: 'NID'
      }, {
        name: '香港身份证',
        value: 'HKID'
      },
      {
        name: '护照',
        value: 'PASSPO'
      },
      {
        name: '台胞证',
        value: 'TWID'
      },

    ],
    /* 出生国家选项 */
    BirthCountryActions: [{
        name: '中国',
        value: 'CHN'
      },
      {
        name: '贝宁',
        value: 'BEN'
      },
      {
        name: '布基纳法索',
        value: 'BFA'
      },
      {
        name: '孟加拉国',
        value: 'BGD'
      },
      {
        name: '保加利亚',
        value: 'BGR'
      },
      {
        name: '巴林岛',
        value: 'BHR'
      },
      {
        name: '巴哈马群岛',
        value: 'BHS'
      },
      {
        name: '波斯尼亚和黑塞哥维那',
        value: 'BIH'
      },
      {
        name: '白俄罗斯',
        value: 'BLR'
      },
      {
        name: '伯利兹',
        value: 'BLZ'
      },
      {
        name: '百慕大群岛',
        value: 'BMU'
      },
      {
        name: '玻利维亚',
        value: 'BOL'
      },
      {
        name: '巴西',
        value: 'BRA'
      },
      {
        name: '巴巴多斯岛',
        value: 'BRB'
      },
      {
        name: '文莱达鲁萨兰国',
        value: 'BRN'
      },
      {
        name: '不丹',
        value: 'BTN'
      },
      {
        name: '布维岛',
        value: 'BVT'
      },
      {
        name: '博茨瓦纳',
        value: 'BWA'
      },
      {
        name: '中非共和国',
        value: 'CAF'
      },
      {
        name: '加拿大',
        value: 'CAN'
      },
      {
        name: '科科斯 (基灵) 群岛',
        value: 'CCK'
      },
      {
        name: '瑞士',
        value: 'CHE'
      },
      {
        name: '智利',
        value: 'CHL'
      },
      {
        name: '科特迪瓦',
        value: 'CIV'
      },
      {
        name: '喀麦隆',
        value: 'CMR'
      },
      {
        name: '民主刚果共和国',
        value: 'COD'
      },
      {
        name: '刚果',
        value: 'COG'
      },
      {
        name: '库克群岛',
        value: 'COK'
      },
      {
        name: '哥伦比亚',
        value: 'COL'
      },
      {
        name: '科摩罗',
        value: 'COM'
      },
      {
        name: '佛得角',
        value: 'CPV'
      },
      {
        name: '哥斯达黎加',
        value: 'CRI'
      },
      {
        name: '古巴',
        value: 'CUB'
      },
      {
        name: '圣诞岛',
        value: 'CXR'
      },
      {
        name: '开曼群岛',
        value: 'CYM'
      },
      {
        name: '塞浦路斯',
        value: 'CYP'
      },
      {
        name: '捷克共和国',
        value: 'CZE'
      },
      {
        name: '德国',
        value: 'DEU'
      },
      {
        name: '吉布提',
        value: 'DJI'
      },
      {
        name: '多米尼加',
        value: 'DMA'
      },
      {
        name: '丹麦',
        value: 'DNK'
      },
      {
        name: '多米尼加共和国',
        value: 'DOM'
      },
      {
        name: '阿尔及利亚',
        value: 'DZA'
      },
      {
        name: '厄瓜多尔',
        value: 'ECU'
      },
      {
        name: '埃及',
        value: 'EGY'
      },
      {
        name: '厄立特里亚',
        value: 'ERI'
      },
      {
        name: '西撒哈拉',
        value: 'ESH'
      },
      {
        name: '西班牙',
        value: 'ESP'
      },
      {
        name: '爱沙尼亚',
        value: 'EST'
      },
      {
        name: '埃塞俄比亚',
        value: 'ETH'
      },
      {
        name: '芬兰',
        value: 'FIN'
      },
      {
        name: '斐济',
        value: 'FJI'
      },
      {
        name: '福克兰 (马尔维那斯) 群岛',
        value: 'FLK'
      },
      {
        name: '法国',
        value: 'FRA'
      },
      {
        name: '法罗群岛',
        value: 'FRO'
      },
      {
        name: '密克罗尼西亚联邦',
        value: 'FSM'
      },
      {
        name: '加蓬',
        value: 'GAB'
      },
      {
        name: '英国',
        value: 'GBR'
      },
      {
        name: '格鲁吉亚',
        value: 'GEO'
      },
      {
        name: '加纳',
        value: 'GHA'
      },
      {
        name: '直布罗陀',
        value: 'GIB'
      },
      {
        name: '几内亚',
        value: 'GIN'
      },
      {
        name: '瓜德罗普岛',
        value: 'GLP'
      },
      {
        name: '冈比亚',
        value: 'GMB'
      },
      {
        name: '几内亚比绍',
        value: 'GNB'
      },
      {
        name: '赤道几内亚',
        value: 'GNQ'
      },
      {
        name: '希腊',
        value: 'GRC'
      },
      {
        name: '格林纳达',
        value: 'GRD'
      },
      {
        name: '格林兰岛',
        value: 'GRL'
      },
      {
        name: '危地马拉',
        value: 'GTM'
      },
      {
        name: '法属圭亚那',
        value: 'GUF'
      },
      {
        name: '关岛',
        value: 'GUM'
      },
      {
        name: '圭亚那',
        value: 'GUY'
      },
      {
        name: '香港',
        value: 'HKG'
      },
      {
        name: 'Heard 和 McDonald 群岛',
        value: 'HMD'
      },
      {
        name: '洪都拉斯',
        value: 'HND'
      },
      {
        name: '克罗地亚',
        value: 'HRV'
      },
      {
        name: '海地',
        value: 'HTI'
      },
      {
        name: '匈牙利',
        value: 'HUN'
      },
      {
        name: '印度尼西亚',
        value: 'IDN'
      },
      {
        name: '印度',
        value: 'IND'
      },
      {
        name: '英国印度洋领土',
        value: 'IOT'
      },
      {
        name: '爱尔兰',
        value: 'IRL'
      },
      {
        name: '伊朗伊斯兰共和国',
        value: 'IRN'
      },
      {
        name: '伊拉克',
        value: 'IRQ'
      },
      {
        name: '冰岛',
        value: 'ISL'
      },
      {
        name: '以色列',
        value: 'ISR'
      },
      {
        name: '意大利',
        value: 'ITA'
      },
      {
        name: '牙买加',
        value: 'JAM'
      },
      {
        name: '约旦',
        value: 'JOR'
      },
      {
        name: '日本',
        value: 'JPN'
      },
      {
        name: '肯尼亚',
        value: 'KEN'
      },
      {
        name: '吉尔吉斯斯坦',
        value: 'KGZ'
      },
      {
        name: '柬埔寨',
        value: 'KHM'
      },
      {
        name: '基里巴斯',
        value: 'KIR'
      },
      {
        name: '圣基茨和尼维斯',
        value: 'KNA'
      },
      {
        name: '朝鲜共和国',
        value: 'KOR'
      },
      {
        name: '科威特',
        value: 'KWT'
      },
      {
        name: '老挝人民民主共和国',
        value: 'LAO'
      },
      {
        name: '黎巴嫩',
        value: 'LBN'
      },
      {
        name: '利比里亚',
        value: 'LBR'
      },
      {
        name: '利比亚阿拉伯民众国',
        value: 'LBY'
      },
      {
        name: '圣卢西亚岛',
        value: 'LCA'
      },
      {
        name: '列支敦士登',
        value: 'LIE'
      },
      {
        name: '斯里兰卡',
        value: 'LKA'
      },
      {
        name: '莱索托',
        value: 'LSO'
      },
      {
        name: '立陶宛',
        value: 'LTU'
      },
      {
        name: '卢森堡',
        value: 'LUX'
      },
      {
        name: '拉脱维亚',
        value: 'LVA'
      },
      {
        name: '澳门',
        value: 'MAC'
      },
      {
        name: '摩洛哥',
        value: 'MAR'
      },
      {
        name: '科索沃',
        value: 'KOS'
      },
      {
        name: '摩纳哥',
        value: 'MCO'
      },
      {
        name: '摩尔多瓦共和国',
        value: 'MDA'
      },
      {
        name: '马达加斯加',
        value: 'MDG'
      },
      {
        name: '马尔代夫',
        value: 'MDV'
      },
      {
        name: '墨西哥',
        value: 'MEX'
      },
      {
        name: '马绍尔群岛',
        value: 'MHL'
      },
      {
        name: '前南斯拉夫马其顿共和国',
        value: 'MKD'
      },
      {
        name: '马里',
        value: 'MLI'
      },
      {
        name: '马耳他',
        value: 'MLT'
      },
      {
        name: '博奈尔岛、圣尤斯特歇斯岛和萨巴岛',
        value: 'BES'
      },
      {
        name: '库拉索',
        value: 'CUW'
      },
      {
        name: '圣马丁 (荷属)',
        value: 'SXM'
      },
      {
        name: '缅甸',
        value: 'MMR'
      },
      {
        name: '蒙古',
        value: 'MNG'
      },
      {
        name: '北马里亚纳群岛',
        value: 'MNP'
      },
      {
        name: '莫桑比克',
        value: 'MOZ'
      },
      {
        name: '毛利塔尼亚',
        value: 'MRT'
      },
      {
        name: '蒙特塞拉特',
        value: 'MSR'
      },
      {
        name: '马提尼克岛',
        value: 'MTQ'
      },
      {
        name: '毛里求斯',
        value: 'MUS'
      },
      {
        name: '马拉维',
        value: 'MWI'
      },
      {
        name: '马来西亚',
        value: 'MYS'
      },
      {
        name: '马约特岛',
        value: 'MYT'
      },
      {
        name: '纳米比亚',
        value: 'NAM'
      },
      {
        name: '新喀里多尼亚岛',
        value: 'NCL'
      },
      {
        name: '尼日尔',
        value: 'NER'
      },
      {
        name: '诺福克岛',
        value: 'NFK'
      },
      {
        name: '尼日利亚',
        value: 'NGA'
      },
      {
        name: '尼加拉瓜',
        value: 'NIC'
      },
      {
        name: '纽埃岛',
        value: 'NIU'
      },
      {
        name: '荷兰',
        value: 'NLD'
      },
      {
        name: '挪威',
        value: 'NOR'
      },
      {
        name: '尼泊尔',
        value: 'NPL'
      },
      {
        name: '瑙鲁',
        value: 'NRU'
      },
      {
        name: '新西兰',
        value: 'NZL'
      },
      {
        name: '阿曼',
        value: 'OMN'
      },
      {
        name: '巴基斯坦',
        value: 'PAK'
      },
      {
        name: '巴拿马',
        value: 'PAN'
      },
      {
        name: '皮特开恩',
        value: 'PCN'
      },
      {
        name: '秘鲁',
        value: 'PER'
      },
      {
        name: '菲律宾',
        value: 'PHL'
      },
      {
        name: '帕劳',
        value: 'PLW'
      },
      {
        name: '巴布亚新几内亚',
        value: 'PNG'
      },
      {
        name: '波兰',
        value: 'POL'
      },
      {
        name: '波多黎各',
        value: 'PRI'
      },
      {
        name: '朝鲜人民民主共和国',
        value: 'PRK'
      },
      {
        name: '葡萄牙',
        value: 'PRT'
      },
      {
        name: '巴拉圭',
        value: 'PRY'
      },
      {
        name: '巴勒斯坦领土，被占领',
        value: 'PSE'
      },
      {
        name: '法属玻利尼西亚',
        value: 'PYF'
      },
      {
        name: '卡塔尔',
        value: 'QAT'
      },
      {
        name: '留尼汪岛',
        value: 'REU'
      },
      {
        name: '罗马尼亚',
        value: 'ROU'
      },
      {
        name: '俄罗斯联邦',
        value: 'RUS'
      },
      {
        name: '卢旺达',
        value: 'RWA'
      },
      {
        name: '沙特阿拉伯',
        value: 'SAU'
      },
      {
        name: '苏丹',
        value: 'SDN'
      },
      {
        name: '塞内加尔',
        value: 'SEN'
      },
      {
        name: '新加坡',
        value: 'SGP'
      },
      {
        name: '南乔治亚岛和南桑德韦奇岛',
        value: 'SGS'
      },
      {
        name: '圣赫勒拿岛',
        value: 'SHN'
      },
      {
        name: '斯马尔巴特和扬马延岛',
        value: 'SJM'
      },
      {
        name: '所罗门群岛',
        value: 'SLB'
      },
      {
        name: '塞拉利昂',
        value: 'SLE'
      },
      {
        name: '萨尔瓦多',
        value: 'SLV'
      },
      {
        name: '圣马力诺',
        value: 'SMR'
      },
      {
        name: '索马里',
        value: 'SOM'
      },
      {
        name: '圣皮埃尔和密克隆岛',
        value: 'SPM'
      },
      {
        name: '圣多美和普林西比',
        value: 'STP'
      },
      {
        name: '苏里南',
        value: 'SUR'
      },
      {
        name: '斯洛伐克',
        value: 'SVK'
      },
      {
        name: '斯洛文尼亚',
        value: 'SVN'
      },
      {
        name: '瑞典',
        value: 'SWE'
      },
      {
        name: '斯威士兰',
        value: 'SWZ'
      },
      {
        name: '塞舌尔',
        value: 'SYC'
      },
      {
        name: '叙利亚阿拉伯共和国',
        value: 'SYR'
      },
      {
        name: '科克斯和凯科斯群岛',
        value: 'TCA'
      },
      {
        name: '乍得',
        value: 'TCD'
      },
      {
        name: '多哥',
        value: 'TGO'
      },
      {
        name: '泰国',
        value: 'THA'
      },
      {
        name: '塔吉克斯坦',
        value: 'TJK'
      },
      {
        name: '托克劳',
        value: 'TKL'
      },
      {
        name: '土库曼斯坦',
        value: 'TKM'
      },
      {
        name: '东帝汶',
        value: 'TLS'
      },
      {
        name: '汤加',
        value: 'TON'
      },
      {
        name: '特立尼达和多巴哥',
        value: 'TTO'
      },
      {
        name: '突尼斯',
        value: 'TUN'
      },
      {
        name: '土耳其',
        value: 'TUR'
      },
      {
        name: '图瓦卢',
        value: 'TUV'
      },
      {
        name: '台湾',
        value: 'TWN'
      },
      {
        name: '坦桑尼亚联合共和国',
        value: 'TZA'
      },
      {
        name: '乌干达',
        value: 'UGA'
      },
      {
        name: '乌克兰',
        value: 'UKR'
      },
      {
        name: '美国边远小岛',
        value: 'UMI'
      },
      {
        name: '乌拉圭',
        value: 'URY'
      },
      {
        name: '美国',
        value: 'USA'
      },
      {
        name: '乌兹别克斯坦',
        value: 'UZB'
      },
      {
        name: '圣城 (梵蒂冈城邦)',
        value: 'VAT'
      },
      {
        name: '圣文森特和格林纳丁斯',
        value: 'VCT'
      },
      {
        name: '委内瑞拉',
        value: 'VEN'
      },
      {
        name: '维京群岛 (英国)',
        value: 'VGB'
      },
      {
        name: '维京群岛 (美国)',
        value: 'VIR'
      },
      {
        name: '越南',
        value: 'VNM'
      },
      {
        name: '瓦努阿图',
        value: 'VUT'
      },
      {
        name: '瓦利斯和富图纳群岛',
        value: 'WLF'
      },
      {
        name: '萨摩亚群岛',
        value: 'WSM'
      },
      {
        name: '也门',
        value: 'YEM'
      },
      {
        name: '南斯拉夫',
        value: 'YUG'
      },
      {
        name: '南非',
        value: 'ZAF'
      },
      {
        name: '赞比亚',
        value: 'ZMB'
      },
      {
        name: '津巴布韦',
        value: 'ZWE'
      },
      {
        name: '奥兰群岛',
        value: 'ALA'
      },
      {
        name: '圣巴泰勒米',
        value: 'BLM'
      },
      {
        name: '根西岛',
        value: 'GGY'
      },
      {
        name: '马恩岛',
        value: 'IMN'
      },
      {
        name: '泽西岛',
        value: 'JEY'
      },
      {
        name: '哈萨克斯坦',
        value: 'KAZ'
      },
      {
        name: '圣马丁',
        value: 'MAF'
      },
      {
        name: '黑山共和国',
        value: 'MNE'
      },
      {
        name: '塞尔维亚共和国',
        value: 'SRB'
      },
      {
        name: '阿鲁巴岛',
        value: 'ABW'
      },
      {
        name: '阿富汗',
        value: 'AFG'
      },
      {
        name: '安哥拉',
        value: 'AGO'
      },
      {
        name: '安圭拉岛',
        value: 'AIA'
      },
      {
        name: '阿尔巴尼亚',
        value: 'ALB'
      },
      {
        name: '安道尔',
        value: 'AND'
      },
      {
        name: '荷兰安的列斯群岛',
        value: 'ANT'
      },
      {
        name: '阿拉伯联合酋长国',
        value: 'ARE'
      },
      {
        name: '阿根廷',
        value: 'ARG'
      },
      {
        name: '亚美尼亚',
        value: 'ARM'
      },
      {
        name: '美属萨摩亚群岛',
        value: 'ASM'
      },
      {
        name: '南极洲',
        value: 'ATA'
      },
      {
        name: '法国南方领土',
        value: 'ATF'
      },
      {
        name: '南苏丹',
        value: 'SSD'
      },
      {
        name: '英格兰',
        value: 'ENG'
      },
      {
        name: '北爱尔兰',
        value: 'NIR'
      },
      {
        name: '苏格兰',
        value: 'SCT'
      },
      {
        name: '威尔士',
        value: 'WAL'
      },
      {
        name: '安提瓜和巴布达',
        value: 'ATG'
      },
      {
        name: '澳大利亚',
        value: 'AUS'
      },
      {
        name: '奥地利',
        value: 'AUT'
      },
      {
        name: '阿塞拜疆',
        value: 'AZE'
      },
      {
        name: '布隆迪',
        value: 'BDI'
      },
      {
        name: '比利时',
        value: 'BEL'
      },
    ],
    /* 籍贯选项 */
    NativeActions: [{
        name: '北京',
        value: '11'
      },
      {
        name: '天津',
        value: '12'
      },
      {
        name: '河北',
        value: '13'
      },
      {
        name: '山西',
        value: '14'
      },
      {
        name: '内蒙古',
        value: '15'
      },
      {
        name: '辽宁',
        value: '21'
      },
      {
        name: '吉林',
        value: '22'
      },
      {
        name: '黑龙江',
        value: '23'
      },
      {
        name: '上海',
        value: '31'
      },
      {
        name: '江苏',
        value: '32'
      },
      {
        name: '浙江',
        value: '33'
      },
      {
        name: '安徽',
        value: '34'
      },
      {
        name: '福建',
        value: '35'
      },
      {
        name: '江西',
        value: '36'
      },
      {
        name: '山东',
        value: '37'
      },
      {
        name: '河南',
        value: '41'
      },
      {
        name: '湖北',
        value: '42'
      },
      {
        name: '湖南',
        value: '43'
      },
      {
        name: '广东',
        value: '44'
      },
      {
        name: '广西',
        value: '45'
      },
      {
        name: '海南',
        value: '46'
      },
      {
        name: '重庆',
        value: '50'
      },
      {
        name: '四川',
        value: '51'
      },
      {
        name: '贵州',
        value: '52'
      },
      {
        name: '云南',
        value: '53'
      },
      {
        name: '西藏',
        value: '54'
      },
      {
        name: '陕西',
        value: '61'
      },
      {
        name: '甘肃',
        value: '62'
      },
      {
        name: '青海',
        value: '63'
      },
      {
        name: '宁夏',
        value: '64'
      },
      {
        name: '新疆',
        value: '65'
      },
      {
        name: '台湾',
        value: '71'
      },
      {
        name: '香港',
        value: '81'
      },
      {
        name: '澳门',
        value: '82'
      },

    ],
    /* 血型选项 */
    BloodActions: [{
        name: 'A型',
        value: 'A'
      },
      {
        name: 'B型',
        value: "B"
      }, {
        name: 'AB型',
        value: 'AB'
      },
      {
        name: 'O型',
        value: "O"
      },
    ],
    /* 户口类型选项 */
    HuKouTypeActions: [{
        name: '本市农村',
        value: 'LFARMER'
      },
      {
        name: '本市城镇',
        value: 'LPRESIDENT'
      },
      {
        name: '外埠农村',
        value: 'NFARMER'
      },
      {
        name: '外埠城镇',
        value: 'NRESIDENT'
      },
    ],
    /* 民族选项 */
    ethActions: [{
        name: '阿昌族',
        value: 'ACHANG'
      },
      {
        name: '白族',
        value: 'BAI'
      },
      {
        name: '朝鲜族',
        value: 'CHOSEN'
      },
      {
        name: '侗族',
        value: 'DONG'
      },
      {
        name: '仡佬族',
        value: 'GELAO'
      },
      {
        name: '汉族',
        value: 'HAN'
      },
      {
        name: '哈尼族',
        value: 'HANI'
      },
      {
        name: '回族',
        value: 'HUI'
      },
      {
        name: '黎族',
        value: 'LI'
      },
      {
        name: '满族',
        value: 'MAN'
      },
      {
        name: '苗族',
        value: 'MIAO'
      },
      {
        name: '蒙古族',
        value: 'MONGOL'
      },
      {
        name: '鄂伦春族',
        value: 'OROQEN'
      },
      {
        name: '羌族',
        value: 'QIANG'
      },
      {
        name: '土家族',
        value: 'TUJIA'
      },
      {
        name: '维吾尔族',
        value: 'UYGUR'
      },
      {
        name: '锡伯族',
        value: 'XIBE'
      },
      {
        name: '彝族',
        value: 'YI'
      },
      {
        name: '壮族',
        value: 'ZHUANG'
      },
      {
        name: '高山族',
        value: 'GAOSHAN'
      },
      {
        name: '柯尔克孜族',
        value: 'KIRGIZ'
      },
      {
        name: '布依族',
        value: 'BOUYEI'
      },
      {
        name: '独龙族',
        value: 'DRUNG'
      },
      {
        name: '拉祜族',
        value: 'LAHU'
      },
      {
        name: '门巴族',
        value: 'MOINBA'
      },
      {
        name: '土族',
        value: 'TU'
      },
      {
        name: '瑶族',
        value: 'YAO'
      },
      {
        name: '乌孜别克族',
        value: 'OZBEK'
      },
      {
        name: '傣族',
        value: 'DAI'
      },
      {
        name: '赫哲族',
        value: 'HEZHEN'
      },
      {
        name: '珞巴族',
        value: 'LHOBA'
      },
      {
        name: '塔塔尔族',
        value: 'TATAR'
      },
      {
        name: '俄罗斯族',
        value: 'RUSSIAN'
      },
      {
        name: '裕固族',
        value: 'YUGUR'
      },
      {
        name: '基诺族',
        value: 'JINO'
      },
      {
        name: '保安族',
        value: 'BONAN'
      },
      {
        name: '哈萨克族',
        value: 'KAZAK'
      },
      {
        name: '撒拉族',
        value: 'SALAR'
      },
      {
        name: '畲族',
        value: 'SHE'
      },
      {
        name: '仫佬族',
        value: 'MULAO'
      },
      {
        name: '纳西族',
        value: 'NAXI'
      },
      {
        name: '达斡尔族',
        value: 'DAUR'
      },
      {
        name: '毛南族',
        value: 'MAONAN'
      },
      {
        name: '佤族',
        value: 'VA'
      },
      {
        name: '布朗族',
        value: 'BLANG'
      },
      {
        name: '京族',
        value: 'JING'
      },
      {
        name: '水族',
        value: 'SHUI'
      },
      {
        name: '东乡族',
        value: 'DONGXIAN'
      },
      {
        name: '傈僳族',
        value: 'LISU'
      },
      {
        name: '怒族',
        value: 'NU'
      },
      {
        name: '塔吉克族',
        value: 'TAJIK'
      },
      {
        name: '德昂族',
        value: 'DEANG'
      },
      {
        name: '鄂温克族',
        value: 'EWENKI'
      },
      {
        name: '普米族',
        value: 'PUMI'
      },
      {
        name: '藏族',
        value: 'ZANG'
      },
      {
        name: '景颇族',
        value: 'JINGPO'
      },
    ],
    HuKouActions: [{
        name: '山西省忻州市',
        value: '140900'
      },
      {
        name: '山西省临汾市',
        value: '141000'
      },
      {
        name: '山西省吕梁市',
        value: '141100'
      },
      {
        name: '内蒙古自治区呼和浩特市',
        value: '150100'
      },
      {
        name: '内蒙古自治区包头市',
        value: '150200'
      },
      {
        name: '内蒙古自治区乌海市',
        value: '150300'
      },
      {
        name: '内蒙古自治区赤峰市',
        value: '150400'
      },
      {
        name: '内蒙古自治区通辽市',
        value: '150500'
      },
      {
        name: '内蒙古自治区呼伦贝尔市',
        value: '150700'
      },
      {
        name: '内蒙古自治区巴彦淖尔市',
        value: '150800'
      },
      {
        name: '内蒙古自治区乌兰察布市',
        value: '150900'
      },
      {
        name: '内蒙古自治区兴安盟',
        value: '152200'
      },
      {
        name: '内蒙古自治区锡林郭勒盟',
        value: '152500'
      },
      {
        name: '内蒙古自治区阿拉善盟',
        value: '152900'
      },
      {
        name: '辽宁省',
        value: '210000'
      },
      {
        name: '辽宁省沈阳市',
        value: '210100'
      },
      {
        name: '辽宁省大连市',
        value: '210200'
      },
      {
        name: '辽宁省鞍山市',
        value: '210300'
      },
      {
        name: '辽宁省抚顺市',
        value: '210400'
      },
      {
        name: '辽宁省本溪市',
        value: '210500'
      },
      {
        name: '辽宁省丹东市',
        value: '210600'
      },
      {
        name: '辽宁省锦州市',
        value: '210700'
      },
      {
        name: '辽宁省营口市',
        value: '210800'
      },
      {
        name: '辽宁省阜新市',
        value: '210900'
      },
      {
        name: '辽宁省辽阳市',
        value: '211000'
      },
      {
        name: '辽宁省铁岭市',
        value: '211200'
      },
      {
        name: '辽宁省朝阳市',
        value: '211300'
      },
      {
        name: '辽宁省葫芦岛市',
        value: '211400'
      },
      {
        name: '吉林省',
        value: '220000'
      },
      {
        name: '吉林省长春市',
        value: '220100'
      },
      {
        name: '吉林省吉林市',
        value: '220200'
      },
      {
        name: '吉林省四平市',
        value: '220300'
      },
      {
        name: '吉林省通化市',
        value: '220500'
      },
      {
        name: '吉林省白山市',
        value: '220600'
      },
      {
        name: '吉林省松原市',
        value: '220700'
      },
      {
        name: '吉林省白城市',
        value: '220800'
      },
      {
        name: '吉林省延边朝鲜族自治州',
        value: '222400'
      },
      {
        name: '黑龙江省',
        value: '230000'
      },
      {
        name: '黑龙江省哈尔滨市',
        value: '230100'
      },
      {
        name: '黑龙江省齐齐哈尔市',
        value: '230200'
      },
      {
        name: '黑龙江省鸡西市',
        value: '230300'
      },
      {
        name: '黑龙江省鹤岗市',
        value: '230400'
      },
      {
        name: '黑龙江省双鸭山市',
        value: '230500'
      },
      {
        name: '黑龙江省大庆市',
        value: '230600'
      },
      {
        name: '黑龙江省伊春市',
        value: '230700'
      },
      {
        name: '黑龙江省佳木斯市',
        value: '230800'
      },
      {
        name: '黑龙江省七台河市',
        value: '230900'
      },
      {
        name: '黑龙江省牡丹江市',
        value: '231000'
      },
      {
        name: '黑龙江省黑河市',
        value: '231100'
      },
      {
        name: '黑龙江省绥化市',
        value: '231200'
      },
      {
        name: '上海市',
        value: '310000'
      },
      {
        name: '上海市黄浦区',
        value: '310101'
      },
      {
        name: '上海市徐汇区',
        value: '310104'
      },
      {
        name: '上海市长宁区',
        value: '310105'
      },
      {
        name: '上海市静安区',
        value: '310106'
      },
      {
        name: '上海市普陀区',
        value: '310107'
      },
      {
        name: '上海市闸北区',
        value: '310108'
      },
      {
        name: '上海市虹口区',
        value: '310109'
      },
      {
        name: '上海市杨浦区',
        value: '310110'
      },
      {
        name: '上海市闵行区',
        value: '310112'
      },
      {
        name: '上海市宝山区',
        value: '310113'
      },
      {
        name: '上海市嘉定区',
        value: '310114'
      },
      {
        name: '上海市浦东新区',
        value: '310115'
      },
      {
        name: '上海市松江区',
        value: '310117'
      },
      {
        name: '上海市青浦区',
        value: '310118'
      },
      {
        name: '上海市崇明县',
        value: '310230'
      },
      {
        name: '江苏省',
        value: '320000'
      },
      {
        name: '江苏省南京市',
        value: '320100'
      },
      {
        name: '江苏省无锡市',
        value: '320200'
      },
      {
        name: '江苏省徐州市',
        value: '320300'
      },
      {
        name: '江苏省常州市',
        value: '320400'
      },
      {
        name: '江苏省苏州市',
        value: '320500'
      },
      {
        name: '江苏省南通市',
        value: '320600'
      },
      {
        name: '江苏省淮安市',
        value: '320800'
      },
      {
        name: '江苏省盐城市',
        value: '320900'
      },
      {
        name: '江苏省扬州市',
        value: '321000'
      },
      {
        name: '江苏省镇江市',
        value: '321100'
      },
      {
        name: '江苏省泰州市',
        value: '321200'
      },
      {
        name: '江苏省宿迁市',
        value: '321300'
      },
      {
        name: '浙江省',
        value: '330000'
      },
      {
        name: '浙江省杭州市',
        value: '330100'
      },
      {
        name: '浙江省宁波市',
        value: '330200'
      },
      {
        name: '浙江省温州市',
        value: '330300'
      },
      {
        name: '浙江省嘉兴市',
        value: '330400'
      },
      {
        name: '浙江省湖州市',
        value: '330500'
      },
      {
        name: '浙江省绍兴市',
        value: '330600'
      },
      {
        name: '浙江省金华市',
        value: '330700'
      },
      {
        name: '浙江省衢州市',
        value: '330800'
      },
      {
        name: '浙江省台州市',
        value: '331000'
      },
      {
        name: '浙江省丽水市',
        value: '331100'
      },
      {
        name: '安徽省',
        value: '340000'
      },
      {
        name: '安徽省合肥市',
        value: '340100'
      },
      {
        name: '安徽省芜湖市',
        value: '340200'
      },
      {
        name: '安徽省蚌埠市',
        value: '340300'
      },
      {
        name: '安徽省淮南市',
        value: '340400'
      },
      {
        name: '安徽省淮北市',
        value: '340600'
      },
      {
        name: '安徽省铜陵市',
        value: '340700'
      },
      {
        name: '安徽省安庆市',
        value: '340800'
      },
      {
        name: '安徽省黄山市',
        value: '341000'
      },
      {
        name: '安徽省滁州市',
        value: '341100'
      },
      {
        name: '安徽省阜阳市',
        value: '341200'
      },
      {
        name: '安徽省宿州市',
        value: '341300'
      },
      {
        name: '安徽省六安市',
        value: '341500'
      },
      {
        name: '安徽省亳州市',
        value: '341600'
      },
      {
        name: '安徽省池州市',
        value: '341700'
      },
      {
        name: '安徽省宣城市',
        value: '341800'
      },
      {
        name: '福建省',
        value: '350000'
      },
      {
        name: '福建省福州市',
        value: '350100'
      },
      {
        name: '福建省厦门市',
        value: '350200'
      },
      {
        name: '福建省莆田市',
        value: '350300'
      },
      {
        name: '福建省三明市',
        value: '350400'
      },
      {
        name: '福建省泉州市',
        value: '350500'
      },
      {
        name: '福建省漳州市',
        value: '350600'
      },
      {
        name: '福建省南平市',
        value: '350700'
      },
      {
        name: '福建省龙岩市',
        value: '350800'
      },
      {
        name: '福建省宁德市',
        value: '350900'
      },
      {
        name: '江西省',
        value: '360000'
      },
      {
        name: '江西省南昌市',
        value: '360100'
      },
      {
        name: '江西省萍乡市',
        value: '360300'
      },
      {
        name: '江西省九江市',
        value: '360400'
      },
      {
        name: '江西省鹰潭市',
        value: '360600'
      },
      {
        name: '江西省赣州市',
        value: '360700'
      },
      {
        name: '江西省宜春市',
        value: '360900'
      },
      {
        name: '江西省抚州市',
        value: '361000'
      },
      {
        name: '江西省上饶市',
        value: '361100'
      },
      {
        name: '山东省',
        value: '370000'
      },
      {
        name: '山东省济南市',
        value: '370100'
      },
      {
        name: '山东省青岛市',
        value: '370200'
      },
      {
        name: '山东省淄博市',
        value: '370300'
      },
      {
        name: '山东省枣庄市',
        value: '370400'
      },
      {
        name: '山东省烟台市',
        value: '370600'
      },
      {
        name: '山东省潍坊市',
        value: '370700'
      },
      {
        name: '山东省济宁市',
        value: '370800'
      },
      {
        name: '山东省泰安市',
        value: '370900'
      },
      {
        name: '山东省威海市',
        value: '371000'
      },
      {
        name: '山东省日照市',
        value: '371100'
      },
      {
        name: '山东省莱芜市',
        value: '371200'
      },
      {
        name: '山东省临沂市',
        value: '371300'
      },
      {
        name: '山东省德州市',
        value: '371400'
      },
      {
        name: '山东省聊城市',
        value: '371500'
      },
      {
        name: '山东省滨州市',
        value: '371600'
      },
      {
        name: '山东省菏泽市',
        value: '371700'
      },
      {
        name: '河南省',
        value: '410000'
      },
      {
        name: '河南省郑州市',
        value: '410100'
      },
      {
        name: '河南省开封市',
        value: '410200'
      },
      {
        name: '河南省洛阳市',
        value: '410300'
      },
      {
        name: '河南省平顶山市',
        value: '410400'
      },
      {
        name: '河南省安阳市',
        value: '410500'
      },
      {
        name: '河南省鹤壁市',
        value: '410600'
      },
      {
        name: '河南省新乡市',
        value: '410700'
      },
      {
        name: '河南省焦作市',
        value: '410800'
      },
      {
        name: '河南省濮阳市',
        value: '410900'
      },
      {
        name: '河南省许昌市',
        value: '411000'
      },
      {
        name: '河南省漯河市',
        value: '411100'
      },
      {
        name: '河南省三门峡市',
        value: '411200'
      },
      {
        name: '河南省南阳市',
        value: '411300'
      },
      {
        name: '河南省商丘市',
        value: '411400'
      },
      {
        name: '河南省信阳市',
        value: '411500'
      },
      {
        name: '河南省周口市',
        value: '411600'
      },
      {
        name: '河南省驻马店市',
        value: '411700'
      },
      {
        name: '湖北省',
        value: '420000'
      },
      {
        name: '湖北省武汉市',
        value: '420100'
      },
      {
        name: '湖北省黄石市',
        value: '420200'
      },
      {
        name: '湖北省十堰市',
        value: '420300'
      },
      {
        name: '湖北省宜昌市',
        value: '420500'
      },
      {
        name: '湖北省襄阳市',
        value: '420600'
      },
      {
        name: '湖北省荆门市',
        value: '420800'
      },
      {
        name: '湖北省孝感市',
        value: '420900'
      },
      {
        name: '湖北省荆州市',
        value: '421000'
      },
      {
        name: '湖北省黄冈市',
        value: '421100'
      },
      {
        name: '湖北省咸宁市',
        value: '421200'
      },
      {
        name: '湖北省随州市',
        value: '421300'
      },
      {
        name: '湖北省恩施土家族苗族自治州',
        value: '422800'
      },
      {
        name: '湖北省仙桃市',
        value: '429004'
      },
      {
        name: '湖南省长沙市',
        value: '430100'
      },
      {
        name: '湖南省株洲市',
        value: '430200'
      },
      {
        name: '湖南省衡阳市',
        value: '430400'
      },
      {
        name: '湖南省岳阳市',
        value: '430600'
      },
      {
        name: '湖南省常德市',
        value: '430700'
      },
      {
        name: '湖南省郴州市',
        value: '431000'
      },
      {
        name: '湖南省永州市',
        value: '431100'
      },
      {
        name: '湖南省怀化市',
        value: '431200'
      },
      {
        name: '湖南省娄底市',
        value: '431300'
      },
      {
        name: '广东省',
        value: '440000'
      },
      {
        name: '广东省广州市',
        value: '440100'
      },
      {
        name: '广东省韶关市',
        value: '440200'
      },
      {
        name: '广东省深圳市',
        value: '440300'
      },
      {
        name: '广东省珠海市',
        value: '440400'
      },
      {
        name: '广东省汕头市',
        value: '440500'
      },
      {
        name: '广东省佛山市',
        value: '440600'
      },
      {
        name: '广东省江门市',
        value: '440700'
      },
      {
        name: '广东省湛江市',
        value: '440800'
      },
      {
        name: '广东省茂名市',
        value: '440900'
      },
      {
        name: '广东省肇庆市',
        value: '441200'
      },
      {
        name: '广东省惠州市',
        value: '441300'
      },
      {
        name: '广东省梅州市',
        value: '441400'
      },
      {
        name: '广东省汕尾市',
        value: '441500'
      },
      {
        name: '广东省阳江市',
        value: '441700'
      },
      {
        name: '广东省清远市',
        value: '441800'
      },
      {
        name: '广东省东莞市',
        value: '441900'
      },
      {
        name: '广东省中山市',
        value: '442000'
      },
      {
        name: '广东省潮州市',
        value: '445100'
      },
      {
        name: '广东省揭阳市',
        value: '445200'
      },
      {
        name: '广西壮族自治区南宁市',
        value: '450100'
      },
      {
        name: '广西壮族自治区桂林市',
        value: '450300'
      },
      {
        name: '广西壮族自治区梧州市',
        value: '450400'
      },
      {
        name: '广西壮族自治区钦州市',
        value: '450700'
      },
      {
        name: '广西壮族自治区玉林市',
        value: '450900'
      },
      {
        name: '广西壮族自治区来宾市',
        value: '451300'
      },
      {
        name: '海南省',
        value: '460000'
      },
      {
        name: '海南省东方市',
        value: '469007'
      },
      {
        name: '重庆市',
        value: '500000'
      },
      {
        name: '重庆市万州区',
        value: '500101'
      },
      {
        name: '重庆市九龙坡区',
        value: '500107'
      },
      {
        name: '重庆市北碚区',
        value: '500109'
      },
      {
        name: '重庆市永川区',
        value: '500118'
      },
      {
        name: '重庆市荣昌县',
        value: '500226'
      },
      {
        name: '重庆市垫江县',
        value: '500231'
      },
      {
        name: '重庆市开县',
        value: '500234'
      },
      {
        name: '重庆市奉节县',
        value: '500236'
      },
      {
        name: '四川省成都市',
        value: '510100'
      },
      {
        name: '四川省广元市',
        value: '510800'
      },
      {
        name: '四川省遂宁市',
        value: '510900'
      },
      {
        name: '四川省眉山市',
        value: '511400'
      },
      {
        name: '四川省宜宾市',
        value: '511500'
      },
      {
        name: '四川省广安市',
        value: '511600'
      },
      {
        name: '四川省达州市',
        value: '511700'
      },
      {
        name: '四川省巴中市',
        value: '511900'
      },
      {
        name: '四川省阿坝藏族羌族自治州',
        value: '513200'
      },
      {
        name: '贵州省',
        value: '520000'
      },
      {
        name: '贵州省遵义市',
        value: '520300'
      },
      {
        name: '贵州省毕节市',
        value: '520500'
      },
      {
        name: '云南省曲靖市',
        value: '530300'
      },
      {
        name: '云南省大理白族自治州',
        value: '532900'
      },
      {
        name: '陕西省',
        value: '610000'
      },
      {
        name: '陕西省西安市',
        value: '610100'
      },
      {
        name: '陕西省铜川市',
        value: '610200'
      },
      {
        name: '陕西省宝鸡市',
        value: '610300'
      },
      {
        name: '陕西省咸阳市',
        value: '610400'
      },
      {
        name: '陕西省渭南市',
        value: '610500'
      },
      {
        name: '陕西省汉中市',
        value: '610700'
      },
      {
        name: '陕西省榆林市',
        value: '610800'
      },
      {
        name: '陕西省商洛市',
        value: '611000'
      },
      {
        name: '甘肃省',
        value: '620000'
      },
      {
        name: '甘肃省兰州市',
        value: '620100'
      },
      {
        name: '甘肃省白银市',
        value: '620400'
      },
      {
        name: '甘肃省天水市',
        value: '620500'
      },
      {
        name: '甘肃省武威市',
        value: '620600'
      },
      {
        name: '甘肃省张掖市',
        value: '620700'
      },
      {
        name: '甘肃省平凉市',
        value: '620800'
      },
      {
        name: '甘肃省酒泉市',
        value: '620900'
      },
      {
        name: '甘肃省庆阳市',
        value: '621000'
      },
      {
        name: '甘肃省定西市',
        value: '621100'
      },
      {
        name: '青海省西宁市',
        value: '630100'
      },
      {
        name: '宁夏回族自治区银川市',
        value: '640100'
      },
      {
        name: '宁夏回族自治区吴忠市',
        value: '640300'
      },
      {
        name: '新疆维吾尔自治区乌鲁木齐市',
        value: '650100'
      },
      {
        name: '新疆维吾尔自治区哈密地区',
        value: '652200'
      },
      {
        name: '新疆维吾尔自治区博尔塔拉蒙古自治州',
        value: '652700'
      },
      {
        name: '新疆维吾尔自治区塔城地区',
        value: '654200'
      },
      {
        name: '四川省南充市',
        value: '511300'
      },
      {
        name: '海南省陵水黎族自治县',
        value: '469028'
      },
      {
        name: '重庆市璧山县',
        value: '500227'
      },
      {
        name: '海南省保亭黎族苗族自治县',
        value: '469029'
      },
      {
        name: '云南省昆明市',
        value: '530100'
      },
      {
        name: '四川省',
        value: '510000'
      },
      {
        name: '海南省琼中黎族苗族自治县',
        value: '469030'
      },
      {
        name: '西藏自治区昌都地区',
        value: '542100'
      },
      {
        name: '重庆市南岸区',
        value: '500108'
      },
      {
        name: '云南省文山壮族苗族自治州',
        value: '532600'
      },
      {
        name: '广西壮族自治区百色市',
        value: '451000'
      },
      {
        name: '新疆维吾尔自治区阿克苏地区',
        value: '652900'
      },
      {
        name: '广西壮族自治区北海市',
        value: '450500'
      },
      {
        name: '湖北省鄂州市',
        value: '420700'
      },
      {
        name: '重庆市酉阳土家族苗族自治县',
        value: '500242'
      },
      {
        name: '青海省海东地区',
        value: '632100'
      },
      {
        name: '黑龙江省大兴安岭地区',
        value: '232700'
      },
      {
        name: '四川省乐山市',
        value: '511100'
      },
      {
        name: '湖南省张家界市',
        value: '430800'
      },
      {
        name: '云南省德宏傣族景颇族自治州',
        value: '533100'
      },
      {
        name: '新疆维吾尔自治区',
        value: '650000'
      },
      {
        name: '新疆维吾尔自治区喀什地区',
        value: '653100'
      },
      {
        name: '重庆市黔江区',
        value: '500114'
      },
      {
        name: '云南省怒江傈僳族自治州',
        value: '533300'
      },
      {
        name: '贵州省黔东南苗族侗族自治州',
        value: '522600'
      },
      {
        name: '香港特别行政区',
        value: '810000'
      },
      {
        name: '广西壮族自治区柳州市',
        value: '450200'
      },
      {
        name: '贵州省黔南布依族苗族自治州',
        value: '522700'
      },
      {
        name: '海南省三亚市',
        value: '460200'
      },
      {
        name: '重庆市云阳县',
        value: '500235'
      },
      {
        name: '广西壮族自治区贺州市',
        value: '451100'
      },
      {
        name: '重庆市巫溪县',
        value: '500238'
      },
      {
        name: '宁夏回族自治区',
        value: '640000'
      },
      {
        name: '湖南省',
        value: '430000'
      },
      {
        name: '新疆维吾尔自治区图木舒克市',
        value: '659003'
      },
      {
        name: '贵州省贵阳市',
        value: '520100'
      },
      {
        name: '海南省白沙黎族自治县',
        value: '469025'
      },
      {
        name: '云南省临沧市',
        value: '530900'
      },
      {
        name: '广西壮族自治区贵港市',
        value: '450800'
      },
      {
        name: '四川省泸州市',
        value: '510500'
      },
      {
        name: '甘肃省嘉峪关市',
        value: '620200'
      },
      {
        name: '海南省澄迈县',
        value: '469023'
      },
      {
        name: '青海省',
        value: '630000'
      },
      {
        name: '重庆市江津区',
        value: '500116'
      },
      {
        name: '宁夏回族自治区中卫市',
        value: '640500'
      },
      {
        name: '安徽省马鞍山市',
        value: '340500'
      },
      {
        name: '外籍地点',
        value: '999999'
      },
      {
        name: '吉林省辽源市',
        value: '220400'
      },
      {
        name: '山西省朔州市',
        value: '140600'
      },
      {
        name: '重庆市大渡口区',
        value: '500104'
      },
      {
        name: '四川省雅安市',
        value: '511800'
      },
      {
        name: '山东省东营市',
        value: '370500'
      },
      {
        name: '广西壮族自治区河池市',
        value: '451200'
      },
      {
        name: '重庆市丰都县',
        value: '500230'
      },
      {
        name: '甘肃省陇南市',
        value: '621200'
      },
      {
        name: '四川省德阳市',
        value: '510600'
      },
      {
        name: '重庆市武隆县',
        value: '500232'
      },
      {
        name: '海南省中沙群岛的岛礁及其海域',
        value: '469033'
      },
      {
        name: '广西壮族自治区崇左市',
        value: '451400'
      },
      {
        name: '广东省云浮市',
        value: '445300'
      },
      {
        name: '海南省屯昌县',
        value: '469022'
      },
      {
        name: '贵州省六盘水市',
        value: '520200'
      },
      {
        name: '重庆市巴南区',
        value: '500113'
      },
      {
        name: '青海省果洛藏族自治州',
        value: '632600'
      },
      {
        name: '重庆市江北区',
        value: '500105'
      },
      {
        name: '云南省红河哈尼族彝族自治州',
        value: '532500'
      },
      {
        name: '重庆市潼南县',
        value: '500223'
      },
      {
        name: '海南省南沙群岛',
        value: '469032'
      },
      {
        name: '海南省五指山市',
        value: '469001'
      },
      {
        name: '云南省昭通市',
        value: '530600'
      },
      {
        name: '云南省西双版纳傣族自治州',
        value: '532800'
      },
      {
        name: '重庆市彭水苗族土家族自治县',
        value: '500243'
      },
      {
        name: '四川省绵阳市',
        value: '510700'
      },
      {
        name: '重庆市长寿区',
        value: '500115'
      },
      {
        name: '青海省黄南藏族自治州',
        value: '632300'
      },
      {
        name: '海南省万宁市',
        value: '469006'
      },
      {
        name: '甘肃省金昌市',
        value: '620300'
      },
      {
        name: '云南省玉溪市',
        value: '530400'
      },
      {
        name: '重庆市巫山县',
        value: '500237'
      },
      {
        name: '重庆市涪陵区',
        value: '500102'
      },
      {
        name: '海南省昌江黎族自治县',
        value: '469026'
      },
      {
        name: '贵州省安顺市',
        value: '520400'
      },
      {
        name: '重庆市渝北区',
        value: '500112'
      },
      {
        name: '重庆市秀山土家族苗族自治县',
        value: '500241'
      },
      {
        name: '重庆市南川区',
        value: '500119'
      },
      {
        name: '四川省自贡市',
        value: '510300'
      },
      {
        name: '海南省海口市',
        value: '460100'
      },
      {
        name: '湖南省邵阳市',
        value: '430500'
      },
      {
        name: '云南省普洱市',
        value: '530800'
      },
      {
        name: '浙江省舟山市',
        value: '330900'
      },
      {
        name: '宁夏回族自治区石嘴山市',
        value: '640200'
      },
      {
        name: '新疆维吾尔自治区伊犁哈萨克自治州',
        value: '654000'
      },
      {
        name: '湖南省湘潭市',
        value: '430300'
      },
      {
        name: '海南省文昌市',
        value: '469005'
      },
      {
        name: '青海省海西蒙古族藏族自治州',
        value: '632800'
      },
      {
        name: '上海市奉贤区',
        value: '310120'
      },
      {
        name: '澳门特别行政区',
        value: '820000'
      },
      {
        name: '辽宁省盘锦市',
        value: '211100'
      },
      {
        name: '新疆维吾尔自治区和田地区',
        value: '653200'
      },
      {
        name: '贵州省黔西南布依族苗族自治州',
        value: '522300'
      },
      {
        name: '甘肃省临夏回族自治州',
        value: '622900'
      },
      {
        name: '四川省内江市',
        value: '511000'
      },
      {
        name: '新疆维吾尔自治区石河子市',
        value: '659001'
      },
      {
        name: '内蒙古自治区',
        value: '150000'
      },
      {
        name: '四川省攀枝花市',
        value: '510400'
      },
      {
        name: '重庆市石柱土家族自治县',
        value: '500240'
      },
      {
        name: '重庆市沙坪坝区',
        value: '500106'
      },
      {
        name: '云南省保山市',
        value: '530500'
      },
      {
        name: '江西省吉安市',
        value: '360800'
      },
      {
        name: '河南省济源市',
        value: '419001'
      },
      {
        name: '云南省迪庆藏族自治州',
        value: '533400'
      },
      {
        name: '重庆市城口县',
        value: '500229'
      },
      {
        name: '海南省定安县',
        value: '469021'
      },
      {
        name: '新疆维吾尔自治区昌吉回族自治州',
        value: '652300'
      },
      {
        name: '西藏自治区阿里地区',
        value: '542500'
      },
      {
        name: '西藏自治区那曲地区',
        value: '542400'
      },
      {
        name: '四川省凉山彝族自治州',
        value: '513400'
      },
      {
        name: '湖南省益阳市',
        value: '430900'
      },
      {
        name: '新疆维吾尔自治区克拉玛依市',
        value: '650200'
      },
      {
        name: '广西壮族自治区',
        value: '450000'
      },
      {
        name: '内蒙古自治区鄂尔多斯市',
        value: '150600'
      },
      {
        name: '西藏自治区',
        value: '540000'
      },
      {
        name: '海南省琼海市',
        value: '469002'
      },
      {
        name: '贵州省铜仁市',
        value: '520600'
      },
      {
        name: '新疆维吾尔自治区阿拉尔市',
        value: '659002'
      },
      {
        name: '海南省西沙群岛',
        value: '469031'
      },
      {
        name: '新疆维吾尔自治区阿勒泰地区',
        value: '654300'
      },
      {
        name: '新疆维吾尔自治区克孜勒苏柯尔克孜自治州',
        value: '653000'
      },
      {
        name: '广东省河源市',
        value: '441600'
      },
      {
        name: '甘肃省甘南藏族自治州',
        value: '623000'
      },
      {
        name: '海南省临高县',
        value: '469024'
      },
      {
        name: '重庆市忠县',
        value: '500233'
      },
      {
        name: '四川省甘孜藏族自治州',
        value: '513300'
      },
      {
        name: '西藏自治区林芝地区',
        value: '542600'
      },
      {
        name: '重庆市綦江区',
        value: '500110'
      },
      {
        name: '湖北省天门市',
        value: '429006'
      },
      {
        name: '宁夏回族自治区固原市',
        value: '640400'
      },
      {
        name: '海南省儋州市',
        value: '469003'
      },
      {
        name: '重庆市大足区',
        value: '500111'
      },
      {
        name: '江西省新余市',
        value: '360500'
      },
      {
        name: '重庆市渝中区',
        value: '500103'
      },
      {
        name: '重庆市铜梁县',
        value: '500224'
      },
      {
        name: '云南省楚雄彝族自治州',
        value: '532300'
      },
      {
        name: '新疆维吾尔自治区五家渠市',
        value: '659004'
      },
      {
        name: '湖南省湘西土家族苗族自治州',
        value: '433100'
      },
      {
        name: '重庆市合川区',
        value: '500117'
      },
      {
        name: '海南省乐东黎族自治县',
        value: '469027'
      },
      {
        name: '云南省丽江市',
        value: '530700'
      },
      {
        name: '山西省晋城市',
        value: '140500'
      },
      {
        name: '青海省海北藏族自治州',
        value: '632200'
      },
      {
        name: '西藏自治区拉萨市',
        value: '540100'
      },
      {
        name: '青海省玉树藏族自治州',
        value: '632700'
      },
      {
        name: '江西省景德镇市',
        value: '360200'
      },
      {
        name: '重庆市梁平县',
        value: '500228'
      },
      {
        name: '新疆维吾尔自治区吐鲁番地区',
        value: '652100'
      },
      {
        name: '江苏省连云港市',
        value: '320700'
      },
      {
        name: '四川省资阳市',
        value: '512000'
      },
      {
        name: '云南省',
        value: '530000'
      },
      {
        name: '新疆维吾尔自治区巴音郭楞蒙古自治州',
        value: '652800'
      },
      {
        name: '广西壮族自治区防城港市',
        value: '450600'
      },
      {
        name: '西藏自治区日喀则地区',
        value: '542300'
      },
      {
        name: '陕西省安康市',
        value: '610900'
      },
      {
        name: '西藏自治区山南地区',
        value: '542200'
      },
      {
        name: '上海市金山区',
        value: '310116'
      },
      {
        name: '陕西省延安市',
        value: '610600'
      },
      {
        name: '台湾省',
        value: '710000'
      },
    ],
    politicalActions: [{
        name: '中共党员',
        value: '1'
      },
      {
        name: '群众',
        value: '13'
      },
      {
        name: '中共预备党员',
        value: '2'
      },
      {
        name: '共青团员',
        value: '3'
      },
      {
        name: '民革会员',
        value: '4'
      },
      {
        name: '民盟盟员',
        value: '5'
      },
      {
        name: '民建会员',
        value: '6'
      },
      {
        name: '民进会员',
        value: '7'
      },
      {
        name: '农工党党员',
        value: '8'
      },
      {
        name: '致公党党员',
        value: '9'
      },
      {
        name: '九三学社社员',
        value: '10'
      },
      {
        name: '台盟盟员',
        value: '11'
      },
      {
        name: '无党派人士',
        value: '12'
      },
      {
        name: '其他',
        value: '99'
      },
    ],
    marActions: [{
        name: '未婚',
        value: 'S'
      },
      {
        name: '已婚',
        value: 'M'
      },
      {
        name: '离婚',
        value: 'D'
      },
      {
        name: '再婚',
        value: 'R'
      },
      {
        name: '丧偶',
        value: 'B'
      },
    ],
    interestActions: [{
        name: '篮球',
        value: 'A001'
      },
      {
        name: '羽毛球',
        value: 'A002'
      },
      {
        name: '游泳',
        value: 'A003'
      },
      {
        name: '阅读',
        value: 'A004'
      },
      {
        name: '电影',
        value: 'A005'
      },
      {
        name: '健身',
        value: 'A006'
      },
      {
        name: '绘画',
        value: 'A007'
      },
      {
        name: '桌游',
        value: 'A008'
      },
      {
        name: '电子游戏',
        value: 'A009'
      },
      {
        name: '旅游',
        value: 'A010'
      },
      {
        name: '唱歌',
        value: 'A011'
      },
      {
        name: '其他',
        value: 'A012'
      },
      {
        name: '美食',
        value: 'A013'
      },
    ],
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onShowHideChange(show) {
      if (show) {
        console.log('baseinfo show')
      } else {
        console.log('baseinfo hide')
      }
    },
    showPopup() {
      this.setData({
        show: true
      });
    },
    ethShowPopup() {
      this.setData({
        ethShow: true
      });
    },
    BirthCountryShowPopup() {
      this.setData({
        BirthCountryShow: true
      });
    },
    HuKouShowPopup() {
      this.setData({
        HuKouShow: true
      });
    },
    HuKouTypeShowPopup() {
      this.setData({
        HuKouTypeShow: true
      });
    },
    BloodShowPopup() {
      this.setData({
        BloodShow: true
      });
    },
    NativeShowPopup() {
      this.setData({
        NativeShow: true
      });
    },
    IDTypeShowPopup() {
      this.setData({
        IDTypeShow: true
      });
    },
    politicalShowPopup() {
      this.setData({
        politicalShow: true
      });
    },
    marShowPopup() {
      this.setData({
        marShow: true
      });
    },
    interestShowPopup() {
      this.setData({
        interestShow: true
      });
    },
    englishShowPopup() {
      this.setData({
        englishShow: true
      });
    },
    onClose() {
      this.setData({
        show: false,
        ethShow: false,
        HuKouShow: false,
        HuKouTypeShow: false,
        BloodShow: false,
        NativeShow: false,
        BirthCountryShow: false,
        IDTypeShow: false,
        workStartShow: false,
        politicalShow: false,
        marShow: false,
        interestShow: false,
        calPrdShow:false,
      });
    },
    sexonSelect(event) {
      console.log(event.detail);
      this.setData({
        sexValue: event.detail.name
      })
    },
    ethonSelect(event) {
      console.log(event.detail);
      this.setData({
        ethValue: event.detail.name
      })
    },
    HuKouonSelect(event) {
      console.log(event.detail);
      this.setData({
        HuKouValue: event.detail.name
      })
    },
    HuKouTypeSelect(event) {
      console.log(event.detail);
      this.setData({
        HuKouTypeValue: event.detail.name
      })
    },
    BloodSelect(event) {
      console.log(event.detail);
      this.setData({
        BloodValue: event.detail.name
      })
    },
    NativeSelect(event) {
      console.log(event.detail);
      this.setData({
        NativeValue: event.detail.name
      })
    },
    BirthCountrySelect(event) {
      console.log(event.detail);
      this.setData({
        BirthCountryValue: event.detail.name
      })
    },
    IDTypeSelect(event) {
      console.log(event.detail);
      this.setData({
        IDTypeValue: event.detail.name
      })
    },
    politicalSelect(event) {
      console.log(event.detail);
      this.setData({
        politicalValue: event.detail.name
      })
    },
    marSelect(event) {
      console.log(event.detail);
      this.setData({
        marValue: event.detail.name
      })
    },
    interestSelect(event) {
      console.log(event.detail);
      this.setData({
        interestValue: event.detail.name
      })
    },
    birthdateonDisplay() {
      this.setData({
        birthdateshow: true
      });
    },
    workStartDateonDisplay() {
      this.setData({
        workStartShow: true
      });
    },
    calPrdonDisplay() {
      this.setData({
        calPrdShow: true
      });
    },
    birthdateonClose() {
      this.setData({
        birthdateshow: false
      });
    },
    formatDate(date) {
      date = new Date(date);
      let month = date.getMonth() + 1;
      month = month < 10 ? "0" + month : month;
      let day = date.getDate();
      day = day < 10 ? "0" + day : day;
      return `${date.getFullYear()}-${month}-${day}`;
    },
    formatYearMonth(date) {
      date = new Date(date);
      let month = date.getMonth() + 1;
      month = month < 10 ? "0" + month : month;
      return `${date.getFullYear()}/${month}`;
    },
    birthdateonConfirm(event) {
      this.setData({
        birthdateshow: false,
        birthdateValue: this.formatDate(event.detail),
      });
    },
    calPrdStartonConfirm(event) {
      this.setData({
        calPrdShow: false,
        calPrdValue: this.formatYearMonth(event.detail),
      });
      console.log('起始月份:'+event.detail+' 转换后起始月份：'+this.data.calPrdValue)
    },
    calPrdonInput(event) {
      this.setData({
        calPrdValue: this.formatYearMonth(event.detail),
      });
    },
    workStartonInput(event) {
      this.setData({
        workStartDateValue: this.formatDate(event.detail),
      });
    },

    workStartonConfirm(event) {
      this.setData({
        workStartDateValue: this.formatDate(event.detail),
        workStartShow: false,
      });
      console.log('工作开始日期：'+event.detail)
    },
    workStartcancel(event) {
      this.setData({
        workStartShow: false,
      });
    },
    calPrdcancel(event) {
      this.setData({
        calPrdShow: false,
      });
    },
    carResultValueonChange(event) {
      this.setData({
        carResultValue: event.detail,
      });
      console.log(event.detail);
    },
    isSheBaoResultValueonChange(event) {
      this.setData({
        isSheBaoResultValue: event.detail,
      });
      console.log(event.detail);
    },
  }
})
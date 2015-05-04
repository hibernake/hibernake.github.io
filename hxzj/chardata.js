function new_char_data(name, kind, property, skill) {
    var char_data = new Object();
    char_data.get_name = function(){
        return name;
    };
    char_data.get_kind = function(){
        return kind;
    };
    char_data.get_hp = function(){
        return property[0];
    };
    char_data.get_att = function(){
        return property[1];
    };
    char_data.get_def = function(){
        return property[2];
    };
    char_data.get_skill = function(pos){
        if(pos===1 || pos===2){
            return skill[0];
        }
        else if(pos===3 || pos===4){
            return skill[1];
        }
    };
    return char_data;
}


var CHARS = [
    new_char_data(
        '纯情小湿婆', '盾', [40609, 746, 1319], 
        [['全体', 485], ['全体', 250]]),
    new_char_data(
        '苏妲己', '盾', [53058, 1109, 2114], 
        [ null, ['贯通', 350] ]),
    new_char_data(
        '小青', '盾', [57317, 1228, 1994],
        [ ['横扫', 440], ['单体', 335]]),
    new_char_data(
        '百花', '盾', [39126, 1038, 3453], 
        [null, null]),
    new_char_data(
        '鼓贝', '盾', [45890, 1184, 2488], 
        [null, ['贯通', 345] ]),
    new_char_data(
        '糖心天邪鬼', '盾', [39992, 972, 2974], 
        [null, null]),
    new_char_data(
        '33娘', '盾', [53313, 1090, 2074],
        [null, null]), 
    
    new_char_data(
        '帕凡提', '弓', [18082, 1874, 1406], 
        [['全体', 365], ['全体', 280]]),
    new_char_data(
        '极裕仙君', '弓', [30220, 1702, 1205], 
        [['全体', 325], ['全体', 345]]),
    new_char_data(
        '穷奇', '弓', [16482, 1981, 1072], 
        [null, ['贯通', 300]]),
    new_char_data(
        '卡莉', '弓', [17806, 2129, 1110], 
        [['全体', 290], ['横扫', 270]]),
    new_char_data(
        '苏莉亚', '弓', [17811, 1863, 1288], 
        [['单体', 580], null]),
    new_char_data(
        '万魔小湿婆', '弓', [32912, 1774, 1500], 
        [['横扫', 435], ['横扫', 365]]),
    new_char_data(
        '歌姬瓜', '弓', [14547, 1488, 1014], 
        [['贯通', 420], ['贯通', 490]]), 
    
    new_char_data(
        '应龙', '弓', [23326, 1063, 836], 
        [['贯通', 360], ['全体', 380]]), 
    new_char_data(
        '小湿婆', '弓', [13288, 1546, 622], 
        [['横扫', 320], ['贯通', 400]]), 
    
    new_char_data(
        '孙悟空', '剑', [37596, 1463, 1682], 
        [['贯通', 335], null]),
    new_char_data(
        '花嫁苏妲己', '剑', [38103, 1561, 1733], 
        [['横扫', 282], ['全体', 325]]),
    new_char_data(
        '娜吒', '剑', [30498, 1900, 1129], 
        [['贯通', 260], null]),
    new_char_data(
        '天邪鬼', '剑', [38035, 1710, 1763], 
        [['全体', 230], null]),
    new_char_data(
        '偶像白虎', '剑', [30460, 1269, 2290], 
        [['横扫', 470], null]), 
    
    new_char_data(
        '迦叶仙尊', '剑', [22682, 1060, 1583],
        [null, null]), 
    new_char_data(
        '赵公萌', '剑', [27445, 1063, 975], 
        [['横扫', 550], null]), 
    new_char_data(
        '华阳', '剑', [27551, 1144, 916], 
        [['全体', 380], ['贯通', 220]]), 
    new_char_data(
        '狂欢卡莉', '剑', [21462, 1400, 667], 
        [['贯通', 400], ['全体', 220]]),    
];

var AID_LIST = {
    '小湿婆': '纯情小湿婆', 
    '小湿婆': '万魔小湿婆', 
    '苏妲己': '花嫁苏妲己', 
};


function get_char_by_name(name){
    for(var i in CHARS){
        var char = CHARS[i];
        if(char.get_name()==name){
            return char;
        }
    }
}
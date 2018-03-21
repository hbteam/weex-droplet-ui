export const PICKER_DATA = {
    list: [
        { name: '李娜', value: 0 },
        { name: '丁超', value: 1 },
        { name: '江武', value: 2 },
        { name: '尹士鹏', value: 3 },
        { name: '周灰灰', value: 4 },
        { name: '杨泉', value: 5 },
        { name: '厚本金融公司', value: 6 },
        { name: '揽胜', value: 7 },
        { name: '陆地巡洋舰', value: 8 },
        { name: '航空母舰', value: 9 },
        { name: '天宫一号', value: 10 },
        { name: '红岸工程', value: 11 },
    ],
    defaultValue: { name: '厚本金融公司', value: 6 },
    displayValue (item) {
        return item.name;
    }
};
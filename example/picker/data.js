export const PICKER_DATA = {
    list: [
        { name: '2012', value: 0 },
        { name: '后天', value: 1 },
        { name: '星际穿越', value: 2 },
        { name: '星际迷航', value: 3 },
        { name: 'X战警', value: 4 },
        { name: '盗梦空间', value: 5 },
        { name: '源代码', value: 6 },
        { name: '黑客帝国', value: 7 },
        { name: '超验骇客', value: 8 },
        { name: '火星救援', value: 9 },
        { name: '阿凡达', value: 10 },
        { name: '普罗米修斯', value: 11 },
    ],
    defaultValue: { name: '盗梦空间', value: 6 },
    displayValue (item) {
        return item.name;
    }
};
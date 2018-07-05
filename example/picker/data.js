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


let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth() + 1;
let currentDay = new Date().getDate();
let arr = [];
for (let i = currentYear - 50; i < currentYear + 50; i++ ) {
    arr.push(i);
}

export const YEARS = {
    list: arr,
    defaultValue: currentYear,
    displayValue (y) {
        return y;
    }
}

export const MONTHS = {
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    defaultValue: currentMonth,
    displayValue (m) {
        return m;
    }
}

export const getDays = (y, m, d) => {
    const maxDay = getMaxDay(y || YEARS.defaultValue, m || MONTHS.defaultValue);
    const arr = [];
    for (let i = 0; i < maxDay; i++) {
        arr.push(i + 1);
    }
    return {
        list: arr,
        defaultValue: d || currentDay,
        displayValue (m) {
            return m;
        }
    }
}

export const getMaxDay = (y, m) => {
    const d = new Date(y, m, 0);
    return d.getDate();
}


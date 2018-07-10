const ls = [];
for (let i =0; i< 100; i ++) {
    ls.push({ name: '普罗米修斯' + i, value: i });
}
export const PICKER_DATA = {
    list: ls,
    defaultValue: { name: '普罗米修斯5', value: 5 },
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


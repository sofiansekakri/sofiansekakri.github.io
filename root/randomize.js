module.exports = (items = []) => {
    if (!Array.isArray(items)) throw new TypeError('use array instead.');
    return items[Math.floor(Math.random() * items.length)];
};
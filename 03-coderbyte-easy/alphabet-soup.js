module.exports.orderString = function(str) {
  var arr = str.split('');
  return arr.sort().join('');
};

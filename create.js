Object.prototype._create = function (obj) {
  function F() {}
  F.prototype = obj
  F.prototype.constructor = F
  return new F()
}

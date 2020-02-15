// 自定义队列
function Queue(...eles) {
  let items = [];
  // 队列操作的方法
  // enter queue方法
  this.enqueue = function(element) {
    items.push(element);
  };

  // delete queue方法
  this.dequeue = function() {
    return items.shift();
  };

  // 查看前端的元素
  this.front = function() {
    return items[0];
  };

  // 查看队列是否为空
  this.isEmpty = function() {
    return items.length == 0;
  };

  // 查看队列中元素的个数
  this.size = function() {
    return items.length;
  };

  this.toSting = function() {
    return items.join(",");
  };

  //队列初始化
  if (eles) {
    eles = eles.sort((a, b) => {
      return a.priority - b.priority;
    });
    for (let i = 0; i < eles.length; i++) {
      this.enqueue(eles[i]);
    }
  }
}
let queue = new Queue(
  { name: "普通客户1", priority: 0 },
  { name: "VIP客户", priority: 100 },
  { name: "普通客户2", priority: 0 },
  { name: "老弱病残", priority: 10 }
);
console.log(queue.toSting());

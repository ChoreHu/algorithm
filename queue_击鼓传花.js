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
    for (let i = 0; i < eles.length; i++) {
      this.enqueue(eles[i]);
    }
  }
}
const queue = new Queue("Lily", "Lucy", "Tom", "Lilei", "Why");
const count = 3;
console.log(choosePlayer(queue, count));
function choosePlayer(queue, count) {
  while (queue.size() !== 1) {
    let incount = count;
    while (incount) {
      incount--;
      queue.enqueue(queue.dequeue());
      console.log(queue.toSting());
    }
    queue.dequeue();
    incount = count;
  }
  return queue.front();
}

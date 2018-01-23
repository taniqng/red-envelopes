import DS from 'ember-data';

export default DS.Model.extend({

  //创建时间
  createTime: DS.attr('date'),
  //图片
  pics: DS.attr(),
  //红包总额
  amount: DS.attr('number'),
  //红包个数
  count: DS.attr('number'),
  //红包内容
  content: DS.attr('string'),
  //纬度
  longitude: DS.attr('number'),
  //精度
  latitude: DS.attr('number')

});

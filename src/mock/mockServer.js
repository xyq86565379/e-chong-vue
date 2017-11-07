/**
 * Created by hasee on 2017/11/6.
 */
import Mock from 'mockjs'
import myData from './data.json'

Mock.mock('/api/App', {
  data:myData.indexHtml
})
Mock.mock('/api/clothing', {
  data:myData.clothing
})

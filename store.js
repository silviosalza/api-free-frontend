import {reactive} from 'vue';

export const store = reactive({

  posts: [],
  tags: [],
  categories: [],
  myUrlPost: 'http://localhost:3000/posts/',
  myUrlCat: 'http://localhost:3000/category/',
  myUrlTag: 'http://localhost:3000/tags/',

});
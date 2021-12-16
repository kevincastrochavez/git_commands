import DataService from './DataService';

const postService = new DataService('posts');

const post = {
  title: 'My first post',
  content: 'Something here',
};

postService.postData(post);

function handleSubmit(e) {
  e.preventDefault();
  console.log(this);
  console.log(e.target);

  const data = new FormData(this);
}

document.querySelector('#postForm').addEventListener('submit', handleSubmit);

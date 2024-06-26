const buildHTML = (data) => {
  const html = `
  <div class="post">
    <div class="post-date">
      投稿日時：${data.created_at}
    </div>
    <div class="post-content">
      ${data.content}
    </div>
  </div>`;
  return html;
};

function post (){
  const form = document.querySelector('form');
  const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    fetch('', {
      method: 'POST',
      body: formData,
      headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'X-CSRFToken': csrfToken
      }
    })
    .then(response => {
      if (!response.ok) {
        alert(`Error ${response.status}: ${response.statusText}`);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
      })
    .then(data => {
      const postsContainer = document.querySelector('.posts-container');
      postsContainer.insertAdjacentHTML('afterend', buildHTML(data));
      form.reset();
    })
    .catch(error => {
      console.error('Error:', error);
      alert('AJAX request failed: ' + error);
    });
  });
 };
 
 window.addEventListener('DOMContentLoaded', post);
 
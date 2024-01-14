document.addEventListener('DOMContentLoaded', () => {
    const blogContainer = document.getElementById('blog-container');

    // Display a loading message or spinner while fetching data
    blogContainer.innerHTML = '<p>Loading blog posts...</p>';

    // Fetch blog posts from the API
    fetch('https://dummyapi.online/api/blogposts')
        .then(response => response.json())
        .then(blogPosts => {
            // Clear the loading message
            blogContainer.innerHTML = '';

            // Render each blog post
            blogPosts.forEach(post => {
                const postElement = createBlogPostElement(post);
                
                // Create an anchor element to make the blog post clickable
                const postLink = document.createElement('a');
                postLink.href = `https://blog.hubspot.com/marketing/blog-strategy-guide`; //link

                // Append the blog post element to the anchor element
                postLink.appendChild(postElement);

                // Append the anchor element to the blog container
                blogContainer.appendChild(postLink);

            });
        })
        .catch(error => {
            console.error('Error fetching blog posts:', error);
            // Display an error message on the page
            blogContainer.innerHTML = '<p>Error fetching blog posts. Please try again later.</p>';
        });

    // Function to create a blog post element
    function createBlogPostElement(post) {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');

        const titleElement = document.createElement('div');
        titleElement.classList.add('blog-title');
        titleElement.textContent = post.title;

        const bodyElement = document.createElement('div');
        bodyElement.classList.add('blog-body');
        bodyElement.textContent = post.body;

        postElement.appendChild(titleElement);
        postElement.appendChild(bodyElement);

        return postElement;
    }
 });



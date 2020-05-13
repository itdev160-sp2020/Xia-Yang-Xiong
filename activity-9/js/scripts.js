
$(function() { 
    var data = [ 
        {
            id: 1, 
            title: 'Time', 
            body: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma-which is living witht the results of other people's thinking.", 
            author: "Steve Jobs"
        }, 
        {
            id: 2, 
            title: 'Life', 
            body: "If life were predictable it would cease to be life, and be without flavor.",
            author: "Eleanor Roosevelt"

        }, 
        {
            id: 3, 
            title: 'Goals', 
            body: "If you set goals rediculously high and it's failure, you will fail above everyone else's success.", 
            author: "James Cameron"
        }, 
        { 
            id: 4, 
            title: 'Plans', 
            body: "Life is what happens when you're busy making plans.", 
            author: "John Lennon"
        }, 
        {
            id: 5, 
            title: 'Teach',
            body: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", 
            author: "Benjamin Franklin"
        }

        
    
    ];
    var $nav = $('#nav-container'); 
    var $intro = $('#intro'); 
    var $posts = $('#post-container'); 

    function initPosts() { 
        for (let i = 0; i < data.length; i++) { 
            var postId = 'post-' + data[i].id, 
                $post = $('<section class = "post"></section>'), 
                $title = $('<h2 class = "title"></h2>'), 
                $body = $('<blockquote></blockquote>'), 
                $author = $('<span class="author"></span>'),
                $navItem = $('<li></li>'); 

            $title.text(data[i].title); 
            $body.text(data[i].body); 
            $author.text(data[i].author); 

            $navItem.attr('id', data[i].id); 
            $navItem.text(data[i].title); 

            $post.attr('id', postId); 
            $post.append($title); 
            $post.append($body); 
            $post.append($author); 

            $posts.append($post); 
            $nav.append($navItem); 

            $navItem.on('click', function(){ 
                var id = $(this).attr('id'); 
                $posts.children().hide(); 
                $posts.find('#post-' + id).fadeIn(); 
            }); 

            $posts.children('.post').hide(); 
            $intro.fadeIn(1000); 
        }
    }
    initPosts(); 

}); 
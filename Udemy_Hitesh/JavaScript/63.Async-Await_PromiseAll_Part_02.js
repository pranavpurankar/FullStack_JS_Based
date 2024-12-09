// Ex: Consuming two/multiple promise

function fetchPostData(){
    return new Promise( (resolve) => {
        setTimeout( () => {
            resolve("Post Data Fetched")
        }, 2000)
    })
}

function fetchCommentData(){
    return new Promise( (resolve) => {
        setTimeout( () => {
            resolve("Comment data fetched.")
        }, 3000)
    });
}

async function getBlogData(){
    try{
        console.log("Fetching blog data");
        // Promise all instead of two lines can be written in one line
        // const postData = await fetchPostData();
        // const commentData = await fetchCommentData();
        const [postData, commentData] = await Promise.all([
            fetchPostData(),
            fetchCommentData(),
        ])
        console.log(postData);
        console.log(commentData);
    
        console.log("fetch complete")
    } catch (error){
        console.log("Error fetching blog data.", error)
    }
}

getBlogData();
import Link from "next/link";

const PostsPage = async () => {

    const res = await fetch("http://localhost:5000/posts",{
        cache: "no-store"
    });
    const posts = await res.json();

    return (
        <div className="w-full">
            <h3>Total Post: {posts.length}</h3>
            {
                posts.map((post) => 
                    <div key={post.id} className="card w-1/2 bg-base-100  mx-auto my-10">
                        <div className="card-body">
                            <h2 className="card-title">{post.title}</h2>
                            <p>{post.description}</p>
                            <p>Likes: {post.likesCount}</p>
                            <Link href={`/posts/${post.id}`}>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Read More</button>
                            </div>
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default PostsPage;


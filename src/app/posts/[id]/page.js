import Link from 'next/link';
import React from 'react';

const Detailpage = async ({ params }) => {

    const res = await fetch(`http://localhost:5000/posts/${params.id}`);
    const post = await res.json();
    return (
        <div>
            <div key={post.id} className="card w-1/2 bg-base-100  mx-auto my-10">
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p>{post.description}</p>
                    <p>Likes: {post.likesCount}</p>
                    <Link href={`/posts`}>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Back to Home</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Detailpage;
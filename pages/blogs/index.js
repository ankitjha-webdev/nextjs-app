import NavBar from "../components/NavBar";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
    const blogs = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const blogsData = await blogs.json();
    return {
        props: {
            blogsData
        }
    }
}

const blog = ({blogsData}) => {
    return(
        <div className="text-center">
            <Head>
                <title>Blogs</title>
            </Head>
            <NavBar />
            <h1 className="text-4xl pt-4">Blog Home</h1>
            <p className="text-2xl py-4">This is the Blog home page</p>

            <div className="text-center justify-center ml-80">
                {
                    blogsData.slice(0,5).map((blog) => {
                        return(
                            <div key={blog.id} className="flex flex-column mx-8 bg-slate-100 "> 
                                <div className="py-4 px-2"> 
                                <h2 className="bg-purple-600 text-white text-center w-10 h-10 rounded-md my-4 " >Id:  {blog.id}</h2>
                               <Link href={`/blogs/${blog.id}`}>
                                    <h2 className="bg-purple-600 hover:bg-purple-700 cursor-pointer text-white text-center rounded-md py-4 px-2">Title: {blog.title}</h2>
                                     </Link>
                                </div>
                                {/* <hr />
                                <p>{blog.body}</p> */}
                            </div>

                        )
                    })
                }
            </div>

        </div>

    )
    }

    export default blog;
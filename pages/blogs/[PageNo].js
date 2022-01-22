import Head from 'next/head';
import {useRouter} from 'next/router';
import NavBar from '../components/NavBar';

export const getStaticPaths = async () => {
  const blogs = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const blogsData = await blogs.json();


  return {
    paths: blogsData.map((blog) => {
      return {
        params: {PageNo: blog.id.toString()},
      };
    }),
    fallback: false,
  };
}

export const getStaticProps = async (context) => {
  const PageNo = context.params.PageNo;
  const blogs = await fetch(`https://jsonplaceholder.typicode.com/posts/${PageNo}`);
  const blogsData = await blogs.json();
  console.log(blogsData);
  return {
      props: {
          blogsData
      }
  }
}

const PageNo = ({blogsData}) => {
    // const router = useRouter();
    // const PageNo =router.query.PageNo;
    const {id, title, body} = blogsData;
  return ( 
    
  <div>
    <Head>
      <title>Blog {blogsData.id}</title>
    </Head>
    <NavBar />
    <div className="flex flex-column mx-8 py-4 bg-slate-100 "> 
                                <div className="py-4 px-2"> 
                                <h2 className="bg-purple-600 text-white text-center w-10 h-10 rounded-md my-4 " >Id:  {id}</h2>
                              
                                    <h2 className="bg-purple-600 hover:bg-purple-700 cursor-pointer text-white text-center rounded-md py-4 px-2">Title: {title}</h2>
                                <h2 className="bg-purple-600 my-4 hover:bg-purple-700 cursor-pointer text-white text-center rounded-md py-4 px-2">Body: {body}</h2>
                                </div>
                           
        </div>
  </div>
  
  );
}

export default PageNo;

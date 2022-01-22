import Image from "next/image";
import NavBar from "./components/NavBar";
import Head from "next/head";

const about = () => {
    return (
        <div>
            <Head>
                <meta charset="utf-8"/>
                    <meta name="Description" CONTENT="Author: A.N. Author, Illustrator: P. Picture, Category: Books, Price:  £9.24, Length: 784 pages"/>
                        <meta name="google-site-verification" content="+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34=" />
                        <title>About page</title>
                        <meta name="robots" content="noindex,nofollow"></meta>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                        
                    </Head>
                    <NavBar />
                    <div className="container text-center">
                        <h1 className="text-4xl pt-6">About Us</h1>
                        <p className="text-3xl py-6">This is the About page</p>
                        <Image src="https://cdn.pixabay.com/photo/2017/11/16/19/29/cottage-2955582_960_720.jpg" alt="Child" width="400" height="400" />
                        <Image src="/vercel.svg" alt="Child" width="400" height="400" />
                    </div>
                    <style jsx>{`
                h1 {
                    color: red;
                }
            `}</style>
                </div>

                )
    }

                export default about;
import Link from "next/link";
const NavBar = () => {
    return <>
        <div>
            <nav class="bg-white shadow-md">
                <div class="container mx-auto px-6 py-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <Link href="/">
                                <a class="no-underline hover:no-underline font-bold text-xl pl-4 text-red-500">
                                    {/* <img src="./logo.jpg" alt="logo" class="w-8" /> */}
                                    <span className="w-8">Ankit</span>
                                </a>
                            </Link>

                            <div class="text-gray-600 px-4 mx-4 space-x-4">
                                <Link href="/" className="bg-slate-600">
                                    <a class="no-underline hover:no-underline text-sm">Home</a>
                                </Link>
                                <Link href="/about">
                                    <a class="no-underline hover:no-underline text-sm">About</a>
                                </Link>
                                <Link href="/contact">
                                    <a class="no-underline hover:no-underline text-sm">Contact</a>
                                </Link>

                                <Link href="/blogs">
                                    <a class="no-underline hover:no-underline text-sm">Blog</a>
                                </Link>

                                <Link href="/login">
                                    <a class="no-underline hover:no-underline text-sm">Login</a>

                                </Link>

                                <Link href="/signup">
                                    <a class="no-underline hover:no-underline text-sm">Signup</a>
                                </Link>

                                <Link href="/dashboard">
                                    <a class="no-underline hover:no-underline text-sm">Dashboard</a>
                                </Link>

                                <Link href="/profile">
                                    <a class="no-underline hover:no-underline text-sm">Profile</a>
                                </Link>

                                <Link href="/admin">
                                    <a class="no-underline hover:no-underline text-sm">Admin</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>


        </div>
    </>;
};

export default NavBar;

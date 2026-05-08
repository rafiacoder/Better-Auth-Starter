import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-10">
    
          <h1>
            home page login to continue
          </h1> 

          <div className="flex gap-10 ">
              <button className="rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-zinc-800">
                  <Link href="/login">Login</Link>
              </button> 
              <button className="rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-zinc-800">
                  <Link href="/signup">Sign Up</Link>
              </button> 
          </div>
    </div>
  );
}

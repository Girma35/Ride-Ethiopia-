import notfound from "../assets/images/notFound.jpg";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="dark:bg-dark bg-white flex flex-col gap-12 justify-center items-center duration-300 ">
            <Image src={notfound.src} alt="Not Found" width={300} height={500} className="max-w-[400px]" />
            <h1 className="text-3xl font-bold text-center dark:text-white pb-5">
                Page not found
            </h1>
        </div>
    );
}

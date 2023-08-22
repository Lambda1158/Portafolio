import Link from "next/link"
import Image from "next/image"
import mg from "../../assets/test.jpg"
import style from "./post.module.css"
export default function FirstPost() {
    console.log(mg.src)
    return (
        <>
            <h1>First Post</h1>
            <h1>Take me back <Link href="/">here</Link></h1>
            <Image
                src={mg.src}
                height={300}
                width={300}
                alt=""
                className={style.img}
            />
        </>
    )
}
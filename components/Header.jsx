import { useRouter } from "next/router"
import Link from "next/link"
import Head from "next/head"

import style from '@styles/Header.module.sass'


export default function Header(props)
{
    return (
        <div className={style.header}>
            <Head>
                <title>{props.title + " - Guibi.ca"}</title>
            </Head>

            <h1 className={style.title}>{props.title}</h1>
            <h2 className={style.caption}>{props.caption}</h2>
        </div>
    )
}

export function HeaderLink(props)
{
    const router = useRouter()
    
    return (
        <Link href={props.url}>
            <a className={router.pathname.endsWith(props.url) ? "current" : ""}>
                {props.title}
            </a>
        </Link>
    )
}

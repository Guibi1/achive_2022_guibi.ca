import { useRouter } from "next/router"
import Link from "next/link"
import Head from "next/head"


export default function Header(props)
{
    return (
        <div className="header">
            <Head>
                <title>{props.title + " - Guibi.ca"}</title>
            </Head>

            <h1>{props.title}</h1>
            <h2>{props.caption}</h2>
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

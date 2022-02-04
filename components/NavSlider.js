
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Navbutton({name,links}) {

    const route = useRouter()
   

    return (
        <Link passHref={true} href={links}>
            <div className={route.pathname == links ? "cursor-pointer pl-2 pb-5 text-brand-color font-semibold" : "font-semibold cursor-pointer pl-2 pb-5"}>{name}</div>
        </Link>

    )
}
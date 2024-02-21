'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export default function NavLink({ link }) {
    const pathName = usePathname()
    const className = clsx({
        rounded: true,
        'p-1': true,
        'bg-black': pathName === link.url,
        'text-white': pathName === link.url,
    })

    return (
        <Link className={className} href={link.url}>
            {link.title}
        </Link>
    )
}

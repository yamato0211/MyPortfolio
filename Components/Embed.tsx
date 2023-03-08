import Link from "next/link"
import { useState } from "react"

export default function Embed() {
    return (
        <>
            <h1>HelloWorld</h1>
            <h1><Link href={"/blog"}>Click to Blog</Link></h1>
        </>
    )
}
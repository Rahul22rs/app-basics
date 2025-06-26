import Link from "next/link";

export default function HeaderComponent(){
    return(
        <div style={{padding:10,margin:10}}>
            <Link href={`/emp`}>Employee</Link>
        </div>
    )
}
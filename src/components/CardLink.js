import Link from "next/link"

export default function CardLink({ title, image, description, route }) {
    return <div className="span4">
        <div className=" card">
            <Link href={route}>
                <img src={image} />
                <h2><strong>{title}</strong></h2>
                <p>{description}</p></Link>
        </div>
    </div>
}
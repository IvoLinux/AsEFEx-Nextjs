import Link from "next/link"

export default function CardNoLink({ title, image, description }) {
    return <div className="span4">
        <div className=" card">
            <img src={image} />
            <h2><strong>{title}</strong></h2>
            <p>{description}</p>
        </div>
    </div>
}
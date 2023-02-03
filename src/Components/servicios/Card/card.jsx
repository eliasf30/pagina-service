import "./card.css"


export default function TechCard({ image, title, description }) {
    return (
            <div className="card">
            <div className="tech_card">
                <img alt={title} className="tech_card_img" src={image} />
                <h4>{title}</h4>

            </div>
            <ul className="card_ul">{description.map(desc => <li className="description">• {desc}</li>)}</ul>
            
            </div>
        
        )
}



import { useEffect, useState } from 'react'

export default function GinCard({ name, badge, badgeType, distiller, botanicals, description, serve, image }) {
  const [showImage, setShowImage] = useState(Boolean(image))

  useEffect(() => {
    setShowImage(Boolean(image))
  }, [image])

  return (
    <article className="gin-card-react">
      {showImage ? (
        <div className="gin-card-image-wrap">
          <img
            className="gin-card-image"
            src={image}
            alt={name}
            loading="lazy"
            decoding="async"
            onError={() => setShowImage(false)}
          />
        </div>
      ) : null}
      <div className="gin-card-body">
        <div className="gin-card-head">
          <h4 className="gin-card-title">{name}</h4>
          {badge ? <span className={`badge badge--${badgeType}`}>{badge}</span> : null}
        </div>
        {distiller ? <p className="gin-card-distiller">{distiller}</p> : null}
        {botanicals?.length ? (
          <div className="botanical-stack">
            <p className="meta-label">Botanicals</p>
            <div className="tag-list">
              {botanicals.map((botanical) => (
                <span key={botanical} className="tag-chip">
                  {botanical}
                </span>
              ))}
            </div>
          </div>
        ) : null}
        {description ? <p className="gin-card-description">{description}</p> : null}
        {serve ? (
          <div className="serve-box">
            <span className="meta-label">Serve with</span>
            <p>{serve}</p>
          </div>
        ) : null}
      </div>
    </article>
  )
}

export default function GinList({ regions }) {
  return (
    <div className="gin-list">
      {regions.map((region) => (
        <section key={region.id} className="region-block">
          <h3 className="region-title">{region.title}</h3>
          <div className="gin-list-items">
            {region.gins.map((gin) => (
              <article key={gin.name} className="gin-list-item">
                <div className="gin-list-head">
                  <div>
                    <h4 className="gin-card-title">{gin.name}</h4>
                    {gin.distiller ? <p className="gin-list-distiller">{gin.distiller}</p> : null}
                  </div>
                  {gin.badge ? <span className={`badge badge--${gin.badgeType}`}>{gin.badge}</span> : null}
                </div>
                {gin.description ? <p className="gin-list-description">{gin.description}</p> : null}
                <div className="gin-list-details">
                  {gin.botanicals?.length ? (
                    <p>
                      <span className="meta-label">Botanicals</span>
                      {gin.botanicals.join(' · ')}
                    </p>
                  ) : null}
                  {gin.serve ? (
                    <p>
                      <span className="meta-label">Serve with</span>
                      {gin.serve}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

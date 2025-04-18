import "./HeaderIntroSections.css"

function HeaderIntros({name}) {
	return (
          <div className="main-container">
              <div className="header-container">
                <h1 className="custom-heading">{name}</h1>
              </div>
        </div>

		)
}


export default HeaderIntros;
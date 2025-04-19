import "./HeaderIntroSections.css"

function HeaderIntros({name, ids}) {
	return (
          <div id={ids} className="main-container anchor-offset">
              <div className="header-container">
                <h1  className="custom-heading">{name}</h1>
              </div>
        </div>

		)
}


export default HeaderIntros;
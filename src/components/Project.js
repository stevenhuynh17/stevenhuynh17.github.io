import React, { Component } from 'react'
import LightBox from './LightBox'

class Project extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  state = {
    modalActive: false
  }

  openModal = (event) => {
    event.preventDefault()
    this.setState({
      modalActive: true
    })
  }

  render() {
    const { projects } = this.props
    return(
      <div className="row no-gutters popup-gallery">
      { projects.map((project) => {
          const { name, img } = project
          return(
            <div className="col-lg-4 col-sm-6 project" key={name}>
              <button className="portfolio-box" onClick={this.openModal}>
                <img className="img-fluid project-img" src={require("../" + img)} alt=""/>
                <div className="portfolio-box-caption">

                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                      Category
                    </div>
                    <div className="project-name">
                      {name}
                    </div>
                  </div>
                </div>
              </button>
            </div>
          )
      })}
      {this.state.modalActive === false ? <div></div> : <LightBox />}
      </div>
    )
  }
}

export default Project;

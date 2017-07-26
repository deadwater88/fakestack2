import ReactDOM from 'react-dom';
import React from 'react';


const dropDownConnect = (SwitchComponent, ContentComponent) => {
  return class DropDown extends React.Component {
    constructor(props){
      super(props);
      this.state = {showContent: false};
      this.toggleContent = this.toggleContent.bind(this);
      this.contentRef = this.generateRandom();
      this.containerRef = this.generateRandom();
      this.hideContent = this.hideContent.bind(this);
    }

    componentDidMount () {
      window.__root_container.addEventListener('click', this.hideContent);
    }

    componentWillUnmount () {
      window.__root_container.removeEventListener('click', this.hideContents);
    }

    generateRandom(){
      var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      return randLetter + Date.now();
    }

    toggleContent(e){
      e.preventDefault();
      e.stopPropagation();
      this.setState({showContent: !this.state.showContent});
    }

    hideContent(evt){
      const content = ReactDOM.findDOMNode(this.refs[this.contentRef]);
      if (content && !content.contains(evt.target) && !this.refs[this.containerRef].contains(evt.target)) {
        this.setState({showContent: false});
      }
    }

    renderContent(){
      return ( <div ref={this.contentRef}>
        <ContentComponent {...this.props} />
      </div> );
    }

    render(){
      return (
        <div ref={this.containerRef} className="dropDownContainer" style={{position: 'relative'}}>
          <div onClick={this.toggleContent}>
            <SwitchComponent/>
          </div>
          {this.state.showContent ? this.renderContent() : ""}
        </div>
      );

    }


  };

};


export default dropDownConnect;

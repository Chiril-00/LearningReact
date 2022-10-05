import React from 'react';
import './App.css';
app
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  handleOnClick = () => {
    console.log("clicked");
    this.setState({ liked: true });
  }

  render() {
    if (this.state.liked) {
      return "Oh well";
    }

    return (
      <button onClick={this.handleOnClick}>
        Like
      </button>
    );
  }
}

function Header(props) {
  return <h2>Learning react props</h2>;
}

function Section(props) {
  const {bgClass, title, id, desc, listColor} = props;

  return (
  <section id={id} className={bgClass}>
    <Header title={title}/>
    <ul style={{color: listColor}}>
      <li><LikeButton/></li>
    </ul>
    <div>{desc}</div>
  </section>
  );
}

// function App() {
  // const description = "My awesome description";
  // const color1 = "magenta";
  // const color2 = "yellow";
function App() {
  const section1Id = "s1";
  const section2Id = "s2";
  const section1Footer = "I stay at the end of section 1";
  const section2Footer = "Here is section 2 end";
  const textForLikeButton = "You liked. This text comes from <App /> component!"

  return (
    <div className='app'>
      <h1>Learning react props</h1>
      <LikeButton textForLikeButton = {textForLikeButton}/>
      <Section 
        section1={section1Id} 
        title="Section1"
        section1Footer = {section1Footer} 
        bgClass="blue" 
      />
      <Section
        section2={section2Id} 
        title="Sectiunea a 2"
        section2Footer = {section2Footer}
        bgClass="green" 
      />
    </div>
  );
  // return ( <div>
  //             <Section />, 
  //             {/* <SectionFooter />, */}
  //             <LikeButton />
  //         </div>
  //   // Your HTML and React Components comes here
  //   );
}

const obj = {
  a: 1,
  b: 2,
  c: 3
}

const { a } = obj;

const myVar = obj.a
const b = obj.b
const c = obj.c

const array = [1, 2];

const [primu, aldoilea] = array;

const first = array[0];
const second = array[1];

export default App;
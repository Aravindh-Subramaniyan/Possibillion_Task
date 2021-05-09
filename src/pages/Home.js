import React from 'react';
import {withRouter} from 'react-router-dom'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

class Home extends React.Component{
state={
    textvalue: ''
}

onPress = (val) =>{
    var data=this.state.textvalue+val
     this.setState({
         textvalue: data
     })
}

Next(){
     this.props.history.push({pathname: '/search-result', state: this.state.textvalue})
}

// Next = () =>{
//     // <NavLink to="search-result"/>
//     history.push('/search-result')
// }

onSpace = () =>{
    var data=this.state.textvalue+' '
     this.setState({
         textvalue: data
     })
}

keyboardInp = (event) =>{
    var data=event.target.value
     this.setState({
         textvalue: data
     })
}

onClear = () =>{
     this.setState({
         textvalue: ''
     })
}

onError = () =>{
    this.setState({
        textvalue:"Error"
    })
}

onBackClick = () =>{
    var x=this.state.textvalue;
    var val=x.length-1;
    var str=x.substring(0,val)
    this.setState({
        textvalue:str
    })
}


render()
{
  return(
    <div>
      <div class="tv-layout">
        <div class="container-fluid">
          <div class="row">
            <div class="span12">
              <div class="nav-row">
                <a href="index.html">
                    <div class="round-box back-arrow">
                        <img src="assets/images/icons/arrow-back.png" alt=""/>
                    </div>
                </a>
                <a href="index.html">
                    <div class="round-box close-icon">
                    <img src="assets/images/icons/close-icon.png" alt=""/>
                    </div>
                </a>
              </div>
<div class="tv-data-row">
<div class="col-12">
<div class="seach-box">
<div class="input-group">
<span class="input-search">
<img src="assets/images/icons/search-icon.png" alt=""/>
</span>

<input type="text" class="form-control" placeholder="Search" aria-label="Username" value={this.state.textvalue} onChange={this.keyboardInp}  style={{textTransform:"uppercase"}} aria-describedby="basic-addon1" required/>
</div>
</div>

<div class="search-block-iteams">
<div class="recent-search">
<h1>Recent Search Iteams</h1>

<div class="seach-item">
<span>
<img src="assets/images/icons/reload-icon.png" alt=""/>
Jathi Ratnalu Movie
</span>
</div>

<div class="seach-item">
<span>
<img src="assets/images/icons/reload-icon.png" alt=""/>
Kids English Telugu Dubbed Movies
</span>
</div>

<div class="seach-item">
<span>
<img src="assets/images/icons/reload-icon.png" alt=""/>
3D Animation Movies
</span>
</div>

<div class="seach-item">
<span>
<img src="assets/images/icons/reload-icon.png" alt=""/>
Action Movies in Telugu 2020
</span></div>
</div>

<div class="key-board-box" id="show-numbers" >
<div class="key-board-row">
<span class="key"><button onClick={() => this.onPress('1')}>1</button></span>
<span class="key"><button onClick={() => this.onPress('2')}>2</button></span>
<span class="key"><button onClick={() => this.onPress('3')}>3</button></span>
<span class="key"><button onClick={() => this.onPress('&')}> & </button></span>
<span class="key"><button onClick={() => this.onPress('#')}> # </button></span>
<span class="key"><button onClick={() => this.onPress('(')}> ( </button></span>
<span class="key"><button onClick={() => this.onPress(')')}> ) </button></span>
<span class="arrow-change">
<button onClick={() => this.onBackClick()}>
<img src="assets/images/icons/clear-icon.png" alt=""/>
</button></span>
</div>

<div class="key-board-row">
<span class="key"><button onClick={() => this.onPress('4')}>4</button></span>
<span class="key"><button onClick={() => this.onPress('5')}>5</button></span>
<span class="key"><button onClick={() => this.onPress('6')}>6</button></span>
<span class="key"><button onClick={() => this.onPress('@')}> @ </button></span>
<span class="key"><button onClick={() => this.onPress('!')}> ! </button></span>
<span class="key"><button onClick={() => this.onPress('?')}> ? </button></span>
<span class="key"><button onClick={() => this.onPress(':')}> : </button></span>
<span class="arrow-change show-alpabets"><button>& ABC</button></span>
</div>

<div class="key-board-row">
<span class="key"><button onClick={() => this.onPress('7')}>7</button></span>
<span class="key"><button onClick={() => this.onPress('8')}>8</button></span>
<span class="key"><button onClick={() => this.onPress('9')}>9</button></span>
<span class="key"><button onClick={() => this.onPress('0')}>0</button></span>
<span class="key"><button onClick={() => this.onPress('0')}> . </button></span>
<span class="key"><button onClick={() => this.onPress('_')}> _ </button></span>
<span class="key"><button onClick={() => this.onPress('"')}> " </button></span>
</div>

<div class="key-board-row">
<span class="space-clear"><button onClick={() => this.onSpace()}>SPACE</button></span>
<span class="space-clear" ><button onClick={() => this.onClear()}>CLEAR</button></span>
<span class="search-btn"><a href="search-result" onClick={()=>{
    var search = this.state.textvalue;
    if(search==="")
    {
        toast("Movie Name not entered!")
    }
    else
    {
        this.props.history.push({pathname: '/search-result',state: this.state.textvalue})
    }
}}>
<button>SEARCH</button></a></span>
</div>
</div>
<div class="key-board-box" id="show-alpabets">
<div class="key-board-row">
<span class="key"><button onClick={() => this.onPress('A')} >A</button></span>
<span class="key"><button onClick={() => this.onPress('B')} >B</button></span>
<span class="key"><button onClick={() => this.onPress('C')} >C</button></span>
<span class="key"><button onClick={() => this.onPress('D')} >D</button></span>
<span class="key"><button onClick={() => this.onPress('E')} >E</button></span>
<span class="key"><button onClick={() => this.onPress('F')} >F</button></span>
<span class="key"><button onClick={() => this.onPress('G')} >G</button></span>
<span class="arrow-change">
<button onClick={() => this.onBackClick()}>
<img src="assets/images/icons/clear-icon.png" alt=""/>
</button></span>
</div>

<div class="key-board-row">
<span class="key"><button onClick={() => this.onPress('H')}>H</button></span>
<span class="key"><button onClick={() => this.onPress('I')}>I</button></span> 
<span class="key"><button onClick={() => this.onPress('J')}>J</button></span>
<span class="key"><button onClick={() => this.onPress('K')}>K</button></span>
<span class="key"><button onClick={() => this.onPress('L')}>L</button></span>
<span class="key"><button onClick={() => this.onPress('M')}>M</button></span>
<span class="key"><button onClick={() => this.onPress('N')}>N</button></span>
<span class="arrow-change show-numbers"><button> 123</button></span>
</div>

<div class="key-board-row">
<span class="key"><button onClick={() => this.onPress('O')}>O</button></span>
<span class="key"><button onClick={() => this.onPress('P')}>P</button></span>
<span class="key"><button onClick={() => this.onPress('Q')}>Q</button></span>
<span class="key"><button onClick={() => this.onPress('R')}>R</button></span>
<span class="key"><button onClick={() => this.onPress('S')}>S</button></span>
<span class="key"><button onClick={() => this.onPress('T')}>T</button></span>
<span class="key"><button onClick={() => this.onPress('U')}>U</button></span>
</div>

<div class="key-board-row">
<span class="key" onClick={() => this.onPress('V')}><button>V</button></span>
<span class="key" onClick={() => this.onPress('W')}><button>W</button></span>
<span class="key" onClick={() => this.onPress('X')}><button>X</button></span>
<span class="key" onClick={() => this.onPress('Y')}><button>Y</button></span>
<span class="key" onClick={() => this.onPress('Z')}><button>Z</button></span>
<span class="key" onClick={() => this.onPress('-')}><button>-</button></span>
<span class="key" onClick={() => this.onPress('\'')}><button>'</button></span>
</div>

<div class="key-board-row">
<span class="space-clear"><button onClick={() => this.onSpace()}>SPACE</button></span>
<span class="space-clear"><button onClick={() => this.onClear()}>CLEAR</button></span>
<span class="search-btn"><button onClick={()=>{
    var search = this.state.textvalue;
    if(search==="" || search===" ")
    {
        toast("Movie Name not entered!")
    }
    else
    {
        this.props.history.push({pathname: '/search-result',state: this.state.textvalue})
    }
}}>SEARCH</button></span>
</div>
</div>
</div>
</div>
</div>		
</div>
</div>
</div>
</div>
</div>
        )
    }
}

export default withRouter(Home);
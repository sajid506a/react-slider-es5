/** @jsx React.DOM */

var Hello = React.createClass({
    render: function () {
        return (
            <div>
                <input type='text' readOnly={false}></input>
            </div>
        );
    }
});

var Slider = React.createClass({
   getInitialState:function () {
     return{
         currentSlide:0,
         slides:[
             {title:"Title1",content:"Content#1"},
             {title:"Title2",content:"Content#2"},
             {title:"Title3",content:"Content#3"},
             {title:"Title4",content:"Content#4"}
         ]
     }
   },
    nextClick:function () {
      if(this.state.currentSlide===this.state.slides.length-1){
          this.setState({currentSlide:0})
      }
      else{
          this.setState({currentSlide:this.state.currentSlide+1})
      }
    },
    render: function () {
        var slide = this.state.slides[this.state.currentSlide];
        return (
            <div className="col-md-10">
                <div className="panel panel-default">
                <h1>{slide.title}  </h1>

                </div>
                <div className="panel-body jumbotron">{slide.content}</div>
                <button onClick={this.nextClick}>Next</button>
            </div>
        )

    }
})

React.renderComponent(<Slider />, document.getElementById("page"));
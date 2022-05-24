window.onload = function(){
var insults ={
    test1: {
        text: 'test'
    }
}

var generatorBox = document.getElementById("generatorBox");

function addStory(text){
    generatorBox.innerHTML = text;

  }
  function createStory(text){
    Math.floor(Math.random() * 100);
    let pageNow = playerChoices[playerChoices.length - 1];
    generatorBox.innerHTML = "";
    updateImage(story[pageNow].imgElem);
    for(let idea of playerChoices){
      addStory(story[idea].text)
    }
    for (let idea of story[pageNow].options){
      createButton(idea[1],idea[0]);
    }
  
    var vowelRegex = /^[aeiouAEIOU]/;
    if ((vowelRegex.test(($('span#2theFunction').html()).charAt(0))) === true) { $('#0article').html("an").fadeIn('normal') }
    else { $('#0article').html("a").fadeIn('normal'); }

  }
  restart.addEventListener("click", function(){
    location.reload();
  });
  
  restart.style.display = 'none';
  
  x.addEventListener("click", function(){
    createStory(story.opener.text);
    restart.style.display = '';
  });
  
  class CommentList extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        comments: DataSource.getComments()
      };
    }
  
    componentDidMount() {
      DataSource.addChangeListener(this.handleChange);
    }
  
    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }
  
    handleChange() {
      this.setState({
        comments: DataSource.getComments()
      });
    }
  
    render() {
      return (
        <div>
          {this.state.comments.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </div>
      );
    }
  }
}
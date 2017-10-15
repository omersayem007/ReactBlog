import React from 'react';
import Blog from "./mini-components/singleBlog";
import './App.css';

class App extends React.Component {
  
    constructor(props){
     
     super(props);

     this.state={
          blogList :[
              {
                title : "Write Immutable code with express" ,
                author :"Omer Sayem",
                briefBlog:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis"

              },
              {
                title : "React with redux" ,
                author :"Emrul Jawad",
                briefBlog:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis"

              },
              {
                title : "Getting heigher cgpa " ,
                author :"Shariar Alam",
                briefBlog:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis"

              }
              
          ]
     }



    }
    componentWillMount(){
        document.title = 'All movies will be shown here'
    }

        render() {
                return (
 
                    <div className="columns">

                    <div className=" column is-three-quarters" > 

                    <a className="button is-dark"> <i class="fa fa-plus" aria-hidden="true"></i>
                    </a>

                    <div className="body">
                    {
                      this.state.blogList.map((blog)=>
                            <Blog
                            title ={blog.title} 
                            author={blog.author}
                            briefBlog={blog.briefBlog}
                            />
                           

                      )

                    }
                    </div>
                    

                    </div>

                
                    

                    <div class="column">
                    </div>
                    
                    
                    </div>
                    


                    );
                    }
                }

                export default App;
import React from "react";



export default class Add extends React.Component{

    constructor(props) {
        super(props);
        this.map = new Map();
        this.state={cv:'',major:'',sex:'female'};
        this.checkboxes_values=new Map();

    }


    handleCVchange=(e)=>{
        this.setState({cv:e.target.value});
    }


    handlemajor=(e)=>{
        this.setState({major:e.target.value});
    }

    handlebtn=()=>{
        console.log(this.state.cv);
        console.log(this.state.major);
        console.log(this.state.sex);
       // console.log(this.checkboxes_values);

        for(let x of this.checkboxes_values.keys()){
          if (this.checkboxes_values.get(x)) {
              console.log(x + " " + this.checkboxes_values.get(x));
          }
        }


    }

    handleautoselect=(e)=>{
       this.setState({major:e.target.value})
    }

    handlesex=(e)=>{
        this.setState({sex:e.target.value})
    }


    handleChangehobbies=(e)=>{

           //let name=e.target.name;
        if  (e.target.checked) {
            this.checkboxes_values.set(e.target.name,true);
        }else {
            this.checkboxes_values.set(e.target.name,false);
        }
    }



    render() {


        const items=[
            {
              key:1,
              name:'swimming',
              label:'swimming'
            },{
                key:2,
                name:'reading',
                label:'reading'
            },{
                key:3,
                name:'writing',
                label:'writing'

            },
            {
                key:4,
                name:'sky',
                label:'sky'

            }

        ];


        const checkboxes_list=items.map(item=>(
            <label key={item.key}>
                <input type={"checkbox"} name={item.name} onChange={this.handleChangehobbies}  />
                {item.label}
            </label>
        ));


        return(
            <form>

                <label>CV</label>
                <textarea onChange={this.handleCVchange}/>
                <select onChange={this.handlemajor} value={this.state.major}>
                    <option>please select major</option>
                    <option value="CS">CS</option>
                    <option value="CE">CE</option>
                </select>
                <textarea value={this.state.cv}/>

                <label>
                    <input type="radio" value='male' name="sex" onChange={this.handlesex} checked={this.state.sex==='male'} />
                    male
                </label>

                <label>
                    <input type="radio" value='female' name="sex" onChange={this.handlesex} checked={this.state.sex==='female'} />
                    female
                </label>

                <br/>
                hobbies

                {checkboxes_list}

                <br/>

                <input type="button" value="add" onClick={this.handlebtn} />
                <input type="button" value="CS" onClick={this.handleautoselect} />
                <input type="button" value="CE" onClick={this.handleautoselect} />







            </form>

        )
    }

}
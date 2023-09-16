import React, {  useEffect, useState } from "react";
 import { Props } from "react-infinite-scroll-component";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=>{

 const[articles, seta]= useState([]);
  const [loading, setl] = useState(true);
   const [totalResults, sett]= useState(0);
   const [page,setp] = useState(1);
    

  
  //  async componentDidMount(){ /// - life cycle method -- runs after render
  //  console.log ("cdm");
  //  let url ="https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=683ee8a817514f53bbdd9c10d817dada"
  //   let data = await fetch(url);
  //    let parseddata =  await data.json();
  //    console.log(parseddata);
  //    this.setState({articles:parseddata.articles});
  //}
  //   async componentDidMount(){
  //    console.log("Cdm");

  //    let url ="https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=683ee8a817514f53bbdd9c10d817dada";
  //    let data = await  fetch(url);
  //    let pd = await data.json();
  //    this.setState({
  //     articles :pd.articles

  //    })

  //  }
 const update= async() =>{
   props.progress(30);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
 
   setl(true)
    let data = await fetch(url);
    let pd = await data.json();
    console.log(pd);
    seta(pd.articles);
    sett(pd.totalResults)
   setl(false);
   props.progress(75);
   props.progress(100);
  }
 useEffect(()=>{
update();
 },[])
  // const  next = async () => {
  //   //// for checking whether there is some articles on next page we will use math.ceil function it returns the greatest number next ti it
  //   // Ex - math.ceil(4.4)---> 5
  //   // if (
  //   //   this.state.page + 1 >
  //   //   Math.ceil(this.state.totalResults / props.pageSize)
  //   // ) {
  //   //   this.setState({
  //   //     loading: true,
  //   //   });
  //   // } else {
  //   //   console.log("next");

  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${ props.category}&apiKey=683ee8a817514f53bbdd9c10d817dada&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
  //   //   this.setState({
  //   //     loading: true,
  //   //   });
  //   //   let data = await fetch(url);
  //   //   let pd = await data.json();
  //   //   console.log(pd);
  //   //   this.setState({
  //   //     articles: pd.articles,
  //   //     page: this.state.page + 1,
  //   //     loading: false,
  //   //   });
  //   // }
  //   setp(page+1)
  //     update();
  // };
  //   const prev = async () => {
  //   // console.log("previous");
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${
  //   //   props.country
  //   // }&category=${
  //   //   props.category
  //   // }&apiKey=683ee8a817514f53bbdd9c10d817dada&page=${
  //   //   this.state.page - 1
  //   // }&pageSize=${props.pageSize}`;
  //   // let data = await fetch(url);

  //   // let pd = await data.json();
  //   // console.log(pd);
  //   // this.setState({
  //   //   articles: pd.articles,
  //   //   page: this.state.page - 1,
  //   // });
  //    setp(page-1);
  //     update();
  //   };
  const  fetchMoreData= async()=>{

   
   
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
    setp(page+1);
    let data = await fetch(url);
    
    let pd = await data.json();
    
    console.log(pd);
     seta(articles.concat(pd.articles));
    
     sett(pd.totalResults);
   
   }

  
    const cap =(string)=>{
  return (string.charAt(0).toUpperCase()+ string.slice(1));
  console.log(string )
    }
    return (
     <>
        <div className="text-center" style ={{marginTop:'90px'}}>
          <h1 className="head">   Newsmonkey - Top {cap(props.category)} Headlines </h1>
          {loading && <Spinner/>}
        </div>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>} style ={{overflow:"hidden"}}
        >

   <div className="container">
        <div className="row">
          {/* {this.state.articles.map((el)=>{
 return   <div className="col-md-3">
 <Newsitem  title={el.title.slice(0,70)}  newsUrl={el.url}description = {el.description.slice(0,88)} imageUrl={el.urlToImage}/>
   </div>             
      })} 
      */}

          {
      articles.map((ele) => {
              return (
                <div className="col-md-3 my-4">
                  <Newsitem
                    title={ele.title === null ? "" : ele.title.slice(0, 55)}
                    author={ele.author === null ? "Anonymous" : ele.author}
                    source={ele.source.name}
                    date={ele.publishedAt}
                    newsUrl={ele.url}
                    description={
                      ele.description === null
                        ? "Ddefault description"
                        : ele.description.slice(0, 55)
                    }
                    imageUrl={
                      ele.urlToImage === null
                        ? "https://img.etimg.com/thumb/msid-102056124,width-1070,height-580,imgsize-41272,overlay-economic:times/photo.jpg"
                        : ele.urlToImage
                    }
                  />
                </div>
              );
            })}
        </div>
        </div>
        </InfiniteScroll>
       </>
      
    );
  }

export default News;
News.defaultProps = {
  country: "in",
  category: "general",
  pageSize: 5,
};
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};
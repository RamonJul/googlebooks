(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(54)},30:function(e,t,a){},50:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(20),s=a.n(r),c=a(4),i=a(5),l=a(7),u=a(6),m=a(8),h=a(57),p=a(58),d=a(59);function v(e){var t=e.fluid,a=e.children;return o.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function f(e){var t=e.fluid,a=e.children;return o.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function b(e){var t=e.size,a=e.children;return o.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}a(30);var k=a(10),g=a.n(k),E={getBooks:function(){return g.a.get("/api/books/saved")},getBook:function(e){return g.a.get("/api/books/"+e)},deleteBook:function(e){return g.a.delete("/api/books/delete/"+e)},saveBook:function(e){return g.a.post("/api/books/add",e)},searchBooks:function(e){return g.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e))}},y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={authors:a.props.authors,product_id:a.props.id,saved:!1},a.componentDidMount=function(){null!==a.state.product_id&&E.getBook(a.state.product_id).then(function(e){e.data.length&&a.setState({saved:!0})})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"savebook",value:function(){this.props.task(this.props.index),this.setState({saved:!0})}},{key:"render",value:function(){var e=this,t=this.props.message1,a=this.props.message2,n=this.state.saved?t:a;return o.a.createElement("div",{className:"Item"},o.a.createElement("div",{className:"col-1"},o.a.createElement("a",{href:this.props.link},o.a.createElement("img",{src:this.props.img,alt:"book cover"}))),o.a.createElement("div",{className:"bookInfo col-11"},o.a.createElement("div",{className:"Header"},o.a.createElement("h3",null,this.props.title),o.a.createElement("button",{onClick:function(){return e.savebook()},className:this.state.saved?"btn btn-primary disabled":"btn btn-primary",disabled:this.state.saved},n)),o.a.createElement("div",{className:"author"},null!=this.props.authors?this.state.authors.map(function(e,t){return o.a.createElement("h4",{className:"name",key:t},e)}):o.a.createElement("h4",{className:"name"},"name")),o.a.createElement("p",{className:"synopsis"},this.props.synopsis)))}}]),t}(o.a.Component),O={textAlign:"center"},j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={books:[]},a.delete=function(e){console.log(e),E.deleteBook(e).then(function(e){a.grabBooks()}).catch(function(e){return console.log(e)})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.grabBooks()}},{key:"grabBooks",value:function(){var e=this;E.getBooks().then(function(t){console.log("mounting"),e.setState({books:t.data})})}},{key:"render",value:function(){var e=this;return this.state.books,o.a.createElement(v,{fluid:!0},o.a.createElement(f,null,o.a.createElement(b,{size:"md-12"},this.state.books.length?this.state.books.map(function(t){return o.a.createElement(y,{title:t.title,authors:t.authors,synopsis:t.synopsis,img:t.image,key:t.product_id,link:t.link,task:e.delete,index:t._id,message1:"DELETE",message2:"DELETE"})}):o.a.createElement("h3",{style:O},"nothing saved"))))}}]),t}(n.Component),N=a(21),w=a(56),I=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("button",{type:this.props.type,onClick:function(){return e.props.onClick(e.props.term)},className:this.props.className},this.props.text)}}]),t}(o.a.Component),B=(a(50),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={term:""},a.handleInputChange=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(N.a)({},n,o))},a.changeRoute=function(){var e=a.state.term.length?"/search/".concat(a.state.term):window.location.pathname;return o.a.createElement(w.a,{to:e},o.a.createElement(I,{type:"submit",className:"btn btn-primary",onClick:a.props.submit,term:a.state.term,text:"Search"}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("nav",{className:"navbar navbar-dark bg-primary"},o.a.createElement("div",{id:"redirectLinks"},o.a.createElement(w.a,{to:"/",className:"/"===window.location.pathname?"nav-link active":"nav-link"},o.a.createElement("h6",{className:"navbar-brand route"},"Google books saver")),o.a.createElement(w.a,{to:"/saved",className:"/"===window.location.pathname?"nav-link active":"nav-link"},o.a.createElement("h6",{className:"navbar-brand route"},"Saved"))),o.a.createElement("div",{id:"search"},o.a.createElement("input",{type:"text",value:this.state.term,onChange:this.handleInputChange,name:"term",className:"form-control",placeholder:"Book Name"}),this.changeRoute()))}}]),t}(o.a.Component)),S={textAlign:"center"},C=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={term:"",books:[]},a.componentDidMount=function(){a.rerRender(a.props.searchTerm)},a.componentDidUpdate=function(){a.props.searchTerm!==a.state.term&&a.rerRender(a.props.searchTerm)},a.rerRender=function(e){var t=[],n=e||JSON.parse(localStorage.getItem("term"));E.searchBooks(n).then(function(e){t=e.data.items,a.setState({term:n,books:t},function(){localStorage.setItem("term",JSON.stringify(a.state.term))})})},a.saveBook=function(e){var t=a.state.books[e],n=t.volumeInfo,o=n.title,r=n.authors,s=n.description,c=n.infoLink,i={title:o,product_id:t.id,authors:r,synopsis:s,link:c,image:t.volumeInfo.imageLinks.thumbnail};E.saveBook(i)},a.checkIfBookIsValid=function(e,t){return!(!e.volumeInfo.imageLinks||!e.volumeInfo.description)&&o.a.createElement(y,{title:e.volumeInfo.title,authors:e.volumeInfo.authors,synopsis:e.volumeInfo.description,img:e.volumeInfo.imageLinks.thumbnail,key:e.id,id:e.id,link:e.volumeInfo.infoLink,task:a.saveBook,index:t,message1:"SAVED",message2:"SAVE"})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(v,{fluid:!0},o.a.createElement(f,null,o.a.createElement(b,{size:"md-12"},this.state.books.length?this.state.books.map(function(t,a){return e.checkIfBookIsValid(t,a)}):o.a.createElement("h3",{style:S},"no results"))))}}]),t}(o.a.Component),x=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={term:""},a.handleFormSubmit=function(e){e.length&&(console.log("not zero"),a.setState({term:e}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(h.a,null,o.a.createElement("div",null,o.a.createElement(B,{submit:this.handleFormSubmit}),o.a.createElement(p.a,null,o.a.createElement(d.a,{exact:!0,path:"/",component:j}),o.a.createElement(d.a,{exact:!0,path:"/saved",component:j}),o.a.createElement(d.a,{exact:!0,path:"/search/:term",render:function(t){return o.a.createElement(C,{searchTerm:e.state.term})}}))))}}]),t}(o.a.Component);s.a.render(o.a.createElement(x,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.dafc703d.chunk.js.map
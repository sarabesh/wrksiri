console.log("js added");
$.ajax({
  type:"GET",
  url:"https://api.myjson.com/bins/tls49",
  dataType:"json",
  success:function(response){
    //console.log("Data from server",response);
    var data=formObject(response);

    constructDOM(data);
},
error:function(err){
  console.log("Error in get method",err);
}


});


function formObject(resp){
  var flags=[],categoryObject=[];
  var rlength=resp.length;
//var objectArr=[]
  for(i=0;i<rlength;i++)
  {
    var mov=resp[i];
  //  console.log("movie:",mov);
  //  console.log("language:",mov.language);
/*  if (flags.indexOf(mov.language)==-1){
  flags.push(mov.language);*/
  var index=flags.indexOf(mov.language);
  if(index>=0)
  {
    categoryObject[index].movies.push(mov);
    continue;
  }
  else{
    flags.push(mov.language);
  }
var objectSchema={
  "category":mov.language,
  "movies":[]
}
objectSchema.movies.push(mov);
categoryObject.push(objectSchema);
}console.log(categoryObject);
return categoryObject;
}



function constructDOM(data)
{var categoryContent=[];

  for(i=0;i<data.length;i++)
  {var objectSchema=data[i];
    //console.log("constructionDOm",objectSchema);
    var categoryTitle=$('<h3 class="categoryName">'+objectSchema.category+'</h3>');
  categoryContent.push(categoryTitle);
for(j=0;j<objectSchema.movies.length;j++)
  {
    console.log(objectSchema.movies[j].name);
    var categoryMovieName=$('<div class="movie picmovie "><img class="poster" src="'+objectSchema.movies[j].thumbnailUrl+'">'+objectSchema.movies[j].name+'</div>')
    categoryContent.push(categoryMovieName);
 }
  }
    $(' .content').html(categoryContent);
}
    //console.log(flags);
//console.log("object schema",objectSchema.movies);
  // console.log("formObject response",resp);
/*  console.log(objectArr);
  for(i=0;i<objectArr.length;i++)
  {
    if(objectArr[i].category==flags[0])
    {
      var obtam=[]
      obtam.push(objectArr[i]);
    }
    if(objectArr[i].category==flags[1])
    {
      var obeng=[]
      obtam.push(objectArr[i]);
    }
    if(objectArr[i].category==flags[2])
    {
      var obhin=[]
      obtam.push(objectArr[i]);
    }
  }
  console.log(obtam);
  console.log(obeng);
  console.log(obhin);
}*/
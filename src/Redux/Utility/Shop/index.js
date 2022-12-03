export const getCollectionsById = (collections,id)=>{
  console.log('utils',collections,id)
 const findCollect = collections?.filter(item=>item.id == id);

 return findCollect[0]?.items
}
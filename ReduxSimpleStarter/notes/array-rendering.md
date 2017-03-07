####Component Structure 
1. index.js - API call 
2. video_list (func) - list map function 
3. video_list_item (func) - display item 

- The API call returns an array of objects. Add to state. Pass as prop.  
- The map function returns an array of components. 
- MAP FUNCTION: array of objects + child component = array of child components 
- Nb. [<VideoListItem video={video} />, <VideoListItem video={video} />, ...] is returned from the map function. React can render this directly as {videoItems}. 

Nb. Each item in a list should have a unique key prop.  

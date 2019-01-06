//console.log(tv_show._embedded.episodes[0])


let episodes_details = (season_number,episode_number)=>{
	for (i in tv_show._embedded.episodes){
		if(season_number == tv_show._embedded.episodes[i].season && episode_number == tv_show._embedded.episodes[i].number){
			console.log(tv_show._embedded.episodes[i])
		}
	}
}

let episodes_details_basedon_id = (...episode_id)=>{
	for(k in episode_id){
		for (i in tv_show._embedded.episodes){
			if(episode_id[k] == tv_show._embedded.episodes[i].id){
				console.log(tv_show._embedded.episodes[i])
			}
		}	
		console.log()
	}
}

//episodes_details(2,8)

episodes_details_basedon_id(2937,11,2915)

let Pokeman_name = (a)=>{
	let test_flag=false;
	for(let n in pokeman_details.pokemon){
		if ( a == pokeman_details.pokemon[n].name){
			console.log(pokeman_details.pokemon[n])
			test_flag = true
		}
	}

	if (test_flag == false){
		console.log ("The " + a + " value is not available in recordset.")
		//console.log("Test")
	}
}

let Next_evalution = (b)=>{
	for(let n in pokeman_details.pokemon){
		for(let i in pokeman_details.pokemon[n].next_evolution){
			if(b == pokeman_details.pokemon[n].next_evolution[i].name){
				console.log(pokeman_details.pokemon[n].name)
			}
		}
	}
}

let weaknesses = (c)=>{
	for(let n in pokeman_details.pokemon){
		for(let i in pokeman_details.pokemon[n].weaknesses){
			if(c == pokeman_details.pokemon[n].weaknesses[i]){
				console.log(pokeman_details.pokemon[n].name)
			}
		}
	}
}

let c="Ghost"
weaknesses(c)

//console.log(pokeman_details.pokemon[0].next_evolution[0].name)

//for(let i in pokeman_details.pokemon[0].next_evolution){
	//console.log(i)
//	console.log(pokeman_details.pokemon[0].next_evolution[i].name)
//}
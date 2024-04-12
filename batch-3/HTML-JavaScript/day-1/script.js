const my_div = document.getElementById("container")



const user_dp = document.createElement('img')
user_dp.className="user-image"
user_dp.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC0tNepgPV2Cl8nJte3ztdDaeXhj9M7qcSLg7M9pgs8gt0_8M9HQLJ_Q2-pP8yrXT2Gko&usqp=CAU"


const user_name = document.createElement('h1')
user_name.innerHTML="Anirban Sharma"

const user_address = document.createElement("p")
user_address.innerHTML="Hakimpara, Jalpaiguri , PIN : 735101"


my_div.append(user_name,user_dp,user_address)




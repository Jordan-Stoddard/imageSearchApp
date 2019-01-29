import axios from 'axios'



export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID af5db11a080d9e5787279db4d21423fd6773b7d96b534e4aec050689fe941177"
      }
})
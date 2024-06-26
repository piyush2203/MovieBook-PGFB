import axios from "axios";


const instance  = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWVlMzhiOGNlMDRjMzZjODhiZDVjZmUwNTJmMzA3NSIsInN1YiI6IjY2NWZlNzI2YmQ5Yjk2ZTNhNDU4OTZlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xzez1PURdbcvwiNE1euCbMNU1K5voqHmz20u2qu75LI'
      }
})

export default instance;
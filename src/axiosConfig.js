import axios from "axios";

export const instance =axios.create({
    baseURL: "https://quizfullstack-59mv.onrender.com/quiz"
})
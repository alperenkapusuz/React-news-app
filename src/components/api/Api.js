import axios from "axios"

const mainLink = "https://newsapi.org/v2/top-headlines"

export const fetchBusiness = async () => {
    const { data } = await axios.get(`${mainLink}?country=tr&category=business&apiKey=82a939089d3144dcbc9ea4177fe51a56`)
    return data
}

export const fetchBusiness = async () => {
    const { data } = await axios.get(`${mainLink}?country=tr&category=entertainment&apiKey=82a939089d3144dcbc9ea4177fe51a56`)
    return data
}

export const fetchBusiness = async () => {
    const { data } = await axios.get(`${mainLink}?country=tr&category=general&apiKey=82a939089d3144dcbc9ea4177fe51a56`)
    return data
}

export const fetchBusiness = async () => {
    const { data } = await axios.get(`${mainLink}?country=tr&category=health&apiKey=82a939089d3144dcbc9ea4177fe51a56`)
    return data
}

export const fetchBusiness = async () => {
    const { data } = await axios.get(`${mainLink}?country=tr&category=science&apiKey=82a939089d3144dcbc9ea4177fe51a56`)
    return data
}

export const fetchBusiness = async () => {
    const { data } = await axios.get(`${mainLink}?country=tr&category=sports&apiKey=82a939089d3144dcbc9ea4177fe51a56`)
    return data
}

export const fetchBusiness = async () => {
    const { data } = await axios.get(`${mainLink}?country=tr&category=technology&apiKey=82a939089d3144dcbc9ea4177fe51a56`)
    return data
}
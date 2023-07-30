export const conectionsAnime = async (search) => {
    const texto = search !== false ? `?search=${search}` : ''
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    return await fetch(encodeURI(`/api/anime${texto}`), requestOptions)
    .then(response => response.json())
}
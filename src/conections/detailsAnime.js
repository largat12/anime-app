export const conectionsDetailsAnime = async (id) => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    return await fetch(encodeURI(`/api/anime/details?id=${id}`), requestOptions).then(response => response.json())
}
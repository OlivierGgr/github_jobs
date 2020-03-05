export function getJobsOnMount(page){
    const url = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page='+ page
    console.log(url)
    return fetch(url)
        .then(res => res.json())
        .catch(err => console.log(err))
}

export function getJobsFilter(text, fullTime, location){
    const url = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?' 
    + 'description=' + text + '&full_time=' + fullTime + '&location=' + location

    return fetch(url)
        .then(res => res.json())
        .catch(err => console.log('err'))
}

export function getJobById(id) {
    const url = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/' + id +'.json'

    return fetch(url)
        .then(res => res.json())
        .catch(err => console.log('err'))
}
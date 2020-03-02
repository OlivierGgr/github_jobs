export function getJobsFilter(text, fullTime, location){
    const url = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?' 
    + 'description=' + text + '&full_time=' + fullTime + '&location=' + location

    console.log('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?' 
    + 'description=' + text + '&full_time=' + fullTime + '&location=' + location)
    return fetch(url)
        .then(res => res.json())
        .catch(err => console.log('err'))
}

export function getJobsOnMount(){
    const url = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=node&full_time=true&location=new+york'
    return fetch(url)
        .then(res => res.json())
        .catch(err => console.log('err'))
}
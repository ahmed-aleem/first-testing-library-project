export const getFilteredCities = (cities: {city_name?:string}[], searchKey: string) => {

    let filteredCities:{city_name?: string}[] = [{}];

    if(searchKey.length !== 0){
        if(searchKey.length >= 3) {filteredCities = cities.filter((city, i) => (city.city_name?.toLowerCase()?.includes(searchKey)))}
    } else {
        filteredCities = [{}]
    }

    return filteredCities;
}
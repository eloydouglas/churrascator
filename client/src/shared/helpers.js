export const sumValue = (guests) => {
    if(guests.length > 0){
        return guests.map(guest => guest.value)
                 .reduce((acc, value) => acc + value);
    }else{
        return 0;
    }
}